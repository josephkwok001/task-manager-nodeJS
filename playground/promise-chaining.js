require("../src/db/mongoose")
const User = require("../src/models/user")





// 6a5a1ecfe517e4119859c060


User.findByIdAndUpdate("6a5a1ecfe517e4119859c060", {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age : 1})
}).then(result => {
    console.log(result)
}).catch((e) => { 
    console.log(e)
})