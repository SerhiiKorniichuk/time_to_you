import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	body: {
		marginTop: '4@vs',
		height: '50@vs',
		flexDirection: 'row',
		alignItems: 'center',
	},
	countryPicker: {
		position: 'relative',
		paddingVertical: '6@vs',
		paddingLeft: '12@s',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		borderTopLeftRadius: '6@s',
		borderBottomLeftRadius: '6@s',
		borderWidth: 1,
		borderRightWidth: 0,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		backgroundColor: '#FFFFFF'
	},
	countryPickerInner: {
		marginLeft: '-2@s'
	},
	callingCode: {
		marginLeft: '-7@s',
		marginRight: '7@s',
		color: '#323131',
		fontFamily: 'WorkSans',
		fontSize: '14@s',
	},
	iconContainer: {
		marginTop: '3@vs',
		marginRight: '8@s',
		justifyContent: 'center',
		alignItems: 'center'
	},
	arrow: {
		width: '13@s',
		height: '9@vs',
	},
	divider: {
		position: 'absolute',
		right: 0,
		width: 1,
		height: '100%',
		backgroundColor: '#E3E3E3'
	},
	input: {
		flex: 1,
		paddingTop: '12@vs',
		paddingBottom: '11@vs',
		paddingLeft: '8@s',
		height: '100%',
		color: '#323131',
		fontFamily: 'WorkSans',
		fontSize: '14@s',
		borderTopRightRadius: '6@s',
		borderBottomRightRadius: '6@s',
		borderWidth: 1,
		borderLeftWidth: 0,
		borderStyle: 'solid',
		borderColor: '#E9E9E9',
		backgroundColor: '#FFFFFF',
	}
})
