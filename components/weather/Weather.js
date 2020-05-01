
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/weather-styles';

const Weather = ({ weather, temperature, location, description, feels_like }) => {
    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
                <Text style={styles.tempText}>{location} - {temperature}˚</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weather}</Text>
                <Text style={styles.subtitle}>{description}</Text>
            </View>
        </View>
    );
};
export default Weather;