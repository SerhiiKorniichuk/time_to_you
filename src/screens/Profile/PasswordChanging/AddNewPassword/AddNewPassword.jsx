import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { ArrowLeftOutline } from '../../../../assets/icons/ArrowLeftOutline'
import { MainButton } from '../../../../components/Buttons/MainButton/MainButton'
import { HeaderWithNavigation } from '../../../../components/HeaderWithNavigation/HeaderWithNavigation'
import { Input } from '../../../../components/Input/Input'
import { styles as stylesPasswordChanging } from '../stylesPasswordChanging'


export const AddNewPassword = (props) => {

	const [newPassword, setNewPassword] = useState('')
	const [duplicatedNewPassword, setDuplicatedNewPassword] = useState('')

	return (
		<>
			<HeaderWithNavigation
				title='Change password'
				LeftButtonIcon={ArrowLeftOutline}
				leftButtonIconProps={{fillColor: '#323131'}}
				onPressLeftButton={() => {props.changeProfileStage('profile')}}
			/>
			<View style={stylesPasswordChanging.formBlock}>
				<Input
					label='New Password'
					type='password'
					value={newPassword}
					onChange={setNewPassword}
				/>
				<Input
					label='Retype New Password'
					type='password'
					value={duplicatedNewPassword}
					onChange={setDuplicatedNewPassword}
				/>
			</View>
			<View style={stylesPasswordChanging.buttonBlock}>
				<MainButton
					type='primary'
					text='Update Password'
					onPress={() => {Alert.alert('update password')}}
				/>
			</View>
		</>
	)
}
