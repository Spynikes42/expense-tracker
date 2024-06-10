const { getAllUsers, loginUser, logoutUser, registerUser } = require("../controller/authController")

const router = require("express").Router()


router
    .post("/login", loginUser)
    .post("/logout", logoutUser)
    .post("/register", registerUser)
    .get("/users", getAllUsers)


module.exports = router