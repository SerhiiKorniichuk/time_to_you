import React from 'react'
import { Route } from 'react-router-native'
import { Authorization } from '../../screens/Authorization/Authorization'
import Onboarding from '../../screens/Onboarding/Onboarding'
import { Profile } from '../../screens/Profile/Profile'
import { Screens } from '../../screens/Screens/Screens'
import { SplashScreen } from '../../screens/SplashScreen/SplashScreen'


const GuestRoutes = () => {
	return (
		<>
			<Route path='/screens' component={Screens} />
			<Route path='/profile' component={Profile} />
			<Route path='/onboarding' component={Onboarding} />
			<Route path='/auth' component={Authorization} />
			<Route exact path='/' component={SplashScreen} />
		</>
	)
}

export default GuestRoutes
