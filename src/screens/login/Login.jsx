import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

const Login = () => {
    return (
        <View>
            <Text>Login</Text>
            <Link to="/signup">
                <Text>SignUp</Text>
            </Link>
        </View>
    )
}

export default Login;
