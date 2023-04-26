import { createSelector } from "@reduxjs/toolkit";
import { eventAdapter, EventState, EVENT_FEATURE_KEY } from "./reducer";
import { EventModel } from "../../models";

const { selectAll, selectEntities, selectIds } =
eventAdapter.getSelectors();

/**
 * Selects the Event feature state from the root state.
 * @function
 * @param {RootState} rootState - The root state of the application.
 * @returns {EventState} The Event feature state.
 */
export const selectEventState = (rootState: any): EventState =>
  rootState[EVENT_FEATURE_KEY];

/**
 * Selects all Event entities from the Event feature state.
 * @function
 * @returns {EventModel[]} An array of all Event entities.
 */
const selectAllEvents = createSelector(selectEventState, selectAll);

export const filterByDateAndYear = (dateFilter: any) =>
  createSelector(selectAllEvents, (events: EventModel[]) => {
    const { year, month } = dateFilter;
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  });


/**
 * Selects the Event entities from the Event feature state.
 * @function
 * @returns {Record<string, EventModel>} An object containing Event entities by their IDs.
 */
const selectEventEntities = createSelector(selectEventState, selectEntities);

/**
 * Selects the errors from the Event feature state.
 * @function
 * @returns {string[] | null} An array of errors or null.
 */
const selectErrors = createSelector(selectEventState, (state) => state?.errors);

/**
 * Selects the loading status from the Event feature state.
 * @function
 * @returns {string | null} The loading status or null.
 */
const selectLoadingStatus = createSelector(
  selectEventState,
  (state) => state?.loadingStatus
);

export const selectGlobalSearchEvent = (searchTerm: string | undefined) => createSelector(
  selectAllEvents,
  (todoList: EventModel[]) => {
    return [...todoList].filter((todo: EventModel) =>
      searchTerm
        ? JSON.stringify(Object.values(todo))
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1
        : [...todoList],
    );
  },
);

export const getFilteredEvents = (dateFilter: any) =>
  createSelector(selectAllEvents, (state) => {
    const { year, month } = dateFilter;
    return state.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  });

/**
 * Selects the Event IDs from the Event feature state.
 * @function
 * @returns {string[]} An array of Event IDs.
 */
const selectEventIds = createSelector(selectEventState, selectIds);

/**
 * Object containing all Event selectors.
 * @namespace
 */
export const eventSelectors = {
  selectAllEvents,
  selectEventEntities,
  selectErrors,
  selectLoadingStatus,
  selectEventIds,
  filterByDateAndYear
};
