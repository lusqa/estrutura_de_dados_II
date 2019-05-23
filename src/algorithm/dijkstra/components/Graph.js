import Vertex from './Vertex'
import Edge from './Edge'

class Graph {
  constructor() {
    this._vertexes = []
  }

  // Add methods
  addVertex(element) {
    if (!this.searchVertex(element)) {
      const vertex = new Vertex(element)
      this._vertexes.push(vertex)
      return vertex
    }
  }

  addEdge(origin, destination, element = null) {
    const edge = new Edge(origin, destination, element)
    origin.addEdge(edge)
    destination.addEdge(edge)
    return edge
  }

  // Search methods
  searchVertex(element) {
    return this._vertexes.find(vertex => vertex.element === element)
  }
}

export default Graph
