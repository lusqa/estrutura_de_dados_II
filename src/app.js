import Graph from './algorithm/graph/map/components/Graph'
import {
  DepthFirstSearch as DFS,
  BreadthFirstSearch as BFS
} from './algorithm/graph/utils/graphOperations'
// import Graph from './components/graphListDictonary/Graph'

//         v3
//      /  |  \
//   v4    |    v2
//    \  \ |  /  |
//     \   v5    |
//      \  /     /
//       v0 - - v1

const graph = new Graph()

// vertexes
const v = graph.addVertex('v')
const u = graph.addVertex('u')
const w = graph.addVertex('w')
const z = graph.addVertex('z')

// edges
const e = graph.addEdge(v, w, 'e')
const f = graph.addEdge(v, u, 'f')
const g = graph.addEdge(u, w, 'g')
const i = graph.addEdge(w, z, 'i')

const discovered = new Map()
discovered.set(v, null)

DFS(graph, v, discovered)

const discovered1 = new Map()
discovered1.set(v, null)
BFS(graph, v, discovered1)

for (let v of graph.vertices) {
  console.log(v)
}
