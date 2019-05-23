import Graph from './Graph'

class Dijkstra {
  constructor(graph = new Graph()) {
    this.graph = graph
  }

  initAlgorithm() {}

  hasOpenVertexes() {}

  startDijkstra(initialVertice) {
    this.initAlgorithm(initialVertice)

    initialVertice.estimate = 0

    while (this.hasOpenVertexes()) {
      const smallerEstimate = this.getVertexSmallerEstimate()
      smallerEstimate.isOpen = false
      const { outcoming } = smallerEstimate
      for (let i = 0; i < outcoming.length; i++) {
        outcoming.relax()
      }
    }
  }
}

export default Dijkstra
