import React ,{useState} from 'react';
import Styles from '../../styles/FavoriteButton.module.css';
import { useContext } from 'react';
import { ShipContext } from '../../App';

import { FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from 'react-icons/fa';

export default function FavoriteButton() {

  const [isCiicked , setIsClicked] = useState(false);  
  // const [ favorites, setFavorites] = useState(false);  
  const ships = useContext(ShipContext);

  const delateFromFavs = (id) =>{
    ships.forEach(val =>{
      if(val.id == id) {
        val.favorite = false ;
      }

    })
  }
  

const favorites = ships.map(ship =>{
  if(ship.favorite){
    return (
        <div className={`${Styles.FavoriteItem}`}>
          <a className={Styles.Link} href={ship.links.article_link}>
            <img src={ship.links.flickr_images[0]} className={Styles.FavoriteItemImg} alt='ship'></img>
            <p>{ship.mission_name}</p>
          </a>
          <FaTrashAlt onClick={() => delateFromFavs(ship.id)}/>
          
        </div>
  
    )
  }
})

  return (
    <>
        

        <div className={`${Styles.Container} ${isCiicked && Styles.ContainerVisible}`}>
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
