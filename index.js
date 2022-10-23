// var mongoDb = require('mongodb').MongoClient;

// var url = 'mongodb+srv://ashraf:01682244160ok@cluster0.cdo9y27.mongodb.net/?retryWrites=true&w=majority';

// mongoDb.connect(url, function (error) {
//     if (error) {
//         console.log("Failed Connection");
//     }
//     else {
//         console.log("Connected");
//     }
// });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ashraf:01682244160ok@cluster0.cdo9y27.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("school").collection("students");
    // perform actions on the collection object
    client.close();
    if(err) {
        console.log("Failed Connection"); 
    }
    else {
        console.log("Connected");
    }
 
});