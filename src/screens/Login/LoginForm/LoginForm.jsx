import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { useFormik } from 'formik'
import { styles } from './stylesLoginForm'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../components/Input/Input'

const Login = () => {
	const formik = useFormik({
		initialValues: {
			phone: '',
			password: '',
		},
		onSubmit: data => console.log(data),
	})
	const { values, handleChange, handleBlur, handleSubmit } = formik

	return (
		<>
			<Input
				label={'Phone number'}
				value={values.phone}
				onChange={handleChange('phone')}
			/>
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
				<View style={styles.socialMedia}>
					<Text>Social media</Text>
				</View>
			</View>
		</>
	)
}

export default Login
