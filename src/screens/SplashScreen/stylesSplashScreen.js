import { StyleSheet } from 'react-native'
import { layout } from '../../helpers/responseLayout'

const btnFont = layout.font([16, 24, '500', 'normal', 'Poppins'])

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bgContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	topContainer: {
		flex: 3,
	},
	leftImageBox: {
		width: layout.scaledWidth(147),
		height: layout.scaledHeight(194),
		left: 0,
		top: layout.scaledHeight(54),
		position: 'absolute',
	},
	leftImage: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
	},
	rightImageBox: {
		width: layout.scaledWidth(202),
		height: layout.scaledHeight(285),
		right: 0,
		top: layout.scaledHeight(149),
		position: 'absolute',
	},
	rightImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	logoBox: {
		width: layout.scaledWidth(210),
		height: layout.scaledHeight(145),
		position: 'absolute',
		left: layout.scaledWidth(38),
		top: layout.scaledHeight(397),
	},
	logo: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
	},
	logoTextBlock: {
		marginTop: layout.scaledHeight(10),
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoTextLine: {
		flex: 1,
		height: 1,
		width: layout.scaledWidth(52),
		backgroundColor: '#8E8E8E',
		marginRight: 8,
	},
	logoText: {
		...layout.font([18, 19, 'normal', 'normal', 'Questrial']),
		color: '#8E8E8E',
	},
	bottomContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: layout.scaledHeight(55),
		width: layout.scaledWidth(310),
		backgroundColor: '#FF9677',
		borderRadius: 50,
		marginVertical: layout.scaledHeight(8),
		justifyContent: 'center',
		alignItems: 'center',
	},
	orangeBtnTxt: {
		...btnFont,
		color: '#FFFFFF',
	},
	whiteButton: {
		backgroundColor: '#fff',
	},
	whiteBtnTxt: {
		...btnFont,
		color: '#FE6F61',
	},
})
