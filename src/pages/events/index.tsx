import { useEffect } from "react";
import { eventActions } from "../../../state/event-state/actions";
import { eventSelectors } from "../../../state/event-state/selectors";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { EventModel } from "../../../models";
import Head from "next/head";
import dynamic from "next/dynamic";
import EventList from "../../../components/events/EventList";
const EventSearch = dynamic(() => import('../../../components/events/EventSearch'))

const ShowEvents = (props: any) => {
    const dispatch = useAppDispatch();
    const selectEvents = useAppSelector(eventSelectors.selectAllEvents);
    
    useEffect(() => {
        if (!props?.events?.length) {
            dispatch(eventActions.fetchEvents())
        }
    }, [])

    

    return (
        <div className="bg-white p-10">
            <Head>
                <title>Show Events</title>
                <meta name="description" content="find all the events"></meta>
            </Head>
            <h1 className="text-center font-bold text-2xl ">Show All Events</h1>
            <div>
                <EventSearch/>
                <EventList items={props?.events?.length? props?.events : selectEvents}/>
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