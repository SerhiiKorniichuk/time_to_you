import React from 'react'
import { Text, View } from 'react-native'
import { Route } from 'react-router-native'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { styles } from './stylesHomepage'


export const Homepage = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Route path='/home/search' component={() => <Text>Search</Text>}/>
				<Route path='/home/favorite' component={() => <Text>Favorite</Text>}/>
				<Route path='/home/waitingList' component={() => <Text>Waiting list</Text>}/>
			</View>
			<NavigationBar location={props.location}/>
		</View>
	)
}
