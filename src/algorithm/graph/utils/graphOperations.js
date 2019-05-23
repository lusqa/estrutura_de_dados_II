export const DepthFirstSearch = (graph, vertex, discovered) => {
  const incidentEdges = graph.incidentEdges(vertex)
  incidentEdges.forEach(e => {
    const opposite = e.opposite(vertex)
    if (!discovered.has(opposite)) {
      discovered.set(opposite, e)
      DepthFirstSearch(graph, opposite, discovered)
    }
  })
}

export const toStringMap = map => {
  map.forEach((key, value, index) => {
    console.log({ key, value, index })
  })
}
