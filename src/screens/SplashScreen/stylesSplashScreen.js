import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
	container: {
		flex: 1,
	},
	bgContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	topContainer: {
		flex: 3,
	},
	emptyContainer: {
		flex: 1,
	},
	leftImageBox: {
		flex: 3,
	},
	leftImage: {
		alignSelf: 'flex-start',
		resizeMode: 'contain',
		aspectRatio: 0.75,
		height: '180%',
	},
	rightImageBox: {
		flex: 6,
	},
	rightImage: {
		alignSelf: 'flex-end',
		resizeMode: 'contain',
		aspectRatio: 0.71,
		height: '120%',
	},
	logoBox: {
		flex: 4,
		alignItems: 'flex-start',
	},
	logo: {
		marginLeft: '38@s',
		resizeMode: 'contain',
		aspectRatio: 1.45,
		height: '80%',
	},
	logoTextBlock: {
		marginTop: '10@vs',
		marginLeft: '38@s',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	logoTextLine: {
		height: 1,
		width: '52@s',
		backgroundColor: '#8E8E8E',
		marginRight: 8,
	},
	logoText: {
		fontSize: '18@vs',
		lineHeight: '19@vs',
		fontFamily: 'Questrial',
		color: '#8E8E8E',
	},
	bottomContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: '55@vs',
		width: '310@s',
		backgroundColor: '#FF9677',
		borderRadius: 50,
		marginVertical: '8@vs',
		justifyContent: 'center',
		alignItems: 'center',
	},
	orangeBtnTxt: {
		fontSize: '16@vs',
		lineHeight: '24@vs',
		fontWeight: '500',
		fontFamily: 'Poppins',
		color: '#FFFFFF',
	},
	whiteButton: {
		backgroundColor: '#fff',
	},
	whiteBtnTxt: {
		fontSize: '16@vs',
		lineHeight: '24@vs',
		fontWeight: '500',
		fontFamily: 'Poppins',
		color: '#FE6F61',
	},
})
