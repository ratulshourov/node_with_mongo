var mongoDb = require('mongodb').MongoClient;

var url = 'mongodb+srv://ashraf:01682244160ok@cluster0.cdo9y27.mongodb.net/?retryWrites=true&w=majority';
var config={ useUnifiedTopology:true };
mongoDb.connect(url, function (error,MyMongoCollection) {
    if (error) {
        console.log("Failed Connection");
    }
    else {
        console.log("Connected");
        //insertData(MyMongoCollection);
        deleteOneMethod(MyMongoCollection);
    }
});

function insertData(MyMongoCollection) {
    var database=MyMongoCollection.db('school');
    var collection=database.collection('students');

    var myobj = { name: "ashraf", address: "bd" };
    collection.insertOne(myobj);
}

function deleteOneMethod(MyMongoCollection) {
    var database=MyMongoCollection.db('school');
    var collection=database.collection('students');

    var myobj = {name:"ashraf"};
    collection.deleteOne(myobj);
}