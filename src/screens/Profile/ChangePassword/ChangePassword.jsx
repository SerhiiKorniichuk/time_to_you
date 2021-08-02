import React, { useState } from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'
import { ArrowLeftOutline } from '../../../assets/icons/ArrowLeftOutline'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { HeaderWithNavigation } from '../../../components/HeaderWithNavigation/HeaderWithNavigation'
import { Input } from '../../../components/Input/Input'
import { styles } from './stylesChangePassword'


export const ChangePassword = (props) => {

	const [currentPassword, setCurrentPassword] = useState('')
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
			<View style={styles.formBlock}>
				<Input
					label='Current Password'
					type='password'
					value={currentPassword}
					onChange={setCurrentPassword}
				/>
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
			<View style={styles.buttonBlock}>
				<MainButton
					type='primary'
					text='Update Password'
					onPress={() => {Alert.alert('update password')}}
				/>
			</View>
			<View style={styles.actionBlock}>
				<TouchableWithoutFeedback onPress={() => props.changeProfileStage('forgotPassword')}>
					<Text style={styles.actionText}>Forgot Password?</Text>
				</TouchableWithoutFeedback>
			</View>
		</>
	)
}
