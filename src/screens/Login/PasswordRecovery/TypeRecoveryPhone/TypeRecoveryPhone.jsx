import React, { useState } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { MainButton } from '../../../../components/Buttons/MainButton/MainButton'
import { PhoneInput } from '../../../../components/PhoneInput/PhoneInput'
import { HeaderBlock } from '../../../Authorization/HeaderBlock/HeaderBlock'
import { styles as stylesAuthorization } from '../../../Authorization/stylesAuthorization'
import { styles as stylesPasswordRecovery } from '../stylesPasswordRecovery'
import { styles } from './stylesTypeRecoveryPhone'


export const TypeRecoveryPhone = ({goPreviewsScreen, changePasswordRecoveryStage}) => {

	const [phone, setPhone] = useState('')

	return (
		<>
			<HeaderBlock
				addTextStyle={styles.addTextInHeader}
				title='Forgot password?'
				addText='Enter your phone number used during registration to reset password'
				withButton
				onPress={goPreviewsScreen}
			/>
			<View style={[stylesAuthorization.formBlock, stylesPasswordRecovery.formBlock]}>
				<PhoneInput
					label='Phone number'
					value={phone}
					onChange={setPhone}
				/>
			</View>
			<View style={stylesPasswordRecovery.buttonGroup}>
				<MainButton
					type='primary'
					text='Continue'
					onPress={() => changePasswordRecoveryStage('typeCode')}
				/>
			</View>
		</>
	)
}


TypeRecoveryPhone.propsTypes = {
	goPreviewsScreen: PropTypes.func,
	changePasswordRecoveryStage: PropTypes.func
}
