import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams, Product } from 'models';

export interface ProductState {
  loading: boolean;
  list: Product[];
  pagination: PaginationParams;
  filter: ListParams;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
  filter: {
    _page: 1,
    _limit: 50,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    fetchProductList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchProductListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
      state.loading = false;
      state.pagination = action.payload.pagination;
      state.list = action.payload.data;
      console.log(action.payload.data);
    },
    fetchProductListFailed(state, action: PayloadAction<string>) {
      state.loading = false;
    },
    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },
    setFilterWithDebouce(state, action: PayloadAction<ListParams>) {},
  },
});

export const productActions = productSlice.actions;

export const selectProductList = (state: RootState) => state.product.list;
export const selectProductPagination = (state: RootState) => state.product.pagination;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductFilter = (state: RootState) => state.product.filter;

const productReducer = productSlice.reducer;
export default productReducer;
