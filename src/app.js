import Tree from './components/tree/binarySource'
import { ident } from './components/tree/util/transversalOperations'

const tree = new Tree()
const keys = [50, 40, 60, 30, 45, 55, 70]

keys.forEach(key => tree.add(key))

tree.preOrder(ident)

keys.forEach(key => {
  console.log(`Removendo o ${key}...`)
  tree.remove(key)
  tree.preOrder(ident)
})

tree.preOrder(ident)
