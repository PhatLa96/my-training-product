import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { ListParams, ListResponse, Product } from 'models';
import { productActions } from './productSlice';

function* fetchProdcutList(action: PayloadAction<ListParams>) {
  try {
    const reponse: ListResponse<Product> = yield call(productApi.getAll, action.payload);
    yield put(productActions.fetchProductListSuccess(reponse));
    console.log(reponse);
  } catch (error: any) {
    console.log(error);
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductList.type, fetchProdcutList);
}
