class Node {
  constructor(v = 0, g = 0) {
    this.v = v // 輸出值 (f(x))
    this.g = g // 梯度值 (偏微分)
  }
}

class Gate {
  constructor(o, x, y, f, gfx, gfy) {
    this.p = {o:o, x:x, y:y, f:f, gfx:gfx, gfy:gfy||gfx}
  }

  forward() {
    let {o, x, y, f} = this.p
    o.v = f(x.v, y.v)
  }

  backward() {
    let {o,x,y,gfx,gfy} = this.p
    x.g += gfx(x.v,y.v) * o.g
    // o.g = 1, gfx(x.v=1, y.v=9) = 1  => 1*1 = 1 ((1 x^2 + y^2
    // o.g = 1, gfx(x.v=3, y.v=3) = 3  => 1*3 = 3, y=x => x.g = x.g+y.g = 3+3= 6 ((2 y^2
    // o.g = 1, gfx(x.v=1, y.v=1) = 1  => 1*1 = 1, x=y => x.g = x.g+y.g = 1+1= 2 ((3 x^2
    y.g += gfy(x.v,y.v) * o.g  
    // o.g = 1, gfy(x.v=1, y.v=1) = 1  => 1*1 = 1 ((1 x^2 + y^2
    // o.g = 1, gfx(x.v=3, y.v=3) = 3  => 1*3 = 3, y=x => y.g = x.g+y.g = 3+3= 6 ((2 y^2
    // o.g = 1, gfx(x.v=1, y.v=1) = 1  => 1*1 = 1, x=y => y.g = x.g+y.g = 1+1= 2 ((3 x^2
    console.log('x.g=', x.g)
    console.log('y.g=', y.g)
  }
}

class Net {
  constructor () {
    this.gates = []
  }

  variable (v, g) {
    return new Node(v, g)
  }

  constant (v, g) {
    return new Node(v, 0)
  }

  op (x, y, f, gfx, gfy) {
    let o = new Node()
    let g = new Gate(o, x, y, f, gfx, gfy)
    this.gates.push(g)
    this.o = o
    return o
  }

  add (x, y) { return this.op(x, y, (x,y)=>x+y, (x,y)=>1) }
  mul (x, y) { return this.op(x, y, (x,y)=>x*y, (x,y)=>y, (x,y)=>x) }

  forward() { // 正向傳遞計算結果
    for (let gate of this.gates) {
      gate.forward()
    }
    return this.o
  }

  backward() { // 反向傳遞計算梯度 
    this.o.g = 1 // 設定輸出節點 o 的梯度為 1
    for (let i=this.gates.length-1; i>=0; i--) { // 反向傳遞計算每個節點 Node 的梯度 g
      let gate = this.gates[i]
      gate.backward()
    }
  }
}

module.exports = { Net, Gate, Node }
