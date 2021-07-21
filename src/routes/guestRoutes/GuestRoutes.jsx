import React from 'react';
import { Route } from "react-router-native";
import Login from "../../screens/login/Login";
import SignUp from '../../screens/signup/SignUp';

const GuestRoutes = () => {
    return (
        <>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/"} component={Login} />
        </>
    )
};

export default GuestRoutes;
