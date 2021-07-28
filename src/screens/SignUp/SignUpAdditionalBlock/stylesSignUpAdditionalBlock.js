import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	additionBlock: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	additionText: {
		color: '#323131',
		fontFamily: 'Poppins',
		fontSize: '14@vs'
	},
	additionLink: {
		marginLeft: '3@s',
		color: '#FE6F61',
		fontFamily: 'Poppins-SemiBold',
		fontSize: '14@vs',
		textDecorationLine: 'underline'
	}
})
