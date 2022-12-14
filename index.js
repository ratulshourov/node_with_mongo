var mongoDb = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
//var url = 'mongodb+srv://ashraf:01682244160ok@cluster0.cdo9y27.mongodb.net/?retryWrites=true&w=majority';
var url = 'mongodb://localhost:27017/';
var config = { useUnifiedTopology: true };
app.use(bodyParser.json());
// app.get('/', function (req, response) {
//     // var jsonArray=[
//     //     {
//     //         name:"AAA",
//     //         address:"DHAKA"
//     //     },
//     //     {
//     //         name:"BBB",
//     //         address:"DHAKA"
//     //     },
//     // ];
//     // response.json(jsonArray);
//     //response.download('./pic.jpg');
//     // response.redirect('http://google.com');
//     //response.cookie("name","ratul");
//     // response.cookie("profession","engineer");
//     response.clearCookie("name");
//     response.send('cookie set successfully');
// })
//post Request
// app.post('/insertintoheader', function (req, response) {
//     response.append("name", "ratul uddin ashraf");
//     response.append("profession", "software engineer");
//     response.send('append successfully');
// })



//response.end('Pic Download');
app.listen(27017, function (req, response) {
    console.log('response');
});
mongoDb.connect(url, function (error, MyMongoCollection) {
    if (error) {
        console.log("Failed Connection");
    }
    else {
        // console.log("Connected");
        //insertData(MyMongoCollection);
        //deleteOneMethod(MyMongoCollection);
        //deleteAllData(MyMongoCollection);
        //fineOneWithoutCondition(MyMongoCollection);
        //fineOneWithCondition(MyMongoCollection);
        //findAll(MyMongoCollection);
        //findAllByProjection(MyMongoCollection);
        //findByCondition(MyMongoCollection);
        //findByConditionWithLimit(MyMongoCollection);
        //sortData(MyMongoCollection);
        //UpdateData(MyMongoCollection);
        //createCollection(MyMongoCollection);
        //deleteCollection(MyMongoCollection);

        // app.post('/insert', function (request, response) {
        //     var database = MyMongoCollection.db('school');
        //     var collection = database.collection('students');
        //     var name = request.query.name;
        //     var address = request.query.address;
        //     var myobj = { name: name, address: address };
        //     collection.insertOne(myobj);
        //     var data = [
        //         {
        //             status: 200,
        //             message: 'successfully inserted'
        //         }
        //     ];
        //     response.json(data);
        // })
        /*
                app.post('/insert', function (request, response) {
                    var database = MyMongoCollection.db('school');
                    var collection = database.collection('students');
                    var name = request.query.name;
                    var address = request.query.address;
                    var myobj = { name: name, address: address };
                    collection.insertOne(myobj);
                    var data = [
                        {
                            status: 200,
                            message: 'successfully inserted'
                        }
                    ];
                    response.json(data);
                })
                */
        /*
        get data from the postman header
         */
        //    app.get('/datafromHeader', function (request, response) {
        //     var database = MyMongoCollection.db('school');
        //     var collection = database.collection('students');
        //     var name = request.header('userName');
        //     response.send(name);
        // })
        app.get('/fromJsonBody',function(req,res){
                var jsonData=req.body;
                res.end(jsonData.name);
        });
    }
});

function insertData(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');

    var myobj = { name: "uddin", address: "bd" };
    collection.insertOne(myobj);
}

function deleteOneMethod(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');

    var myobj = { name: "ashraf" };
    collection.deleteOne(myobj);

}

function deleteAllData(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');

    collection.deleteMany(function (error, ResultObj) {
        if (error) {
            console.log('====================================');
            console.log('failed delete');
            console.log('====================================');
        }
        else {
            console.log(ResultObj);
        }
    });

}

function fineOneWithoutCondition(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    var findOneObj = {};
    collection.findOne(findOneObj, function (error, ResultObj) {
        if (error) {
            console.log('====================================');
            console.log('failed');
            console.log('====================================');
        }
        else {
            console.log(ResultObj);
        }
    });

}


function fineOneWithCondition(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    var findOneObj = { name: "shourov" };
    collection.findOne(findOneObj, function (error, ResultObj) {
        if (error) {
            console.log('====================================');
            console.log('failed');
            console.log('====================================');
        }
        else {
            console.log(ResultObj);
        }
    });

}


function findAll(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    collection.find().toArray(function (error, ResultObj) {
        if (error) {
            console.log('====================================');
            console.log('failed');
            console.log('====================================');
        }
        else {
            console.log(ResultObj);
        }
    });

}

function findAllByProjection(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');

    var allColumnObj = {};
    var columnName = { 'name': '' }
    collection.find(allColumnObj, columnName).toArray(function (error, result) {
        console.log('====================================');
        console.log(result);
        console.log('====================================');
    });

}


function findByCondition(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    var dataObj = { name: 'shourov', address: 'bd' }
    collection.find(dataObj).toArray(function (error, result) {
        console.log(result);
    });

}

function findByConditionWithLimit(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    collection.find().limit(1).toArray(function (error, result) {
        console.log(result);
    });

}


function sortData(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    //1 sort assending order -1 desending order
    var sortPattern = { name: 1 }
    collection.find().sort(sortPattern).toArray(function (error, result) {
        console.log(result);
    });

}

function UpdateData(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    var collection = database.collection('students');
    //1 sort assending order -1 desending order
    var objectQuery = { name: 'shourov', address: 'dhaka' }
    var updateData = { $set: { name: 'Md.Ratul Uddin Ashraf' } }
    collection.updateOne(objectQuery, updateData, function (error, result) {
        console.log(result);
    });

}

function createCollection(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    database.createCollection('teachers', function (error, result) {
        console.log(result);
    });

}

function deleteCollection(MyMongoCollection) {
    var database = MyMongoCollection.db('school');
    database.dropCollection('teachers', function (error, result) {
        console.log(result);
    });

}

