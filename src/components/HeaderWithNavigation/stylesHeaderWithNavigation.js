import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		paddingTop: '13@vs',
		paddingBottom: '11@vs',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#EBEBEB'
	},
	noBorder: {
		borderColor: 'transparent'
	},
	innerContainer: {
		position: 'relative',
		paddingHorizontal: '70@s',
	},
	button: {
		zIndex: 1,
		position: 'absolute',
		top: 0,
		width: '33@s',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftButtonContainer: {
		left: '12@s'
	},
	title: {
		flexShrink: 1,
		color: '#323131',
		fontFamily: 'Prata',
		fontSize: '20@msr',
		textAlign: 'center'
	},
	rightButtonContainer: {
		right: '12@s'
	}
})
