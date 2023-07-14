import UserScore from "../models/userScore.model.js";

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
export const calculateTechnicalSkillsScore = async (userId) => {
  const userScores = await UserScore.find({
    userId,
    category: "technical",
  });

  const technicalSkills = {};

  userScores.forEach((score) => {
    const { skillId, score: skillScore } = score;
    technicalSkills[skillId] = skillScore;
  });

  return technicalSkills;
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

export const getScoresAndComments = async (userId, formId) => {
  const userScores = await UserScore.find({ userId });

  const softSkills = {};
  const technicalSkills = {};

  userScores.forEach((score) => {
    const { skillId, score: skillScore, category } = score;

    if (category === "soft") {
      softSkills[skillId] = skillScore;
    } else if (category === "technical") {
      technicalSkills[skillId] = skillScore;
    }
  });

  const comments = userScores
    .filter((score) => score.comment)
    .map((score) => score.comment)
    .join("\n");

  const praise = userScores.some((score) => score.praise);
  const praiseCount = userScores.filter((score) => score.praise).length;

  return {
    userId,
    "soft skills": softSkills,
    "hard skills": technicalSkills,
    comments,
    praise,
    praiseCount,
  };
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
