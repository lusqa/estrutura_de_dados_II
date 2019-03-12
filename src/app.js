import Tree from './components/tree/binarySource'
import { printKey, ident, width } from './components/tree/util/transversalOperations'

const tree = new Tree()
const keys = [50, 10, 60, 55, 87, 199, 9, 48, 47]

keys.forEach(key => tree.add(key))

// console.log(tree.preOrder(ident))

const leafRemoved = tree.remove(55)
console.log({ leafRemoved })

const oneChildRemoved = tree.remove(48)
console.log({ oneChildRemoved })

console.log(tree.minimum())

// console.log(tree.preOrder(ident))
