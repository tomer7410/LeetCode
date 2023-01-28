import {Queue} from './Queue';

class Graph {
  noOfVertices:number;
  adjList:Map<number, Array<number>>
  visited: boolean[];
  counter = 0
  constructor(noOfVertices:number, ) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
    this.visited =new Array(this.noOfVertices).fill(false)
  }

  addVertex(v:number)
  {
    // initialize the adjacent list with a
    // null array
    this.adjList.set(v, []);
  }
  addEdge(v:number, w:number)
  {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.adjList.get(v)?.push(w);

    this.adjList.get(w)?.push(v);

  }
  dfs(currentNode:number){
    if(this.visited[currentNode]) return
    this.visited[currentNode] = true;
    console.log(++this.counter);
    const neighbors = this.adjList.get(currentNode)
    neighbors?.forEach(neighbor => this.dfs(neighbor))
  }
  solve(startedVertex:number,dest:number){
    const q = new Queue();
    this.visited.fill(false);
    const prev = new Array(this.noOfVertices).fill(null);
    q.enqueue(startedVertex);
    while(q.size>0){
      const node = q.dequeue();
      const neighbors = this.adjList.get(node);
      neighbors?.forEach((neighbor)=>{
        if(!this.visited[neighbor]){
          q.enqueue(neighbor)
          this.visited[neighbor] = true;
          prev[neighbor] = neighbor;
          if(neighbor == dest) return prev
        }
      })
    }
    return prev
  }
  printGraph(){
    const vertexes = this.adjList.keys()
    for (let v of vertexes){
        let str = `${v} => `
        const neighbors= this.adjList.get(v)
        neighbors?.forEach((n:number) =>{
          str += `${n} `
        })
      console.log(str)
    }
  }
}
const g =new Graph(13);
for (let i = 0; i < 13; i++) {
    g.addVertex(i)
}
g.addEdge(0,7)
g.addEdge(0,9)
g.addEdge(0,11)
g.addEdge(7,3)
g.addEdge(7,11)
g.addEdge(7,6)
g.addEdge(3,2)
g.addEdge(3,4)
g.addEdge(6,5)
g.addEdge(9,10)
g.addEdge(9,8)
g.addEdge(10,1)
g.addEdge(8,1)
g.addEdge(8,12)
g.addEdge(12,2)
// g.dfs(0)
console.log(g.solve(0,8))