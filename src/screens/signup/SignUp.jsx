import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from './styles'


const SignUp = () => {
	return (
		<View style={ styles.container }>
			<ImageBackground
				style={ styles.background }
				source={require('./../../assets/images/SingUp/sing_up_bg.jpg')}
				resizeMode='cover'
			>
				<Text>SingUp!</Text>
			</ImageBackground>
		</View>
	)
}

export default SignUp
