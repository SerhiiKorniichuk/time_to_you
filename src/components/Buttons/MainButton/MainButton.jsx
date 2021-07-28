import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Link } from 'react-router-native'
import { styles } from './stylesMainButton'


export const MainButton = (props) => {

	const [bodyStyle, setBodyStyle] = useState(styles.bodyVanilla)
	const [textStyle, setTextStyle] = useState(styles.textVanilla)

	useEffect(() => {
		getStyles()
	}, [])

	const getStyles = () => {
		switch (props.type) {
			case 'primary':
				setBodyStyle(styles.bodyPrimary)
				setTextStyle(styles.textPrimary)
				break
			case 'outline':
				setBodyStyle(styles.bodyOutline)
				setTextStyle(styles.textOutline)
				break
			default:
				break
		}
	}

	const getInnerText = () => {
		if (props.type === 'primary') {
			return (
				<LinearGradient
					colors={['#FF9677', '#F57D72']}
					style={[styles.body, bodyStyle, props.style]}
				>
					<Text style={[styles.text, textStyle]}>{props.text}</Text>
				</LinearGradient>
			)
		}
		return (
			<View style={[styles.body, bodyStyle, props.style]}>
				<Text style={[styles.text, textStyle]}>{props.text}</Text>
			</View>
		)
	}

	const onPress = () => props.onPress()

	if (props.link) {
		return (
			<Link to={props.link} underlayColor='none'>
				{getInnerText()}
			</Link>
		)
	}

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			{getInnerText()}
		</TouchableWithoutFeedback >
	)
}


MainButton.propTypes = {
	style: PropTypes.object,
	type: PropTypes.oneOf(['primary', 'outline']),
	text: PropTypes.string,
	link: PropTypes.string,
	onPress: PropTypes.func
}
