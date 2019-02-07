class Node {
    constructor(key, leftChild = null, rightChild = null, parent = null) {
        this.key = key
        this.leftChild = leftChild
        this.rightChild = rightChild
        this.parent = parent
    }
}

export default Node