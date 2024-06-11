const User = require("../models/User")
const bcrypt = require("bcrypt")

exports.registerUser = asynchandler(async (req, res) => {
    const { email, name, password } = req.body
    // const result = await User.find()   //[] 
    const result = await User.findOne({ email })   //{}  undefined
    if (result) {
        return res.status(400).json({ message: "Email Already Exits" })
    }
    const x = await bcrypt.hash(req.body.password, 10)
    await User.create({ name, email, password: x })
    res.json({ message: "User Registered Success" })
})

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(404).json({ message: "Email Not Found" })
        }
        const verify = await bcrypt.compare(password, result.password)

        if (!verify) {
            return res.status(400).json({ message: "Password Do Not Match" })
        }
        res.json({ message: "login  Success" })
    } catch (error) {
        res.status(400).json({ message: "Error", error: error.message })
    }
}
