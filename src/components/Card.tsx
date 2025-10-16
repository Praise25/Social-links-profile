import classes from "./Card.module.css"

export default function Card() {
  return (
    <div className={classes.container}>
      <h1>Card Header</h1>
      <h1>Card Content</h1>
    </div>
  )
}