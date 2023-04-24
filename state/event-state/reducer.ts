import {
    createEntityAdapter,
    createSlice,
    EntityState,
  } from "@reduxjs/toolkit";
import { EventModel } from "../../models";
import { fetchEvents } from './thunks';
import { convertObjectToArray } from "../../services/rest.service";
  
  export const EVENT_FEATURE_KEY = "todo";
  
  /**
   * Describes the shape of the EventState.
   */
  export interface EventState extends EntityState<EventModel> {
    loadingStatus: "not loaded" | "loading" | "loaded" | "error";
    errors: string[] | null;
  }
  
  /**
   * Create an entity adapter instance with the `EventModel` type.
   */
  export const eventAdapter = createEntityAdapter<EventModel>({
    selectId: (user: EventModel) => user?.id,
  });
  
  /**
   * Defines the initial state of the `Event` feature slice.
   */
  export const initialTodoState: EventState = eventAdapter.getInitialState({
    loadingStatus: "not loaded",
    errors: null,
  });
  
  /**
   * Creates a `eventSlice` using `createSlice` from Redux Toolkit.
   */
  export const eventSlice = createSlice({
    name: EVENT_FEATURE_KEY,
    initialState: initialTodoState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const payload = convertObjectToArray<EventModel>(action.payload)
        payload && eventAdapter.setAll(state, payload);
        state.loadingStatus = "loaded";
      })
      .addCase(fetchEvents.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loadingStatus = "error";
        state.errors = action.payload as string[];
      })
    },
  });
  
  /*
   * Export reducer for store configuration.
   */
  export const eventReducer = eventSlice.reducer;
  