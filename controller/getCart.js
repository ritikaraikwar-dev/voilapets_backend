const User = require('../models/Cart');

// api for show cart 

const getCart = async(req , res)=>{

     try{
       const guestId = req.params.id;
    if (!guestId) return res.status(400).json({ message: 'Guest ID missing' });

        //  const products = await User.find({ guest_id: guestId }); // make sure you use Cart model here
          
        //   if(!products){
        //    return res.status(300).json({
        //         message:"product is not available in cart"
        //     })
        //   }

        return  res.status(200).json({
            message:"data get successfully",
            
          })
     }
     catch(error){
        res.status(500).json({
            message:error.message
        })
     }
}

module.exports = getCart;