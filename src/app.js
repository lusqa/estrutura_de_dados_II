import Graph from './components/graph/graphSource'

const graph = new Graph()

const v1 = graph.addVertex(1)
const v2 = graph.addVertex(2)
const v3 = graph.addVertex(3)
const v4 = graph.addVertex(4)
const v5 = graph.addVertex(5)
const v6 = graph.addVertex(6)

/* const e1 =  */graph.addEdge(v1, v2, 1)
/* const e2 =  */graph.addEdge(v3, v4, 1)
/* const e3 =  */graph.addEdge(v5, v6, 1)

graph.listVertexes()
graph.listEdges()
