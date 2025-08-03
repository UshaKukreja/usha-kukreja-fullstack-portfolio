<!DOCTYPE html>
<html>
<head>
  <title>Usha Kukreja Full Stack Portfolio</title>
</head>
<body>
  <h1>My Portfolio Projects</h1>
  <ul id="project-list"></ul>
  <script>
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById('project-list');
        data.forEach(project => {
          const li = document.createElement('li');
          li.textContent = project.title + ": " + project.description;
          list.appendChild(li);
        });
      });
  </script>
</body>
</html>
