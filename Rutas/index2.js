

const express = require('express')
const router = express.Router()

//extra
const userRoute = require("./user.route");
const albumRoute = require("./album.route");


// trabajar desde aca
router.get('/discos', async (req, res)=>{
    try {
      //const result = await Discos.find({})
  
      res.status(200).send("ok")
    } catch (error) {
      res.status(404).send("No data")
    }
  })



//hasta aca
module.exports = router

