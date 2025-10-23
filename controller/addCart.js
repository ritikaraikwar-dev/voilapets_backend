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

const addCart = async (req, res) => {
  try {
 
    const {guest_id} = req.body;

    console.log("Guest ID from add cart:", guest_id);


    if (!guest_id) {
      return res.status(400).json({ message: "Guest ID missing" });
    }
   // Destructure product data from request body
    const { id, title, price, image, color } = req.body;
    // Rename the variable to avoid shadowing
    const cartItem = await Cart.create({ id, title, price, image, color, guest_id: guestId});

    res.status(201).json({
      message: "data sent successfully",
      userData: cartItem,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = addCart;
