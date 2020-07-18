import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Main from "./Container/Main/Main";
import Balalay from "./Container/Balalay/Balalay";

export default () => {
    return (
        <Switch>
            <Route path={'/'} component={Main} exact />
            <Route path={'/balalay/:slug'} component={Balalay}  />
        </Switch>
    )
}