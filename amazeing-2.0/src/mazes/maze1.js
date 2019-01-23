export const maze1 =  [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 4, 4, 0, 0, 0, 4, 1, 4, 1, 4, 0],
  [1, 0, 1, 1, 1, 1, 1, 4, 1, 4, 1, 0, 1],
  [1, 0, 1, 0, 0, 5, 1, 4, 1, 0, 0, 4, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 4, 1],
  [1, 0, 1, 4, 1, 0, 1, 1, 1, 4, 1, 0, 1],
  [3, 0, 1, 4, 1, 0, 4, 4, 1, 0, 0, 0, 1],
  [1, 4, 0, 0, 1, 1, 1, 4, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

export const maze1Info = {
  height: maze1.length,
  width: maze1[0].length,
  winningPos: {
    row: 1,
    col: 12
  },
  player: {
    row: 7,
    col: 0
  }
}