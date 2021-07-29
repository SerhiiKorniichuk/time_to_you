import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowRight = props => (
	<Svg
		width={24}
		height={12}
		viewBox='0 0 24 12'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<Path
			d='M23.53 6.53a.75.75 0 000-1.06L18.757.697a.75.75 0 00-1.06 1.06L21.939 6l-4.242 4.243a.75.75 0 001.06 1.06L23.53 6.53zM0 6.75h23v-1.5H0v1.5z'
			fill='#fff'
		/>
	</Svg>
)
