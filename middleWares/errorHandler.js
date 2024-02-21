const {constants} = require("../constants");


// every middleware has 3 mandatory fields (req,res,next)
// next means what should happen after middleware

const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode){
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found !" ,
                message : err.message,
                stackTrace :err.stack
            });
            break;
            
        case constants.UNAUTHORIZED:
            res.json({
                title:"UNAUTHORIZED!" ,
                message : err.message,
                stackTrace :err.stack
            });
            break;
        
        case constants.FORBIDDEN:
            res.json({
                title:"FORBIDDEN!" ,
                message : err.message,
                stackTrace :err.stack
            });
            break;
        
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed !" ,
                message : err.message,
                stackTrace :err.stack
            });
            break;
        default:
            console.log("No Error !!");
            break;
    }
};

module.exports = errorHandler;

