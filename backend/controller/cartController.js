const Cart = require("../models/cart.model");
const catchAsync = require("../utils/catchAsync");

exports.addToCart = catchAsync(async (req, res) => {
  const { productId, quantity, price } = req.body;

  //retrieve cart of the user
  let cart = await Cart.findOne({ user: req.user._id });
  console.log(cart);
  if (cart) {
    //if cart already exists for the user then update the cart
    
    const itemIndex = cart.cartItems.findIndex(
      (item) => item.productId == productId
    );
    if (itemIndex > -1) {
      //if same product already exists then update
      const cartItem = cart.cartItems[itemIndex];
      cartItem.quantity = cartItem.quantity + quantity;
      cart.cartItems[itemIndex] = cartItem;
    } else {
      //else insert that item into users cart
      cart.cartItems.push({ productId, quantity, price });
    }
  } else {
    cart = new Cart({
      user: req.user._id,
      cartItems: [{ productId, quantity, price }],
    });
  }
  cart = await cart.save();
  return res.status(201).send({
    cart,
  });
});
