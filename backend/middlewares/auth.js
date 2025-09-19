// Dummy middleware for auth (bonus)
module.exports = (req, res, next) => {
  // Implement JWT or API key if required
  console.log("Auth middleware placeholder");
  next();
};
