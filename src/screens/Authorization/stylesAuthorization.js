import { ScaledSheet } from 'react-native-size-matters'


export const styles = ScaledSheet.create({
	container: {
		position: 'relative',
		flex: 1
	},
	background: {
		flex: 1
	},
	block: {
		flex: 1,
		marginTop: '153@vs',
		paddingVertical: '32@mvs',
		paddingHorizontal: '28@msr',
		borderTopLeftRadius: '20@msr',
		borderTopRightRadius: '20@msr',
		backgroundColor: '#FBF9F9',
	},
	formBlock: {
		paddingHorizontal: '15@s',
		marginTop: '35@vs'
	}
})
