import axios from 'axios'; //axios is npm package which handles the api request....

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async function () {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url); // destructing the data from the response

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};
