import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import genToken from "../config/token.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User Exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,

      password: hashPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }

    const token = genToken(
      user._id,

      user.email,
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      secure: false, // true if using HTTPS
      sameSite: "Lax",
    });
    res.status(200).json({
      message: "login Success",
      token,
      user: {
        id: user._id,

        name: user.name,

        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export const logout = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    message: "Logout Success",
  });
};
