import React from 'react';

import Styles from '../styles/Heder.module.css';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import SerchBox from './SerchBox/SerchBox';

export default function Header({serchedShipsFunc , noShips , loading}) {

  return (
    <div className={noShips && Styles.Margin}>
        
        <SerchBox serchedShipsFunc={serchedShipsFunc} loading={loading}/>

    </div>
  );
}
