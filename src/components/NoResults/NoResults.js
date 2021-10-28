import React from 'react';
import Styles from '../../styles/NoResults.module.css'
import errorImg from '../../assets/404.png';

export default function NoResults() {
  return (
    <div className={Styles.Container}>
        <img src={errorImg} className={Styles.Img}></img>
    </div>
  );
}
