import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './stylesOnboardingItem'

export const Steper = ({ i }) => (
	<View style={styles.steperContainer}>
		<View style={[styles.circle, styles.steperBrown]} />
		<View
			style={[
				styles.circle,
				i >= 1 ? styles.steperBrown : styles.steperGrey,
			]}
		/>
		<View
			style={[
				styles.line,
				i == 2 ? styles.steperBrown : styles.steperGrey,
			]}
		/>
	</View>
)

Steper.propTypes = {
	i: PropTypes.number.isRequired,
}
