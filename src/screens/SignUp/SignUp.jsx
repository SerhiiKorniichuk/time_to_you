import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Link } from 'react-router-native'
import { SignUpChooseType } from './SignUpChooseType/SignUpChooseType'
import { styles } from './stylesSignUp'


const SignUp = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require('../../assets/images/SingUp/sing_up_bg.jpg')}
				resizeMode='cover'
			>
				<View style={styles.block}>
					<SignUpChooseType/>
					<View style={styles.additionBlock}>
						<Text style={styles.additionText}>Already have an account?</Text>
						<Link to='/login'>
							<Text style={[styles.additionText, styles.additionLink]}>Sign in</Text>
						</Link>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}

export default SignUp
