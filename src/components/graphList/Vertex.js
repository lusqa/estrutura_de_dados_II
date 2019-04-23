class Vertex {
  constructor (element) {
    this._element = element
    this._outcoming = []
    // this._incoming = []
  }

  get element () {
    return this._element
  }

  addEdge (edge) {
    this._outcoming.push(edge)
  }
}

export default Vertex
