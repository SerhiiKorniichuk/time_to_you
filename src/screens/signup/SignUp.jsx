import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from './styles'


const SignUp = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require('../../assets/images/SingUp/sing_up_bg.jpg')}
				resizeMode={'cover'}
			>
				<View style={styles.block}>
					<Text style={styles.title}>Welcome to&nbsp;TimetoU!</Text>
					<Text style={styles.subtitle}>How you will use our application?</Text>
				</View>
			</ImageBackground>
		</View>
	)
}

export default SignUp
