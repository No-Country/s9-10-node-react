import jwt from "jsonwebtoken";

function authRequired(req, res, next) {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  //Validamos que el token que se intenta usar sea un token generado con jwt
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
}
export default authRequired;
