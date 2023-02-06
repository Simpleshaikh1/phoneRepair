const DB = require('dotenv').config()
const {MongoClient, Db} = require('mongodb');

let dbConnection;
let uri = process.env.DB

module.exports = {
    connectToDb: (cb) =>{
        MongoClient.connect(uri)
            .then((client) =>{
                dbConnection = client.db();
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },

    getDb: () => dbConnection
}