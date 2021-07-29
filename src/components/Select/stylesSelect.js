import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		marginTop: '1@vs',
		flex: 1,
		height: '50@vs',
		borderRadius: '6@msr'
	},
	inputIOS: {
		paddingTop: '14@vs',
		paddingBottom: '9@vs',
		paddingHorizontal: '12@msr',
		color: '#323131',
		fontFamily: 'Poppins',
		fontSize: '14@msr',
		borderWidth: 1,
		borderColor: '#E9E9E9',
		borderRadius: '6@msr',
	},
	inputAndroid: {
		paddingTop: '14@vs',
		paddingBottom: '9@vs',
		paddingHorizontal: '12@msr',
		color: '#323131',
		fontFamily: 'Poppins',
		fontSize: '14@msr',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		borderRadius: '6@msr',
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
