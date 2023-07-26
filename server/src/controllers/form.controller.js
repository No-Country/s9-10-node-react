import {
  createNewForm,
  createNewResponse,
  updateFormService,
} from "../services/form.service.js";
import { HttpException } from "../utils/HttpException.js";
import Form from "../models/form.model.js";

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

//Controller para obtener todos los formularios
export const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find().select({
      comments: 0,
      __v: 0,
      questions: 0,
    });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFormController = async (req, res) => {
  const formId = req.params.id;
  const { _id, __v, createdBy, ...updatedFields } = req.body;

  try {
    // Guardar el formulario actualizado con las preguntas correspondientes
    const updatedForm = await updateFormService(formId, updatedFields);

    return res.status(200).json(updatedForm);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Controller para eliminar un formulario
export const deleteForm = async (req, res) => {
  const formId = req.params.id;

  try {
    // Buscar el formulario por su ID
    const deletedForm = await Form.findByIdAndRemove(formId);

    if (!deletedForm) {
      return res.status(404).json({ message: "Formulario no encontrado" });
    }

    return res
      .status(200)
      .json({ message: "Formulario eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Controller para editar un formulario
// export const updateForm = async (req, res) => {
//   const formId = req.params.id;
//   const updatedFields = req.body;

//   try {
//     // Elimina campos que no se deberían actualizar (_id, questions._id y __v)
//     delete updatedFields._id;
//     delete updatedFields.__v;
//     updatedFields.questions.forEach((question) => {
//       delete question._id;
//     });
//     // Excluir el '_id' de cada objeto en 'questions'
//     const updatedForm = await Form.findByIdAndUpdate(
//       formId,
//       { $set: updatedFields },
//       { new: true, runValidators: true, projection: { _id : false, __v: 0 } }
//     );

//     if (!updatedForm) {
//       return res.status(404).json({ message: "Formulario no encontrado" });
//     }

//     return res.status(200).json(updatedForm);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const updateForm = async (req, res) => {
//   const formId = req.params.id;
//   const { _id, __v, ...updatedFields } = req.body;

//   try {
//     // Elimina campos que no se deberían actualizar (_id, questions._id y __v)

//     const existingForm = await Form.findById(formId);
//     if (!existingForm) {
//       return res.status(404).json({ message: "Formulario no encontrado" });
//     }

//     // Actualizar o crear preguntas
//     const updatedQuestions = [];
//     for (const updatedQuestion of updatedFields.questions) {
//       if (updatedQuestion._id) {
//         // Si la pregunta tiene un _id existente, actualizamos sus campos
//         const existingQuestion = existingForm.questions.find(
//           (question) => question._id.toString() === updatedQuestion._id
//         );
//         if (existingQuestion) {
//           Object.assign(existingQuestion, updatedQuestion);
//           updatedQuestions.push(existingQuestion);
//         }
//       } else {
//         // Si la pregunta no tiene _id, la agregamos como nueva pregunta
//         updatedQuestions.push(updatedQuestion);
//       }
//     }

//     // Actualizamos las preguntas en el formulario
//     existingForm.questions = updatedQuestions;

//     // Guardar el formulario actualizado con las preguntas correspondientes
//     const updatedForm = await existingForm.save();

//     return res.status(200).json(updatedForm);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const updateForm = async (req, res) => {
//   const formId = req.params.id;
//   const { _id, __v, ...updatedFields } = req.body;

//   try {
//     // Elimina campos que no se deberían actualizar (_id, questions._id y __v)

//     const existingForm = await Form.findById(formId);
//     if (!existingForm) {
//       return res.status(404).json({ message: "Formulario no encontrado" });
//     }

//     // Actualizar o crear preguntas
//     const updatedQuestions = [];
//     for (const updatedQuestion of updatedFields.questions) {
//       if (updatedQuestion._id) {
//         // Si la pregunta tiene un _id existente, actualizamos sus campos
//         const existingQuestion = existingForm.questions.find(
//           (question) => question._id.toString() === updatedQuestion._id
//         );
//         if (existingQuestion) {
//           Object.assign(existingQuestion, updatedQuestion);
//           updatedQuestions.push(existingQuestion);
//         }
//       } else {
//         // Si la pregunta no tiene _id, la agregamos como nueva pregunta
//         updatedQuestions.push(updatedQuestion);
//       }
//     }

//     // Actualizamos las preguntas en el formulario
//     existingForm.questions = updatedQuestions;

//     // Actualizar los otros campos del formulario
//     Object.assign(existingForm, updatedFields);

//     // Guardar el formulario actualizado con las preguntas correspondientes
//     const updatedForm = await existingForm.save();

//     return res.status(200).json(updatedForm);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
