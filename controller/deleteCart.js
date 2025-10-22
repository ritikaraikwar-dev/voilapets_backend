const Cart = require("../models/Cart");

// api for delete cart 

const deleteCart = async (req, res) => {
  try {
    const sessionId = req.sessionID;
    const cartItemId = req.params.id;

    if (!sessionId) {
      return res.status(400).json({ message: "Session ID is missing" });
    }

     // find cart using id then delelte 

    const Cart = await Cart.findOneAndDelete({
      _id: cartItemId,
      session_id: sessionId
    });

    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found or doesn't belong to this session" });
    }

    return res.status(200).json({
      message: "Cart item deleted successfully",
      deletedItem,
    });

  } 
  catch (error) {
    console.error("Error deleting cart item:", error);
    return res.status(500).json({
      message: "Internal server error",
      error
    });
  }
};

module.exports = deleteCart;
