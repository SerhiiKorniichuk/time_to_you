import React from 'react'
import { Text, View } from 'react-native'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { AuthAddBlockWithLink } from '../../Authorization/AuthAddBlockWithLink/AuthAddBlockWithLink'
import { styles } from './stylesSignUpChooseType'


export const SignUpChooseType = (props) => {

	const onPress = () => props.changeSignUpStage('clientForm')

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to&nbsp;TimetoU!</Text>
			<Text style={styles.subtitle}>How you will use our application?</Text>
			<View style={styles.buttonGroup}>
				<MainButton style={styles.button} type='outline' text='I am client' onPress={onPress}/>
				<MainButton style={styles.button} link='/login' type='primary' text='I am business'/>
			</View>
			<AuthAddBlockWithLink
				style={styles.additionBlock}
				mainText='Already have an account?'
				linkText='Sign in'
				link='/auth/login'
			/>
		</View>
	)
}
