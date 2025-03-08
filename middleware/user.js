const { user,course }= require("../db");


 function userMiddleware(req,res, next){
    const username= req.header.username;
    const password = req.header.password;

    user.findOne({
        username: username,
        password: password

    })

        .then(function(value){
            if(value){
                
                 next();
            }
                    else{
                res.status(404).json({
                    msg:"user Doesnt exists"
                })
            }
        })
  

 }
 module.exports = userMiddleware;