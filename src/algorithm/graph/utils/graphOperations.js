export const depthFirstSearch = (graph, vertex, discovered) => {
  const incidentEdges = graph.incidentEdges(vertex)
  incidentEdges.forEach(e => {
    const opposite = e.opposite(vertex)
    if (!discovered.has(opposite)) {
      discovered.set(opposite, e)
      depthFirstSearch(graph, opposite, discovered)
    }
  })
}

export const depthFirstSearchComplete = graph => {
  const forest = new Map()
  for (let v of graph.vertices) {
    if (!forest.has(v)) {
      forest.set(v, null)
      DepthFirstSearch(graph, v, forest)
    }
  }
  return forest
}

export const breadthFirstSearch = (graph, vertex, discovered) => {
  const queue = [vertex]
  while (queue.length > 0) {
    const currentVertex = queue.shift()

    graph.incidentEdges(currentVertex).forEach(edge => {
      const opposite = edge.opposite(currentVertex)

      if (!discovered.has(opposite)) {
        discovered.set(opposite, edge)
        queue.push(opposite)
      }
    })
  }
}

export const constructPath = (origin, destination, discovered) => {
  let path = []
  if (discovered.has(destination)) {
    let step = destination

    path.push(destination)

    while (step !== origin) {
      const edge = discovered.get(step)
      const opposite = edge.opposite(step)
      path.unshift(opposite)
      step = opposite
    }
  }
  return path
}

export const toStringMap = map => {
  map.forEach((key, value, index) => {
    console.log({ key, value, index })
  })
}

// Dijkstra
const initDijkstra = graph => {
  const map = new Map()
  for (let v of graph.vertices) {
    map.set(v, {
      predecessor: null,
      estimate: 0,
      isOpen: false
    })
  }
  return map
}

const getVertexSmallerEstimate = vertices => {
  vertices.forEach((value, key) => {
    value[1]
  })
}
const hasOpenVertexes = vertices => {
  let hasOpenVertexes = false
  vertices.forEach((vertex, key) => {
    if (vertex.isOpen) {
      hasOpenVertexes = true
    }
  })
  return hasOpenVertexes
}

export const dijkstraShortestPaths = (graph, vertex) => {
  let vertices = initDijkstra(graph)

  console.log(vertices)
  console.log(hasOpenVertexes(vertices))

  // while (hasOpenVertexes(vertices)) {
  //   const smallerEstimateVertex = getVertexSmallerEstimate()
  //   smallerEstimateVertex.isOpen = false
  //   const { outcoming } = smallerEstimateVertex
  //   for (let i = 0; i < outcoming.length; i++) {
  //     outcoming.relax()
  //   }
  // }
}
