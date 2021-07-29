import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
	container: {
		flex: 1,
		paddingTop: '50@vsr',
	},
	imageContainer: {
		flex: 11,
		alignItems: 'flex-end',
	},
	image: {
		aspectRatio: 0.86,
		height: '100%',
	},
	bottomContainer: {
		flex: 9,
		paddingLeft: '43@sr',
	},
	steperContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: {
		width: 6,
		marginRight: 6,
		height: 6,
		borderRadius: 10,
	},
	line: {
		width: '34@sr',
		height: 6,
		borderRadius: 10,
	},
	steperBrown: {
		backgroundColor: '#DBC3AC',
	},
	steperGrey: {
		backgroundColor: '#E4E1DE',
	},
	header: {
		flex: 3,
		marginRight: '39@sr',
		fontSize: '28@vsr',
		fontFamily: 'Prata',
		color: '#323131',
	},
	paragraph: {
		flex: 3,
		marginRight: '23@sr',
		fontSize: '14@vsr',
		fontFamily: 'Poppins',
		color: '#8E8E8E',
	},
	btnContainer: {
		flex: 3,
		marginRight: '43@s',
	},
	nextBtnContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	linkThrough: {
		width: '142@s',
		height: '52@vs',
		justifyContent: 'center',
		alignItems: 'center',
	},
	linkText: {
		fontSize: '16@vsr',
		lineHeight: '24@vsr',
		fontFamily: 'Poppins',
		color: '#8E8E8E',
	},
})
