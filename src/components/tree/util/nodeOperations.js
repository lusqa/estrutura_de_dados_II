import Node from '../node'

export const addNode = (node, key) => {
  const child = key <= node.key ? 'leftChild' : 'rightChild'

  if (!node[child]) {
    node[child] = new Node(key, node)
  } else {
    addNode(node[child], key)
  }
}

export const searchNode = (node, key) => {
  if (!node) return null

  if (key < node.key) {
    searchNode(node.leftChild, key)
  }

  if (key > node.key) {
    searchNode(node.rightChild, key)
  }

  return node
}
