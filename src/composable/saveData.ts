import projects from "../data/projects.json";
import skills from "../data/skills.json";
import youtubeID from "../data/youtubeID.json";

export function saveData(): void {
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("skills", JSON.stringify(skills));
  localStorage.setItem("youtubeID", JSON.stringify(youtubeID));
}
