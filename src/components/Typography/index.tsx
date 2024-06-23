import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

export interface ITypographyProps extends React.ComponentProps<"p"> {
  readonly text: string;
  readonly weight?: 300 | 400 | 500 | 600 | 700 | 800;
  readonly theme?: "default" | "dark" | "light";
}

export function Typography({
  text,
  weight = 400,
  theme = "default",
}: ITypographyProps) {
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
