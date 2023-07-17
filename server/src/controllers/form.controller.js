import Form from "../models/form.model.js";
import Response from "../models/answer.model.js";

//Controller para la creación de un formulario
export const createForm = async (req, res) => {
  try {
    const { title, category, questions, comments } = req.body;

    // Validar los datos recibidos

    // Crear un nuevo documento de formulario
    const newForm = new Form({
      title,
      category,
      questions,
      comments,
    });

    // Guardar el formulario en la base de datos
    const createdForm = await newForm.save();

    res.status(201).json(createdForm);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el formulario", error: error.message });
  }
};

//Controller para la respuesta del usuario
export const createResponse = async (req, res) => {
  try {
    const { userId, formId, answers } = req.body;
  
    // Crear la nueva respuesta
    const newResponse = new Response({
      userId,
      formId,
      answers,
    });
  
    // Guardar la respuesta en la base de datos
    const savedResponse = await newResponse.save();
  
    res.status(201).json({
      message: "Response created successfully",
      response: savedResponse,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create response", error: error.message });
  }
};