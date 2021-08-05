import React from 'react'
import { SafeAreaView, View, FlatList, StatusBar } from 'react-native'
import { MainButton } from '../../components/Buttons/MainButton/MainButton'


const DATA = [
	{
		id: 1,
		link: '/profile',
		title: 'Profile'
	},
	{
		id: 2,
		link: '/onboarding',
		title: 'Onboarding'
	},
	{
		id: 3,
		link: '/home',
		title: 'Home Page'
	}
]


export const Screens = () => {

	const renderItem = ({item}) => (
		<View key={item.id} style={{ marginVertical: 8, marginHorizontal: 16 }}>
			<MainButton
				type='primary'
				text={item.title}
				link={item.link}
			/>
		</View>
	)

	return (
		<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	)
}
