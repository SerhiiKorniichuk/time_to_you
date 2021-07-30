import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './stylesHeaderWithNavigation'


export const HeaderWithNavigation = (props) => {

	const {
		containerStyle, titleStyle, title, noBorder,
		LeftButtonIcon, leftButtonStyle, leftButtonIconProps, onPressLeftButton,
		RightButtonIcon, rightButtonStyle, rightButtonIconProps, onPressRightButton
	} = props

	const getLeftButton = () => (
		<TouchableWithoutFeedback onPress={onPressLeftButton}>
			<View style={[styles.button, styles.leftButtonContainer, leftButtonStyle]}>
				<LeftButtonIcon {...leftButtonIconProps}/>
			</View>
		</TouchableWithoutFeedback>
	)

	const getRightButton = () => (
		<TouchableWithoutFeedback onPress={onPressRightButton}>
			<View style={[styles.button, styles.rightButtonContainer, rightButtonStyle]}>
				<RightButtonIcon {...rightButtonIconProps}/>
			</View>
		</TouchableWithoutFeedback>
	)

	return (
		<View style={[styles.container, containerStyle, noBorder && styles.noBorder]}>
			<View style={styles.innerContainer}>
				{LeftButtonIcon && getLeftButton()}
				<Text style={[styles.title, titleStyle]}>{title}</Text>
				{RightButtonIcon && getRightButton()}
			</View>
		</View>
	)
}


HeaderWithNavigation.propTypes = {
	title: PropTypes.string.isRequired,
	noBorder: PropTypes.bool,
	leftButtonIcon: PropTypes.func,
	leftButtonIconProps: PropTypes.object,
	onPressLeftButton: PropTypes.func,
	rightButtonIcon: PropTypes.func,
	rightButtonIconProps: PropTypes.object,
	onPressRightButton: PropTypes.func,
	containerStyle: PropTypes.object,
	leftButtonStyle: PropTypes.object,
	titleStyle: PropTypes.object,
	rightButtonStyle: PropTypes.object
}
