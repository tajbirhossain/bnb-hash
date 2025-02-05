const epxress = require("express")
const multer = require("multer")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./Route/users")
const authRoute = require("./Route/auth")
const depositRoute = require("./Route/deposits")
const withdrawRoute = require("./Route/withdraws")
const referRoute = require("./Route/refers")
const app = epxress()
app.use(epxress.json())
dotenv.config()
app.use(cors({ origin: "*" }))
mongoose.connect(process.env.MONGO_URI).then(() => console.log("mongodb connected"))


app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/deposit", depositRoute)
app.use("/withdraw", withdrawRoute)
app.use("/refer", referRoute)




const port = 4000
app.listen(port, () => console.log(`server running on port ${port}`))