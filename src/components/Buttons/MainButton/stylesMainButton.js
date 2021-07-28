import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	body: {
		paddingTop: '15@vs',
		paddingBottom: '7@vs',
		paddingHorizontal: '45@s',
		width: '100%',
		height: '55@vs',
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
		borderColor: '#FBF9F9',
		backgroundColor: '#FBF9F9'
	},
	bodyOutline: {
		borderColor: '#FE6F61',
		backgroundColor: '#FBF9F9'
	},
	bodyPrimary: {
		borderStyle: 'solid',
		borderColor: '#FBF9F9'
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
	}
})
