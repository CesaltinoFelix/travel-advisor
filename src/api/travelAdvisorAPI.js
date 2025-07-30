import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
  try {
    console.log('API Key:', process.env.REACT_APP_RAPIDAPI_KEY ? 'Loaded' : 'Missing');
    console.log('Fetching places data for type:', type);
    
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    
    console.log('Places data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching places:', error.response?.data || error.message);
    return [];
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    console.log('Weather API Key:', process.env.REACT_APP_RAPIDAPI_KEY ? 'Loaded' : 'Missing');
    
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.error('Error fetching weather:', error.response?.data || error.message);
    console.error('Weather API Status:', error.response?.status);
    return null;
  }
};
