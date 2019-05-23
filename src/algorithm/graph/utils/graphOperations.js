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

/* 
	TODO: This method should returns the edges between to vertices.
				It receives the Map with the discovered edges and two vertices (origin, destination)
*/
export const constructPath = (discovered, origin, destination) => {}
