import jwt from "jsonwebtoken";
const genToken = (id, email) =>
  jwt.sign(
    { id, email },
    process.env.JWT_SECRET,

    {
      expiresIn: "7d",
    },
  );

export default genToken;
