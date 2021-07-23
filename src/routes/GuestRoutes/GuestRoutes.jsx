import React from 'react'
import { Route } from 'react-router-native'
import Login from '../../screens/Login/Login'
import SignUp from '../../screens/SignUp/SignUp'
import SplashScreen from '../../screens/SplashScreen/SplashScreen'


const GuestRoutes = () => {
	return (
		<>
			<Route exact path={'/signup'} component={SignUp}/>
			<Route exact path={'/Login'} component={Login}/>
			<Route exact path={'/'} component={SplashScreen}/>
		</>
	)
}

export default GuestRoutes
