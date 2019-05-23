export const printKey = node => {
  console.log(node.key)
}

export const printIdentedKey = node => {
  let ident = '| '.repeat(node.depth())
  console.log(ident + '-> ' + node.key)
}

export const printIdentedKeyHeight = node => {
  let pattern = ''

  for (let i = 0; i < node.depth(); i++) {
    pattern += '|  '
  }
  console.log(`${pattern}-> ${node.key}:${node.height()}`)
}

export const width = (node, op) => {}
