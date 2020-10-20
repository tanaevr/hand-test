import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from 'routes';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    return <route.component {...props} {...extraProps} route={route}/>;
                }}
            />
        ))}
    </Switch>
) : null;

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    {renderRoutes(routes)}
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
