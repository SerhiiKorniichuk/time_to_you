import React from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './stylesSignUpClientForm'


export const SignUpClientForm = () => {

	const goPreviewsStep = () => {
		Alert.alert('goPreviewsStep')
	}

	return (
		<>
			<View style={styles.headerBlock}>
				<TouchableWithoutFeedback onPress={goPreviewsStep}>
					<Text style={styles.headerButton}>X</Text>
				</TouchableWithoutFeedback>
				<Text style={styles.headerTitle}>Sign up</Text>
			</View>
		</>
	)
}
