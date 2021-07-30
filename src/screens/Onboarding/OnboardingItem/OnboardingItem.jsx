import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './stylesOnboardingItem'
import { Steper } from './Steper'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { OnboardingButton } from '../../../components/Buttons/OnboardingButton/OnboardingButton'


const OnboardingItem = ({ data }) => {

	const [index, setIndex] = useState(0)

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={data[index].image} style={styles.image}/>
			</View>
			<View style={styles.bottomContainer}>
				<Steper i={index}/>
				<Text style={styles.header}>{data[index].header}</Text>
				<Text style={styles.paragraph}>{data[index].text}</Text>
				<View style={styles.btnContainer}>
					{data[index].type === 'next' ? (
						<View style={styles.nextBtnContainer}>
							<OnboardingButton
								onPress={() => setIndex(prev => prev += 1)}
							/>
							<Link to="/screens" style={styles.linkThrough}>
								<Text style={styles.linkText}>Skip</Text>
							</Link>
						</View>
					) : (
						<MainButton
							type="primary"
							text="Get started"
							link="/screens"
							containerStyle={styles.btn}
						/>
					)}
				</View>
			</View>
		</View>
	)
}

export default OnboardingItem
