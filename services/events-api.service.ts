import { FetchAPI } from "./rest.service";
import { RestMethods, EventModel, APIResponse, APIErrorResponse } from "../models";

/**
 *Fetches all Events from the API.
 *@returns A Promise of an APIResponse containing an array of EventModel objects, or an APIErrorResponse if there was an error.
 */
export const getEvents = async (): Promise<APIResponse<EventModel[]> | APIErrorResponse<Error>> => {
  const url = `events.json`;
  return await FetchAPI<EventModel[]>(url, RestMethods.Get);
};

/**
 *Deletes a Event with the specified id from the API.
 *@param id The id of the Event to be deleted.
 *@returns A Promise of an APIResponse containing an empty object, or an APIErrorResponse if there was an error.
 */
export const deleteEvent = (id: string) => {
  const url = `events/${id}`;
  return FetchAPI(url, RestMethods.Delete);
};

/**
 *Creates a new Event on the API with the specified payload.
 *@param payload An object containing the properties of the new Event to be created.
 *@returns A Promise of an APIResponse containing a EventModel object representing the newly created Event, or an APIErrorResponse if there was an error.
 */
export const createEvent = (payload: EventModel) => {
  const url = `events`;
  return FetchAPI<EventModel>(url, RestMethods.Post, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

/**
 *Updates an existing Event on the API with the specified payload.
 *@param payload An object containing the properties of the Event to be updated.
 *@returns A Promise of an APIResponse containing an empty object, or an APIErrorResponse if there was an error.
 */
export const updateEvent = (payload: EventModel) => {
  const url = "events/" + payload.id;
  return FetchAPI(url, RestMethods.Put, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

/**
 *Fetches a single Event with the specified id from the API.
 *@param id The id of the Event to be fetched.
 *@returns A Promise of an APIResponse containing a EventModel object representing the requested Event, or an APIErrorResponse if there was an error.
 */
export const getEventById = (payload: string) => {
  const url = "events/" + payload;
  return FetchAPI<EventModel>(url, RestMethods.Get);
};
