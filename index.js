const  express = require('express')
const {connectToDb, getDb} = require('./db')

//initialize app and middleware
const app = express();
//body parser 
app.use(express.json());
app.use

//db connection
let db;
connectToDb((err) =>{
    if(!err){
    const port = 3001
    app.listen(port, () =>{
        console.log(`app listening on port ${port}`)
    })
    db = getDb()
    }
})







