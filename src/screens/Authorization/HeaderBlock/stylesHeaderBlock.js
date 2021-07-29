import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	headerBlock: {
		position: 'relative',
		paddingHorizontal: '3@msr',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerButton: {
		position: 'absolute',
		top: '5@vs',
		left: 0,
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
		paddingHorizontal: '66@s',
		width: '100%',
		fontSize: '24@vs',
		fontFamily: 'Prata',
		textAlign: 'center'
	},
	addText: {
		marginTop: '20@vs',
		color: '#8E8E8E',
		fontFamily: 'Poppins',
		fontSize: '14@vs',
		textAlign: 'center'
	}
})
