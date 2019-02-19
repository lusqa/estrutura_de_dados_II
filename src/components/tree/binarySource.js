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
    !node[child] ? node[child] = new Node(key, node)
      : this._addNode(node[child], key)
  }

  search (key) {
    return this._searchNode(this.root, key)
  }

  _searchNode (node, key) {
    if (!node) return null

    if (key < node.key) {
      this._searchNode(node.leftChild, key)
    }

    if (key > node.key) {
      this._searchNode(node.rightChild, key)
    }

    return node
  }
}

export default BinarySourceThree
