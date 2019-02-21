import Three from './components/tree/binarySource'

const three = new Three()
const keys = [13, 10, 20, 40, 21, 8, 9]

keys.forEach(key => three.add(key))

console.log({ preOrderNode: three.preOrderNode(three.root) })
console.log({ posOrderNode: three.posOrderNode(three.root) })
console.log({ inOrderNode: three.inOrderNode(three.root) })
// console.log(three.root.leftChild.isLeftChild())

// console.log(three.root.depth())
// console.log(three.root.leftChild.depth())
// console.log(three.root.rightChild.depth())
