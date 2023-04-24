import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../services/events-dummy-data";
import EventList from "../../../components/events/EventList";
import { filterByDateAndYear } from "../../../state/event-state/selectors";


const FilterEventsList = () => {

  const router = useRouter();
  const slug = router.query.slug;
  let year;
  let month;
  if (slug?.length) {
    year = +slug[0];
    month = +slug[1];
  }
  if (!filterByDateAndYear({year, month}).length) {
    return (
      <div>
        <h1>filter Event is empty</h1>
      </div>
    )
  }
  return (
    <div>
      <h1 className="text-center text-lg pt-4">filter Events</h1>
      <EventList items={filterByDateAndYear({year, month})}/>
    </div>
  );
};

export default FilterEventsList;
