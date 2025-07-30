import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

const MapMarker = ({ text, place }) => {
  const matches = useMediaQuery('(min-width:600px)');
  
  return (
    <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
      {!matches ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} style={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px' }}>
          <Typography variant="subtitle2" gutterBottom style={{ fontSize: '0.8rem' }}>
            {place?.name}
          </Typography>
          <img
            style={{ cursor: 'pointer', width: '80px', height: '60px', objectFit: 'cover' }}
            src={place?.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            alt={place?.name}
          />
          <Rating name="read-only" size="small" value={Number(place?.rating)} readOnly />
        </Paper>
      )}
    </div>
  );
};

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  return (
    <div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length && places.map((place, i) => (
          <MapMarker
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            text={place.name}
            place={place}
          />
        ))}
        {weatherData?.coord && (
          <div lat={weatherData.coord.lat} lng={weatherData.coord.lon}>
            <img 
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} 
              height="70px" 
              alt="weather" 
            />
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;