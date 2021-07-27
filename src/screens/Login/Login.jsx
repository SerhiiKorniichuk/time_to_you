import React, { useState } from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import { useFormik } from 'formik'
import { styles } from './stylesLogin'
import LoginForm from './LoginForm/LoginForm'

const signUpBg = require('../../assets/images/SingUp/sing_up_bg.jpg')

const Login = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={signUpBg}
				resizeMode='cover'
				style={styles.bgContainer}
			>
				<View style={styles.contentContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.header}>Log in</Text>
					</View>
					<View style={styles.formContainer}>
						<LoginForm />
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default Login
