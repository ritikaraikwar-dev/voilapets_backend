const Cart = require('../models/Cart');

const addCart = async(req, res)=>{
    try{
    const sessionId = req.sessionID;

        const{id, title, price, image, color} =   req.body;

         if (!sessionId) {
      return res.status(400).json({ message: "Session ID missing" });
    }
             
        const Cart = await Cart.create({id, title, price, image, color , session_id:sessionId});

        res.status(201).json({
            message:"data send successfully",
            userData:Cart
        })
    }
    catch(error){
          res.status(500).json({
            message:error.message
            
          })
    }
}

module.exports = addCart;

