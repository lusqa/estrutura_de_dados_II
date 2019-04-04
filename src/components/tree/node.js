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
    if (this.isRoot()) {
      return 0
    } else {
      const heightLeft = this.leftChild.height()
      const heightRight = this.rightChild.height()

      const height = heightLeft > heightRight ? heightLeft : heightRight
      return height + 1
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
