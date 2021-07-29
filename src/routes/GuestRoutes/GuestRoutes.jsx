import React from 'react'
import { Route } from 'react-router-native'
import { Authorization } from '../../screens/Authorization/Authorization'
import { SplashScreen } from '../../screens/SplashScreen/SplashScreen'


const GuestRoutes = () => {
	return (
		<>
			<Route path='/auth' component={Authorization} />
			<Route exact path='/' component={SplashScreen} />
		</>
	)
}

export default GuestRoutes
