import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ColorsPage from './ColorsPage';
import ColorDetail from './ColorDetail';
import NewColor from './NewColor';

const Routes = ({colors, addColor}) => {

    return (
        <div>
            <Switch>
                <Route exact path="/colors">
                    <ColorsPage colors={colors}/>
                </Route>
                <Route exact path="/colors/new">
                    <NewColor addColor={addColor} colors={colors}/>
                </Route>
                <Route exact path="/colors/:color">
                    <ColorDetail />
                </Route>
                <Redirect to="/colors"/>
            </Switch>
        </div>
    )
}

export default Routes;