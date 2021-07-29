import React, { useState } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { MainButton } from '../../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../../components/Input/Input'
import { HeaderBlock } from '../../../Authorization/HeaderBlock/HeaderBlock'
import { styles as stylesAuthorization } from '../../../Authorization/stylesAuthorization'
import { styles as stylesPasswordRecovery } from '../stylesPasswordRecovery'
import { styles } from './stylesTypeNewPassword'


export const TypeNewPassword = ({changePasswordRecoveryStage}) => {

	const [newPassword, setNewPassword] = useState('')
	const [newPasswordToRepeat, setNewPasswordToRepeat] = useState('')

	return (
		<>
			<HeaderBlock
				addTextStyle={styles.addTextInHeader}
				title='Reset password'
				withButton
				onPress={() => changePasswordRecoveryStage('typePhone')}
			/>
			<View style={[stylesAuthorization.formBlock, stylesPasswordRecovery.formBlock]}>
				<Input
					label='New password'
					value={newPassword}
					onChange={setNewPassword}
				/>
				<Input
					label='Repeat new password'
					value={newPasswordToRepeat}
					onChange={setNewPasswordToRepeat}
				/>
			</View>
			<View style={stylesPasswordRecovery.buttonGroup}>
				<MainButton type='primary' text='Continue' onPress={() => {}}/>
			</View>
		</>
	)
}


TypeNewPassword.propsTypes = {
	changePasswordRecoveryStage: PropTypes.func
}
