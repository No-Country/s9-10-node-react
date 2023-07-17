import Form from "../models/form.model.js";

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
