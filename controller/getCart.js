// const User = require('../models/Cart');

// // api for show cart 

// const getCart = async(req , res)=>{

//      try{
         
//           const userId = await User.find({ userId }); 

//           // if product is not in cart
          
//           if(!product){
//            return res.status(300).json({
//                 message:"product is not available in cart"
//             })
//           }

//         return  res.status(200).json({
//             message:"data get successfully",
//             product:product
//           })
//      }
//      catch(error){
//         res.status(500).json({
//             message:error.message
//         })
//      }
// }

// module.exports = getCart;


const Cart = require('../models/Cart');  // Correct import

// API for showing cart items of a user
const getCart = async (req, res) => {
  try {
    const { userId } = req.params;  // assuming userId is passed in URL path e.g. /cart/:userId

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    // Find all cart items for the user
    const products = await Cart.find({ userId });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products available in cart" });
    }

    return res.status(200).json({
      message: "Cart items fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCart;
