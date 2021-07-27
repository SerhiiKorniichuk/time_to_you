import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	textLabel: {
		paddingBottom: '6@vs',
		color: '#8E8E8E',
		fontFamily: 'Poppins',
		fontSize: '12@s',
		lineHeight: '18@s'
	},
	container: {
		marginTop: '4@vs',
		width: '100%',
		height: '50@vs',
		borderRadius: '6@s'
	},
	inputIOS: {
		paddingLeft: '13@s',
		paddingRight: '30@s',
		color: '#323131',
		fontFamily: 'Poppins',
		fontSize: '16@s',
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: '4@s'
	},
	inputAndroid: {
		paddingTop: '14@vs',
		paddingBottom: '9@vs',
		paddingHorizontal: '12@s',
		color: '#323131',
		fontFamily: 'Poppins',
		fontSize: '14@s',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		borderRadius: '6@s',
		backgroundColor: '#FFFFFF',
	},
	iconContainer: {
		top: '22@vs',
		right: '16@s'
	},
	arrow: {
		width: '14@s',
		height: '8@vs'
	}
})
