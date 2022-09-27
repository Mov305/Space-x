// action types
// const JOIN_MISSIONS = 'JOIN_MISSIONS';
// const LEAVE_MISSIONS = 'LEAVE_MISSIONS';
const UPDATE_MISSIONS = 'UPDATE_MISSIONS';

// state
const initialState = [];

// action creators
export const showMissions = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  dispatch({
    type: UPDATE_MISSIONS,
    data,
  });
};

// reducer
export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MISSIONS:
      return action.data;
    default:
      return state;
  }
}
