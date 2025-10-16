import classes from "./CardHeader.module.css";
import profileImg from "../assets/avatar-jessica.jpeg";

export default function CardHeader() {
  return (
    <div className={classes.container}>
      <img className={classes.img} src={profileImg} alt="Display Picture" />
      <p className={classes.name}>Jessica Randall</p>
      <p className={classes.location}>London, United Kingdom</p>
      <p className={classes.description}>
        "Front-end developer and avid reader."
      </p>
    </div>
  );
}
