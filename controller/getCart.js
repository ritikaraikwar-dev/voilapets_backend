const User = require('../models/Cart');

// api for show cart 

const getCart = async(req , res)=>{

     try{
       const guestId = req.cookies?.guest_id;
          const product = await User.find({ guest_id: guestId }); 

          // if product is not in cart
          
          if(!product){
           return res.status(300).json({
                message:"product is not available in cart"
            })
          }

        return  res.status(200).json({
            message:"data get successfully",
            product:product
          })
     }
     catch(error){
        res.status(500).json({
            message:error.message
        })
     }
}

module.exports = getCart;