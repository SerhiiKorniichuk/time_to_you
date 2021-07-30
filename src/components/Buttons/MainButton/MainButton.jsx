import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Link } from 'react-router-native'
import { styles } from './stylesMainButton'


export const MainButton = (props) => {

	const {
		link, text, textStyle, containerStyle,
		LeftIcon, RightIcon,
		leftIconContainerStyle, rightIconContainerStyle,
		leftIconProps, rightIconProps, onPress
	} = props

	const [bodyLocalStyle, setBodyLocalStyle] = useState(styles.bodyVanilla)
	const [textLocalStyle, setTextLocalStyle] = useState(styles.textVanilla)

	useEffect(() => {
		getStyles()
	}, [])

	const getStyles = () => {
		switch (props.type) {
			case 'primary':
				setBodyLocalStyle(styles.bodyPrimary)
				setTextLocalStyle(styles.textPrimary)
				break
			case 'outline':
				setBodyLocalStyle(styles.bodyOutline)
				setTextLocalStyle(styles.textOutline)
				break
			default:
				break
		}
	}

	const getButton = () => {
		if (props.type === 'primary') {
			return (
				<LinearGradient
					colors={['#FF9677', '#F57D72']}
					style={[styles.body, bodyLocalStyle, containerStyle]}
				>
					{getButtonInner()}
				</LinearGradient>
			)
		}
		return (
			<View style={[styles.body, bodyLocalStyle, containerStyle]}>
				{getButtonInner()}
			</View>
		)
	}

	const getButtonInner = () => (
		<View style={styles.innerContainer}>
			{LeftIcon && getLeftIcon()}
			<Text style={[styles.text, textLocalStyle, textStyle]}>{text}</Text>
			{RightIcon && getRightIcon()}
		</View>
	)

	const getLeftIcon = () => (
		<View style={[styles.leftIcon, leftIconContainerStyle]}>
			<LeftIcon {...leftIconProps}/>
		</View>
	)

	const getRightIcon = () => (
		<View style={[styles.rightIcon, rightIconContainerStyle]}>
			<RightIcon {...rightIconProps}/>
		</View>
	)

	const onButtonPress = () => onPress()

	if (link) {
		return (
			<Link to={link} underlayColor='none'>
				{getButton()}
			</Link>
		)
	}

	return (
		<TouchableWithoutFeedback onPress={onButtonPress}>
			{getButton()}
		</TouchableWithoutFeedback>
	)
}


MainButton.propTypes = {
	type: PropTypes.oneOf(['primary', 'outline']),
	link: PropTypes.string,
	text: PropTypes.string,
	textStyle: PropTypes.object,
	containerStyle: PropTypes.object,
	LeftIcon: PropTypes.func,
	RightIcon: PropTypes.func,
	leftIconContainerStyle: PropTypes.object,
	rightIconContainerStyle: PropTypes.object,
	leftIconProps: PropTypes.object,
	rightIconProps: PropTypes.object,
	onPress: PropTypes.func
}
