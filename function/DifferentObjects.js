module.exports = DifferentObjects = (oldData, newData) => {
  const data = oldData.filter((odt, index) => odt.DESCRICAO + odt.CATEGORIAN1 + odt.CATEGORIAN2 + odt.CATEGORIAN3 + odt.CATEGORIAN4 + odt.CATEGORIAN5 !== newData[index].DESCRICAO + newData[index].CATEGORIAN1 + newData[index].CATEGORIAN2 + newData[index].CATEGORIAN3 + newData[index].CATEGORIAN4 + newData[index].CATEGORIAN5)
  return data
}