import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
	bgContainer: {
		flexDirection: 'row',
		width: '142@s',
		height: '52@vs',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
	btnText: {
		fontSize: '16@vsr',
		lineHeight: '24@vsr',
		fontFamily: 'Poppins',
		color: '#fff',
		marginRight: '8@s',
	},
})
