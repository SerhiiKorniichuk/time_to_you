import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	headerBlock: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerButton: {
		width: '33@s',
		height: '33@vs',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ccc'
	},
	headerButtonInner: {

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
	}
})
