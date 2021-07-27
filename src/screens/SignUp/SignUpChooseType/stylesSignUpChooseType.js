import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		height: '100%',
		alignItems: 'center'
	},
	title: {
		paddingTop: '48@vs',
		width: '181@s',
		fontSize: '32@msr',
		fontFamily: 'Prata',
		textAlign: 'center'
	},
	subtitle: {
		paddingTop: '14@vs',
		color: '#8E8E8E',
		fontFamily: 'Poppins',
		fontSize: '16@msr',
	},
	buttonGroup: {
		paddingTop: '32@vs',
		width: '100%',
	},
	button: {
		marginBottom: '16@s'
	},
	additionBlock: {
		position: 'absolute',
		bottom: 0
	}
})
