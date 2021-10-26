import { 
    FETCH_SHIPS,
    FETCH_SHIPS_SUCCESS,
    FETCH_SHIPS_ERROR,
    ADD_TO_FAVORITES,
    DELATE_FROM_FAVORITES,
    SERCH_SHIPS,
    STOP_SERCHING_SHIPS
 } from './ShipTypes'

const initialState = {
    loading:false,
    noResults:false,
    ships:[],
    serchedShips:[],
    error:'',
    shipSLength:0
  }

const shipsReducer = (state = initialState, action) =>{
    switch(action.type){
  
      case FETCH_SHIPS:
        return {
          ...state,
          loading:true
        } 
  
      case FETCH_SHIPS_SUCCESS:
        return {
          ...state,
          loading:false,
          ships:action.payload,
          serchedShips:[],
          error:''
        }
  
      case FETCH_SHIPS_ERROR:
        return {
          ...state,
          loading:false,
          ships:[],
          serchedShips:[],
          error:action.payload
        }
      
      case ADD_TO_FAVORITES:
        return {
          ...state,
          ships: state.ships.map(val =>{
            if(val.id === action.payload) {
              val.favorite = !val.favorite  ;
            }
            return val;
          })
            
        }
      
      case DELATE_FROM_FAVORITES :
        return {
          ...state,
          ships: state.ships.map(val =>{
            if(val.id === action.payload) {
              val.favorite = false  ;
            }
            return val;
          })
            
        }
      case SERCH_SHIPS : 
        if(action.payload !== ''){
          const filterdShips = state.ships.filter(ship =>{
            if(ship.mission_name.toUpperCase().includes(action.payload.toUpperCase())) return true;
            else return false
          })
          if(filterdShips.length > 0){
            return {
              ...state,
              serchedShips:filterdShips,
              noResults:false,
              shipSLength:filterdShips.length
            }
          }else{
            return{
              ...state,
              serchedShips:[],
              noResults:true,
              shipSLength:0
            }
          }
          
        }else{
          return{
            ...state,
            serchedShips:[],
            noResults:false,
            shipSLength:0
          }
        }

      case STOP_SERCHING_SHIPS:
        return{
          ...state,
          serchedShips:[],
          noResults:false,
          shipSLength:0
        }  

      default :
        return state ;
  
    }
  }
  export default shipsReducer ;