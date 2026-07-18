require("../src/db/mongoose")
const User = require("../src/models/user")





// 6a5a1ecfe517e4119859c060


// User.findByIdAndUpdate("6a5a1ecfe517e4119859c060", {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age : 1})
// }).then(result => {
//     console.log(result)
// }).catch((e) => { 
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age : age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount("6a59f4b2efede56fcbaf5b6f", 5).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})