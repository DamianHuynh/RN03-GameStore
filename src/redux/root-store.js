import {createStore, combineReducers} from 'redux';
import gameReducer from './reducers/gamesReducer';

const rootReducers = combineReducers({gameReducer});

export const store = createStore(rootReducers);
