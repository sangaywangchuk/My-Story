import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { eventActions } from '../../../state/event-state/actions';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { getFilteredEvents } from '../../../state/event-state/selectors';
import EventList from '../../../components/events/EventList';

const FilterEventsList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { slug } = router.query;
  const [year, month] = slug?.length ? [+slug[0], +slug[1]] : [null, null];
debugger
  const filteredEvents = useAppSelector(getFilteredEvents({ year, month }));

  useEffect(() => {
    if (!filteredEvents?.length) {
      dispatch(eventActions.fetchEvents());
    }
  }, [filteredEvents]);

  return (
    <div>
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

export default FilterEventsList;
