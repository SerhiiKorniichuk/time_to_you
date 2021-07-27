import { Dimensions, PixelRatio, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const dpi = PixelRatio.get()
const window = Dimensions.get('window')
const DESIGN_WIDTH = 375
const DESIGN_HEIGHT = 782

// const fontSize = size => RFValue(size / (dpi >= 3 ? 2 : dpi), DESIGN_WIDTH)
const fontSize = size => RFValue(size, 680)

const fontWeight = weight => {
	if (weight === '500' || weight === '600' || weight === '700') {
		return {
			...Platform.select({
				ios: {
					fontWeight: weight,
				},
				android: {
					fontWeight: 'bold',
				},
			}),
		}
	}
	return { fontWeight: weight }
}

export const layout = {
	...window,
	dpi,
	scaledWidth: size => Math.floor((size * window.width) / DESIGN_WIDTH),
	scaledHeight: size => Math.floor((size * window.height) / DESIGN_HEIGHT),
	fontSize,
	isSmallLayout: !(window.width >= DESIGN_WIDTH),
	font: ([
		size = fontSize(12),
		height = fontSize(18),
		weight = '300',
		style = 'normal',
		family = 'Questrial',
	] = []) => {
		return {
			fontFamily: family,
			...fontWeight(weight),
			fontSize: fontSize(size),
			fontStyle: style,
			lineHeight: fontSize(height),
		}
	},
}
