import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { SignUpChooseType } from './SignUpChooseType/SignUpChooseType'
import { SignUpClientForm } from './SignUpClientForm/SignUpClientForm'
import { styles as stylesAuthorization } from '../Authorization/stylesAuthorization'


export const SignUp = () => {

	const [stageType, setStageType] = useState('chooseType')

	const changeSignUpStage = (stageName) => setStageType(stageName)

	return (
		<ScrollView contentContainerStyle={{flexGrow: 1}}>
			<View style={stylesAuthorization.block}>
				{stageType === 'chooseType' && <SignUpChooseType changeSignUpStage={changeSignUpStage}/>}
				{stageType === 'clientForm' && <SignUpClientForm changeSignUpStage={changeSignUpStage}/>}
			</View>
		</ScrollView>
	)
}
