import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	userPreviewContainer: {
		marginTop: '7@vs',
		alignItems: 'center'
	},
	avatar: {
		marginBottom: '13@vs',
		width: '110@msr',
		height: '110@msr',
		borderRadius: 1000,
		backgroundColor: '#eaeaea'
	},
	buttonBlock: {
		alignItems: 'center'
	},
	editButton: {
		paddingTop: '9@vs',
		paddingBottom: '8@vs',
		width: '118@ms',
		height: '40@vs'
	},
	editButtonText: {
		fontSize: '14@vs'
	},
	formBlock: {
		marginTop: '15@vs',
		paddingHorizontal: '43@s'
	},
	footerButtonsGroup: {
		paddingHorizontal: '32@s'
	},
	passwordButtonContainer: {
		marginTop: '-2@vs'
	},
	logOutButtonContainer: {
		marginTop: '30@vs',
		marginBottom: '65@vs'
	},
	logOutButton: {
		borderWidth: 2
	}
})
