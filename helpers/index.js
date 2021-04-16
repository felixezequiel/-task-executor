module.exports = BuildObject = array => {
  let novoArray = array.rows.map(valor => {
    let resultado = valor.map((item, i) => {
      if (String(item).match(/\[/)) return `"${array.metaData[i].name}": ${item}`
      return `"${array.metaData[i].name}": "${item}"`
    })
    return `{${resultado}}`
  })
  return novoArray.map(item => JSON.parse(item))
}