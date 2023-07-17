import User from "../models/user.model.js";
import { HttpException } from "../utils/HttpException.js";
import { createAccessToken } from "../lib/jwt.js";
import {
  createNewUser,
  getAdminProfile,
  loginAdmin,
  registerUser,
  updateUser,
} from "../services/admin.service.js";
import { processImage } from "../helpers/processImage.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    console.log(email, "email controller");
    const register = await registerUser({ email, password, username });

    //Creamos el token
    const token = await createAccessToken({ id: register._id });
    //Guardamos el token en la cookie
    res.cookie("token", token);

    //Devolvemos el usuario
    res.status(201).json({
      id: register._id,
      username: register.username,
      email: register.email,
      createdAt: register.createdAt,
      updatedAt: register.updatedAt,
    });
  } catch (error) {
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminFound = await loginAdmin({ email, password });

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
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
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
  try {
    const cookieString = req.headers.cookie;
    const admin = await getAdminProfile(cookieString);
    res.status(200).json({
      id: admin._id,
      email: admin.email,
      username: admin.username,
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt,
    });
  } catch (error) {
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0, __v: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { email, username, password, role } = req.body;
  try {
    const savedUser = await createNewUser({ email, username, password, role });
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
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, equip } = req.body;

    const user = await updateUser(id, role, equip);

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
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export const uploadPictureAdmin = async (req, res) => {
  const images = req.files;
  let imagePaths = [];
  console.log(req.user.id);
  if (images) {
    try {
      imagePaths = await Promise.all(
        images.map((image) => processImage(image))
      );
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error al procesar las imágenes", Eerror: error });
    }
  }
  res.status(200).json({ message: imagePaths });
};
