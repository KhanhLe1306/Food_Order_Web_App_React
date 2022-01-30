const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://khanhle:khanhle@cluster0.zwrr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
    // perform actions on the collection object
    console.log("sucess")
});

const collection = client.db("restaurant").collection("order");

module.exports = collection