import React from 'react';
import Styles from '../../styles/Cards.module.css';
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai";
import { useContext , useState} from 'react';
import { ShipContext } from '../../App';

export default function Card({details , mission_name , flickr_images , launch_date_utc , id , article_link}) {

  const ships = useContext(ShipContext);
  const [fav, setFav] = useState(false); 

  const addToFavorite = () => {
    ships.forEach(val =>{
      if(val.id == id) {
        val.favorite = !fav ;
        setFav(!fav);
      }

    })
  }
  return (
    <div className={Styles.Card}>
        <img src={flickr_images} className={Styles.Img} ></img>

        <p className={Styles.Date}>{launch_date_utc}</p>

        <h2 className={Styles.Title}>{mission_name}</h2>

        <p className={Styles.Description}>
            {details} 
        </p>

        <a href={article_link} className={Styles.Button}>CZTAJ WIĘCEJ</a>

        <div onClick={addToFavorite} className={Styles.Fav}>
          {fav ? <AiFillHeart className={Styles.Svg}/> : <AiOutlineHeart className={Styles.Svg}/>}
        </div>
          
    </div>
  );
}