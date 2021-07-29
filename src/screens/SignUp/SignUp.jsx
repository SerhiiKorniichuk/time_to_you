import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { SignUpChooseType } from './SignUpChooseType/SignUpChooseType'
import { SignUpClientForm } from './SignUpClientForm/SignUpClientForm'
import { styles as stylesAuthorization } from '../Authorization/stylesAuthorization'


export const SignUp = () => {

	const [stageType, setStageType] = useState('chooseType')

	const changeSignUpStage = (stageName) => setStageType(stageName)

	const getChooseTypeScreen = () => (
		<View style={stylesAuthorization.block}>
			<SignUpChooseType changeSignUpStage={changeSignUpStage}/>
		</View>
	)

	const getClientFormScreen = () => (
		<ScrollView>
			<View style={stylesAuthorization.block}>
				<SignUpClientForm changeSignUpStage={changeSignUpStage}/>
			</View>
		</ScrollView>
	)

	return (
		<>
			{stageType === 'chooseType' && getChooseTypeScreen()}
			{stageType === 'clientForm' && getClientFormScreen()}
		</>
	)
}
