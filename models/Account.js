const mongoosee = require("mongoose")

const accountSchema = new mongoosee.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true, enum: ["credited", "debited"] },
})

module.exports = mongoosee.model("account", accountSchema)