import { createAsyncThunk } from '@reduxjs/toolkit';

// action types
export const GET_ROCKETS = 'GET_ROCKETS';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';

// state
const initialState = [];

// action creators
export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

// reducer
export default function rocketReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_ROCKETS + '/pending':
      return 'loading';
    case GET_ROCKETS + '/fulfilled':
      return action.payload;
    case GET_ROCKETS + '/rejected':
      return 'error';
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
    default:
      return state;
  }
}
