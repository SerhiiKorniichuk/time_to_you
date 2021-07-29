import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import PropTypes from 'prop-types'
import { MainButton } from '../../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../../components/Input/Input'
import { AddBlockWithActionText } from '../../../Authorization/AddBlockWithActionText/AddBlockWithActionText'
import { HeaderBlock } from '../../../Authorization/HeaderBlock/HeaderBlock'
import { styles as stylesAuthorization } from '../../../Authorization/stylesAuthorization'
import { styles as stylesPasswordRecovery } from '../stylesPasswordRecovery'
import { styles } from './stylesTypeRecoveryCode'


export const TypeRecoveryCode = ({changePasswordRecoveryStage}) => {

	const [recoveryCode, setRecoveryCode] = useState('')

	return (
		<>
			<HeaderBlock
				addTextStyle={styles.addTextInHeader}
				title='Forgot password?'
				addText='We send a confirmation code to your mobile phone. Enter it here'
				withButton
				onPress={() => changePasswordRecoveryStage('typePhone')}
			/>
			<View style={[stylesAuthorization.formBlock, stylesPasswordRecovery.formBlock]}>
				<Input
					label='Type code here'
					value={recoveryCode}
					onChange={setRecoveryCode}
				/>
			</View>
			<View style={stylesPasswordRecovery.buttonGroup}>
				<MainButton
					type='primary'
					text='Reset'
					onPress={() => changePasswordRecoveryStage('newPassword')}
				/>
			</View>
			<View style={styles.addBlock}>
				<AddBlockWithActionText
					type='button'
					mainText='Did not receive the code within 5 minutes?'
					actionText='Send Again'
					onPress={() => {Alert.alert('Send Again')}}
					containerStyle={styles.addBlockContainer}
					textStyle={styles.addBlockText}
					actionTextStyle={styles.addBlockActionText}
				/>
			</View>
		</>
	)
}


TypeRecoveryCode.propsTypes = {
	changePasswordRecoveryStage: PropTypes.func
}
