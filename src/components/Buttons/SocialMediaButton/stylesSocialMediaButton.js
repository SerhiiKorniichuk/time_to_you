import { StyleSheet } from 'react-native'
import { layout } from '../../../helpers/responseLayout'

export const styles = StyleSheet.create({
	socialMediaBtnContainer: {
		width: layout.scaledWidth(138),
		height: layout.scaledHeight(52),
		marginHorizontal: layout.scaledWidth(5),
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
		width: layout.scaledWidth(138),
		height: layout.scaledHeight(52),
	},
	socialMediaBtnTxt: {
		marginLeft: 5,
		color: '#323131',
		...layout.font([14, 19, 'normal', 'normal', 'Poppins']),
	},
})
