import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { useFormik } from 'formik'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../components/Input/Input'
import { SocialMediaButton } from '../../../components/Buttons/SocialMediaButton/SocialMediaButton'
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput'
import { HeaderBlock } from '../../Authorization/HeaderBlock/HeaderBlock'
import { AuthAddBlockWithLink } from '../../Authorization/AuthAddBlockWithLink/AuthAddBlockWithLink'
import { styles as stylesAuthorization } from './../../Authorization/stylesAuthorization'
import { styles } from './stylesLoginForm'


export const LoginForm = () => {

	const formik = useFormik({
		initialValues: {
			phone: '',
			password: ''
		},
		onSubmit: data => console.log(data)
	})

	const { values, handleChange, handleSubmit, setValues } = formik

	const handlePress = () => console.log('click')

	return (
		<View style={{ flex: 1 }}>
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
					<Link to='/' underlayColor='none'>
						<Text style={styles.linkText}>Forgot password?</Text>
					</Link>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<MainButton
					type='primary'
					text='Login'
					onPress={handleSubmit}
				/>
			</View>
			<Text style={styles.socialMediaText}>
				Or login using social media
			</Text>
			<View style={styles.socialMediaButtons}>
				<SocialMediaButton
					type='facebook'
					onPress={handlePress}
				/>
				<SocialMediaButton
					type='google'
					onPress={handlePress}
				/>
			</View>
			<View>
				<AuthAddBlockWithLink
					style={styles.linkBlock}
					mainText='Don’t have an account?'
					linkText='Sign up'
					link='/auth/signup'
				/>
			</View>
		</View>
	)
}
