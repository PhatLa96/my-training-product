import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import { productActions, selectProductFilter, selectProductList } from '../productSlice';

interface ListPageProps {}

export default function ListPage({}: ListPageProps) {
  const filter = useAppSelector(selectProductFilter);
  const productList = useAppSelector(selectProductList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(productActions.fetchProductList(filter));
  }, [dispatch, filter]);
  console.log('productList', productList);
  return (
    <div>
      <ProductTable productList={productList} />
    </div>
  );
}
