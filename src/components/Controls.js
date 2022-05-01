import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../reducers/actions'

const Controls = (props) => {
  
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gaveOver);

  return (
    <div className="controls">
      <button className="control-button" onClick={(e) => {
          if (!isRunning || gameOver ) {return}
          dispatch(moveLeft())
      }}
				disabled={!isRunning || gameOver}
      >Left</button>
      <button className="control-button" onClick={(e) => {
          if (!isRunning || gameOver ) {return}
          dispatch(moveRight())
      }}
				disabled={!isRunning || gameOver}
      >Right</button>
      <button className="control-button" onClick={(e) => {
          if (!isRunning || gameOver ) {return}
          dispatch(rotate())
      }}
			disabled={!isRunning || gameOver}
      >Rotate</button>
      <button className="control-button" onClick={(e) => {
          if (!isRunning || gameOver ) {return}
          dispatch(moveDown())
      }}
				disabled={!isRunning || gameOver}
      >Down</button>
    </div>
  )
}

export default Controls;