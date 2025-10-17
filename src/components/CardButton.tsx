import classes from "./CardButton.module.css"

type ButtonProps = {
  buttonText: string;
  buttonLink: string;
};

export default function CardButton({ buttonText, buttonLink }: ButtonProps) {
  return (
    <button className={classes.button}>
      <a href={buttonLink} className={classes["link-text"]}>{buttonText}</a>
    </button>
  );
}
