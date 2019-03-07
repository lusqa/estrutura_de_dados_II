import Tree from './components/tree/binarySource'
import { printKey, width } from './components/tree/util/transversalOperations'

const tree = new Tree()
const keys = [50, 10, 60, 55, 87, 199, 9, 48, 47]

keys.forEach(key => tree.add(key))

// tree.breadthFirstSearch(printKey)

console.log(tree.inOrder(width))

// tree.printTree(tree.inOrder(width))
