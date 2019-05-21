import Vertex from './Vertex'
import Edge from './Edge'

class Graph {
  constructor(directed = false) {
    this._directed = directed
    this._outgoing = new Map()
    if (directed) {
      this._incoming = new Map()
    }
  }

  // Add methods
  addVertex(element) {
    const v = new Vertex(element)
    this._outgoing.set(v, [])
    if (this._directed) {
      this._incoming.set(v, [])
    }
    return v
  }

  addEdge(origin, destination, element = null) {
    const e = new Edge(origin, destination, element)
    this._outgoing.get(origin).push(e)
    if (this._directed) {
      this._incoming.get(destination).push(e)
    }
    return e
  }

  incidentEdges(vertex) {
    this._outgoing.forEach(v => {
      console.log(v.get(vertex))
    })
  }
}

export default Graph
