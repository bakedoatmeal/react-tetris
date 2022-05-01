import React from "react";
import GridSquare from './GridSquare';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { shapes } from '../utils';
import { moveDown } from '../reducers/actions'

const GridBoard = (props) => {
  const requestRef = useRef()
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)
  const dispatch = useDispatch()

  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game

  // const grid = [];
  // for (let row = 0; row < 18; row = row + 1) {
  //   grid.push([])
  //   for (let col = 0; col < 10; col = col + 1) {
  //     grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
  //   }
  // }

  const block = shapes[shape][rotation]
  const blockColor = shape

  const update = (time) => {
    requestRef.current = requestAnimationFrame(update)
    if (!isRunning) {
      return
    } 
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time
    }
    const deltaTime = time - lastUpdateTimeRef.current
    progressTimeRef.current = progressTimeRef.current + deltaTime
    if (progressTimeRef.current > speed) {
      dispatch(moveDown())
      progressTimeRef.current = 0
    }
    lastUpdateTimeRef.current = time
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [isRunning])

  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // find the block x and y on the shape grid
      // subtract x and y from the col and row to get the position of the uppoer left corner of 
      // the blcok array as if it was superimposed over the main grid
      const blockX = col - x
      const blockY = row - y
      let color = square

      //map current falling blcok to grid
      // for any squares that fall on the grid we need to look at the block array
      // and see if there is a 1 - in this case we use the block color
      if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }
      //generate a unique key for every block
      const k = row * grid[0].length + col;
      // generate a grid square
      return <GridSquare key={k} color={color} />
    })
  })

  return (
    <div className='grid-board'>
      {gridSquares}
    </div>
  )

}

export default GridBoard;