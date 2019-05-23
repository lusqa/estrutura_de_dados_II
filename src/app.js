import Graph from './components/graphListMap/Graph'
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
const v0 = graph.addVertex('v0')
const v1 = graph.addVertex('v1')
const v2 = graph.addVertex('v2')
const v3 = graph.addVertex('v3')
const v4 = graph.addVertex('v4')
const v5 = graph.addVertex('v5')

// edges
const e1 = graph.addEdge(v0, v1)
const e2 = graph.addEdge(v1, v2)
const e3 = graph.addEdge(v2, v3)
const e4 = graph.addEdge(v3, v4)
const e5 = graph.addEdge(v4, v0)
const e6 = graph.addEdge(v0, v5)
const e7 = graph.addEdge(v2, v5)
const e8 = graph.addEdge(v3, v5)
const e9 = graph.addEdge(v4, v5)

// graph.incidentEdges1(v1)
console.log(graph.incidentEdges(v0))
// console.log(graph.incidentEdges1(v0))
// console.log(graph.incidentEdges2(v0))
