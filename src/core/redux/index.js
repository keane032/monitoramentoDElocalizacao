import { combineReducers } from '@reduxjs/toolkit'
import { modalReducer } from './modal'
import { exerciceReducer } from './exercicios'
import { conometroReducer } from './cronometro'


export default combineReducers({
    modalReducer,
    exerciceReducer,
    conometroReducer,
})