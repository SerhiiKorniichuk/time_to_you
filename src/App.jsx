import React from 'react'
import { View } from 'react-native'
import { NativeRouter } from 'react-router-native'
import GuestRoutes from './routes/GuestRoutes/GuestRoutes'
// import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes'
import { styles } from './stylesApp'


const App = () => {
	return (
		<NativeRouter>
			<View style={styles.container}>
				<GuestRoutes/>
				{/*<PrivateRoutes/>*/}
			</View>
		</NativeRouter>
	)
}

export default App
