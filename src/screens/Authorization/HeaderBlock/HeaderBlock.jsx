import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { ArrowLeftOutline } from '../../../assets/icons/ArrowLeftOutline'
import { styles } from './stylesHeaderBlock'


export const HeaderBlock = ({ title, addText, withButton, onPress, style}) => {

	const getButton = () => {
		return (
			<TouchableWithoutFeedback onPress={onPress}>
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
		<View style={style}>
			<View style={styles.headerBlock}>
				{withButton && getButton()}
				<Text style={styles.headerTitle}>{title}</Text>
			</View>
			{addText && <Text style={styles.addText}>{addText}</Text>}
		</View>
	)
}


HeaderBlock.propsTypes = {
	title: PropTypes.string.isRequired,
	addText: PropTypes.string,
	withButton: PropTypes.bool,
	onPress: PropTypes.func,
	style: PropTypes.object
}
