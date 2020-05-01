
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Weather from './components/weather/Weather';
import { styles } from './components/styles/app-styles';
// import { API_KEY } from './utils/WeatherAPIKey';

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather />}
      </View>
    );
  }
}