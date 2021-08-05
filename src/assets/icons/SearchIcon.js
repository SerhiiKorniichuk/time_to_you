import PropTypes from 'prop-types'
import * as React from "react"
import Svg, { Path } from "react-native-svg"


export const SearchIcon = (props) => {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			fill='none'
			viewBox="0 0 18 18"
			xmlSpace="preserve"
			{...props}
		>
			<Path
				d="M14.8 13.6l2.3 2.3-2.3-2.3zm0 0C16 12 16.7 10 16.5 7.9c-.2-2-1.1-3.9-2.6-5.3a7.52 7.52 0 00-5.5-2c-2 .1-4 .9-5.4 2.3C1.5 4.4.7 6.3.6 8.4c-.1 2 .7 4 2 5.5s3.3 2.4 5.3 2.6c2 .2 4-.5 5.6-1.7l2.3 2.3-1-3.5zm1.4 3.7c-.1 0-.2-.1-.3-.2l.3.2zm0 0c.1 0 .2.1.3.1m0 0c.1 0 .2 0 .3-.1m-.3.1l-.3-.1.3.1.3-.1m0 0c.1 0 .2-.1.3-.2m-2.3-3.5l2.3 2.3v1.2l-.3.2.3-.2m0 0c.1-.1.1-.2.2-.3 0-.1.1-.2.1-.3 0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3v1.2zM2.4 8.6c0-1.2.4-2.4 1-3.5.7-1 1.7-1.8 2.8-2.3s2.4-.6 3.6-.4c1.2.3 2.3.9 3.2 1.8.9.9 1.5 2 1.7 3.2s.1 2.5-.4 3.6-1.3 2.1-2.3 2.8-2.2 1-3.5 1c-1.7 0-3.2-.7-4.4-1.8-1.1-1.2-1.7-2.8-1.7-4.4z"
				fill={props.fillColor}
			/>
			<Path
				d="M15.9 17.1l-1.1-3.4c.6.8 1 1.3 1 1.3l.6.6.3.3.3.5.3.4-.2.3-.3.2h-.5l-.4-.2z"
				fill={props.fillColor}
			/>
		</Svg>
	)
}


SearchIcon.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

SearchIcon.defaultProps = {
	width: 20,
	height: 20,
	fillColor: '#000000'
}
