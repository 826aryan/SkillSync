const express = require("express");
const adminMiddleware = require("../middleware/admin.js").default; // Corrected middleware name
const router = express.Router();
const { admin, course }= require("../db");



router.post('/signup', async (req, res) => {

     const username = req.body.username;
     const password = req.body.password;

    await admin.create({
        username: username,
        password: password

     })
        res.json({
            msg:"Admin created sucsceesfully "
        })

});

// ---------------------------------*******------------------------------------------------

router.post('/courses', adminMiddleware, async (req, res) => {
 const title = req.body.title;
 const description= req.body.description;
 const imagelink= req.body.imagelink;
 const price = req.body.title;

 const newcouse = await course.create({
    title,
    description,
    imagelink,
    price
 })
 console.log(newcouse);
 res.json({
    msg:'course creates suscessefully',couseID : newcouse._id
 })
 

});



// ---------------------------------*******------------------------------------------------

router.get('/allcourses', adminMiddleware, async(req, res) => {
    // Implement logic for fetching admin courses
    const response = await course.find({})
    res.json({
        course:response
    })

});

module.exports = router;
