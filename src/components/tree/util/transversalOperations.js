export const printKey = node => {
  console.log(node.key)
}

export const ident = node => {
  let ident = ''.repeat(node.depth())
  console.log(ident + '' + node.key)
}
