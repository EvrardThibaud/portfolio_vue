import projects from '../data/projects.json' assert { type: 'json' };
import skills from '../data/skills.json' assert { type: 'json' };

export function saveData() {

  localStorage.setItem("projects", JSON.stringify(projects));

  localStorage.setItem("skills", JSON.stringify(skills));
}
