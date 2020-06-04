import axios from 'axios';

const ENDPOINT = 'https://covid19.mathdro.id/api';

export const fetchData = async country => {
  let customEndpoint = ENDPOINT;

  if (country) {
    customEndpoint += `/countries/${country}`;
  }

  try {
    const {data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(customEndpoint);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch(err) {
    console.log(err);
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${ENDPOINT}/daily`);
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return modifiedData;
  } catch(err) {
    console.log(err);
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${ENDPOINT}/countries`);
    return countries.map(country => country.name);
  } catch(err) {
    console.log(err);
  }
}