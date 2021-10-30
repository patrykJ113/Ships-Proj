import React , { useState } from 'react';
import Styles from '../../styles/FavoriteButton.module.css';

import { FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

import FavoriteShips from './FavoriteShips';

export default function FavoriteButton() {

  const [isCiicked , setIsClicked] = useState(false);  

  const [ hide , setHide ] = useState(false);

  return (
    <>
          <div className={Styles.Container}>
            <div className={`${Styles.FavoriteButton} ${isCiicked && Styles.FavoriteButtonClicked}`} onClick={()=>setIsClicked(!isCiicked)}>
                {isCiicked ? <IoMdClose/> : <FaRegHeart/>}
            </div>

            <div className={`${Styles.Dot} ${isCiicked && Styles.DotShowing }`}>
                <h1 className={Styles.FavoriteTitle}>Ulubione</h1>                        
                  <FavoriteShips/>
            </div>
          </div>
    </>
  );
}
