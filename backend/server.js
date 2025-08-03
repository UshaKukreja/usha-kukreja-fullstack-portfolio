const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let projects = [
  { id: 1, title: "My First Project", description: "This is a sample project" }
];

// Get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Add a new project
app.post('/api/projects', (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  projects.push(newProject);
  res.json(newProject);
});

app.listen(5000, () => console.log('Server running on port 5000'));