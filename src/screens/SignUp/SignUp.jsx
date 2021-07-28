import React, { useState } from 'react'
import { View, ScrollView, ImageBackground } from 'react-native'
import { SignUpChooseType } from './SignUpChooseType/SignUpChooseType'
import { SignUpClientForm } from './SignUpClientForm/SignUpClientForm'
import { styles } from './stylesSignUp'


import SignUpBg from '../../assets/images/SignUp/sign_up_bg.jpg'


const SignUp = () => {

	const [stageType, setStageType] = useState('chooseType')

	const changeSignUpStage = (stageName) => {
		setStageType(stageName)
	}

	const getChooseTypeScreen = () => (
		<View style={styles.block}>
			<SignUpChooseType changeSignUpStage={changeSignUpStage}/>
		</View>
	)

	const getClientFormScreen = () => (
		<ScrollView>
			<View style={styles.block}>
				<SignUpClientForm changeSignUpStage={changeSignUpStage}/>
			</View>
		</ScrollView>
	)

	return (
		<View style={styles.container}>
			<ImageBackground
				source={SignUpBg}
				resizeMode='cover'
				style={styles.background}
			>
				{stageType === 'chooseType' && getChooseTypeScreen()}
				{stageType === 'clientForm' && getClientFormScreen()}
			</ImageBackground>
		</View>
	)
}

export default SignUp
