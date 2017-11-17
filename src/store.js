import {reducer} from './reducers.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));