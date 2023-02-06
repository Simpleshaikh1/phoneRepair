const router = require("express").Router()

const DB = client.db('phoneRepair');

const DbCollection = DB.collection('customers');

let repairStatus = "pending";

router.post('/submit', async (req, res) => {
    const phone = {
        phoneName: req.body.phoneName,
        phoneModel: req.body.phoneModel
    };
    DbCollection.createIndex( { phoneName: 1 }, { unique: true } );
    DbCollection.insertOne(phone)
        .then((result) => {
            res.status(201).json({message:'Phone registered', result, repairStatus})
            .catch(err => {
                res.send(console.log(err))
            })
        })
});

router.get('/update-repair-status', async(req, res) =>{
    repairStatus = "success";
    res.status(200).json({message: 'Repair Status Updated'})
});

router.get('/check-repair-status', async(req, res) =>{
    if(repairStatus === "success"){
        res.status(200).json({
            message: 'your repair has been completed successfully'
        })
    }else{
        res.status(202).json({
            message: `Your repair status is currently: ${repairStatus}`
        })
    }
})

