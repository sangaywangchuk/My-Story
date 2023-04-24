import { createAsyncThunk } from "@reduxjs/toolkit";
import { EventFacadeService } from "./facade";
import { EventModel } from "../../models";
import { commonResponseHandler } from "../../services/rest.service";


/**
 * Fetches all Events.
 */
export const fetchEvents = createAsyncThunk(
  "Event/getEvent",
  async (_, thunkAPI) => {
    return await commonResponseHandler(EventFacadeService.getEvent(), thunkAPI);
  }
);

/**
 * Deletes a Event by id.
 * @param payload - The id of the Event to delete.
 */
export const deleteEvent = createAsyncThunk(
  "Event/deleteEvent",
  async (payload: string, thunkAPI) => {
    return await commonResponseHandler(
      EventFacadeService.deleteEvent(payload),
      thunkAPI
    );
  }
);

/**
 * Creates a new Event.
 * @param payload - The Event to create.
 */
export const createEvent = createAsyncThunk(
  "Event/createEvent",
  async (payload: EventModel, thunkAPI) => {
    return await commonResponseHandler(
      EventFacadeService.createEvent(payload),
      thunkAPI
    );
  }
);

/**
 * Updates an existing Event.
 * @param payload - The Event to update.
 */
export const updateEvent = createAsyncThunk(
  "Event/updateEvent",
  async (payload: EventModel, thunkAPI) => {
    return await commonResponseHandler(
      EventFacadeService.updateEvent(payload),
      thunkAPI
    );
  }
);

/**
 * Fetches a Event by id.
 * @param payload - The id of the Event to fetch.
 */
export const getEventById = createAsyncThunk(
  "Event/get Event by id",
  async (payload: string, thunkAPI) => {
    return await commonResponseHandler(
      EventFacadeService.getEventById(payload),
      thunkAPI
    );
  }
);
