import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { SignUpChooseType } from './SignUpChooseType/SignUpChooseType'
import { SignUpClientForm } from './SignUpClientForm/SignUpClientForm'
import { styles } from './stylesSignUp'


import SignUpBg from '../../assets/images/SignUp/sign_up_bg.svg'


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
			<SignUpBg style={styles.background}/>
			{stageType === 'chooseType' && getChooseTypeScreen()}
			{stageType === 'clientForm' && getClientFormScreen()}
		</View>
	)
}

export default SignUp
