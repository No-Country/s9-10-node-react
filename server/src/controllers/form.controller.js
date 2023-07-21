import { createNewForm, createNewResponse } from "../services/form.service.js";
import { HttpException } from "../utils/HttpException.js";

//Controller para la creación de un formulario
export const createForm = async (req, res) => {
  try {
    const { title, category, questions, comments } = req.body;

    // Llamamos al servicio que crea el formulario
    const newForm = await createNewForm({
      title,
      category,
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
    const { userId, formId, answers, comments } = req.body;

    // Guardar la respuesta en la base de datos
    const newResponse = await createNewResponse({ userId, formId, answers, comments });

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