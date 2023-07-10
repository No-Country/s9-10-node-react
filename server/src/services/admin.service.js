import bcrypt from "bcryptjs";
import { HttpException } from "../utils/HttpException.js";
import { decodeToken, extractTokenFromCookie } from "../utils/cookieUtils.js";
import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";
import Role from "../models/role.model.js";
import Equip from "../models/equip.model.js";

//Registrar un usuario Admin
export const registerUser = async ({ email, password, username }) => {
  const adminFound = await Admin.findOne({ email });

  if (adminFound) {
    throw new HttpException("Admin already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  //Creamos el usuario
  const newAdmin = new Admin({
    email,
    username,
    password: hashedPassword,
  });
  //Guardamos el usuario en la db
  const adminSaved = await newAdmin.save();

  return adminSaved;
};

//Loguear usuario Admin

export const loginAdmin = async ({ email, password }) => {
  const adminFound = await Admin.findOne({ email });

  if (!adminFound) {
    throw new HttpException("Admin not found", 404);
  }

  const isMatch = await bcrypt.compare(password, adminFound.password);

  if (!isMatch) {
    throw new HttpException("Email and/or password is invalid ", 400);
  }

  return adminFound;
};

//Consultar perfil del usuario admin

export const getAdminProfile = async (cookieString) => {
  const token = extractTokenFromCookie(cookieString);
  const decodedToken = decodeToken(token);

  const adminId = decodedToken.id;
  const admin = await Admin.findById(adminId);
  if (!admin) {
    throw new HttpException("Admin not found", 404);
  }

  return admin;
};

// Crear un nuevo usuario
export const createNewUser = async ({ email, username, password, role }) => {
  //Validar que no exista el email o username en la BD
  const adminFound = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (adminFound) {
    throw new HttpException("Email and/or username already exists", 409);
  }

  //
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    username,
    password: hashedPassword,
    role,
  });
  const savedUser = await newUser.save();

  //Eliminar los campos de contraseña y __v
  const {
    password: omitPassword,
    __v: omitVersion,
    ...userWithoutSensitiveFields
  } = savedUser.toObject();

  return userWithoutSensitiveFields;
};

// Editar usuario
export const updateUser = async (id, role, equip) => {
  const updates = {};

  if (role) {
    let roleData = await Role.findOne({ name: role });

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

  if (equip) {
    let equipData = await Equip.findOne({ name: equip });

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
    throw new HttpException("User not found", 404);
  }

  return user;
};
