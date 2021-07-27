import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	body: {
		paddingTop: '12@vs',
		paddingBottom: '10@vs',
		paddingHorizontal: '45@s',
		width: '100%',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: '50@s',
		shadowColor: '#D8D8D8',
		shadowOffset: {
			width: 0,
			height: '2@vs'
		},
		shadowOpacity: '0.25@vs',
		elevation: '10@vs'
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
		borderColor: '#FBF9F9',
		backgroundColor: '#FE6F61'
	},
	text: {
		fontFamily: 'Poppins-Medium',
		fontSize: '16@s',
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
