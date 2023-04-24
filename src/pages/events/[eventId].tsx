import { useRouter } from "next/router";
import { getEventById } from "../../../services/events-dummy-data";
import EventSummary from "../../../components/event-details/EventSummary";
import EventLogistics from "../../../components/event-details/EventLogistics";
import EventContent from "../../../components/event-details/EventContent";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { eventSelectors } from "../../../state/event-state/selectors";
import { eventActions } from "../../../state/event-state/actions";
import { EventModel } from "../../../models";
const EventDetail = () => {
    const router = useRouter();
    const id = router.query.eventId;
    const eventEntities = useAppSelector(eventSelectors.selectEventEntities);
    const dispatch = useAppDispatch();
    !eventEntities[id as string] && dispatch(eventActions.fetchEvents());
    const event: EventModel | undefined = eventEntities[id as string] as EventModel;

    return ( event && 
        <div>
            <EventSummary title={event?.title}/>
            <EventLogistics date={event?.date} address={event?.location} image={event?.image} imageAlt={event?.title} />
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
        </div>
    )
}

export default EventDetail;