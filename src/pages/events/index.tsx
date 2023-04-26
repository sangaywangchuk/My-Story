import { useEffect } from "react";
import EventList from "../../../components/events/EventList";
import EventSearch from "../../../components/events/EventSearch";
import { getAllEvents } from "../../../services/events-dummy-data";
import { eventActions } from "../../../state/event-state/actions";
import { eventSelectors } from "../../../state/event-state/selectors";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { EventModel } from "../../../models";
import { getStoryblokApi } from "@storyblok/react";
import Head from "next/head";

const ShowEvents = (props: any) => {
    const dispatch = useAppDispatch();
    const selectEvents = useAppSelector(eventSelectors.selectAllEvents);
    const isLoading = useAppSelector(eventSelectors.selectLoadingStatus);
    
    useEffect(() => {
        if (!props?.events?.length) {
            dispatch(eventActions.fetchEvents())
        }
    }, [])

    

    return (
        <div>
            <Head>
                <title>Show Events</title>
                <meta name="description" content="find all the events"></meta>
            </Head>
            <h1 className="text-center">show all events</h1>
            <div>
                <EventSearch/>
                <EventList items={props?.events || selectEvents}/>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    let response = apiUrl && await fetch(apiUrl+'events.json');
    let data = response && await response.json(); 
    let events: EventModel[] = Object.keys(data).reduce((acc: EventModel[], key: string) => {
        acc.push({...data[key], id: key}); 
        return acc
    }, []) ;
    return {
      props: {
       events : events,
      }
    };
  }
  

export default ShowEvents;