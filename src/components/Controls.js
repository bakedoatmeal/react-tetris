import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../reducers/actions'

const Controls = (props) => {
  
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.isRunning);

  return (
    <div className="controls">
      <button className="control-button" onClick={(e) => {
        if (isRunning) {
          dispatch(moveLeft())
        }
      }}>Left</button>
      <button className="control-button" onClick={(e) => {
        if (isRunning) {
          dispatch(moveRight())
        }
      }}>Right</button>
      <button className="control-button" onClick={(e) => {
        if (isRunning) {
          dispatch(rotate())
        }
      }}>Rotate</button>
      <button className="control-button" onClick={(e) => {
        if (isRunning) {
          dispatch(moveDown())
        }
      }}>Down</button>
    </div>
  )
}

export default Controls;