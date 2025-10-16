import classes from "./Card.module.css"
import CardHeader from "./CardHeader"

export default function Card() {
  return (
    <div className={classes.container}>
      <CardHeader />
      <h1>Card Content</h1>
    </div>
  )
}