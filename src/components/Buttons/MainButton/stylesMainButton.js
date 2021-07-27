import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
	body: {
		paddingTop: 12,
		paddingBottom: 10,
		paddingHorizontal: 45,
		width: '100%',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 50,
		shadowColor: '#D8D8D8',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		elevation: 10
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
		fontSize: 16,
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
