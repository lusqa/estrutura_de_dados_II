import Three from './components/tree/binarySource'

const three = new Three()
const keys = [13, 10, 20, 40, 21, 8, 9]

keys.forEach(key => three.add(key))

console.log(three.root.depth())
console.log(three.root.leftChild.depth())
console.log(three.root.rightChild.depth())
