import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	background: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	block: {
		padding: 32,
		height: '83%',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: '#FBF9F9',
		overflow: 'hidden'
	},
	additionBlock: {
		marginTop: 'auto',
		marginBottom: 18,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	additionText: {
		fontSize: 14
	},
	additionLink: {
		marginLeft: 3,
		color: '#FE6F61',
		fontFamily: 'Poppins-SemiBold',
		textDecorationLine: 'underline'
	}
})
