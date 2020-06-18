var sqlDb = require('mssql');
var sqlDbSettings = require('../settings');

const poolPromise = new sqlDb.ConnectionPool(sqlDbSettings.dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));
  
module.exports = {
    sqlDb, poolPromise
}