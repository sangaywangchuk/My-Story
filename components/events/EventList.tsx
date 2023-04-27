import { EventModel } from "../../models";
import EventItem from "./EventItem";
import classes from './EventList.module.css'
const EventList = (props: {items: EventModel[]}) => {
    const {items} = props;
    return (
        <ul className={classes.list}>
            {
                items?.map((event, index )=> (<EventItem {...event} key={index}/>))
            }
        </ul>
    )
}

export default EventList;