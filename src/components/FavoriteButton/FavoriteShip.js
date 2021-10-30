import React , { useState } from 'react';

import { animated , useSpring } from 'react-spring';

import { FaTrashAlt } from 'react-icons/fa';

import { delateFromFavorites } from '../../Redux/Ships/ShipActions';

import Styles from '../../styles/FavoriteButton.module.css';

import { useDispatch } from 'react-redux';

export default function FavoriteShip({ship}) {

    const [ hide , setHide ] = useState(false);

    const dispatch = useDispatch();

    const style = useSpring({
        config:{duration:300},
        from:{
          opacity: hide ? 1 : 0
        },
        to:{
          opacity: hide ? 0 : 1
        },
        onRest:() => hide && dispatch(delateFromFavorites(ship.id))
      });

  return (
    <>
        <animated.div className={`${Styles.FavoriteItem}`} key={ship.id} style={style}>
            <a className={Styles.Link} href={ship.links.article_link}>
                <img src={ship.links.flickr_images[0]} className={Styles.FavoriteItemImg} alt='ship'></img>
                <p>{ship.mission_name}</p>
            </a>
            <FaTrashAlt onClick={() => {
                console.log(`hide = ${hide}`);
                setHide(!hide);
                console.log(`hide = ${hide}`);
                }}/>
        </animated.div>
    </>
  );
}

