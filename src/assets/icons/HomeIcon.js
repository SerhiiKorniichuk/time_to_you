import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from "react-native-svg"


export const HomeIcon = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox="0 0 20 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M19.267 7.277l-6.32-5.953A4.308 4.308 0 0010 .177a4.308 4.308 0 00-2.947 1.147L.733 7.277a2.334 2.334 0 00-.544.763A2.22 2.22 0 000 8.941v7.705c0 .624.263 1.223.732 1.665A2.58 2.58 0 002.5 19h15c.663 0 1.299-.248 1.768-.69.469-.441.732-1.04.732-1.664V8.94c0-.309-.063-.615-.19-.9a2.333 2.333 0 00-.543-.764zM12.5 17.43h-5v-3.087c0-.624.263-1.223.732-1.665a2.58 2.58 0 011.768-.69 2.58 2.58 0 011.768.69c.469.442.732 1.04.732 1.665v3.087zm5.833-.784a.762.762 0 01-.244.555.86.86 0 01-.589.23h-3.333v-3.088c0-1.04-.44-2.039-1.22-2.774A4.301 4.301 0 0010 10.418a4.301 4.301 0 00-2.946 1.15 3.812 3.812 0 00-1.22 2.774v3.087H2.5a.86.86 0 01-.59-.23.762.762 0 01-.243-.554V8.94c0-.208.088-.407.244-.554l6.32-5.951A2.588 2.588 0 0110 1.748c.663 0 1.299.247 1.768.688l6.321 5.953a.769.769 0 01.244.552v7.705z"
				fill={props.fillColor}
			/>
		</Svg>
	)
}


HomeIcon.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

HomeIcon.defaultProps = {
	width: 20,
	height: 20,
	fillColor: '#000000'
}

