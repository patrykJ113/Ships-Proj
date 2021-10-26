import React from 'react';

import Styles from '../styles/Heder.module.css';
import SerchBox from './SerchBox/SerchBox';

export default function Header({ noShips , loading}) {

  return (
    <div className={noShips && Styles.Margin}>
        
        <SerchBox loading={loading}/>

    </div>
  );
}
