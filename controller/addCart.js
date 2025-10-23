// const Cart = require('../models/Cart');

// const addCart = async(req, res)=>{
//     try{
//     const sessionId = req.sessionID;

//         const{id, title, price, image, color} =   req.body;

//          if (!sessionId) {
//       return res.status(400).json({ message: "Session ID missing" });
//     }
             
//         const Cart = await Cart.create({id, title, price, image, color , session_id:sessionId});

//         res.status(201).json({
//             message:"data send successfully",
//             userData:Cart
//         })
//     }
//     catch(error){
//           res.status(500).json({
//             message:error.message
            
//           })
//     }
// }

// module.exports = addCart;


const Cart = require('../models/Cart');
const User = require('../models/User');

const addCart = async (req, res) => {
  try {
    const { userId, productId, title, price, image, color } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    // Check if user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create new cart item
    const newCartItem = await Cart.create({
      userId,
      productId,
      title,
      price,
      image,
      color,
      
    });

    res.status(201).json({
      message: "Item added to cart successfully",
      cartItem: newCartItem
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = addCart;
