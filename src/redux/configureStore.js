import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions';
import rocketReducer from './Rockets/books';
import { createLogger } from 'redux-logger';
const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});

export default store;
