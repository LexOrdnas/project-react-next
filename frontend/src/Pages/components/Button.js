/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from './Button.module.css';

export default function Button() {
    return (
      <div className={styles.botao01}>
        <a
        type="button"
        className={styles.error}>
            Bem-vindo!
        </a>
      </div>
    )
  }