import Graph from './algorithm/graph/map/components/Graph'
import {
  DepthFirstSearch as DFS,
  toStringMap
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

toStringMap(discovered)

// graph.incidentEdges1(v1)
// console.log(graph.incidentEdges(v0))
// console.log(graph.incidentEdges1(v0))
// console.log(graph.incidentEdges2(v0))
