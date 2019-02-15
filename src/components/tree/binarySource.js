import Node from './node'

class BinarySourceThree {
  constructor () {
    this.root = null
  }

  add (key) {
    !this.root ? this.root = new Node(key) : this._addNode(this.root, key)
  }

  _addNode (node, key) {
    const child = key <= node.key ? 'leftChild' : 'rightChild'
    !node[child] ? node[child] = new Node(key, node) : this._addNode(node[child], key)
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

  isLeftChild (node) {
    return node.parent.leftChild === node
  }

  isRightChild (node) {
    return node.parent.rightChild === node
  }
}

export default BinarySourceThree
