import React from 'react'
import { Text, View } from 'react-native'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { AddBlockWithActionText } from '../../../components/AddBlockWithActionText/AddBlockWithActionText'
import { styles } from './stylesSignUpChooseType'


export const SignUpChooseType = (props) => {

	const onPress = () => props.changeSignUpStage('clientForm')

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to&nbsp;TimetoU!</Text>
			<Text style={styles.subtitle}>How you will use our application?</Text>
			<View style={styles.buttonGroup}>
				<MainButton containerStyle={styles.button} type='outline' text='I am client' onPress={onPress}/>
				<MainButton containerStyle={styles.button} link='/login' type='primary' text='I am business'/>
			</View>
			<AddBlockWithActionText
				type='link'
				mainText='Already have an account?'
				actionText='Sign in'
				link='/auth/login'
				containerStyle={styles.additionBlock}
			/>
		</View>
	)
}
