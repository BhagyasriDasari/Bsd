// Example simple report controller
exports.getHealth = (req, res) => {
  res.json({ status: "ok", message: "Report API working" });
};
