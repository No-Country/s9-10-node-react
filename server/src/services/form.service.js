import Form from "../models/form.model.js";
import Response from "../models/answer.model.js";
import { HttpException } from "../utils/HttpException.js";

//Crear un formulario
export const createNewForm = async ({
  title,
  category,
  questions,
  comments,
}) => {
  // Validar los datos recibidos
  if (!title || !category || !questions || !comments) {
    throw new HttpException("Faltan campos obligatorios en el formulario", 400);
  }

  // Validar el tipo de preguntas y opciones
  for (const question of questions) {
    if (
      !question.question ||
      !question.type ||
      !["open", "closed", "scale", "yesno", "multiple"].includes(question.type)
    ) {
      throw new HttpException("Pregunta inválida en el formulario", 400);
    }

    // Validar opciones de pregunta cerrada o múltiple
    if (
      (question.type === "closed" || question.type === "multiple") &&
      (!question.options || question.options.length < 2)
    ) {
      throw new HttpException(
        "Pregunta cerrada o de selección múltiple debe tener al menos dos opciones",
        400
      );
    }

    // Validar rango de escala en pregunta de tipo "scale"
    if (
      question.type === "scale" &&
      (!question.scaleRange ||
        !question.scaleRange.min ||
        !question.scaleRange.max)
    ) {
      throw new HttpException(
        "Pregunta de escala debe tener un rango válido",
        400
      );
    }
  }

  // Crear un nuevo documento de formulario
  const newForm = new Form({
    title,
    category,
    questions,
    comments,
  });

  return newForm;
};

//Responder un formulario
export const createNewResponse = async ({ userId, formId, answers }) => {
  // Obtener el formulario correspondiente a formId
  const form = await Form.findById(formId);

  // Verificar si el formulario existe
  if (!form) {
    throw new HttpException("Formulario no encontrado", 404);
  }

  // Obtener los IDs de las preguntas del formulario
  const formQuestionIds = form.questions.map((question) =>
    question._id.toString()
  );

  // Obtener los IDs de las preguntas de las respuestas
  const answerQuestionIds = Object.keys(answers);

  // Verificar que las preguntas en las respuestas coincidan con las preguntas del formulario
  if (
    formQuestionIds.length !== answerQuestionIds.length ||
    !answerQuestionIds.every((questionId) =>
      formQuestionIds.includes(questionId)
    )
  ) {
    throw new HttpException(
      "Respuestas no válidas para el formulario especificado",
      400
    );
  }

  // Validaciones adicionales para cada respuesta
  for (const questionId in answers) {
    const formQuestion = form.questions.find(
      (question) => question._id.toString() === questionId
    );

    // Verificar el tipo de pregunta y realizar la validación correspondiente
    if (formQuestion.type === "closed") {
      const options = formQuestion.options;
      const answer = answers[questionId];

      if (!options.includes(answer)) {
        throw new HttpException(
          "Respuesta inválida para pregunta cerrada",
          400
        );
      }
    } else if (formQuestion.type === "scale") {
      const scaleRange = formQuestion.scaleRange;
      const answer = answers[questionId];

      if (answer < scaleRange.min || answer > scaleRange.max) {
        throw new HttpException(
          "Respuesta no válida para pregunta de escala",
          400
        );
      }
    } else if (formQuestion.type === "multiple") {
      const options = formQuestion.options;
      const answer = answers[questionId];

      if (
        !Array.isArray(answer) ||
        !answer.every((option) => options.includes(option))
      ) {
        throw new HttpException(
          "Respuesta no válida para pregunta de opción múltiple",
          400
        );
      }
    } else if (formQuestion.type === "yesno") {
      const answer = answers[questionId];

      if (!["Yes", "No", "Sí", "No"].includes(answer)) {
        throw new HttpException(
          "Respuesta inválida para pregunta de tipo Sí o No",
          400
        );
      }
    }
  }

  // Crear la nueva respuesta
  const newResponse = new Response({
    userId,
    formId,
    answers,
  });

  return newResponse;
};
