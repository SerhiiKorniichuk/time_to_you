import React from 'react'
import { View } from 'react-native'
import { NativeRouter } from 'react-router-native'
import GuestRoutes from '../routes/guestRoutes/GuestRoutes'
import PrivateRoutes from '../routes/privateRoutes/PrivateRoutes'
import { styles } from './styles'


const App = () => {
	return (
		<NativeRouter>
			<View style={ styles.container }>
				{
					true
						? <GuestRoutes/>
						: <PrivateRoutes/>
				}
			</View>
		</NativeRouter>
	)
}

export default App
