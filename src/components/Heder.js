import React from 'react';

import Styles from '../styles/Heder.module.css';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import SerchBox from './SerchBox/SerchBox';

export default function Header({ noShips , loading}) {

  return (
    <div className={noShips && Styles.Margin}>
        
        <SerchBox loading={loading}/>
        {/* add back  serchedShipsFunc={serchedShipsFunc} to obowe */}

    </div>
  );
}
