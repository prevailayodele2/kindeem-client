import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { configureStore } from "@reduxjs/toolkit";


export const initStore = (initialState = {}) => {
  return configureStore({reducer: rootReducer}, initialState, applyMiddleware(thunk));
};

export const storeed = configureStore({reducer: rootReducer}, applyMiddleware(thunk));