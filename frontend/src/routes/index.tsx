import * as React from 'react';
import { Route, Switch } from 'react-router';
import LandingPage from '../pages/LandingPage/LandingPage';

const CustomRoutes: React.SFC = () => {

    return (
      <Switch>
            <Route exact={true} path="/" component={LandingPage}/>
      </Switch>
    ); 
};

export default CustomRoutes;