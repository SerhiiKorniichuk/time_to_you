import React from 'react'
import { View } from 'react-native'
import { ArrowLeftOutline } from '../../../../assets/icons/ArrowLeftOutline'
import { MainButton } from '../../../../components/Buttons/MainButton/MainButton'
import { HeaderWithNavigation } from '../../../../components/HeaderWithNavigation/HeaderWithNavigation'
import { PhoneInput } from '../../../../components/PhoneInput/PhoneInput'
import { HeaderBlock } from '../../../Authorization/HeaderBlock/HeaderBlock'
import { styles as stylesPasswordRecovery } from '../stylesPasswordRecovery'
import { styles } from './stylesTypeRecoveryPhone'


export const TypeRecoveryPhone = (props) => {
	return (
		<>
			<HeaderWithNavigation
				title='Forgot password'
				LeftButtonIcon={ArrowLeftOutline}
				leftButtonIconProps={{fillColor: '#323131'}}
				onPressLeftButton={() => {props.changeProfileStage('changePassword')}}
			/>
			<View style={stylesPasswordRecovery.formBlock}>
				<HeaderBlock
					containerStyle={styles.headerText}
					addText='Enter your phone number used during registration to reset password'
				/>
				<PhoneInput
					label='Phone number'
					onChange={() => {}}
				/>
			</View>
			<View style={stylesPasswordRecovery.buttonBlock}>
				<MainButton
					type='primary'
					text='Continue'
					onPress={() => {props.changeRecoveryStage('typeRecoveryCode')}}
				/>
			</View>
		</>
	)
}
