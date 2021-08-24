const Products = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    const Product = await Products.find();
    res.status(200).json(Product);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getDiscount = async (req, res) => {
  try {
    const Product = await Products.find();
    const discount = Product.filter((item) => item.discount !== 0);
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Oops! coś poszło nie tak',
    });
  }
};
exports.postProduct = async (req, res) => {
  const {
    title,
    image,
    price,
    discount,
    time,
    amount,
    color,
    description,
    category,
    tags
  } = req.body;
  const product = new Products({
    title,
    image,
    price,
    discount,
    time,
    amount,
    color,
    description,
    category,
    tags,
  });
  try {
    const newProduct = await product.save();
    res.send(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
