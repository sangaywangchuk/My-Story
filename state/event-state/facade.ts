import { APIErrorResponse, APIResponse, EventModel } from '../../models';
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEvents,
  updateEvent,
} from '../../services/events-api.service';

/**
 *Facade service for interacting with the Event API service
 */
export class EventFacadeService {
  /**
   *Fetches all Events
   *@returns Promise containing an APIResponse of type EventModel[] or an APIErrorResponse
   */
  static getEvent(): Promise<APIResponse<EventModel[]> | APIErrorResponse<any>> {
    return getEvents();
  }

  /**
   *Deletes a Event
   *@param id - The ID of the Event to delete
   *@returns Promise containing an APIResponse of type {} or an APIErrorResponse
   */
  static deleteEvent(id: string) {
    return deleteEvent(id);
  }

  /**
   *Creates a new Event
   *@param payload - The payload of the Event to create
   *@returns Promise containing an APIResponse of type EventModel or an APIErrorResponse
   */
  static createEvent(payload: EventModel) {
    return createEvent(payload);
  }

  /**
   *Updates an existing Event
   *@param payload - The payload of the Event to update
   *@returns Promise containing an APIResponse of type EventModel or an APIErrorResponse
   */
  static updateEvent(payload: EventModel) {
    return updateEvent(payload);
  }

  /**
   *Fetches a single Event by ID
   *@param payload - The ID of the Event to fetch
   *@returns Promise containing an APIResponse of type EventModel or an APIErrorResponse
   */
  static getEventById(payload: string) {
    return getEventById(payload);
  }
}
