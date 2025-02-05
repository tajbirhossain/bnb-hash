const router = require("express").Router()
const Deposit = require("../model/Deposit")


router.get("/get-all", async (req, res) => {
    try {
        const getAllItems = await Deposit.find()
        res.status(200).json(getAllItems)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post("/set-deposit", async (req, res) => {
    try {
        const depositStore = new Deposit(req.body)
        const savedDeposit = await depositStore.save()
        res.status(200).json(savedDeposit)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post("/update-deposit/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedDeposit = await Deposit.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        res.status(200).json(updatedDeposit)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router