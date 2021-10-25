import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Header from './components/Heder';
import CardContainer from './components/Cards/CardContainer';
import Pagination from './components/Pagination/Pagination';
import Ship from './components/Ship/Ship';

import { BrowserRouter , Route , Switch} from 'react-router-dom';
import Logo from './components/Logo/Logo';
import FavoriteButton from './components/FavoriteButton/FavoriteButton';

import NoResults from './components/NoResults/NoResults'

export const ShipContext = React.createContext();
export const FavoriteContext = React.createContext();

function App() {

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPerPage] = useState(6);
  const [ships, setShips] = useState([]);
  const [backUpShips, setBackUpShips] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [noShips, setNoShips] = useState(false);

  

  useEffect(() => {
      axios.get('https://api.spacex.land/rest/launches')
          .then(res => {
              let arr = res.data;
              let filterdArr = arr.filter(el => {
                  return el.details !== null && el.links.flickr_images[0] != null;
              })
              filterdArr.forEach(el => {
                Object.assign(el, {favorite:false});  
              });
              setShips(filterdArr);
              setBackUpShips(filterdArr);
              setLoading(true);
              
          })
          .catch(err => console.log(err));
  }, [])

  const serchedShipsFunc = (serchedShips,relode,value) => {
    
        if(serchedShips){
          setShips(serchedShips);
          setNoShips(false);
        }else if(relode){
          setNoShips(false);
          setShips(backUpShips);
          window.history.replaceState(null, "", "/page/1")
        }else if(value === ''){
          setNoShips(false);
          setShips(backUpShips);
          setCurrentPage(1);
          window.history.replaceState(null, "", "/")
        }
        else{
          setNoShips(true);
          setShips(backUpShips);
          setCurrentPage(1);
        }
  }

  const indexOfLastShip = currentPage * shipsPerPage;
  const indexOfFirstShip = indexOfLastShip - shipsPerPage;
  const currentShips= ships.slice(indexOfFirstShip, indexOfLastShip);

  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  

  return (
    <BrowserRouter>
        <div className="App">
            <div className='MainContainer'>
                <ShipContext.Provider value={backUpShips}>
                    <FavoriteContext.Provider value={favorites}>
                        <Logo setCurrentPage={setCurrentPage}/>              
                        <Switch>
                            <Route path='/' exact>
                                {noShips ? <NoResults/> : <CardContainer ships={currentShips} loading={loading}/>}
                                {noShips ? '' : <Pagination
                                postsPerPage={shipsPerPage}
                                totalPosts={ships.length}
                                paginate={paginate}
                                pageNumber={currentPage}
                                loading={loading}
                                />}
                            </Route>

                            <Route path='/page/:id' >
                                {noShips ? <NoResults/>  : <CardContainer ships={currentShips} loading={loading}/>}
                                {noShips ? '' :<Pagination
                                postsPerPage={shipsPerPage}
                                totalPosts={ships.length}
                                paginate={paginate}
                                pageNumber={currentPage}
                                loading={loading}
                                />}
                            </Route>
                            <Route path='/ship/:id' >
                              <Ship />
                            </Route>
                        </Switch>
                        <Header serchedShipsFunc={serchedShipsFunc} Margin={noShips} loading={loading}/>
                        <FavoriteButton/>
                    </FavoriteContext.Provider>  
                </ShipContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
 