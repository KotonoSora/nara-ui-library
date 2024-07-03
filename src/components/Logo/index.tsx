import React from "react";

import viteLogo from "/vite.svg";

import styles from "./styles.module.scss";

export interface ILogoProps extends React.ComponentProps<"div"> {}

export function Logo() {
  return (
    <div>
      <img src={viteLogo} alt="" srcSet={viteLogo} className={styles.logo} />
    </div>
  );
}