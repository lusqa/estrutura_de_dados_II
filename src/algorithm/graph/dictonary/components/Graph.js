import Vertex from './Vertex'
import Edge from './Edge'

class Graph {
  constructor(directed = false) {
    this._directed = directed
    this._outgoing = {}
    if (directed) {
      this._incoming = {}
    }
  }

  // Add methods
  addVertex(element) {
    const v = new Vertex(element)
    this._outgoing[v] = {}
    if (this._directed) {
      this._incoming[v] = {}
    }
    return v
  }

  addEdge(origin, destination, element = null) {
    const e = new Edge(origin, destination, element)
    this._outgoing[origin][destination] = e
    if (this._directed) {
      this._incoming[origin][destination] = e
    }
    return e
  }

  incidentEdges(v) {
    let list = []
    this._outgoing.forEach(values => {
      values.forEach((edge, vertex) => {
        if (vertex === v) {
          list.push(edge)
        }
      })
    })
    return list
  }

  incidentEdges1(vertex) {
    return this._outgoing[vertex]
  }
}

export default Graph
