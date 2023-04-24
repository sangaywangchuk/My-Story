import Button from "../ui/Button"
import classes from "./EventSearch.module.css"
import { useRouter } from "next/router"

export const months = [
    {
        name: 'jan',
        value: 1
    },
    {
        name: 'Fav',
        value: 2
    },
    {
        name: 'Mar',
        value: 3
    },
    {
        name: 'Apr',
        value: 4
    },
    {
        name: 'May',
        value: 5
    },
    {
        name: 'June',
        value: 6
    },
    {
        name: 'July',
        value: 7
    },
    {
        name: "Aug",
        value: 8
    }
]
const EventSearch = () => {
    const router = useRouter();
    const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const year = e.currentTarget.year.value;
        const month = e.currentTarget.month.value;
        router.push(`/events/${year}/${month}`);
    }
    return (
        <form className={classes.form} onSubmit={onSearch}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year"> Year </label>
                    <select name="year"  id="year">
                        <option value="2021"> 2021 </option>
                        <option value="2022"> 2022 </option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month"> Month </label>
                    <select name="month" id="month">
                        {
                            months?.map((mon, index) => ( <option key={index} value={mon.value}> {mon.name} </option>))
                        }
                    </select>
                </div>
            </div>
            <Button> Search Event</Button>
        </form>
    )
}

export default EventSearch;