import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { ArrowLeftOutline } from '../../../assets/icons/ArrowLeftOutline'
import { styles } from './stylesHeaderBlock'


export const HeaderBlock = ({title, addText, withButton, onPress, containerStyle, headerStyle, addTextStyle}) => {

	const getButton = () => {
		return (
			<TouchableWithoutFeedback onPress={onPress} accessibilityRole='button'>
				<View style={styles.headerButton}>
					<ArrowLeftOutline
						width={styles.arrow.width}
						height={styles.arrow.height}
						fillColor='#545454'
					/>
				</View>
			</TouchableWithoutFeedback>
		)
	}

	return (
		<View style={containerStyle}>
			<View style={[styles.headerBlock, headerStyle]}>
				{withButton && getButton()}
				<Text style={styles.headerTitle}>{title}</Text>
			</View>
			{addText && <Text style={[styles.addText, addTextStyle]}>{addText}</Text>}
		</View>
	)
}


HeaderBlock.propsTypes = {
	title: PropTypes.string.isRequired,
	addText: PropTypes.string,
	withButton: PropTypes.bool,
	onPress: PropTypes.func,
	containerStyle: PropTypes.object,
	headerStyle: PropTypes.object,
	addTextStyle: PropTypes.object
}
