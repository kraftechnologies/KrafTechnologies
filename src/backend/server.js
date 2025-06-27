const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const featuredInsights = require('./featuredInsights.json');

const corsOptions = {
  origin: 'http://127.0.0.1:3000', // Allow only this origin
};

app.use(cors(corsOptions)); // Enable CORS with options

app.get('/api/admin/featuredinsights', (req, res) => {
  res.json(featuredInsights);
});
app.get('/api/admin/featuredinsights/:id', (req, res) => {
  const { id } = req.params;
  const insight = featuredInsights.find(insight => insight.id === parseInt(id));
  
  if (insight) {
    res.json(insight);
  } else {
    res.status(404).json({ message: 'Insight not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
