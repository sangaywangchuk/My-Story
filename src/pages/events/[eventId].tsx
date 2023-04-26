import { useRouter } from "next/router";
import { getEventById } from "../../../services/events-dummy-data";
import EventSummary from "../../../components/event-details/EventSummary";
import EventLogistics from "../../../components/event-details/EventLogistics";
import EventContent from "../../../components/event-details/EventContent";
import { EventModel } from "../../../models";
import Head from "next/head";

const EventDetail = (props: any) => {
    const event: EventModel | undefined = props?.event;
    if (!props?.event) {
        <div>
            <h1 className="text-center">
                No Events found!!!

            </h1>
        </div>
    }
    return ( event && 
        <div>
             <Head>
                <title>{event?.title}</title>
                <meta name="description" content={event?.description}></meta>
            </Head>
            <EventSummary title={event?.title}/>
            <EventLogistics date={event?.date} address={event?.location} image={event?.image} imageAlt={event?.title} />
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
        </div>
    )
}

export async function getStaticProps(context: any) {
    const eventId = context?.params?.eventId;
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    let response = eventId && apiUrl && await fetch(apiUrl+`events/${eventId}.json/`);
    let data = response && await response.json(); 
    return {
      props: {
       event : data,
      },
      revalidate: 30,
    };
  }

export async function getStaticPaths() {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    let response = apiUrl && await fetch(apiUrl+'events.json');
    let data = response && await response.json(); 
    let events: EventModel[] = Object.keys(data).reduce((acc: EventModel[], key: string) => {
        acc.push({...data[key], id: key}) ; 
        return acc
    }, []) ;
    return {
        paths: events.map(event => ({ params: { eventId: event.id } })),
        fallback: false,
    }
}

export default EventDetail;