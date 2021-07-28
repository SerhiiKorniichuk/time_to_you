import React from 'react'
import { SafeAreaView, View, Text, ImageBackground, Image } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './stylesSplashScreen'


const bg = require('../../assets/images/SplashScreen/bg.png')
const leftImage = require('../../assets/images/SplashScreen/leftImage.png')
const rightImage = require('../../assets/images/SplashScreen/rightImage.png')
const timeToU = require('../../assets/images/SplashScreen/timeToU.png')


const SplashScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={bg}
				resizeMode="cover"
				style={styles.bgContainer}
			>
				<View style={styles.topContainer}>
					<View style={styles.leftImageBox}>
						<Image source={leftImage} style={styles.leftImage}/>
					</View>
					<View style={styles.rightImageBox}>
						<Image source={rightImage} style={styles.rightImage}/>
					</View>
					<View style={styles.logoBox}>
						<Image source={timeToU} style={styles.logo}/>
						<View style={styles.logoTextBlock}>
							<View style={styles.logoTextLine}/>
							<Text style={styles.logoText}>
								Be yourself. Be beauty
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Link to="/login" style={styles.button}>
						<Text style={styles.orangeBtnTxt}>Login</Text>
					</Link>
					<Link
						to="/signup"
						style={[styles.button, styles.whiteButton]}
					>
						<Text style={styles.whiteBtnTxt}>SignUp</Text>
					</Link>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default SplashScreen
