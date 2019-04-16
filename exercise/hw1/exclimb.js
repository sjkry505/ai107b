function f1 (x) {
  return -(x*x+4*x-8)
}

function f2 (x) {
  return -(x*x*x*x - 10*x*x*x + 20*x*x + 5*x + 7)
}
let answer = 0
let dx = 0.01

function climb (f, x) {
  while (true) {
    if (f(x+dx) >= f(x)) x = x + dx
    else if (f(x-dx) >= f(x)) x = x - dx
    else break
  }
  return x.toFixed(4)
}

console.log('f(%d)=%d', climb(f1, 0.0), f1(climb(f1, 0.0)))
console.log('f(%d)=%d', climb(f2, 0.0), f2(climb(f2, 0.0)))
