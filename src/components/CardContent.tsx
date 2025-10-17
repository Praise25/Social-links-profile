import CardButton from "./CardButton";
import classes from "./CardContent.module.css"

const SOCIAL_LINKS_DATA = [
  { id: 1, name: "GitHub", link: "#" },
  { id: 2, name: "Frontend Mentor", link: "#" },
  { id: 3, name: "LinkedIn", link: "#" },
  { id: 4, name: "Twitter", link: "#" },
  { id: 5, name: "Instagram", link: "#" },
];

export default function CardContent() {
  return (
    <div className={classes.container}>
      {[
        SOCIAL_LINKS_DATA.map((data) => (
          <CardButton
            key={data.id}
            buttonText={data.name}
            buttonLink={data.link}
          />
        )),
      ]}
    </div>
  );
}
