const {MongoClient, Db} = require('mongodb');

let dbConnection;
let uri = 'mongodb+srv://phonetest:simple@cluster0.jevx2dr.mongodb.net/?retryWrites=true&w=majority'

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