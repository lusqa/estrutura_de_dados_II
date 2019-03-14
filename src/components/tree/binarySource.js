import Node from './node'

class BinarySourceThree {
  constructor () {
    this.root = null
    this.COUNT = 10
  }

  add (key) {
    !this.root ? this.root = new Node(key) : this._addNode(this.root, key)
  }

  _addNode (node, key) {
    const child = key <= node.key ? 'leftChild' : 'rightChild'

    if (!node[child]) {
      node[child] = new Node(key, node)
    } else {
      this._addNode(node[child], key)
    }
  }

  search (key) {
    return this._searchNode(this.root, key)
  }

  _searchNode (node, key) {
    if (!node) return null

    if (key < node.key) {
      return this._searchNode(node.leftChild, key)
    }

    if (key > node.key) {
      return this._searchNode(node.rightChild, key)
    }

    return node
  }

  // Tree Traversals
  preOrder (operation) {
    this._preOrderNode(this.root, operation)
  }

  _preOrderNode (node, operation) {
    if (node) {
      operation(node)
      this._preOrderNode(node.leftChild, operation)
      this._preOrderNode(node.rightChild, operation)
    }
  }

  posOrder (operation) {
    this._posOrderNode(this.root, operation)
  }

  _posOrderNode (node, operation) {
    if (node) {
      operation(node)
      this._posOrderNode(node.leftChild, operation)
      this._posOrderNode(node.rightChild, operation)
    }
  }

  inOrder (operation) {
    this._inOrderNode(this.root, operation)
  }

  _inOrderNode (node, operation) {
    if (node) {
      operation(node)
      this._inOrderNode(node.leftChild, operation)
      this._inOrderNode(node.rightChild, operation)
    }
  }

  breadthFirstSearch (operation) {
    this._breadthFirstSearchNode(this.root, operation)
  }

  _breadthFirstSearchNode (node, operation) {
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

  // Minimum and Maximum
  minimum () {
    return this._minimumNode(this.root)
  }

  _minimumNode (node) {
    let minNode = node

    if (minNode) {
      while (minNode.hasLeftChild()) {
        minNode = minNode.leftChild
      }
    }
    return minNode
  }

  _minimumNodeRecursive (node) {
    let minNode = node

    if (minNode) {
      if (minNode.hasLeftChild()) {
        minNode = this._minimumNodeRecursive(node.leftChild)
      }
    }
    return minNode
  }

  maximum () {
    return this._maxmimumNode(this.root)
  }

  _maxmimumNode (node) {
    let maxNode = node

    if (maxNode) {
      while (maxNode.hasRightChild()) {
        maxNode = maxNode.rightChild
      }
    }
    return maxNode
  }

  _maxmimumNodeRecursive (node) {
    let maxNode = node

    if (maxNode) {
      if (maxNode.hasRightChild()) {
        maxNode = this._maxmimumNodeRecursive(node.rightChild)
      }
    }
    return maxNode
  }

  remove (key) {
    const found = this.search(key)

    if (found) {
      if (found.isLeaf()) {
        const child = found.isLeftChild() ? 'leftChild' : 'rightChild'
        found.parent[child] = null
        found.parent = null
      } else if (found.hasBothChildren()) {

      } else {
        const child = found.isLeftChild() ? 'leftChild' : 'rightChild'
        const myChild = found.hasLeftChild() ? 'leftChild' : 'rightChild'

        found.parent[child] = found[myChild]

        found[myChild].parent = found.parent
        found[myChild] = null
        found.parent = null
      }
    }

    return found
  }

  printTree () {
  }
}

export default BinarySourceThree
