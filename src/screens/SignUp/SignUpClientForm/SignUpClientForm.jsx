import React, { useState } from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Input } from '../../../components/Input/Input'
import { styles } from './stylesSignUpClientForm'


export const SignUpClientForm = () => {

	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [password, setPassword] = useState('')

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
			<View style={styles.formBlock}>
				<Input
					label='Name'
					value={name}
					onChange={setName}
				/>
				<Input
					label='Last name'
					value={lastName}
					onChange={setLastName}
				/>
				<Input
					label='Password'
					value={password}
					type='password'
					onChange={setPassword}
				/>
			</View>
		</>
	)
}
