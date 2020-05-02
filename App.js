
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Weather from './components/weather/Weather';
import { styles } from './components/styles/app-styles';
import { API_KEY } from './components/weather/utils/WeatherAPIKey';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error getting weather conditions'
        });
      }
    );
  }

  fetchWeather(lat = 0, lng = 0) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID='+API_KEY+'&units=metric')
    .then( res => res.json())
    .then( json => {
      this.setState({
        temperature: json.main.temp.toFixed(),
        weatherCondition: json.weather[0].main,
        weatherDescription: json.weather[0].description,
        locationName: json.name,
        feelsLike: json.main.feels_like, 
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather 
            weather={this.state.weatherCondition} 
            temperature={this.state.temperature}
            location={this.state.locationName}
            description={this.state.weatherDescription}
            feels_like={this.state.feelsLike}
          />}
      </View>
    );
  }
}