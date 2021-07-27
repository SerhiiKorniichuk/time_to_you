import { StyleSheet } from 'react-native'
import { layout } from '../../helpers/responseLayout'

export const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: layout.scaledHeight(15),
		paddingBottom: layout.scaledHeight(10),
	},
	textLabel: {
		color: '#8E8E8E',
		...layout.font([12, 12, 'normal', 'normal', 'Poppins']),
		paddingBottom: layout.scaledHeight(6),
	},
	container: {
		width: layout.scaledWidth(289),
		height: layout.scaledHeight(50),
		borderRadius: 6,
	},
	inputIOS: {
		fontSize: layout.fontSize(16),
		paddingLeft: layout.scaledWidth(13),
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingRight: layout.scaledWidth(30),
	},
	inputAndroid: {
		fontSize: layout.fontSize(16),
		paddingLeft: layout.scaledWidth(13),
		backgroundColor: '#fff',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		borderRadius: 6,
		color: 'black',
		paddingRight: layout.scaledWidth(30),
	},
	iconContainer: {
		top: layout.scaledHeight(22),
		right: layout.scaledWidth(16),
	},
})
