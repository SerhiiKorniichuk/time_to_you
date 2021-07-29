import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './stylesAddBlockWithActionText'


export const AddBlockWithActionText = (props) => {

	const {mainText, actionText, type, link, onPress, containerStyle, textStyle, actionTextStyle} = props

	const getLink = () => {
		return (
			<Link to={link} underlayColor='none'>
				<Text style={[styles.additionText, styles.additionLink, actionTextStyle]}>{actionText}</Text>
			</Link>
		)
	}

	const getButton = () => {
		return (
			<TouchableWithoutFeedback onPress={onPress}>
				<Text style={[styles.additionText, styles.additionLink, actionTextStyle]}>{actionText}</Text>
			</TouchableWithoutFeedback>
		)
	}

	return (
		<View style={[styles.additionBlock, containerStyle]}>
			<Text style={[styles.additionText, textStyle]}>{mainText}</Text>
			{type === 'link' && getLink()}
			{type === 'button' && getButton()}
		</View>
	)
}


AddBlockWithActionText.propsTypes = {
	mainText: PropTypes.string.isRequired,
	actionText: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['link', 'button']),
	link: PropTypes.string,
	onPress: PropTypes.func,
	containerStyle: PropTypes.object,
	textStyle: PropTypes.object,
	linkStyle: PropTypes.object
}

AddBlockWithActionText.defaultProps = {
	type: 'button'
}
