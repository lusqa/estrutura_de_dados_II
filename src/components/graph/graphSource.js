import Vertex from './vertex'
import Edge from './edge'

class Graph {
  constructor () {
    this.vertexes = []
    this.edges = []
  }

  // Add methods
  addVertex (key) {
    if (!this.searchVertex(key)) {
      const vertex = new Vertex(key)
      this.vertexes.push(vertex)
      return vertex
    }
  }

  addEdge (origin, destiny, weight) {
    if (!this.searchEdge(origin, destiny, weight)) {
      const edge = new Edge(origin, destiny, weight)
      this.edges.push(edge)
      return edge
    }
  }

  // Search methods
  searchVertex (key) {
    return this.vertexes.find(vertex => vertex.key === key)
  }

  searchEdge (origin, destiny, weight) {
    return this.edges.find(edges => {
      return (
        edges.origin === origin &&
        edges.destiny === destiny &&
        edges.weight === weight
      )
    })
  }

  // List methods
  listVertexes () {
    let list = 'V: { '
    this.vertexes.forEach(vertex => {
      list += vertex.element() + ', '
    })
    console.log(list + '}')
  }

  listEdges () {
    let list = 'E: { '
    this.edges.forEach(edge => {
      list += `[ ${edge._origin._key}, ${edge._destiny._key}, ${edge._weight} ]` + ', '
    })
    console.log(list + '}')
  }
}

export default Graph
