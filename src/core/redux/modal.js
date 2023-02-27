import { Exercicio } from "../data/Models/Exercicio";
import getformatHours from "../utils/Date";

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
  show: false,
  inicio: '',
  atividade: '',
}

export function modalReducer(state = initialState, action) {
    switch (action.type) {
      case SHOW_MODAL:
        return {
          ...state, 
          show: true,
        }
      case HIDE_MODAL:
        return {
          ...state,
          atividade: action.payload, 
          inicio: getformatHours(), 
          show: false, 
        }
      default:
        return state;
    }
}

export const showmodal = () => {
    return {type: SHOW_MODAL }
}

export const hidemodal = (atividade) => {
    return {type: HIDE_MODAL, payload: atividade}
}