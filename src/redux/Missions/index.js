// action types
const UPDATE_MISSIONS = 'UPDATE_MISSIONS';
const RESERVE_MISSION = 'RESERVE_MISSION';

// state
const initialState = [];

// action creators
export const reserveMission = (id) => ({
  type: RESERVE_MISSION,
  payload: id,
});

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
    case RESERVE_MISSION:
      return state.map((el) => {
        if (el.mission_id === action.payload) {
          return { ...el, reserved: !el.reserved };
        }
        return el;
      });

    default:
      return state;
  }
}
