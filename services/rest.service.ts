import isUrl from "validator/lib/isURL";

import { APIErrorResponse, APIResponse, RestMethods } from "../models";

//setup api base url window.origin is used as fallback
const apiBaseUrl = (function (self, global) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("api url is not defined");
  let apiBaseUrl = "";
  const isAbsoluteUrl = isUrl(baseUrl);
  if (isAbsoluteUrl) {
    apiBaseUrl = baseUrl;
  } else {
    try {
      apiBaseUrl = (global ?? self).origin + baseUrl;
    } catch (ex) {
      throw new Error("baseUrl not defined");
    }
  }
  return apiBaseUrl;
})(typeof window !== "undefined" ? window : global, globalThis);

export const FetchAPI = async <T, E = any>(
  url: string,
  method: RestMethods,
  init?: RequestInit & { query?: Record<string, any> },
  absoluteUrl = false,
  withCredentials = true,
): Promise<APIResponse<T> | APIErrorResponse<E>> => {
  const urlWithQueryParams = new URL(
    absoluteUrl ? url : "",
    absoluteUrl ? undefined : apiBaseUrl + url
  );
  if (init?.query) {
    Object.entries(init.query).forEach(([key, value]) => {
      value && urlWithQueryParams.searchParams.set(key, value);
    });
  }

  return window
    .fetch(urlWithQueryParams.toString(), {
      method,
      ...init,
      credentials: "same-origin",
    })
    .then(async (response) => {
      if (response.ok || response.status < 400) {
        const json = await response.json();
        return { data: json } as APIResponse<T>;
      }
      // convert non-2xx HTTP responses into errors:
      const json = await response.json();
      return Promise.resolve<APIErrorResponse>({ error: json });
    })
    .catch(() => {
      return Promise.resolve<APIErrorResponse>({
        error: {
          errors: ["We are unable to process your request at this time!"],
        },
      });
    });
};

/**
 * Handles the common response structure of the API
 *
 * @template R - response data type
 * @template K - optional key in response data to return
 * @template E - error response type
 * @param {Promise<APIResponse<R>| APIErrorResponse<E>>} response - promise of API response or error
 * @param {any} thunk - The Redux thunk parameter object
 * @param {K} [key] - Optional key in the response data object to return
 * @returns {Promise<R[K] | void>} - Promise of response data or void in case of error
 */
export const commonResponseHandler = async <R, K extends keyof R, E=never>(response: Promise<APIResponse<R>| APIErrorResponse<E>>, thunk: any, key?: K,) => {
    const { data, error } = await response;
    if (data) {
        return (key ? data?.[ key ] : data);
    } else {
        return thunk.rejectWithValue(error.errors);
    }
};

export const convertObjectToArray = <T>(data: any): T[] => {
  if (!data) return [];
  return Object.keys(data).reduce((acc: T[], key: string) => {
    acc.push({...data[key], id: key}) ; 
    return acc
}, []) ;;
} 
