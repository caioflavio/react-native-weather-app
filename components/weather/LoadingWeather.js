import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {styles} from './styles/loading-styles';
import Loader from 'react-loader-spinner';


const LoadingWeather = () => {
    return (
        <ImageBackground source={require('./assets/main-bg.jpg')} style={styles.backgroundImage}>
            <View style={[styles.loadingContainer]}>
                <View style={styles.bodyContainer}>
                    <Text>Fetching Weather Data...</Text>
                </View>
                <View>
                    <Loader type="TailSpin" color="#616161" height="50" width="50" />
                </View>
            </View>
        </ImageBackground>
    );
}

export default LoadingWeather;