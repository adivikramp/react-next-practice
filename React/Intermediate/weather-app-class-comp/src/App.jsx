/* eslint-disable react/prop-types */
import React from "react";

class App extends React.Component {
  state = { location: "Bhopal", isLoading: false, weather: {} };

  constructor(props) {
    super(props);

    // Without arrow function (With arrow function, it is not required)
    // this.fetchWeather = this.fetchWeather.bind(this);
  }

  // async fetchWeather() {
  fetchWeather = async () => {
    try {
      this.setState({ isLoading: true });

      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone } = geoData.results.at(0);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.err(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="app">
        <h1>Weather App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Location"
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather}>Get Weather</button>

        {this.state.isLoading && <p className="loader">Loading........</p>}

        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.location}
          />
        )}
      </div>
    );
  }
}

export default App;

class Weather extends React.Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather in {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day key={date} date={date} max={max.at(i)} min={min.at(i)} />
          ))}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { max, min, date } = this.props;

    return (
      <li className="day">
        <p>{date}</p>
        <p>
          {min}&deg; &mdash; {max}&deg;
        </p>
      </li>
    );
  }
}
