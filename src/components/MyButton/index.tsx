import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

export interface IMyButtonProps extends React.ComponentProps<"button"> {
  readonly primary?: boolean;
  readonly size?: "small" | "medium" | "large";
  readonly label: string;
}

export function MyButton({
  primary = false,
  size = "medium",
  label,
  ...props
}: IMyButtonProps) {
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
