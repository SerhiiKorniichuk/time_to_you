import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { LoginForm } from './LoginForm/LoginForm'
import { PasswordRecovery } from './PasswordRecovery/PasswordRecovery'
import { styles as stylesAuthorization } from '../Authorization/stylesAuthorization'


export const Login = () => {

	const [stageType, setStageType] = useState('login')

	const changeLoginStage = (stageName) => setStageType(stageName)

	return (
		<ScrollView contentContainerStyle={{flexGrow: 1}}>
			<View style={stylesAuthorization.block}>
				{stageType === 'login' && <LoginForm changeLoginStage={changeLoginStage}/>}
				{stageType === 'recovery' && <PasswordRecovery changeLoginStage={changeLoginStage}/>}
			</View>
		</ScrollView>
	)
}
