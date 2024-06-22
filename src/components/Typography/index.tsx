import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface ComponentProps extends React.ComponentProps<"p"> {
  text: string;
  weight: 300 | 400 | 500 | 600 | 700 | 800;
  theme?: "default" | "dark" | "light";
}

export function Typography({
  text,
  weight,
  theme = "default",
}: ComponentProps) {
  const className = styles[`open-sans-${weight}`];

  return (
    <p
      className={clsx(className, styles.typography, {
        [styles["default-theme"]]: theme === "default",
        [styles["light-theme"]]: theme === "light",
        [styles["dark-theme"]]: theme === "dark",
      })}
    >
      {text}
    </p>
  );
}
