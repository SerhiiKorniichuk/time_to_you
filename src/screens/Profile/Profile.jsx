import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ChangePassword } from './ChangePassword/ChangePassword'
import { PasswordRecovery } from './PasswordRecovery/PasswordRecovery'
import { ProfileSettings } from './ProfileSettings/ProfileSettings'


export const Profile = () => {

	const [stageType, setStageType] = useState('profile')

	const changeProfileStage = (stageName) => setStageType(stageName)

	return (
		<SafeAreaView style={{flex: 1}}>
			{stageType === 'profile' && <ProfileSettings changeProfileStage={changeProfileStage}/>}
			{stageType === 'changePassword' && <ChangePassword changeProfileStage={changeProfileStage}/>}
			{stageType === 'forgotPassword' && <PasswordRecovery changeProfileStage={changeProfileStage}/>}
		</SafeAreaView>
	)
}
