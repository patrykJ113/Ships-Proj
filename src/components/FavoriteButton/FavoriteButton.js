import React ,{useState} from 'react';
import Styles from '../../styles/FavoriteButton.module.css';

import { FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { delateFromFavorites } from '../../Redux/Ships/ShipActions';

export default function FavoriteButton() {

  const [isCiicked , setIsClicked] = useState(false);  

  const ships = useSelector(state => state.ships);
  const dispatch = useDispatch();
  

const favorites = ships.map(ship =>{
  if(ship.favorite){
    return (
        <div className={`${Styles.FavoriteItem}`} key={ship.id}>
          <a className={Styles.Link} href={ship.links.article_link}>
            <img src={ship.links.flickr_images[0]} className={Styles.FavoriteItemImg} alt='ship'></img>
            <p>{ship.mission_name}</p>
          </a>
          <FaTrashAlt onClick={() => dispatch(delateFromFavorites(ship.id))}/>
        </div>
    )
  }
})
const logMouse = () => {
  console.log('mouse ');
}

  return (
    <>
          <div className={Styles.Container} onMouseOver={logMouse}>
            <div className={`${Styles.FavoriteButton} ${isCiicked && Styles.FavoriteButtonClicked}`} onClick={()=>setIsClicked(!isCiicked)}>
                {isCiicked ? <IoMdClose/> : <FaRegHeart/>}
            </div>

            <div className={`${Styles.Dot} ${isCiicked && Styles.DotShowing }`}>
                <h1 className={Styles.FavoriteTitle}>Ulubione</h1>
                {favorites}
            </div>
          </div>
    </>
  );
}
