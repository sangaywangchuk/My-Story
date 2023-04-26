import Link from "next/link";
import classes from "./EventItem.module.css"
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { EventModel } from "../../models";
import Image from "next/image";
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
      <Image src={`/${image}`} alt={title} width={250} height={160} />
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
