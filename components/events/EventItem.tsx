import Link from "next/link";
import classes from "./EventItem.module.css"
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { EventModel } from "../../models";
const EventItem = (props: EventModel) => {
    const { id, location, date, title, description, image  } = props;
    
    const readableDate = (): string => {
        return (new Date(date)).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const formattedAddress = () => {
        return location.replace(',', '\n')
    }

    const exporeLink = `/events/${id}`;

  return (
    <li className={classes.item}>
        <img src={'/'+ image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{readableDate()}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formattedAddress()}</address>
          </div>
        </div>
        <div className={classes.actions}>
            <Button link={exporeLink}>
                <span>Expore More</span>
                <span className={classes.icon}>
                    <ArrowRightIcon/>
                </span>
            </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
