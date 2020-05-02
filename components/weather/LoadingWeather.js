import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles/loading-styles';

const LoadingWeather = () => {
    return (
        <View style={[styles.loadingContainer]}>
            <View style={styles.bodyContainer}>
                <Text>Fetching The Weather...</Text>
            </View>
        </View>
    );
}

export default LoadingWeather;