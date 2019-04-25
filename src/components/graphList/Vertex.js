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

  adjacencyList () {
    let list = '' + this.element
    this._outcoming.forEach(edge => {
      list += ` -> ${edge.opposite(this)}`
    })
    return list
  }

  toString () {
    return this._element
  }
}

export default Vertex
