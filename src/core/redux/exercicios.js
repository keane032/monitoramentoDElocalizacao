const initialState = {
    list: [],
    positionList: []
  }
  
  const ADD = 'ADD';
  const ADD_POSITION_LIST = 'ADD_POSITION_LIST';
  
  export function exerciceReducer(state = initialState, action) {
      switch (action.type) {
        case ADD:
          return {
            ...state,
            list: [...state.list, action.payload ]
          }
        case ADD_POSITION_LIST:
          return {
            ...state,
            positionList: [...state.positionList, action.payload ]
          }
        default:
          return state;
      }
  }
  
  export const addExercice = (newValue) => {
      return {type: ADD, payload: newValue}
  }

  export const addPsition = (newValue) => {
    return {type: ADD_POSITION_LIST, payload: newValue}
}

