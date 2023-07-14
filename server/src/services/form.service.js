import Form from "../models/form.model.js";
import UserScore from "../models/userScore.model.js";

export const createForm = async (formData) => {
  // Lógica para crear un nuevo formulario en la base de datos
};

export const getFormById = async (formId) => {
  // Lógica para obtener un formulario por su identificador
};

export const saveFormScores = async (
  userId,
  memberId,
  formId,
  scores,
  comments
) => {
  const userScore = new UserScore({
    userId,
    memberId,
    formId,
    scores,
    comments,
  });

  const savedUserScore = await userScore.save();

  return savedUserScore;
};

export const getCompletedFormsForTeamMember = async (userId) => {
  const completedForms = await UserScore.find({
    userId,
    formId: { $exists: true },
  });

  return completedForms;
};
