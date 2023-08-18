import { createSlice } from "@reduxjs/toolkit"

const state = {
    currentTurn :"X",
    cellVal : Array(9).fill(""),
    won : false,
    tie :false


}
const TictactoeSlice = createSlice({
    name: "gameInputs",
    initialState : state,
    reducers:{
        currentTurn:(state,action)=>{
            state.currentTurn = action.payload
        },
        cellVal:(state,action)=>{
            state.cellVal = action.payload
        },
        won:(state,action)=>{
            state.won = action.payload
        },
        tie:(state,action)=>{
            state.tie = action.payload
        }


    }
})

export const gameAction=TictactoeSlice.actions
export const gameReducer= TictactoeSlice.reducer