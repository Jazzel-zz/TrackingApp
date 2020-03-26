import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Spacer from './Spaces'
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={{ color: 'blue' }}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
}

export default withNavigation(NavLink);