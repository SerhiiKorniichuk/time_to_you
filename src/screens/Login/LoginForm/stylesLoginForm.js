import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	inputsContainer: {
		width: '289@s',
	},
	linkContainer: {
		width: '100%',
		marginBottom: '25@vs',
	},
	linkText: {
		fontSize: '14@vs',
		lineHeight: '19@vs',
		fontFamily: 'Poppins',
		color: '#FE6F61',
		textAlign: 'right',
	},
	btnContainer: {
		width: '100%',
	},
	footerContainer: {
		flex: 3,
	},
	socialMediaBlock: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	linkToSignUp: {
		flex: 1,
	},
	socialMediaTxtBlock: {
		flex: 1,
		justifyContent: 'center',
	},
	socialMediaTxt: {
		fontSize: '14@vs',
		lineHeight: '19@vs',
		fontFamily: 'Poppins',
		color: '#8E8E8E',
	},
	socialMediaBtnsBlock: {
		flex: 1,
		flexDirection: 'row',
	},
	linkBlock: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	linkToSignUp: {
		marginLeft: '5@s',
	},
	linkTextToSignUp: {
		color: '#FE6F61',
		textDecorationLine: 'underline',
	},
})
