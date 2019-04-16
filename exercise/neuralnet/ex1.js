const nn = require('./nn')
const net = new nn.Net()

// (x-3)^2 + (y-2)^2
let x = net.variable(1)
let y = net.variable(3)
let a = net.constant(-3)
let b = net.constant(-2)
let x2 = net.add(x, a)
let y2 = net.add(y, b)
let x3 = net.mul(x2, x2)
let y3 = net.mul(y2, y2)
let o  = net.add(x3, y3)

console.log('net.forward()=', net.forward())
o.g = 0.1
// o.g = 1

console.log('net.backwward()')

net.backward()
console.log('x=', x, 'y=', y, 'o=', o)
console.log('gfx = x.g/o.g = ', x.g/o.g, 'gfy = y.g/o.g=', y.g/o.g)
console.log('x2=', x2, 'y2=', y2)
console.log('x3=', x3, 'y3=', y3)

/* 說明： x.g 的意義

x.g = do/dx         o.g = do/do    */
