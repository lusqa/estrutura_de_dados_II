import Node from './node'
import { searchNode, addNode } from './util/nodeOperations'
import { preOrderNode, posOrderNode, inOrderNode, breadthFirstSearchNode } from './util/orderOperations'

class BinarySourceThree {
  constructor () {
    this.root = null
  }

  add (key) {
    !this.root ? this.root = new Node(key) : addNode(this.root, key)
  }

  search (key) {
    return searchNode(this.root, key)
  }

  preOrder (operation) {
    preOrderNode(this.root, operation)
  }

  posOrder (operation) {
    posOrderNode(this.root, operation)
  }

  inOrder (operation) {
    inOrderNode(this.root, operation)
  }

  breadthFirstSearch (operation) {
    breadthFirstSearchNode(this.root, operation)
  }
}

export default BinarySourceThree
