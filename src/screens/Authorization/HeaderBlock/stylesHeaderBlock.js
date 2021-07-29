import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	headerBlock: {
		position: 'relative',
		paddingHorizontal: '3@msr',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerButton: {
		zIndex: 1,
		position: 'absolute',
		top: '2@vs',
		left: '8@vs',
		width: '22@msr',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	arrow: {
		width: '8@s',
		height: '14@vs'
	},
	headerTitle: {
		paddingHorizontal: '44@s',
		flex: 1,
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
