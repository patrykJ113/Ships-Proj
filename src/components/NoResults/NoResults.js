import React from 'react';
import Styles from '../../styles/NoResults.module.css'
import sad from '../../assets/sad.svg';

export default function NoResults() {
  return (
    <div className={Styles.Container}>
        <img src={sad} className={Styles.Img}></img>
        <h1 className={Styles.Text}>Sorry no ships found</h1>
    </div>
  );
}
