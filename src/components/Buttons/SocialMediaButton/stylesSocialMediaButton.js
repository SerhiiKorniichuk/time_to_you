import { ScaledSheet } from 'react-native-size-matters'

export const styles = ScaledSheet.create({
	socialMediaBtnContainer: {
		width: '138@s',
		height: '52@vs',
		marginHorizontal: '5@s',
	},
	socialMediaBtn: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 30,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		width: '138@s',
		height: '52@vs',
	},
	socialMediaBtnTxt: {
		marginLeft: 5,
		color: '#323131',
		fontSize: '14@vs',
		lineHeight: '19@vs',
		fontFamily: 'Poppins',
	},
})
