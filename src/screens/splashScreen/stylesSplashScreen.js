import { StyleSheet, Dimensions } from 'react-native'

const { width: w, height: h } = Dimensions.get('window')

export const styles = StyleSheet.create({
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
	leftImageBox: {
		width: 0.39 * w,
		height: 0.27 * h,
		left: 0,
		top: 0.07 * h,
		position: 'absolute',
	},
	leftImage: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
	},
	rightImageBox: {
		width: 0.54 * w,
		height: 0.38 * h,
		right: 0,
		top: 0.18 * h,
		position: 'absolute',
	},
	rightImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	logoBox: {
		width: 0.56 * w,
		height: 0.2 * h,
		position: 'absolute',
		left: 0.1 * w,
		top: 0.507 * h,
	},
	logo: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
	},
	logoTextBlock: {
		marginTop: 0.0127 * h,
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoTextLine: {
		flex: 1,
		height: 1,
		width: 52,
		backgroundColor: '#8E8E8E',
		marginRight: 8,
	},
	logoText: {
		fontFamily: 'Questrial',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 0.023 * h,
		lineHeight: 0.024 * h,
		color: '#8E8E8E',
	},
	bottomContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: 0.067 * h,
		width: 0.826 * w,
		backgroundColor: '#FF9677',
		borderRadius: 50,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	orangeBtnTxt: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 24,
		color: '#FFFFFF',
	},
	whiteButton: {
		backgroundColor: '#fff',
	},
	whiteBtnTxt: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 24,
		color: '#FE6F61',
	},
})
