import React from 'react';
import ReactDom from 'react-dom';
import * as action from './action';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import Order from './order';
import log from './log';
let createStoreWithLog = applyMiddleware(log)(createStore);
const store = createStoreWithLog(reducer);
function tests(){
}
store.subscribe(tests);
store.dispatch(action.addTodo([1]));
ReactDom.render(<Provider store={store}><Order/></Provider>,document.getElementById('box'));