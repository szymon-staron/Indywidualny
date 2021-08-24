const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register
exports.register = async (req, res) => {
  //checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({message:'Email already exists'});

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //create a new user
  const { firstName, lastName, email, regulations, newsletter } = req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashPassword,
    regulations,
    newsletter,
  });

  try {
    const userSaved = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Login
exports.login = async (req, res) => {
  
  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(500).send({message:'Email lub hasło są nie prawidłowe'});

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(500).send({message:'Email lub hasło są nie prawidłowe'});

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET,{expiresIn:1200});
 
  return res.send({token,_id:user._id});
};

//getUserInformation not complet yet
exports.getUser = async (req,res) =>{
  const userId = req.user._id;
  try {
    const user = await User.findOne({_id:userId});
    res.status(200).json(user);
  }catch(error){
    res.status(500).json(error);
  }
 
}
