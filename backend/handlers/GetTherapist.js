const { MongoClient } = require("mongodb");


require("dotenv").config();
const { MONGO_URI } = process.env

const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}

const getTherapist = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options);
        
    try {
        await client.connect();
        const db = client.db("HBMT");

        const result = await db.collection("Therapists").findOne()

    } catch (err) {
        res.status(404).json({status:500, message:"Not Found"})
    }
    client.close();
};

module.exports = {getTherapist};