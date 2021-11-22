import {createStore, combineReducers} from 'redux';
import empty from './reducers/empty';

const rootReducers = combineReducers({empty});

export const store = createStore(rootReducers);
