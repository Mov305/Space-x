// action types
export const TEST = 'TEST';

// state
const initialState = [];

// action creators
export const test = () => ({
  type: TEST,
});

// reducer
export default function rocketReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TEST:
      return state;
    default:
      return state;
  }
}
