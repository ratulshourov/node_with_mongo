var mongoDb = require('mongodb').MongoClient;

var url = 'mongodb+srv://ashraf:01682244160ok@cluster0.cdo9y27.mongodb.net/?retryWrites=true&w=majority';

mongoDb.connect(url, function (error) {
    if (error) {
        console.log("Failed Connection");
    }
    else {
        console.log("Connected");
    }
});