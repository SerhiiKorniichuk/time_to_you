import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
	container: {
		flex: 1,
	},
	bgContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	emptyContainer: {
		flex: 1,
	},
	contentContainer: {
		flex: 4,
		backgroundColor: '#FBF9F9',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		alignItems: 'center',
	},
	headerContainer: {
		paddingTop: '35@vs',
		paddingBottom: '15@vs',
		alignItems: 'center',
	},
	formContainer: {
		flex: 1,
	},
	header: {
		fontSize: '24@vs',
		lineHeight: '33@vs',
		fontFamily: 'Prata',
		color: '#323131',
	},
})
