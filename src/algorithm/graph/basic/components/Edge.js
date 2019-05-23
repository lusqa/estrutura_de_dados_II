class Edge {
  constructor(origin, destiny, weight = null) {
    this._origin = origin
    this._destiny = destiny
    this._weight = weight
  }

  element() {
    return this._weight ? this._weight : 0
  }

  endpoints() {
    return [this._origin, this._destiny]
  }
}

export default Edge
