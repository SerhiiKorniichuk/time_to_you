import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	body: {
		paddingHorizontal: '15@s',
		width: '100%',
		height: '55@vs',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: '50@msr',
		shadowColor: '#D8D8D8',
		shadowOffset: {
			width: 0,
			height: '2@msr'
		},
		shadowOpacity: '0.25@msr',
		elevation: '10@msr'
	},
	bodyVanilla: {
		borderColor: 'transparent',
		backgroundColor: 'transparent'
	},
	bodyOutline: {
		borderColor: '#FE6F61',
		backgroundColor: 'transparent'
	},
	bodyPrimary: {
		borderStyle: 'solid',
		borderColor: '#FBF9F9'
	},
	innerContainer:{
		paddingTop: '4@vs',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontFamily: 'Poppins-Medium',
		fontSize: '16@vs',
		textAlign: 'center'
	},
	textVanilla: {
		color: '#FE6F61'
	},
	textOutline: {
		color: '#FE6F61'
	},
	textPrimary: {
		color: '#FFFFFF'
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftIcon: {
		marginRight: '5@s'
	},
	rightIcon: {
		marginLeft: '5@s'
	}
})
