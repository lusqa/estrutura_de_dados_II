export const preOrderNode = (node, operation) => {
  if (node) {
    operation(node)
    preOrderNode(node.leftChild, operation)
    preOrderNode(node.rightChild, operation)
  }
}

export const posOrderNode = (node, operation) => {
  if (node) {
    posOrderNode(node.leftChild, operation)
    posOrderNode(node.rightChild, operation)
    operation(node)
  }
}

export const inOrderNode = (node, operation) => {
  if (node) {
    inOrderNode(node.leftChild, operation)
    operation(node)
    inOrderNode(node.rightChild, operation)
  }
}

export const breadthFirstSearchNode = (node, operation) => {
  let queue = []
  queue.push(node)

  while (queue.length > 0) {
    let next = queue.shift()
    operation(next)

    if (next.hasLeftChild()) {
      queue.push(next.leftChild)
    }

    if (next.hasRightChild()) {
      queue.push(next.rightChild)
    }
  }
}
