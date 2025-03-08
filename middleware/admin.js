import { admin, course } from "../db";


function adminMiddleware(req, res, next){

    const username = req.headers.username;
    const password = req.headers.password;

    admin.findOne({
        username: username,
        password: password

    })

        .then(function(value){
            if(value){
                 next();
            }else{
                res.status(404).json({
                    msg:"Admin Doesnt exists"
                })
            }
        })
}
export default adminMiddleware;