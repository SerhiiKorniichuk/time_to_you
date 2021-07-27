import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		position: 'relative',
		flex: 1
	},
	background: {
		position: 'absolute',
		top: '-30@vs',
		left: 0,
		right: 0,
		bottom: 0,
	},
	block: {
		flex: 1,
		marginTop: '45%',
		paddingVertical: '32@vs',
		paddingHorizontal: '28@vs',
		borderRadius: '20@s',
		backgroundColor: '#FBF9F9',
	}
})
