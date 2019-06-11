var tree = {
  "A":{node:[0,0,0,0], neighbor:["F"], visited:0},
  "B":{node:[0,0,0,1], neighbor:["G","H"], visited:0},
  "C":{node:[0,0,1,0], neighbor:["F","G"], visited:0},
  "D":{node:[0,1,0,0], neighbor:["H","I"], visited:0},
  "E":{node:[0,1,0,1], neighbor:["H","J"], visited:0},
  "F":{node:[1,0,1,0], neighbor:["A","C"], visited:0},
  "G":{node:[1,0,1,1], neighbor:["B","C"], visited:0},
  "H":{node:[1,1,0,1], neighbor:["B","D", "E"], visited:0},
  "I":{node:[1,1,1,0], neighbor:["D"], visited:0},
  "J":{node:[1,1,1,1], neighbor:["E"], visited:0},
}

let answer = []
let path = []
let queue = []

function check (test) {
  for(let i=0; i< test.length; i++) {
    queue = []
    dfs(test[i])
    console.log("queue=", queue)
    let asw = queue[queue.length-1]

    if (asw == "J") { path = path.concat(queue)}
  }
  
}

function dfs (x) {
  if(tree[x].visited == 1) return
  queue.push(x);
  tree[x].visited = 1
  var neighbor = tree[x].neighbor
  for(let i=0; i<neighbor.length; i++) {
    dfs(neighbor[i])
  }
}


function pdfs (x) {
  if(tree[x].visited == 1){
    return
  }
  answer.push(x);
  tree[x].visited = 1
  var test = []
  var neighbor = tree[x].neighbor
  for(let i=0; i<neighbor.length; i++) {
    if(tree[neighbor[i]].visited == 0) test.push(neighbor[i])
  }
  if(test.length == 2) {
    path = answer
    check(test)
  }
  for(let i=0; i<neighbor.length; i++) {
    pdfs(neighbor[i])
  }
}
pdfs("A")
console.log("dfs:", path)