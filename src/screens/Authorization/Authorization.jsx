import React from 'react'
import { ImageBackground, View } from 'react-native'
import { Route } from 'react-router-native'
import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import SignUpBg from '../../assets/images/SignUp/sign_up_bg.jpg'
import { styles } from './stylesAuthorization'


export const Authorization = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={SignUpBg}
				resizeMode='cover'
				style={styles.background}
			>
				<Route path='/auth/login' component={Login}/>
				<Route path='/auth/signup' component={SignUp}/>
			</ImageBackground>
		</View>
	)
}
