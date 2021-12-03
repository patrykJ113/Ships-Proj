import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import { connect , useSelector } from 'react-redux';

import { fetch } from './Redux/Ships/ShipActions'

import Logo from './components/Logo/Logo';
import FavoriteButton from './components/FavoriteButton/FavoriteButton';
import NoResults from './components/NoResults/NoResults';

import MainCommponent from './components/Main/MainCommponent';

export const ShipContext = React.createContext();
export const FavoriteContext = React.createContext();

function App({fetch}) {

  let ships = useSelector(state => state.ships );
  const loading = useSelector(state => state.loading );
  const serchedShips = useSelector(state => state.serchedShips );
  const noResults = useSelector(state => state.noResults );

  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPerPage] = useState(6);
  
  useEffect(() => { fetch() }, []);

  ships = serchedShips.length > 0 ? serchedShips : ships;

  const indexOfLastShip = currentPage * shipsPerPage;
  const indexOfFirstShip = indexOfLastShip - shipsPerPage;
  const currentShips= ships.slice(indexOfFirstShip, indexOfLastShip);

  
  const paginate = pageNumber => setCurrentPage(pageNumber) ;

  return (
    <BrowserRouter>
        <div className="App">
            <div className='MainContainer'>
                <Logo setCurrentPage={setCurrentPage}/>      

                <Switch>
                  <Route path='/Ships-Proj' exact >
                      <Redirect
                        to={{
                          pathname: "/",
                        }}
                      />
                    </Route>
                  
                    <Route path='/' exact>
                        <MainCommponent noResults={noResults} 
                                        currentShips={currentShips} 
                                        loading={loading} 
                                        shipsPerPage={shipsPerPage} 
                                        shipsLength={ships.length} 
                                        paginate={paginate}
                                        currentPage={currentPage}>
                        </MainCommponent>
                    </Route>

                    <Route path='/page/:id' >
                        <MainCommponent noResults={noResults} 
                                        currentShips={currentShips} 
                                        loading={loading} 
                                        shipsPerPage={shipsPerPage} 
                                        shipsLength={ships.length} 
                                        paginate={paginate}
                                        currentPage={currentPage}>
                        </MainCommponent>
                    </Route>

                    <Route path="*">
                      <NoResults/>
                    </Route>

                </Switch>
                
                
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
 