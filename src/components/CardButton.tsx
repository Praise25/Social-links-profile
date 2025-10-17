import classes from "./CardButton.module.css";
import { motion, type Variants } from "motion/react";

type ButtonProps = {
  buttonText: string;
  buttonLink: string;
};

const buttonVariant: Variants = {
  initial: { backgroundColor: "#333333", transition: { duration: 0.5 } },
  hover: { backgroundColor: "#c4f82a", transition: { duration: 0.25 } },
};

const textVariant: Variants = {
  initial: { color: "#ffffff", transition: { duration: 0.25 } },
  hover: { color: "#333333", transition: { duration: 0.25 } },
};

export default function CardButton({ buttonText, buttonLink }: ButtonProps) {
  return (
    <motion.button
      className={classes.button}
      variants={buttonVariant}
      animate="initial"
      whileHover="hover"
    >
      <motion.a
        href={buttonLink}
        className={classes["link-text"]}
        variants={textVariant}
      >
        {buttonText}
      </motion.a>
    </motion.button>
  );
}
