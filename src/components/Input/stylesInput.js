import { StyleSheet } from 'react-native'
import { layout } from '../../helpers/responseLayout'

export const styles = StyleSheet.create({
	container: {
		marginVertical: layout.scaledHeight(12),
		width: layout.scaledWidth(289),
		height: layout.scaledHeight(74),
		paddingTop: layout.scaledHeight(5),
		marginBottom: layout.scaledHeight(20),
	},
	input: {
		paddingBottom: 12,
		width: '100%',
		height: layout.scaledHeight(50),
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		backgroundColor: '#fff',
		marginTop: layout.scaledHeight(6),
		paddingHorizontal: 13,
	},
	label: {
		color: '#8E8E8E',
		...layout.font([12, 18, 'normal', 'normal', 'Poppins']),
	},
})
