module.exports = (req, res) =>
  res.status(404).json({ error: 'Route does not exit' });
