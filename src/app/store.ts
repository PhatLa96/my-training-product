import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import productReducer from 'features/product/productSlice';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'utils/history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  product: productReducer,
});

const sagaMiddlewere = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddlewere, routerMiddleware(history)),
});

sagaMiddlewere.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
