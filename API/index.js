require('dotenv').config()

const axios = require('axios') 
const host = 'http://test.parceiro.scanntech.com/api-mercado/api-mercado/api/v1/redes/384/estructuramercadologica'
const hostTeste = 'http://172.25.95.82:1000/api-teste'

module.exports = result => axios.post(host, result, {
  auth: {
    username: process.env.USER_API,
    password: process.env.PASS_API
  }
})