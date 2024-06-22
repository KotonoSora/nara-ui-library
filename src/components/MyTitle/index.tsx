import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface ComponentProps extends React.ComponentProps<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export function MyTitle({
  primary = false,
  size = "medium",
  label,
  ...props
}: ComponentProps) {
  const style = clsx(styles.button, {
    [styles["button--primary"]]: primary,
    [styles[`button--${size}`]]: size,
  });

  return (
    <button type="button" className={style} {...props}>
      {label}
    </button>
  );
}
