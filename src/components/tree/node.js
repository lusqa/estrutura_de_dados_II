class Node {
  constructor (key, parent = null, leftChild = null, rightChild = null) {
    this.key = key
    this.parent = parent
    this.leftChild = leftChild
    this.rightChild = rightChild
  }

  depth () {
    return this.isRoot() ? 0 : this.parent.depth() + 1
  }

  height () {
    if (this.isLeaf()) {
      return 0
    } else {
      const left = this.hasLeftChild() ? this.leftChild.height() : 0
      const right = this.hasRightChild() ? this.rightChild.height() : 0

      return Math.max(left, right) + 1
    }
  }

  hasBothChildren () {
    return !!this.leftChild && !!this.rightChild
  }

  hasLeftChild () {
    return !!this.leftChild
  }

  hasRightChild () {
    return !!this.rightChild
  }

  isLeaf () {
    return !this.leftChild && !this.rightChild
  }

  isRoot () {
    return this.parent === null
  }

  isLeftChild () {
    return !this.isRoot() ? this.parent.leftChild === this : false
  }

  isRightChild () {
    return !this.isRoot() ? this.parent.rightChild === this : false
  }
}

export default Node
