import React, { Component } from 'react';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

export class App extends Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
