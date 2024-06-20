import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

const handleUserRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name || !email || !password) {
    // Corrected condition
    return res.status(400).send({ message: "Missing Credentials" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: "Invalid Email" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    newUser.password = await bcrypt.hash(password, 12);
    await newUser.save();

    return res.status(201).send({ newUser });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Server error", error: error.message });
  }
};

export default handleUserRegister;
