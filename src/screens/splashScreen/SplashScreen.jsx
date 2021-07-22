import React from 'react'
import { SafeAreaView, View, Text, ImageBackground, Image } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './styles'

const bg = require('../../assets/images/SplashScreen/bg.png')
const leftImage = require('../../assets/images/SplashScreen/leftImage.png')
const rightImage = require('../../assets/images/SplashScreen/rightImage.png')
const timeToU = require('../../assets/images/SplashScreen/timeToU.png')

const SplashScreen = () => {
	return (
		<SafeAreaView>
			<ImageBackground
				source={bg}
				resizeMode='cover'
				style={styles.container}
			>
				<View style={styles.topContainer}>
					<Image source={leftImage} style={styles.leftImage} />
					<Image source={rightImage} style={styles.rightImage} />
					<Image source={timeToU} />
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
