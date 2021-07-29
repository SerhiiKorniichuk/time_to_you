import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import { ArrowRight } from '../../../assets/icons/ArrowRight'
import { styles } from './stylesOnboardingButton'
export const OnboardingButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<LinearGradient
				colors={['#FF9677', '#F57D72']}
				style={styles.bgContainer}
			>
				<Text style={styles.btnText}>Next</Text>
				<ArrowRight />
			</LinearGradient>
		</TouchableOpacity>
	)
}

OnboardingButton.propTypes = {
	onPress: PropTypes.func.isRequired,
}
