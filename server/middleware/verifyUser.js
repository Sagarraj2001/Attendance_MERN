const jwt = require("jsonwebtoken");
exports.verfiyToken = (req, res, next) => {
  const {token} = req.cookies;
  if (!token) {
   
    return res.json(
      "Login first to handle this resource"
    )
 
  }
  jwt.verify(token, process.env.JWT_SECERET, (err, user) => {
    if (err) {
      return next(401, "KK");
    }
    req.user = user;
    next();
  });
};
