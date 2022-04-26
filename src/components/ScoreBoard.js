import React from "react";
import { connect } from "react-redux";
import { pause, resume, restart } from '../reducers/actions'
import { useSelector, useDispatch } from 'react-redux'

const ScoreBoard = (props) => {
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
  const { score, isRunning, gameOver } = game


  return (
    <div className="score-board">
      <div>Score: { props.score }</div>
      <div>Level: 1</div>
      <button className="score-board-button" onClick={(e) => {
        if (gameOver) {return}
        if (isRunning) {
          dispatch(pause())
        } else {
          dispatch(resume())
        }
      }}>{isRunning ? 'Pause' : 'Play'}</button>
      <button className="score-board-button" onClick={(e) => {
        dispatch(restart())
      }}>Restart</button>
    </div>
  )
}

export default ScoreBoard;