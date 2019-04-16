function f (x, y) {
  return -(x*x -2*x + y*y +2*y - 8)
}
let dx = 0.01
let dy = 0.01

function climb (f, x, y) {
  while (true) {
    if (f(x+dx, y) > f(x, y)) {
      x += dx
    } else if (f(x-dx, y) > f(x,y)) {
      x -= dx
    } else if (f(x, y+dy) > f(x,y)) {
      y += dy
    } else if (f(x, y-dy) > f(x,y)) {
      y -= dy
    }
    else break
  }
  console.log("f(%s, %s) = %s", x.toFixed(4), y.toFixed(4), f(x.toFixed(4), y.toFixed(4)).toFixed(4))
}

climb(f, 0.0, 0.0)
