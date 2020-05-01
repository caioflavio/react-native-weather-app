
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/weather-styles';

const Weather = ({ weather, temperature }) => {
    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
                <Text style={styles.tempText}>{temperature}˚</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weather}</Text>
                <Text style={styles.subtitle}>It hurts my eyes!</Text>
            </View>
        </View>
    );
};
export default Weather;