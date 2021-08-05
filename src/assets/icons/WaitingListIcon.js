import PropTypes from 'prop-types'
import React from 'react'
import Svg, { G, Path } from 'react-native-svg'


export const WaitingListIcon = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<G
				clipPath="url(#prefix__clip0)"
				fill={props.fillColor}
			>
				<Path
					d="M1.453 4.094h0l1.12.084.016.02h0l2.12-1.77A.806.806 0 003.678 1.19L1.556 2.959a.806.806 0 00-.103 1.135zM15.29 2.428h0a.806.806 0 01-.103-1.135s0 0 0 0l.103 1.135zm0 0l2.122 1.77a.803.803 0 001.135-.103.806.806 0 00-.103-1.136l-2.121-1.77-.016.02-1.017 1.22zM16.536 4.745a9.174 9.174 0 00-5.769-2.676v-.788a.806.806 0 10-1.612 0v.795a9.174 9.174 0 00-5.691 2.669A9.183 9.183 0 00.756 11.28a9.183 9.183 0 003.192 6.988l-.617 1.037a.806.806 0 101.385.825l.542-.91A9.187 9.187 0 0010 20.524c1.69 0 3.312-.45 4.74-1.306l.544.912a.806.806 0 101.385-.825l-.976-1.64a.806.806 0 00-1.171-.237A7.57 7.57 0 0110 18.912c-4.208 0-7.631-3.423-7.631-7.63C2.369 7.072 5.792 3.65 10 3.65s7.631 3.423 7.631 7.631a7.637 7.637 0 01-.94 3.674.806.806 0 001.412.777 9.254 9.254 0 001.14-4.45c0-2.47-.96-4.791-2.707-6.537z"/>
				<Path
					d="M9.96 5.514a.806.806 0 00-.805.806v4.961c0 .214.085.42.236.57l2.21 2.21a.804.804 0 001.14 0 .806.806 0 000-1.14l-1.974-1.974V6.32a.806.806 0 00-.806-.806z"/>
			</G>
			<Path d="M0 0h20v20H0z"/>
		</Svg>
	)
}


WaitingListIcon.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

WaitingListIcon.defaultProps = {
	width: 20,
	height: 20,
	fillColor: '#000000'
}
