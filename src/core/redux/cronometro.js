const initialState = {
    start: false
  }
  
const TOGGLE = 'TOGGLE';

export function conometroReducer(state = initialState, action) {
    switch (action.type) {
      case TOGGLE:
        return { 
          ...state,
          start: !state.start
        }
      default:
        return state;
    }
}

export const toggle = () => {
    return {type: TOGGLE}
}
