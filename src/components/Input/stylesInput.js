import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		marginVertical: '11@msr'
	},
	input: {
		marginTop: '1@vs',
		paddingTop: '13@vs',
		paddingBottom: '10@vs',
		paddingHorizontal: '12@s',
		height: '50@vs',
		fontFamily: 'Poppins',
		fontSize: '14@msr',
		borderRadius: '6@msr',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		backgroundColor: '#FFFFFF',
	},
	label: {
		color: '#8E8E8E',
		fontFamily: 'Poppins',
		fontSize: '12@msr'
	}
})
