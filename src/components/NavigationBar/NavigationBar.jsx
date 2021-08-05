import React from 'react'
import { View } from 'react-native'
import { FavoriteIcon } from '../../assets/icons/FavoriteIcon'
import { HomeIcon } from '../../assets/icons/HomeIcon'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { WaitingListIcon } from '../../assets/icons/WaitingListIcon'
import { NavigationTab } from './NavigationTab/NavigationTab'
import { styles } from './stylesNavigationBar'


export const NavigationBar = ({location}) => {
	return (
		<View style={styles.container}>
			<View style={styles.tabContainer}>
				<NavigationTab
					link='/home'
					Icon={HomeIcon}
					location={location}
					title='Home'
				/>
			</View>
			<View style={styles.tabContainer}>
				<NavigationTab
					link='/home/search'
					Icon={SearchIcon}
					location={location}
					title='Search'
				/>
			</View>
			<View style={styles.tabContainer}>
				<NavigationTab
					link='/home/favorite'
					Icon={FavoriteIcon}
					location={location}
					title='Favorite'
				/>
			</View>
			<View style={styles.tabContainer}>
				<NavigationTab
					link='/home/waitingList'
					Icon={WaitingListIcon}
					location={location}
					title='Waiting list'
				/>
			</View>
		</View>
	)
}
