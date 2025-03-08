const express = require("express");
const userMiddleware = require("../middleware/user"); // Corrected middleware name
const router = express.Router();
const { user, course } = require("../db");

router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await user.create({
        username,
        password

    
    })
    res.json({
        msg:"User creates successfully"
    })
});
  
router.post('/courses',userMiddleware,  async(req, res) => {
 const response = await user.find({});
 res.json({
    course:response
 })

});
   
// ---------------------------------*----------------------------------------------------
// This route is not working (the usermiddleware is returning "user doesnt exists "
//  despite given the correct headers)

router.get('/courses/:coursesID', userMiddleware, async (req, res) => {

    const courseId = req.params.coursesID;
    const username = req.user.username; // User is passed from middleware

await user.updateOne({
    username,
    
 
}),{
    "$push":{
        purchasedcourses:courseId
    }
}
res.json({
    msg:"User updated suscessefully"
})

});


// ---------------------------------*----------------------------------------------------

router.get('/purchasedCourses', userMiddleware, (req, res) => {



});

module.exports = router;
