import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { AddNewPassword } from './PasswordChanging/AddNewPassword/AddNewPassword'
import { ChangeCurrentPassword } from './PasswordChanging/ChangeCurrentPassword/ChangeCurrentPassword'
import { PasswordRecovery } from './PasswordRecovery/PasswordRecovery'
import { ProfileSettings } from './ProfileSettings/ProfileSettings'


export const Profile = () => {

	const [stageType, setStageType] = useState('profile')

	const changeProfileStage = (stageName) => setStageType(stageName)

	return (
		<SafeAreaView style={{flex: 1}}>
			{stageType === 'profile' && <ProfileSettings changeProfileStage={changeProfileStage}/>}
			{stageType === 'changeCurrentPassword' && <ChangeCurrentPassword changeProfileStage={changeProfileStage}/>}
			{stageType === 'forgotPassword' && <PasswordRecovery changeProfileStage={changeProfileStage}/>}
			{stageType === 'addNewPassword' && <AddNewPassword changeProfileStage={changeProfileStage}/>}
		</SafeAreaView>
	)
}
