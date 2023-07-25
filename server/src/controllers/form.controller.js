import { createNewForm, createNewResponse } from "../services/form.service.js";
import { HttpException } from "../utils/HttpException.js";

//Controller para la creación de un formulario
export const createForm = async (req, res) => {
  try {
    const { title, description, rolesAllowed, questions, comments } = req.body;

    // Obtener el token desde la cookie
    const token = req.cookies.token;
    
    // Llamamos al servicio que crea el formulario
    const newForm = await createNewForm({
      title,
      description,
      token,
      rolesAllowed,
      questions,
      comments,
    });

    res.status(201).json(newForm);
  } catch (error) {
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

//Controller para la respuesta del usuario
export const createResponse = async (req, res) => {
  try {
    const { userId, evaluatedUserId, formId, answers, comments } = req.body;

    // Guardar la respuesta en la base de datos
    const newResponse = await createNewResponse({
      userId,
      evaluatedUserId,
      formId,
      answers,
      comments,
    });

    const savedResponse = await newResponse.save();

    res.status(201).json({
      message: "Respuesta creada con éxito",
      response: savedResponse,
    });
  } catch (error) {
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
