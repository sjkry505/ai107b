let tree = {
  "A":{ neighbor:["B", "C", "D"], visited: 0},
  "B": {neighbor:["E", "F"], visited: 0},
  "C": {neighbor:["G"], visited: 0},
  "D": {neighbor:["H"], visited: 0},
  "E": {neighbor:[], visited: 0},
  "F": {neighbor:[], visited: 0},
  "G": {neighbor:[], visited: 0},
  "H": {neighbor:[], visited: 0}
}
let answer = []
let queue = ["A"]

function bfs (queue) {
  if(queue.length == 0) return
  let target = queue.shift()
  answer.push(target)
  tree[target].visited = 1
  let neighbor = tree[target].neighbor
  for(let i=0; i< neighbor.length; i++) {
    if(tree[neighbor[i]].visited == 0) queue.push(neighbor[i])
  }
  bfs(queue)
}
bfs(queue)
console.log("bfs:", answer)