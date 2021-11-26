import { PrivateRoute } from 'components/Common/PrivateRoute';
import Admin from 'components/Layout/Admin';
import LoginPages from 'features/auth/pages/LoginPages';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginPages />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
