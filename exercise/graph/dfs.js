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

function dfs (x) {
  if(tree[x].visited == 1) return
  answer.push(x);
  console.log("answer", answer)
  tree[x].visited = 1
  var neighbor = tree[x].neighbor
  for(let i=0; i<neighbor.length; i++) {
    dfs(neighbor[i])
  }
}
dfs("A")
console.log("dfs:", answer)