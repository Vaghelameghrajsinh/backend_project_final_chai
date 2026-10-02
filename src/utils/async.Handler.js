
const asyncHandler = (fn) => async(req ,res,next) => {
    
    try {

        await fn(req , res , next);
        
    }catch (error) {
        res.status((error.code || 500)).json({
            success : false,
            message : error.message
        })
    }
}

export {asyncHandler}


// higher order function : jo fxn jo kisi fxn ko parameter me accept kr skte and :
// and fxn ko retrun ki par ske
// fxn ko kisi variable ki tarah treat kr ske : 




/*
const asyncHandler = () => {}
const asyncHandler = (fn) => () => {}
const asyncHandler = (fn) => async() => {} 
 */


