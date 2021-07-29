import React from 'react'
import { ImageBackground } from 'react-native'
import { onboardingData } from './onboardingData'
import OnboardingItem from './OnboardingItem/OnboardingItem'

const bg = require('../../assets/images/Onboarding/bg.png')

const user = {
	type: 'customer',
}

const OnBoarding = () => {
	return (
		<ImageBackground resizeMode='cover' source={bg} style={{ flex: 1 }}>
			<OnboardingItem data={onboardingData[user.type]} />
		</ImageBackground>
	)
}

export default OnBoarding
