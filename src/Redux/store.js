import { createStore , compose , applyMiddleware } from 'redux';
import shipsReducer from './Ships/ShpiReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(shipsReducer ,composeEnhancer(applyMiddleware(thunk)));

export default store ;