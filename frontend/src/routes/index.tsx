import * as React from 'react';
import { Route, Switch } from 'react-router';
import Picture from '../pages/Picture/Picture';
import TagsAndGalleries from '../pages/TagsAndGalleries/TagsAndGalleries';
import LandingPage from '../pages/LandingPage/LandingPage';

const CustomRoutes: React.SFC = () => {

    return (
      <Switch>
        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path="/tags" component={TagsAndGalleries}/>
        <Route exact={true} path="/picture" component={Picture}/>
      </Switch>
    ); 
};

export default CustomRoutes;