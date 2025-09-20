const formatCurrency = (num) => {
  return `$${num.toLocaleString()}`;
};

module.exports = {
  formatCurrency,
};
