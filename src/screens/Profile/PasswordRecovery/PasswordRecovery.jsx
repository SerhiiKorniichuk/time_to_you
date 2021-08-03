import React, { useState } from 'react'
import { TypeRecoveryCode } from './TypeRecoveryCode/TypeRecoveryCode'
import { TypeRecoveryPhone } from './TypeRecoveryPhone/TypeRecoveryPhone'


export const PasswordRecovery = (props) => {

	const [stageType, setStageType] = useState('typeRecoveryPhone')

	const changeRecoveryStage = (stageName) => setStageType(stageName)

	return (
		<>
			{stageType === 'typeRecoveryPhone' &&
				<TypeRecoveryPhone
					changeProfileStage={props.changeProfileStage}
					changeRecoveryStage={changeRecoveryStage}
				/>
			}
			{stageType === 'typeRecoveryCode' &&
				<TypeRecoveryCode
					changeProfileStage={props.changeProfileStage}
					changeRecoveryStage={changeRecoveryStage}
				/>
			}
		</>
	)
}
