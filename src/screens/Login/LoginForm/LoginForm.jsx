import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { useFormik } from 'formik'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../components/Input/Input'
import { SocialMediaButton } from '../../../components/Buttons/SocialMediaButton/SocialMediaButton'
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput'
import { HeaderBlock } from '../../Authorization/HeaderBlock/HeaderBlock'
import { AddBlockWithActionText } from '../../../components/AddBlockWithActionText/AddBlockWithActionText'
import { styles as stylesAuthorization } from './../../Authorization/stylesAuthorization'
import { styles } from './stylesLoginForm'


export const LoginForm = ({changeLoginStage}) => {

	const formik = useFormik({
		initialValues: {
			phone: '',
			password: ''
		},
		onSubmit: data => console.log(data)
	})

	const { values, handleChange, setValues } = formik

	const goToRecoveryScreen = () => changeLoginStage('recovery')

	return (
		<>
			<HeaderBlock title='Log in' style={styles.headerBlock}/>
			<View style={stylesAuthorization.formBlock}>
				<PhoneInput
					label='Phone number'
					value={values.phone}
					onChange={setValues}
				/>
				<Input
					label='Password'
					type='password'
					value={values.password}
					onChange={handleChange('password')}
				/>
				<View style={styles.linkContainer}>
					<TouchableWithoutFeedback onPress={goToRecoveryScreen}>
						<Text style={styles.linkText}>Forgot password?</Text>
					</TouchableWithoutFeedback>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<MainButton
					type='primary'
					text='Login'
					link='/screens'
				/>
			</View>
			<Text style={styles.socialMediaText}>
				Or login using social media
			</Text>
			<View style={styles.socialMediaButtons}>
				<SocialMediaButton
					type='facebook'
					onPress={() => {}}
				/>
				<SocialMediaButton
					type='google'
					onPress={() => {}}
				/>
			</View>
			<View>
				<AddBlockWithActionText
					type='link'
					mainText='Don’t have an account?'
					actionText='Sign up'
					link='/auth/signup'
					containerStyle={styles.addBlock}
				/>
			</View>
		</>
	)
}
