

import { combineReducers } from "@reduxjs/toolkit";
import { gameReducer } from "../slices/TicTacToeSlice";



export const rootReducer= combineReducers({
    gameReducer: gameReducer,
})