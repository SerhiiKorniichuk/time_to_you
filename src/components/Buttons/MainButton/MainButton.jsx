import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
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

	const onPress = () => props.onPress()

	return (
		<Link to={props.link}>
			<TouchableOpacity
				onPress={onPress}
				style={[stylesMainButton.body, bodyStyle, props.style]}
			>
					<Text style={[stylesMainButton.text, textStyle]}>{props.text}</Text>
			</TouchableOpacity>
		</Link>
	)
}
