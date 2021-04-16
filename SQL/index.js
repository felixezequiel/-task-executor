require('dotenv').config()

module.exports = {
  configConnection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectString: '172.19.20.250:1521/consinco'
  },

  consultaCategorias: `
    SELECT A.BARRA,
      A.codigoInterno,
      A.comprador,
      A.descricao,
      A.MARCA,
      A.fabricante,
      A.conteudo,
      A.categoriaN1,
      A.categoriaN2,
      A.categoriaN3,
      A.categoriaN4,
      A.categoriaN5
    FROM VW_KOCH_SCANNTECH_API_CATEGOR A
  `
}