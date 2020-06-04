import React, { Component } from 'react';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

export class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async country => {
    const data = await fetchData(country);
    console.log(data);

  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    )
  }
}

export default App;
