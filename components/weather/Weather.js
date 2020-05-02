
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/weather-styles';
import { weatherConditions } from './utils/WeatherConditions';
import PropTypes from 'prop-types';

const Weather = ({ weather, temperature, location, description, feels_like }) => {

    Weather.propTypes = {
        temperature: PropTypes.number.isRequired,
        weather: PropTypes.string
    };

    return (
        <View
            style={[
                styles.weatherContainer,
                { backgroundColor: weatherConditions[weather].color }
            ]}
        >
            <View style={styles.headerContainer}>
            <MaterialCommunityIcons
                size={72}
                name={weatherConditions[weather].icon}
                color={'#fff'}
            />
                <Text style={styles.tempText}>{location} - {temperature}˚</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>{description} - {weatherConditions[weather].subtitle}</Text>
            </View>
        </View>
    );
};
export default Weather;