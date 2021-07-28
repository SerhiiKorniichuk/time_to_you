import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	headerBlock: {
		paddingHorizontal: '3@msr',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerButton: {
		marginTop: '6@msr',
		width: '33@msr',
		height: '33@msr',
		alignItems: 'center',
		justifyContent: 'center',
	},
	arrow: {
		width: '8@s',
		height: '14@vs'
	},
	headerTitle: {
		paddingRight: '66@msr',
		width: '100%',
		fontSize: '24@msr',
		fontFamily: 'Prata',
		textAlign: 'center'
	},
	formBlock: {
		paddingHorizontal: '15@s',
		marginTop: '35@vs',
		flex: 1
	},
	buttonGroup: {
		marginVertical: '26@vs',
		flex: 1
	}
})
