import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './styles'


const SplashScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topContainer}>
				<Text>SplashScreen</Text>
			</View>
			<View style={styles.bottomContainer}>
				<Link to="/login">
					<Text>Login</Text>
				</Link>
				<Link to="/signup">
					<Text>SignUp</Text>
				</Link>
			</View>
		</SafeAreaView>
	)
}

export default SplashScreen
