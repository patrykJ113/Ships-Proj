import React from 'react';
import Styles from '../../styles/Cards.module.css';
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai";
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../../Redux/Ships/ShipActions'

import { animated , useSpring } from 'react-spring';

export default function Card({details , mission_name , flickr_images , launch_date_utc , id , article_link , favorite}) {


  const style = useSpring({
      config:{duration:300},
      from:{opacity:0},
      to:{opacity:1}
  });

  const dispatch = useDispatch()

  return (
    <animated.div className={Styles.Card} style={style} >
        <img src={flickr_images} className={Styles.Img} alt='Ship'></img>

        <p className={Styles.Date}>{launch_date_utc}</p>

        <h2 className={Styles.Title}>{mission_name}</h2>

        <p className={Styles.Description}>
            {details} 
        </p>

        <a href={article_link} className={Styles.Button}>CZTAJ WIĘCEJ</a>

        <div onClick={() => dispatch(addToFavorite(id))} className={Styles.Fav}>
          {favorite ? <AiFillHeart className={Styles.Svg}/> : <AiOutlineHeart className={Styles.Svg}/>}
        </div>
          
    </animated.div>
  );
}