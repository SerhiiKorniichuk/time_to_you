import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		flex: 1
	},
	background: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	block: {
		paddingVertical: '32@vs',
		paddingHorizontal: '28@vs',
		height: '83%',
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
