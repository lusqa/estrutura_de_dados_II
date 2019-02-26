import Three from './components/tree/binarySource'
import { printKey } from './components/tree/util/transversalOperations'

// , ident

const three = new Three()
const keys = [50, 10, 60, 55, 87, 199, 9, 48, 47]

keys.forEach(key => three.add(key))

// console.log({ preOrder: three.preOrder(printKey) })
// console.log({ posOrder: three.posOrder(printKey) })
// console.log({ inOrder: three.inOrder(printKey) })

three.breadthFirstSearch(printKey)

// console.log({ preOrder: three.preOrder(ident) })

// console.log(three.root.leftChild.isLeftChild())

// console.log(three.root.depth())
// console.log(three.root.leftChild.depth())
// console.log(three.root.rightChild.depth())
