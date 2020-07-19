import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Main from "./Container/Main/Main";
import Balalay from "./Container/Balalay/Balalay";
import Basket from "./Container/Basket/Basket";

export default () => {
    return (
        <Switch>
            <Route path={'/'} component={Main} exact />
            <Route path={'/balalay/:slug'} component={Balalay}  />
            <Route path={'/basket/:slug'} component={Basket}  />
        </Switch>
    )
}