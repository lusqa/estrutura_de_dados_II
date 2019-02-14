import Node from './node'

class BinarySourceThree {
  constructor () {
    this.root = null
  }

  add (key) {
    !this.root ? this.root = new Node(key) : this._addNode(this.root, key)
  }

  _addNode (node, key) {
    if (key <= node.key) {
      !node.leftChild ? node.leftChild = new Node(key, node) : this._addNode(node.leftChild, key)
    } else {
      !node.rightChild ? node.rightChild = new Node(key, node) : this._addNode(node.rightChild, key)
    }
  }

  hasBothChildren (node) {
    return !!node.leftChild && !!node.rightChild
  }

  hasLeftChild (node) {
    return !!node.leftChild
  }

  hasRightChild (node) {
    return !!node.rightChild
  }

  isLeaf (node) {
    return !node.leftChild && !node.rightChild
  }

  isRightChild (node) {

  }

  isLeftChild (node) {

  }
}

export default BinarySourceThree
