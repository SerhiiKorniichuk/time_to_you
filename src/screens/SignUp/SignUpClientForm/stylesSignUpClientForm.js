import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	headerBlock: {
		paddingHorizontal: '3@s',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerButton: {
		marginTop: '6@vs',
		width: '33@s',
		height: '33@vs',
		alignItems: 'center',
		justifyContent: 'center',
	},
	arrow: {
		width: '8@s',
		height: '14@vs'
	},
	headerTitle: {
		paddingRight: '66@s',
		width: '100%',
		fontSize: '24@s',
		fontFamily: 'Prata',
		textAlign: 'center'
	},
	input: {
		marginTop: '12@vs'
	},
	formBlock: {
		paddingHorizontal: '15@s',
		marginTop: '35@vs',
		width: '100%',
		alignItems: 'center'
	},
	buttonGroup: {
		marginVertical: '26@vs',
		width: '100%'
	}
})
