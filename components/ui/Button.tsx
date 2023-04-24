import Link from "next/link"
import classes from "./Button.module.css"
const Button = (props: any) => {
    if (props?.link) {
        return ( 
            <Link href={props?.link}>
                <div className={classes.btn}>
                    {props.children}
                </div>
            </Link>
        )
    }
    return <button className={classes.btn}> {props.children}</button>
}
export default Button;