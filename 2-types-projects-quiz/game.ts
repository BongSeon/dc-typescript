/**
 * Let's make a game 🕹
 */
type xy = { x: number; y: number }
type direction = 'up' | 'down' | 'left' | 'right'
let position: xy = {
  x: 0,
  y: 0
}
function move(direction: direction) {
  if (direction === 'up') {
    position.y += 1
  } else if (direction === 'down') {
    position.y -= 1
  } else if (direction === 'left') {
    position.x -= 1
  } else if (direction === 'right') {
    position.x += 1
  }
}

console.log(position) // { x: 0, y: 0}
move('up')
console.log(position) // { x: 0, y: 1}
move('down')
console.log(position) // { x: 0, y: 0}
move('left')
console.log(position) // { x: -1, y: 0}
move('right')
console.log(position) // { x: 0, y: 0}
