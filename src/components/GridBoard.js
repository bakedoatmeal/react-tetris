import React from "react";
import GridSquare from './GridSquare';

const GridBoard = (props) => {
  const grid = [];
  for (let row = 0; row < 18; row = row + 1) {
    grid.push([])
    for (let col = 0; col < 10; col = col + 1) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
    }
  }

  return (
    <div className='grid-board'>
      {grid}
    </div>
  )

}

export default GridBoard;