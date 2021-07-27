import { StyleSheet } from 'react-native'
import { layout } from '../../../helpers/responseLayout'

export const styles = StyleSheet.create({
	linkContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	linkText: {
		...layout.font([14, 19, 'normal', 'normal', 'Poppins']),
		color: '#FE6F61',
	},
	btnContainer: {
		flex: 1,
	},
	footerContainer: {
		flex: 4,
	},
	socialMedia: {
		flex: 1,
		backgroundColor: '#999',
	},
})
