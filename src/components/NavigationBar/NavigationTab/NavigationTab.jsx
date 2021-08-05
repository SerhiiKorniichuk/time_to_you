import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './stylesNavigationTab'


export const NavigationTab = ({link, Icon, title, location}) => {

	const [tabColor, setTabColor] = useState('#CCCCCC')
	const [tabFont, setTabFont] = useState('Poppins')

	useEffect(() => {
		if (location.pathname === link) {
			setTabColor('#FE6F61')
			setTabFont('Poppins-SemiBold')
		} else {
			setTabColor('#CCCCCC')
			setTabFont('Poppins')
		}
	}, [location])


	return (
		<Link to={link} underlayColor='none'>
			<View style={styles.tab}>
				<Icon
					width={styles.tabIcon.width}
					height={styles.tabIcon.height}
					fillColor={tabColor}
				/>
				<Text style={[styles.tabText, {color: tabColor, fontFamily: tabFont}]}>{title}</Text>
			</View>
		</Link>
	)
}
