import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		paddingTop: '48@msr',
		width: '181@msr',
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
		width: '100%'
	},
	button: {
		marginBottom: '16@msr'
	},
	additionBlock: {
		marginTop: 'auto'
	}
})
