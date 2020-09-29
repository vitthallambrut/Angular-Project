const router = require("express").Router();

const Details = require("../model/Details");

router.post("/", async (req,res) =>{
    const details = new Details({
    name: req.body.name,
    dob: req.body.dob,
    address: req.body.address,
    height: req.body.height,
    weight: req.body.weight,
    hobbies: req.body.hobbies
    });
    try {
        const savedDetails = await details.save();
        res.send(savedDetails);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/", async (req, res)=>{
    try {
        const details = await Details.find();
        res.json(details);
    } catch (error) {
        res.json({message:error})
    }
});

module.exports =router;
