import axios from 'axios';
import { 
    FETCH_SHIPS,
    FETCH_SHIPS_SUCCESS,
    FETCH_SHIPS_ERROR,
    ADD_TO_FAVORITES,
    DELATE_FROM_FAVORITES,
    SERCH_SHIPS
 } from './ShipTypes'

export const fetchShips = () => {
    return {
      type: FETCH_SHIPS
    }
  }
  
export const fetchShipsSuccess = users => {
    return {
      type: FETCH_SHIPS_SUCCESS,
      payload:users
    }
  }
  
export const fetchShipsError = error => {
    return {
      type: FETCH_SHIPS_ERROR,
      payload:error
    }
  }
export const addToFavorite = id => {
  return {
    type: ADD_TO_FAVORITES,
    payload:id
  }
}  

export const delateFromFavorites = id => {
  return{
    type: DELATE_FROM_FAVORITES,
    payload:id
  }
}

export const serchShips = serchString =>{
  return{
    type: SERCH_SHIPS,
    payload:serchString
  }
}
  
export const fetch = ()=>{
    return (dispatch) =>{
  
      dispatch(fetchShips())
  
      axios.get('https://api.spacex.land/rest/launches')
      .then(res =>{
  
        let arr = res.data;
          let filterdArr = arr.filter(el => {
              return el.details !== null && el.links.flickr_images[0] != null;
          })
          filterdArr.forEach(el => {
            Object.assign(el, {favorite:false});  
          });
  
        dispatch(fetchShipsSuccess(filterdArr))
      })
      .catch(err =>{
        dispatch(fetchShipsError(err))
      })
    }
  }