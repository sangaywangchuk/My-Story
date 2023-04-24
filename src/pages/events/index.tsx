import { useEffect } from "react";
import EventList from "../../../components/events/EventList";
import EventSearch from "../../../components/events/EventSearch";
import { getAllEvents } from "../../../services/events-dummy-data";
import { eventActions } from "../../../state/event-state/actions";
import { eventSelectors } from "../../../state/event-state/selectors";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { EventModel } from "../../../models";

const ShowEvents = () => {
    const dispatch = useAppDispatch();
    const selectEvents = useAppSelector(eventSelectors.selectAllEvents);
    const isLoading = useAppSelector(eventSelectors.selectLoadingStatus);

    useEffect(() => {
        if (!Object.keys(selectEvents).length) {
            dispatch(eventActions.fetchEvents())
        }
    }, [])

    

    return (
        <div>
            <h1 className="text-center">show all events</h1>
            <div>
                <EventSearch/>
                <EventList items={selectEvents}/>
            </div>
        </div>
    )
}

export default ShowEvents;