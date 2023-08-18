import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameAction,gameReducer } from '../store/slices/TicTacToeSlice';

import { useState , useEffect} from "react";

//winning : my2dr4 yedos 3la 7aga w yezharlo button restart
// - restart game : kol 7aga terg3 ll awal 
function Cell({num}) {



















    const store= useSelector(state=>state)
    const dispatch= useDispatch()
    let win = store.gameReducer.won

    function aTie (myArr){
        let no = 0
        myArr.forEach(item=>{
            if (item !== "")
            {
                ++no
            }
        })
        if (no === 9)
        {
            dispatch(gameAction.tie(true))
        }
    }
    function winning (myArr){

        let winningArray = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]

        winningArray.forEach(arr=>{
            if (myArr[arr[0]] === myArr[arr[1]] &&
                myArr[arr[1]]=== myArr[arr[2]] && 
                myArr[arr[1]]!== "" )
            {
                dispatch(gameAction.currentTurn(myArr[arr[0]]))
                win = true
                dispatch(gameAction.won(true))
            }
        })
    }




    function handleClick(num){
        //#region someone already won or there's a tie => no action is requires
        if(store.gameReducer.won || store.gameReducer.tie){

            return
        }
        //#endregion
        //#region game is continuing
        if(store.gameReducer.cellVal[num] === "")
        {

            let squares = [...(store.gameReducer.cellVal)]
             
            if(store.gameReducer.currentTurn === "X")
            {
                squares[num] = "X"
                dispatch(gameAction.currentTurn("O"))
            }
            else{
                squares[num] = "O"
                dispatch(gameAction.currentTurn("X"))
            }

            //to make sure of winning 
            winning(squares);

            dispatch(gameAction.cellVal(squares))

            //to make sure of tie
            if(win === false)
            {
                aTie(squares)
            }

        }
        else{
            alert("That cell is already taken")
        }
        //#endregion
        
    }

    return(<>
    <td onClick={()=>handleClick(num)}>
        {store.gameReducer.cellVal[num]}
    </td>

    
    
    </>)
}

export default Cell;