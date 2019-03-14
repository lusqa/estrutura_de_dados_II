import Tree from './components/tree/binarySource'

const tree = new Tree()
const keys = [50, 10, 60, 55, 87, 199, 9, 48, 47]

keys.forEach(key => tree.add(key))

// console.log(tree.minimum().key)
// console.log(tree.maximum().key)

tree.printTree()
