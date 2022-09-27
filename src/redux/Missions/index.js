// action types
const JOIN_MISSIONS = 'JOIN_MISSIONS';
const LEAVE_MISSIONS = 'LEAVE_MISSIONS';
const UPDATE_MISSIONS = 'UPDATE_MISSIONS';

// state
const initialState = [];

// action creators
export const join = (id) => async (dispatch) => dispatch({
  type: JOIN_MISSIONS,
  payload: id,
});
export const leave = (id) => async (dispatch) => dispatch({
  type: LEAVE_MISSIONS,
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
    case JOIN_MISSIONS:
      return state.map((el) => {
        console.log(el.mission_id, action.payload);
        if (el.mission_id === action.payload) {
          return { ...el, reserved: true };
        }
        return el;
      });
    case LEAVE_MISSIONS:
      return state.map((el) => {
        console.log(el.mission_id, action.payload);
        if (el.mission_id === action.payload) {
          return { ...el, reserved: false };
        }
        return el;
      });

    default:
      return state;
  }
}
