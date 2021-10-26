import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import { connect , useSelector } from 'react-redux';

import { fetch } from './Redux/Ships/ShipActions'

import Header from './components/Heder';
import CardContainer from './components/Cards/CardContainer';
import Pagination from './components/Pagination/Pagination';
import Ship from './components/Ship/Ship';
import Logo from './components/Logo/Logo';
import FavoriteButton from './components/FavoriteButton/FavoriteButton';
import NoResults from './components/NoResults/NoResults'


export const ShipContext = React.createContext();
export const FavoriteContext = React.createContext();

function App({fetch}) {

  let ships = useSelector(state => state.ships );
  const loading = useSelector(state => state.loading );
  const serchedShips = useSelector(state => state.serchedShips );
  const noResults = useSelector(state => state.noResults );

  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPerPage] = useState(6);

  

  useEffect(() => { fetch() }, [])

  ships = serchedShips.length > 0 ? serchedShips : ships;

  const indexOfLastShip = currentPage * shipsPerPage;
  const indexOfFirstShip = indexOfLastShip - shipsPerPage;
  const currentShips= ships.slice(indexOfFirstShip, indexOfLastShip);

  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
        <div className="App">
            <div className='MainContainer'>
                <Logo setCurrentPage={setCurrentPage}/>      

                <Switch>
                    <Route path='/' exact>
                        {noResults ? <NoResults/>  : <CardContainer ships={currentShips} loading={loading}/>}
                        {noResults ? '' :<Pagination
                        postsPerPage={shipsPerPage}
                        totalPosts={ships.length}
                        paginate={paginate}
                        pageNumber={currentPage}
                        loading={loading}
                        />}
                    </Route>

                    <Route path='/page/:id' >
                        {noResults ? <NoResults/>  : <CardContainer ships={currentShips} loading={loading}/>}
                        {noResults ? '' :<Pagination
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
                
                <Header Margin={noResults} loading={loading}/> 
                <FavoriteButton/>
            </div>
        </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state =>{
  return {
    ships: state.ships
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    fetch: () => dispatch(fetch())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
 