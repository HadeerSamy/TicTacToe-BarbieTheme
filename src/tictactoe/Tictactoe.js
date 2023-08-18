import "./tictactoe.css"
import React from "react";
import Cell from "./Cell";
import { useSelector, useDispatch } from "react-redux";
import { gameAction,gameReducer } from '../store/slices/TicTacToeSlice';
import stars from "../stars-svg.svg"
//handle no winning
function Tictactoe() {

    const store= useSelector(state=>state)
    const dispatch= useDispatch()

function handleRestart(){
    dispatch(gameAction.currentTurn("X"))
    dispatch(gameAction.cellVal(Array(9).fill("")))
    dispatch(gameAction.tie(false))
    dispatch(gameAction.won(false))

}

    return(
        <>
        
         <img src={stars} alt="SVG Logo" width="40" height="40"  style={{ position: 'absolute', top: '20px', left: '50px' }}/>
         <img src={stars} alt="SVG Logo" width="40" height="40" style={{ position: 'absolute', top: '70px', left: '200px' }}/>
         <img src={stars} alt="SVG Logo" width="60" height="60" style={{ position: 'absolute', top: '230px', left: '1250px' }}/>
         <img src={stars} alt="SVG Logo" width="80" height="80" style={{ position: 'absolute', top: '380px', left: '30px' }}/>
         <img src={stars} alt="SVG Logo" width="30" height="30" style={{ position: 'absolute', top: '170px', left: '120px' }}/>
         <img src={stars} alt="SVG Logo" width="95" height="95" style={{ position: 'absolute', top: '430px', left: '1200px' }}/>
         <img src={stars} alt="SVG Logo" width="70" height="70" style={{ position: 'absolute', top: '360px', left: '1050px' }}/>
         <img src={stars} alt="SVG Logo" width="120" height="120" style={{ position: 'absolute', top: '100px', left: '1000px' }}/>
         <img src={stars} alt="SVG Logo" width="120" height="120" style={{ position: 'absolute', top: '250px', left: '200px' }}/>
         <img src={stars} alt="SVG Logo"width="60" height="60" style={{ position: 'absolute', top: '570px', left: '100px' }}/>
         <img src={stars} alt="SVG Logo" width="80" height="80" style={{ position: 'absolute', top: '500px', left: '300px' }}/>
         <img src={stars} alt="SVG Logo" width="40" height="40" style={{ position: 'absolute', top: '20px', left: '1100px' }}/>
         <img src={stars} alt="SVG Logo" width="40" height="40" style={{ position: 'absolute', top: '70px', left: '1300px' }}/>
         <img src={stars} alt="SVG Logo" width="40" height="40" style={{ position: 'absolute', top: '300px', left: '900px' }}/>
         <img src={stars} alt="SVG Logo" width="60" height="60" style={{ position: 'absolute', top: '550px', left: '850px' }}/>
         <img src={stars} alt="SVG Logo" width="40" height="40" style={{ position: 'absolute', top: '500px', left: '1000px' }}/>
         <img src={stars} alt="SVG Logo" width="60" height="60" style={{ position: 'absolute', top: '150px', left: '350px' }}/>
         <img src={stars} alt="SVG Logo" width="40" height="40" style={{ position: 'absolute', top: '400px', left: '400px' }}/>



        <h1>Welcome to TicTacToe!!</h1>
        <table>
            <tr>
                <Cell num ={0}/>
                <Cell num ={1}/>
                <Cell num ={2}/>
            </tr>
            <tr>
                <Cell num ={3}/>
                <Cell num ={4}/>
                <Cell num ={5}/>
            </tr>
            <tr>
                <Cell num ={6}/>
                <Cell num ={7}/>
                <Cell num ={8}/>
            </tr>
        </table>
        {(!store.gameReducer.tie && !store.gameReducer.won)&&(
            <>

            <h2>Turn : {store.gameReducer.currentTurn}</h2>
            </>
        )}
        {store.gameReducer.tie && (
            <>
            <h2> That's a Tie...</h2>

             </>
        )}
        {store.gameReducer.won && (
        <>
        <h2> {store.gameReducer.currentTurn} has Won</h2>
       
        </>
        )}
         <button onClick={()=>handleRestart()}>Restart the Game</button>
         <div id="starshine">
            <div class="template shine"></div>
            </div>
        </>
    )
}

export default Tictactoe;