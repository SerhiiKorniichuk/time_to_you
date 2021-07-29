import React from 'react'
import { Route } from 'react-router-native'
import Onboarding from '../../screens/Onboarding/Onboarding'

const PrivateRoutes = () => {
	return (
		<>
			<Route exact path={'/onboarding'} component={Onboarding} />
		</>
	)
}

export default PrivateRoutes
