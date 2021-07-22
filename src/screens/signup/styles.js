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
		backgroundColor: '#FFFFFF',
		overflow: 'hidden'
	},
	title: {
		paddingTop: 58,
		width: 181,
		fontSize: 32,
		fontFamily: 'Prata',
		textAlign: 'center'
	},
	subtitle: {
		paddingTop: 14,
		fontSize: 16,
		fontFamily: 'Poppins',
		color: '#8E8E8E'
	}
})
