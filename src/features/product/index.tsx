import { useAppDispatch } from 'app/hooks';

import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';

import ListPage from './pages/ListPage';
export default function ProductFeature() {
  const match = useRouteMatch();
  const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     dispatch(cityActions.fetchCityList());
  //   }, [dispatch]);
  return (
    <>
      <Switch>
        <Route path={match.path} exact>
          <ListPage />
        </Route>

        <Route path={`${match.path}/add`}>
          <AddEditPage />
        </Route>

        <Route path={`${match.path}/edit/:productId`}>
          <AddEditPage />
        </Route>
      </Switch>
    </>
  );
}
