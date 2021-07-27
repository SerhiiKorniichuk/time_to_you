import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { useFormik } from 'formik'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../components/Input/Input'
import { Input as CustomInput } from '../../../components/CustomInput/Input'
import { SocialMediaButton } from '../../../components/Buttons/SocialMediaButton/SocialMediaButton'
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput'
import { styles } from './stylesLoginForm'

const Login = () => {
	const formik = useFormik({
		initialValues: {
			phone: '',
			password: '',
		},
		onSubmit: data => console.log(data),
	})
	const { values, handleChange, handleBlur, handleSubmit } = formik

	const handlePress = () => console.log('click')

	return (
		<View style={styles.container}>
			<View style={styles.phoneInput}>
				<PhoneInput
					label={'Phone number'}
					value={values.phone}
					onChange={handleChange('phone')}
				/>
			</View>
			<Input
				label={'Password'}
				type={'password'}
				value={values.password}
				onChange={handleChange('password')}
			/>
			<View style={styles.linkContainer}>
				<Link to='/'>
					<Text style={styles.linkText}>Forgot password?</Text>
				</Link>
			</View>
			<View style={styles.btnContainer}>
				<MainButton
					type={'primary'}
					text={'Login'}
					onPress={handleSubmit}
				/>
			</View>
			<View style={styles.footerContainer}>
				<View style={styles.socialMediaBlock}>
					<View style={styles.socialMediaTxtBlock}>
						<Text style={styles.socialMediaTxt}>
							Or login using social media
						</Text>
					</View>
					<View style={styles.socialMediaBtnsBlock}>
						<SocialMediaButton
							type={'facebook'}
							onPress={handlePress}
						/>
						<SocialMediaButton
							type={'google'}
							onPress={handlePress}
						/>
					</View>
				</View>
				<View style={styles.linkBlock}>
					<Text>Don’t have an account?</Text>
					<Link to='/signup' style={styles.linkToSignUp}>
						<Text style={styles.linkTextToSignUp}>Sign up</Text>
					</Link>
				</View>
			</View>
		</View>
	)
}

export default Login
