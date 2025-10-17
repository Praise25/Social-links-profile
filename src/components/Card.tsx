import classes from "./Card.module.css"
import CardHeader from "./CardHeader"
import CardContent from "./CardContent"

export default function Card() {
  return (
    <div className={classes.container}>
      <CardHeader />
      <CardContent />
    </div>
  )
}