const CronJob = require('cron').CronJob
const db = require('oracledb')
const jsonfile = require('jsonfile')
const sendData = require('./API')
const DifferentObjects = require('./function/DifferentObjects')
const BuildObject = require('./helpers/index')
const SQL = require('./SQL')
const file = __dirname+'/data/lastQuery.json'

const job = new CronJob('1 1 9 * * sun', async () => {

  const conn = await db.getConnection(SQL.configConnection)
  const sql = await conn.execute(SQL.consultaCategorias)
  conn.close()

  const result = BuildObject(sql)
  const estrutura = {
    "estruturaMercadologica": result
  }

  let oldData = await jsonfile.readFile(file)

  const data = DifferentObjects(oldData.estruturaMercadologica, result)

  jsonfile.writeFile(file, estrutura)

  if (data.length) {
    sendData(data)
  }
})

job.start()