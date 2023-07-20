import UserScore from "../models/userScore.model.js";
import Response from "../models/answer.model.js";
import mongoose from "mongoose";

// Calcular puntuación de habilidades blandas
export const calculateSoftSkillsScore = async (userId) => {
  const userScores = await UserScore.find({
    userId,
    category: "soft",
  });

  const softSkills = {};

  userScores.forEach((score) => {
    const { skillId, score: skillScore } = score;
    softSkills[skillId] = skillScore;
  });

  return softSkills;
};

// Calcular puntuación de habilidades técnicas
// export const calculateTechnicalSkillsScore = async (userId) => {
//   const userScores = await UserScore.find({
//     userId,
//     category: "technical skills",
//   });
//   console.log(userScores);
//   const technicalSkills = {};

//   userScores.forEach((score) => {
//     const { skillId, score: skillScore } = score;
//     technicalSkills[skillId] = skillScore;
//   });

//   return technicalSkills;
// };
// Importa el modelo UserScore



// export const calculateTechnicalSkillsScore = async (userId) => {
//   try {
//     // Buscar las respuestas del usuario en el formulario (category: "technical skills")
//     const responses = await Response.find({
//       userId,
//     });

//     // Filtrar las respuestas para obtener las que tienen la categoría "technical skills"
//     const technicalSkills = {};

//     responses.forEach((response) => {
//       const { answers } = response;

//       for (const [questionId, answer] of Object.entries(answers)) {
//         if (typeof answer === "number") {
//           technicalSkills[questionId] = answer;
//         }
//       }
//     });

//     return technicalSkills;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const calculateTechnicalSkillsScore = async (req, res) => {
  try {
    // Buscar las respuestas del usuario en el formulario (category: "technical skills")
    const userId = req.params.userId; // Asegúrate de que req.params.userId sea el ObjectId válido
    console.log(userId);
    // Buscar las respuestas del usuario en el formulario (category: "technical skills")
    const responses = await Response.find({ userId });
    // Objeto para almacenar el ranking de puntajes de preguntas de tipo escala
    const ranking = {};

    responses.forEach((response) => {
      const { answers } = response;
console.log(response);
      for (const answer of answers) {
        if (answer.category === "technical" && answer.type === "scale") {
          // Si la respuesta pertenece a la categoría "technical skills" y es de tipo "escala"
          const { questionId, score } = answer;

          // Agregar o actualizar el puntaje en el ranking
          if (!ranking[questionId] || ranking[questionId] < score) {
            ranking[questionId] = score;
          }
        }
      }
    });

    // Convertir el objeto de ranking en un array de objetos para poder ordenarlos
    const rankingArray = Object.entries(ranking).map(([questionId, score]) => ({
      questionId,
      score,
    }));

    // Ordenar el ranking por puntajes de mayor a menor
    rankingArray.sort((a, b) => b.score - a.score);

    // Devolver el ranking ordenado
    // return rankingArray;
    res.json(rankingArray);
  } catch (error) {
    console.log(error);
  }
};



// Obtener comentarios y recuento de elogios
export const getCommentsAndPraiseCount = async (userId) => {
  const userScores = await UserScore.find({ userId });

  let comments = "";
  let praise = false;
  let praiseCount = 0;

  userScores.forEach((score) => {
    if (score.comment) {
      comments += score.comment + "\n";
    }

    if (score.praise) {
      praise = true;
      praiseCount++;
    }
  });

  return {
    comments,
    praise,
    praiseCount,
  };
};

export const getScoresAndComments = async (req, res) => {
  try {
    const userId = req.params.userId;
 
    const userResponse = await Response.findOne({ userId });
    console.log(userId);

    const softSkills = {};
    const technicalSkills = {};

    userResponse.answers.forEach((response) => {
      const { skill, category, type, score, answer: answerValue } = response;

      if (category === "technical" && skill) {
        if (type === "scale") {
          technicalSkills[skill] = score;
        } else {
          technicalSkills[skill] = answerValue;
        }
      } else if (category === "soft" && skill) {
        if (type === "scale") {
          softSkills[skill] = score;
        } else {
          softSkills[skill] = answerValue;
        }
      }
    });

    const comments = userResponse.comment.map((comment) => comment.content).join("\n");

    const praise = userResponse.comment.some((comment) => comment.type === "praise");
    const praiseCount = praise ? 1 : 0;

    res.json({
      userId,
      "soft skills": softSkills,
      "technical skills": technicalSkills,
      comments,
      praise,
      praiseCount,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};




// export const getScoresAndComments = async (userId) => {
//   const softSkills = await calculateSoftSkillsScore(userId);
//   const technicalSkills = await calculateTechnicalSkillsScore(userId);
//   const { comments, praise, praiseCount } = await getCommentsAndPraiseCount(
//     userId
//   );

//   return {
//     userId,
//     "soft skills": softSkills,
//     "hard skills": technicalSkills,
//     comments,
//     praise,
//     praiseCount,
//   };
// };

// Calcular puntuación general de habilidades blandas
export const calculateOverallSoftSkillsScore = async (userId) => {
  const userScores = await UserScore.find({
    userId,
    softSkillId: { $exists: true },
  });

  if (userScores.length === 0) {
    return 0;
  }

  const sum = userScores.reduce((total, score) => total + score.score, 0);
  const average = sum / userScores.length;

  return average;
};

// Calcular puntuación general de habilidades técnicas
export const calculateOverallTechnicalSkillsScore = async (userId) => {
  const userScores = await UserScore.find({
    userId,
    technicalSkillId: { $exists: true },
  });

  if (userScores.length === 0) {
    return 0;
  }

  const sum = userScores.reduce((total, score) => total + score.score, 0);
  const average = sum / userScores.length;

  return average;
};

export const calculateCombinedScoreAverage = async (userId) => {
  const pipeline = [
    {
      $match: { userId },
    },
    {
      $group: {
        _id: null,
        totalScore: { $sum: "$score" },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        averageScore: { $divide: ["$totalScore", "$count"] },
      },
    },
  ];

  const result = await UserScore.aggregate(pipeline);

  if (result.length === 0) {
    return 0;
  }

  return result[0].averageScore;
};
// Obtener ranking de miembros por puntuación de habilidades blandas
export const getSoftSkillsRanking = async () => {
  const pipeline = [
    {
      $match: { category: "soft" },
    },
    {
      $group: {
        _id: "$userId",
        score: { $avg: "$score" },
      },
    },
    {
      $sort: { score: -1 },
    },
  ];

  const rankedMembers = await UserScore.aggregate(pipeline);

  return rankedMembers;
};

// Obtener ranking de miembros por puntuación de habilidades técnicas
export const getTechnicalSkillsRanking = async () => {
  const pipeline = [
    {
      $match: { category: "technical" },
    },
    {
      $group: {
        _id: "$userId",
        score: { $avg: "$score" },
      },
    },
    {
      $sort: { score: -1 },
    },
  ];

  const rankedMembers = await UserScore.aggregate(pipeline);

  return rankedMembers;
};
