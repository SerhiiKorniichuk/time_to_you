import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		marginVertical: '12@vs',
		width: '100%',
	},
	input: {
		marginTop: '4@vs',
		paddingTop: '12@vs',
		paddingBottom: '11@vs',
		paddingHorizontal: '13@s',
		width: '100%',
		fontFamily: 'Poppins',
		fontSize: '14@s',
		lineHeight: '19@vs',
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		backgroundColor: '#fff',
	},
	label: {
		color: '#8E8E8E',
		fontSize: '12@s',
		lineHeight: '18@vs',
		fontFamily: 'Poppins'
	}
})
