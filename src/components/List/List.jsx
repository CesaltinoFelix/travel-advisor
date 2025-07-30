import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div style={{ padding: '25px' }}>
      <Typography variant="h4" gutterBottom>
        {type === 'restaurants' ? 'Restaurants' : type === 'hotels' ? 'Hotels' : 'Attractions'} around you
      </Typography>
      {isLoading ? (
        <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl variant="outlined" style={{ margin: '8px', minWidth: 120, marginBottom: '30px' }}>
            <InputLabel id="type">Type</InputLabel>
            <Select labelId="type" id="type" value={type} onChange={(e) => setType(e.target.value)} label="Type">
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" style={{ margin: '8px', minWidth: 120, marginBottom: '30px' }}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select labelId="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} label="Rating">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} style={{ height: '75vh', overflow: 'auto' }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} size={12}>
                <PlaceDetails 
                  selected={Number(childClicked) === i} 
                  refProp={elRefs[i]} 
                  place={place} 
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;