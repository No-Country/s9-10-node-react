import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";
import Equip from "../models/equip.model.js";
import Role from "../models/role.model.js";
import { createAccessToken } from "../lib/jwt.js";
import { decodeToken, extractTokenFromCookie } from "../utils/cookieUtils.js";
export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const adminFound = await Admin.findOne({ email });
    if (adminFound) return res.status(400).json(["Admin already exists"]);
    const hashedPassword = await bcrypt.hash(password, 10);
    //Creamos el usuario
    const newAdmin = new Admin({
      email,
      username,
      password: hashedPassword,
    });
    //Guardamos el usuario en la db
    const adminSaved = await newAdmin.save();
    //Creamos el token
    const token = createAccessToken({ id: adminSaved._id });
    //Guardamos el token en la cookie
    res.cookie("token", token);
    //Devolvemos el usuario
    res.status(201).json({
      id: adminSaved._id,
      username: adminSaved.username,
      email: adminSaved.email,
      createdAt: adminSaved.createdAt,
      updatedAt: adminSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminFound = await Admin.findOne({ email });
  
    if (!adminFound)
      return res.status(400).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, adminFound.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });
    //Creamos el token
    const token = await createAccessToken({ id: adminFound._id });
    //Guardamos el token en la cookie
    res.cookie("token", token);
    //Devolvemos el usuario
    res.status(201).json({
      id: adminFound._id,
      username: adminFound.username,
      email: adminFound.email,
      createdAt: adminFound.createdAt,
      updatedAt: adminFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  //Extraer cookie y decodificar token
  const cookieString = req.headers.cookie;
  const token = extractTokenFromCookie(cookieString);
  const decodedToken = decodeToken(token);
  try {
    const adminId = decodedToken.id;  
    const admin = await Admin.findById(adminId);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json({
      id: admin._id,
      email: admin.email,
      username: admin.username,
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await User.find({}, {password: 0, __v: 0});    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, username, password, role } = req.body;
    const newUser = new User({
      email,
      username,
      password,
      role,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = {};

    if (req.body.role) {
      const { role } = req.body;

      let roleData;

      roleData = await Role.findOne({ name: role });

      if (!roleData) {
        roleData = new Role({
          name: role,
          users: [],
        });
      }

      updates.role = roleData._id;

      if (!roleData.users.includes(id)) {
        roleData.users.push(id);
      }

      await roleData.save();
    }

    if (req.body.equip) {
      const { equip } = req.body;

      let equipData;

      equipData = await Equip.findOne({ name: equip });

      if (!equipData) {
        equipData = new Equip({
          name: equip,
          members: [],
        });
      }

      updates.equip = equipData._id;

      if (!equipData.members.includes(id)) {
        equipData.members.push(id);
      }

      await equipData.save();
    }

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).populate("equip role");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role.name,
      equip: user.equip.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
