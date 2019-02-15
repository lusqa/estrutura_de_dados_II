import Three from './components/tree/binarySource'

const three = new Three()
const keys = [13, 10, 20, 40, 21, 8, 9]

keys.forEach(key => three.add(key))

// console.log({ three })

// console.log(three.hasBothChildren(three.root))
// console.log(three.hasLeftChild(three.root))
// console.log(three.hasRightChild(three.root))

// console.log(three.isLeaf(three.root))

// console.log(three.isLeftChild(three.root.rightChild))
// console.log(three.isLeftChild(three.root.leftChild))

// console.log(three.isRightChild(three.root.leftChild))
// console.log(three.isRightChild(three.root.rightChild))
