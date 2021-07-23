import React from 'react'
import { Alert, Text, View } from 'react-native'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { styles } from './stylesSignUpChooseType'


export const SignUpChooseType = () => {

	const onPress = () => Alert.alert('button pressed')

	return (
		<>
			<Text style={styles.title}>Welcome to&nbsp;TimetoU!</Text>
			<Text style={styles.subtitle}>How you will use our application?</Text>
			<View style={styles.buttonGroup}>
				<MainButton style={styles.button} link='/login' type='outline' text='I am client' onPress={onPress}/>
				<MainButton style={styles.button} type='primary' text='I am business' onPress={onPress}/>
			</View>
		</>
	)
}
