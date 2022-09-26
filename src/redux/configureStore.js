import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import missionReducer from './Missions';
import rocketReducer from './Rockets/books';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});

export default store;
