import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { TypeRecoveryPhone } from './TypeRecoveryPhone/TypeRecoveryPhone'
import { TypeRecoveryCode } from './TypeRecoveryCode/TypeRecoveryCode'
import { TypeNewPassword } from './TypeNewPassword/TypeNewPassword'


export const PasswordRecovery = ({changeLoginStage}) => {

	const [stageType, setStageType] = useState('typePhone')

	const goPreviewsScreen = () => changeLoginStage('login')

	const changePasswordRecoveryStage = (stageName) => setStageType(stageName)

	return (
		<>
			{stageType === 'typePhone' &&
				<TypeRecoveryPhone
					goPreviewsScreen={goPreviewsScreen}
					changePasswordRecoveryStage={changePasswordRecoveryStage}
				/>
			}
			{stageType === 'typeCode' &&
				<TypeRecoveryCode changePasswordRecoveryStage={changePasswordRecoveryStage}/>
			}
			{stageType === 'newPassword' &&
				<TypeNewPassword changePasswordRecoveryStage={changePasswordRecoveryStage}/>
			}
		</>
	)
}


PasswordRecovery.propsTypes = {
	changeLoginStage: PropTypes.func
}
