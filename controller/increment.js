const user = require("../models/Cart"); // Replace with your actual Cart model

const increment = async (req, res) => {
  try {
    const session_id = req.sessionID;
    
    console.log('Session ID:', session_id);
    console.log('Received ID:', id);
    if (!session_id || !id) {
      return res.status(400).json({ message: "Missing session ID or product ID" });
    }

    const updatedItem = await user.findOneAndUpdate(
      { session_id: session_id},
      { $inc: { quantity: 1 } },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({
      message: "Quantity increased successfully",
      item: updatedItem
    });

  } catch (error) {
    console.error("Error in incrementQuantity:", error);
    res.status(500).json({
      message: "Internal server error",
      error
    });
  }
};

module.exports = increment;
