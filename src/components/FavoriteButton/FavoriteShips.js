import React from 'react';
import FavoriteShip from './FavoriteShip';

import { useSelector } from 'react-redux';

export default function FavoriteShips() {

    const ships = useSelector(state => state.ships);

    const filterdShips = ships.filter(ship => {
        return ship.favorite ;
      })

    const favorites = filterdShips.map(ship =>{
        if(ship.favorite){
          return (
              <FavoriteShip ship={ship} key={ship.id}/>
          )
        }
      })


  return (
    <>
        {favorites}
    </>
  );
}
