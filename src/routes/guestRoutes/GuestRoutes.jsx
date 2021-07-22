import React from 'react'
import { Route } from 'react-router-native'
import Login from '../../screens/login/Login'
import SignUp from '../../screens/SingUp/SignUp'
import SplashScreen from '../../screens/splashScreen/SplashScreen'


const GuestRoutes = () => {
	return (
		<>
			<Route exact path={'/signup'} component={SignUp}/>
			<Route exact path={'/login'} component={Login}/>
			<Route exact path={'/'} component={SplashScreen}/>
		</>
	)
}

export default GuestRoutes
