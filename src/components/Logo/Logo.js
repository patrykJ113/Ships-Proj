import React from 'react';
import logo from '../../assets/header-brand-logo.svg';
import { Link } from 'react-router-dom';
import Styles from '../../styles/Logo.module.css'

export default function Logo({setCurrentPage}) {
  return (
    <div className={Styles.Logo}>
        <Link to={`/`} >
          <img src={logo} className={Styles.Img} alt="Ships"></img>
        </Link>
    </div>
  );
}
