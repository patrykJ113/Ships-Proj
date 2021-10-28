import React from 'react';

import Styles from '../styles/Heder.module.css';
import SerchBox from './SerchBox/SerchBox';

export default function Header({ noShips , loading ,paginate}) {

  return (
    <div className={noShips && Styles.Margin}>
        
        <SerchBox loading={loading} paginate={paginate}/>

    </div>
  );
}
