import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

const SplashScreen = () => {
    return (
        <View>
            <Text>SplashScreen</Text>
            <Link to="/login">
                <Text>Login</Text>
            </Link>
            <Link to="/signup">
                <Text>SignUp</Text>
            </Link>
        </View>
    )
}

export default SplashScreen;
