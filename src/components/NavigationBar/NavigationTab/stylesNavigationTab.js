import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	tab: {
		flexBasis: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabIcon: {
		width: '20@msr',
		height: '20@msr'
	},
	tabText: {
		marginTop: '6@vs',
		fontFamily: 'Poppins',
		fontSize: '10@s'
	}
})
