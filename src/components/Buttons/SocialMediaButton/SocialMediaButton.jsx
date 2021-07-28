import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { btnTypes, icons } from './btnData'
import { styles } from './stylesSocialMediaButton'


export const SocialMediaButton = ({ type, onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.socialMediaBtnContainer}
		>
			<View style={styles.socialMediaBtn}>
				<Image source={icons[type]}/>
				<Text style={styles.socialMediaBtnTxt}>{btnTypes[type]}</Text>
			</View>
		</TouchableOpacity>
	)
}

SocialMediaButton.propTypes = {
	type: PropTypes.oneOf(['facebook', 'google']).isRequired,
	onPress: PropTypes.func.isRequired
}
