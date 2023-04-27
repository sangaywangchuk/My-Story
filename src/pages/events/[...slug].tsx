import { useEffect } from "react";
import { eventActions } from "../../../state/event-state/actions";
import { useAppDispatch } from "../../../state/store";
import EventList from "../../../components/events/EventList";
import { EventModel } from "../../../models";
import Head from "next/head";

const FilterEventsList = (props: any) => {
  const dispatch = useAppDispatch();
  const filteredEvents = props?.filteredEvents;

  useEffect(() => {
    if (!filteredEvents?.length) {
      dispatch(eventActions.fetchEvents());
    }
  }, []);

  return (
    <div>
      <Head>
        <title>filter events</title>
        <meta name="description" content={"filter all the events"}></meta>
      </Head>
      <h1 className="text-center text-lg pt-4">Filter Events</h1>
      {filteredEvents?.length ? (
        <EventList items={filteredEvents} />
      ) : (
        <div>
          <h2>No events found!</h2>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const [year, month] = slug.length ? [+slug[0], +slug[1]] : [null, null];
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  let response = apiUrl && (await fetch(apiUrl + "events.json"));
  let data = response && (await response.json());
  let events: EventModel[] = Object.keys(data).reduce(
    (acc: EventModel[], key: string) => {
      acc.push({ ...data[key], id: key });
      return acc;
    },
    []
  );
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event?.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return {
    props: {
      filteredEvents,
    },
  };
}

export default FilterEventsList;
