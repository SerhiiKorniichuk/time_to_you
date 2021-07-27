import React from 'react'
import Svg, { Path } from 'react-native-svg'


export const SvgComponent = (props) => {
	return (
		<Svg
			width={13}
			height={7}
			viewBox='0 0 13 7'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path d='M6.5 7L12.13.25H.87L6.5 7z' fill='#323131'/>
		</Svg>
	)
}
