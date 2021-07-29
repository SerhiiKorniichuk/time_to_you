import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	socialMediaBtnContainer: {
		marginHorizontal: '5@s',
		width: '138@s',
		height: '52@vs'
	},
	socialMediaBtn: {
		width: '138@s',
		height: '52@vs',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		backgroundColor: '#FFFFFF'
	},
	socialMediaBtnTxt: {
		marginLeft: 5,
		color: '#323131',
		fontFamily: 'Poppins',
		fontSize: '14@vs',
		lineHeight: '19@vs'

	}
})
