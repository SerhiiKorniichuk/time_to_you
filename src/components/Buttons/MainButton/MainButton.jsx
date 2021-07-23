import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Link } from 'react-router-native'
import { stylesMainButton } from './stylesMainButton'


export const MainButton = (props) => {

	const [bodyStyle, setBodyStyle] = useState(stylesMainButton.bodyVanilla)
	const [textStyle, setTextStyle] = useState(stylesMainButton.textVanilla)

	useEffect(() => {
		getStyles()
	}, [])

	const getStyles = () => {
		switch (props.type) {
			case 'primary':
				setBodyStyle(stylesMainButton.bodyPrimary)
				setTextStyle(stylesMainButton.textPrimary)
				break
			case 'outline':
				setBodyStyle(stylesMainButton.bodyOutline)
				setTextStyle(stylesMainButton.textOutline)
				break
			default:
				break
		}
	}

	const getInnerText = () => {
		return (
			<View style={[stylesMainButton.body, bodyStyle, props.style]}>
				<Text style={[stylesMainButton.text, textStyle]}>{props.text}</Text>
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
