import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { LoginForm } from './LoginForm/LoginForm'
import { styles as stylesAuthorization } from '../Authorization/stylesAuthorization'


export const Login = () => {

	const [stageType, setStageType] = useState('login')

	const changeLoginStage = (stageName) => setStageType(stageName)

	return (
		<>
			<ScrollView>
				<View style={stylesAuthorization.block}>
					{stageType === 'login' && <LoginForm changeLoginStage={changeLoginStage}/>}
				</View>
			</ScrollView>
		</>
	)
}
