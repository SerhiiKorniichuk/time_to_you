import React from 'react'
import { ArrowLeftOutline } from '../../../assets/icons/ArrowLeftOutline'
import { HeaderWithNavigation } from '../../../components/HeaderWithNavigation/HeaderWithNavigation'
import { styles } from './stylesChangePassword'


export const ChangePassword = (props) => {
	return (
		<>
			<HeaderWithNavigation
				title='Change password'
				LeftButtonIcon={ArrowLeftOutline}
				leftButtonIconProps={{fillColor: '#323131'}}
				onPressLeftButton={() => {props.changeProfileStage('profile')}}
			/>
		</>
	)
}
