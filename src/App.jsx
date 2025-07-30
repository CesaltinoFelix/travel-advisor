import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const libraries = ['places'];

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      () => {
        // Fallback para São Paulo se a geolocalização falhar
        setCoords({ lat: -23.5505, lng: -46.6333 });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating, places]);

  useEffect(() => {
    if (bounds && bounds.sw && bounds.ne) {
      setIsLoading(true);

      // Buscar dados do clima
      if (coords.lat && coords.lng) {
        getWeatherData(coords.lat, coords.lng)
          .then((data) => setWeatherData(data));
      }

      // Buscar lugares
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0) || []);
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching places:', error);
          setIsLoading(false);
          // Adicionar dados de exemplo para demonstração
          setPlaces([
            {
              name: 'Exemplo Restaurant',
              rating: 4.5,
              num_reviews: 123,
              price_level: '$$ - $$$',
              ranking: '#1 of 50 restaurants in São Paulo',
              latitude: coords.lat + (Math.random() - 0.5) * 0.01,
              longitude: coords.lng + (Math.random() - 0.5) * 0.01,
              address: 'Rua Exemplo, 123, São Paulo',
              phone: '+55 11 1234-5678',
              web_url: 'https://tripadvisor.com',
              website: 'https://example.com'
            }
          ]);
        });
    }
  }, [bounds, type, coords.lat, coords.lng]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoords({ lat, lng });
    }
  };

  return (
    <>
      <CssBaseline />
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        libraries={libraries}
      >
        <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <List
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              weatherData={weatherData}
            />
          </Grid>
        </Grid>
      </LoadScript>
    </>
  );
};

export default App;