import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { ArrowLeftOutline } from '../../../../assets/icons/ArrowLeftOutline'
import { AddBlockWithActionText } from '../../../../components/AddBlockWithActionText/AddBlockWithActionText'
import { MainButton } from '../../../../components/Buttons/MainButton/MainButton'
import { HeaderWithNavigation } from '../../../../components/HeaderWithNavigation/HeaderWithNavigation'
import { Input } from '../../../../components/Input/Input'
import { HeaderBlock } from '../../../Authorization/HeaderBlock/HeaderBlock'
import { styles as stylesPasswordRecovery } from '../stylesPasswordRecovery'
import { styles } from './stylesTypeRecoveryCode'


export const TypeRecoveryCode = (props) => {

	const [recoveryCode, setRecoveryCode] = useState('')

	return (
		<>
			<HeaderWithNavigation
				title='Forgot password'
				LeftButtonIcon={ArrowLeftOutline}
				leftButtonIconProps={{fillColor: '#323131'}}
				onPressLeftButton={() => {props.changeRecoveryStage('typeRecoveryPhone')}}
			/>
			<View style={stylesPasswordRecovery.formBlock}>
				<HeaderBlock
					containerStyle={styles.headerText}
					addText='We send a confirmation code to your mobile phone. Enter it here'
				/>
				<Input
					label='Type code here'
					value={recoveryCode}
					onChange={setRecoveryCode}
				/>
			</View>
			<View style={stylesPasswordRecovery.buttonBlock}>
				<MainButton
					type='primary'
					text='Reset'
					onPress={() => {props.changeProfileStage('addNewPassword')}}
				/>
			</View>
			<View style={styles.addBlock}>
				<AddBlockWithActionText
					type='button'
					mainText='Did not receive the code within 5 minutes?'
					actionText='Send Again'
					containerStyle={styles.addBlockContainer}
					onPress={() => {Alert.alert('send again')}}
				/>
			</View>
		</>
	)
}
