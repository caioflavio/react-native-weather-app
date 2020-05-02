
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Weather from './components/weather/Weather';
import LoadingWeather from './components/weather/LoadingWeather';
import { styles } from './components/styles/app-styles';
import { API_KEY } from './components/weather/utils/WeatherAPIKey';
import { trackPromise } from 'react-promise-tracker';

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
  trackPromise (
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID='+API_KEY+'&units=metric')
    .then( res => res.json())
    .then( json => {
      setTimeout(function() {
        this.setState({
          temperature: json.main.temp.toFixed(),
          weatherCondition: json.weather[0].main,
          weatherDescription: json.weather[0].description,
          locationName: json.name,
          feelsLike: json.main.feels_like, 
          isLoading: false
        });
      }.bind(this), 1000);
    }));
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading 
            ? <LoadingWeather/>
            : <Weather 
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