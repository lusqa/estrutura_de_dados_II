import Node from './components/tree/node'

let root = new Node(13)

root.leftChild = new Node(7)
root.leftChild.parent = root

root.rightChild = new Node(22)
root.rightChild.parent = root