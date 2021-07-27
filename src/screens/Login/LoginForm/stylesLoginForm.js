import { StyleSheet } from 'react-native'
import { layout } from '../../../helpers/responseLayout'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	phoneInput: {
		width: layout.scaledWidth(289),
	},
	linkContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	linkText: {
		...layout.font([14, 19, 'normal', 'normal', 'Poppins']),
		color: '#FE6F61',
	},
	btnContainer: {
		flex: 1,
	},
	footerContainer: {
		flex: 3,
	},
	socialMediaBlock: {
		flex: 2,
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
		...layout.font([14, 19, 'normal', 'normal', 'Poppins']),
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
		marginLeft: 5,
		height: layout.scaledHeight(25),
	},
	linkTextToSignUp: {
		color: '#FE6F61',
		textDecorationLine: 'underline',
	},
})
