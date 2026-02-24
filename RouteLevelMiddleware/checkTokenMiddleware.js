let checkTokenMiddleware=(req,res,next)=>{
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({
            status:0,
            message:"Token is required",
    })
    }
    else if(req.query.token!=process.env.MYToken){
        return res.send({
            status:0,
            message:"Invalid token. Please provide a valid token.",
        })
    }
    next();
}

module.exports=checkTokenMiddleware;