const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require('uuid');


require("dotenv").config();
const { MONGO_URI } = process.env

const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}

const createNewCustomer = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect();
        const db = client.db("HBMT");

        const searchCustomers = await db.collection("Customers").find ({

            "lastname": req.body.lastname,
            "firstname": req.body.firstname,
            "phone": req.body.phone
        }).toArray();

        if(searchCustomers.length === 0){

            const result = await db.collection("Customers").insertOne({
                ...req.body,
                _id: uuidv4(),
            });
            res.status(201).json({status:201, data: req.body});
        } else {
            res.status(409).json({status:409, message: "Slot not available"})
        }
    } catch (err) {
        res.status(500).json({status:500, data: req.body, message: err.message})
    }
    client.close();
};

module.exports = {createNewCustomer};