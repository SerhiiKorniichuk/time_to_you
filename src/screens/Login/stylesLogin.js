import { StyleSheet } from 'react-native'
import { layout } from '../../helpers/responseLayout'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bgContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	contentContainer: {
		height: layout.scaledHeight(631),
		backgroundColor: '#FBF9F9',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		alignItems: 'center',
	},
	headerContainer: {
		paddingTop: layout.scaledHeight(38),
		paddingBottom: layout.scaledHeight(27),
		alignItems: 'center',
	},
	formContainer: {
		flex: 1,
	},
	header: {
		...layout.font([24, 33, 'normal', 'normal', 'Prata']),
		color: '#323131',
	},
})
