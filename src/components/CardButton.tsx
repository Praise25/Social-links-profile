import classes from "./CardButton.module.css";
import { motion, type Variants } from "motion/react";

type ButtonProps = {
  buttonText: string;
  buttonLink: string;
};

const textVariant: Variants = {
  initial: { color: "#ffffff", backgroundColor: "#333333", transition: { duration: 0.5 } },
  hover: { color: "#333333", backgroundColor: "#c4f82a", transition: { duration: 0.5 } },
};

export default function CardButton({ buttonText, buttonLink }: ButtonProps) {
  return (
    <motion.a
      href={buttonLink}
      className={classes["link-text"]}
      variants={textVariant}
      animate="initial"
      whileHover="hover"
    >
      {buttonText}
    </motion.a>
  );
}
