const { MongoClient, ObjectId } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL).then((client) => {
    const db = client.db(databaseName)


    // db.collection("users").deleteMany({
    //     age: 19
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     cosole.log(error)
    // })

    db.collection("tasks").deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        cosole.log(error)
    })



    // db.collection("users").findOne({
    //     _id: new ObjectId("6a575a2e4b66e6db9f016bb9"),
    // }).then((result) => {
    //     console.log(result)
    //     client.close()
    // }).catch((error) => {
    //     console.log(error)
    //     client.close()
    // })

    // db.collection("tasks").find({
    //     completed: true
    // }).toArray().then((result) => {
    //     console.log(result)
    //     client.close()
    // }).catch((error) => {
    //     console.log(error)
    //     client.close()
    // })


    // db.collection("users").insertOne({
    //     _id: id,
    //     name: "Joseph",
    //     age: 19
    // }).then((result) => {
    //     console.log(result)
    //     client.close()
    // }).catch((error) => {
    //     console.log(error)
    //     client.close()
    // })

    // db.collection("tasks").insertMany([
    //     { description: "Clean the house", completed: true },
    //     { description: "Renew inspection", completed: true },
    //     { description: "Walk the dog", completed: false}
    // ]).then((result) => {
    //     console.log(result.insertedCount)
    //     console.log(result.insertedIds)
    //     client.close()
    // }).catch((error) => {
    //     console.log("Unable to insert documents!", error)
    //     client.close()
    // })
}).catch(() => {
    console.log("Unable to fetch !")
})
