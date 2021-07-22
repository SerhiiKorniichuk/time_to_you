import React from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './styles'

// const bg = { uri: '../../assets/images/SplashScreen/bg.svg' }
const bg = require('../../assets/images/SplashScreen/bg.svg')

const SplashScreen = () => {
	console.log(bg)
	return (
		<SafeAreaView>
			<ImageBackground
				source={bg}
				resizeMode='cover'
				style={styles.container}
			>
				<View style={styles.topContainer}>
					<Text>SplashScreen</Text>
				</View>
				<View style={styles.bottomContainer}>
					<Link to='/login'>
						<Text>Login</Text>
					</Link>
					<Link to='/signup'>
						<Text>SignUp</Text>
					</Link>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default SplashScreen
