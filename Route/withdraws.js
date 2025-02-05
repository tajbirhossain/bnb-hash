const router = require("express").Router()
const Withdraw = require("../model/Withdraw")
const User = require("../model/User")


router.get("/get-all", async (req, res) => {
    try {
        const getAllItems = await Withdraw.find()
        res.status(200).json(getAllItems)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post("/set-draw", async (req, res) => {
    try {
        const drawStore = new Withdraw(req.body)
        const savedDraw = await drawStore.save()
        res.status(200).json(savedDraw)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/withdraw-deposit/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedWithdraw = await Withdraw.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        res.status(200).json(updatedWithdraw)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router