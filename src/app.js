import Graph from './algorithm/graph/map/components/Graph'
import {
  depthFirstSearch as DFS,
  breadthFirstSearch as BFS,
  depthFirstSearchComplete as DFSComplete,
  dijkstraShortestPaths
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

const x = graph.addVertex('x')
const s = graph.addVertex('s')
const r = graph.addVertex('r')

const alone = graph.addVertex('alone')

const c = graph.addEdge(x, s, 'c')
const b = graph.addEdge(s, r, 'b')
const a = graph.addEdge(r, x, 'a')

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

// console.log(DFSComplete(graph))

dijkstraShortestPaths(graph)
