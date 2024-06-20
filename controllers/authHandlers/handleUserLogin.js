import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Missing Credentials" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    return res.status(200).send({ message: "User login" });
  } catch (error) {
    return res.status(500).send({ message: "Server error", error });
  }
};

export default handleUserLogin;
