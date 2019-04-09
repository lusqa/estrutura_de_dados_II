import Tree from './components/tree/binarySource'
import { printIdentedKey } from './components/tree/util/transversalOperations'

const tree = new Tree()
const keys = [50, 40, 60, 30, 45, 46, 55, 70]

keys.forEach(key => tree.add(key))

tree.preOrder(printIdentedKey)

// console.log(tree.root.height())
const nodeHeight = tree.search(40)
console.log(tree._heightNode(nodeHeight))
// console.log(tree.height())
