import CardButton from "./CardButton";
import classes from "./CardContent.module.css";

const SOCIAL_LINKS_DATA = [
  { id: 1, name: "GitHub", link: "#" },
  { id: 2, name: "Frontend Mentor", link: "#" },
  { id: 3, name: "LinkedIn", link: "#" },
  { id: 4, name: "Twitter", link: "#" },
  { id: 5, name: "Instagram", link: "#" },
];

export default function CardContent() {
  return (
    <ul className={classes["list-container"]}>
      {SOCIAL_LINKS_DATA.map((data) => (
        <li className={classes["list-item"]} key={data.id}>
          <CardButton buttonText={data.name} buttonLink={data.link} />
        </li>
      ))}
    </ul>
  );
}
