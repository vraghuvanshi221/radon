const jwt =require("jsonwebtoken");


const authenticate = function(req, res, next) {
    try { 
    let token = req.headers["x-auth-token"]
    if(!token) return res.status(400).send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.status(403).send({status: false, msg:"token is not valid"})

}  catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })}
     
    //check the token in request header
    //validate this token

    next()
 
};


const authorise = function(req, res, next) {
    try {
    let token = req.headers["x-auth-token"]
    if(!token) return res.status(400).send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.status(403).send({status: false, msg:"token is not valid"})
    
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.status(403
        ).send({status: false, msg: 'User logged is not allowed to modify the requested users data'}) 
}
     catch (err) {
            console.log("This is the error :", err.message)
            res.status(500).send({ msg: "Error", error: err.message })
        }
    // comapre the logged in user's id and the id in request
    next()
};


module.exports.authenticate=authenticate
module.exports.authorise=authorise