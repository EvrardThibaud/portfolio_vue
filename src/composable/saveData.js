export function saveData() {
  const projects = [
    {
      id: 1,
      name: "Cards Royale",
      src: [
        "/projects/cardsRoyale/screen1.png",
        "/projects/cardsRoyale/screen2.png",
      ],
      skills: [
        "pgAdmin",
        "PHP",
        "JavaScript",
        "Excel",
        "VS Code",
        "HTML",
        "SQL",
        "CSS",
        "GitHub",
      ],
      dsc: "Cards Royale is a personal project that I developed from scratch. The concept of the game involves searching for a specific card from the game Clash Royale by making educated guesses. With each guess, players receive feedback on whether the characteristics of their guess match those of the target card. As the game progresses, players receive additional clues to help them identify the correct card. I got inspired to create this game after encountering a similar one based on characters from another game. I decided to customize it to Cards Royale and started by collecting all the necessary data. I organized the data in an Excel spreadsheet and then created a database using PgAdmin4, populating it with the information from Excel. The development process involved coding the game's functionality and subsequently designing the website's visuals. I prioritized enhancing the user experience, and as of December 2023, the website is almost complete, with just a few minor details remaining. At this point, the game is fully playable. Throughout this project, I delved into PHP, gaining exposure to it just before formal education on the subject at school. Additionally, I honed my skills in code debugging within the browser console. I thoroughly enjoyed crafting the game's interface and implementing various user experience improvements. Notably, I incorporated AJAX into the backend after learning about it in school, further enhancing the project's capabilities. Overall, this endeavor has been a valuable learning experience, allowing me to explore new technologies, improve my coding skills, and create an engaging game interface.",
      github: [
        "https://github.com/EvrardThibaud/ProjetCarteCR",
        "https://github.com/EvrardThibaud/CardsRoyale",
      ],
    },
    {
      id: 2,
      name: "HelpHub",
      src: [],
      skills: [
        "pgAdmin",
        "PHP",
        "JavaScript",
        "Excel",
        "VS Code",
        "HTML",
        "SQL",
        "CSS",
        "GitHub",
      ],
      dsc: "HelpHub is a school project that took place during the first semester of my second year in computer science studies. I was part of a group of four students working on this project. The objective was to create a website where associations could post volunteering or donation opportunities, and anyone could volunteer their help to any association. Initially, we created diagrams (BPMN) for project and team organization. Following that, we developed the database diagram using Merise. Simultaneously, we generated a dataset using Excel and generatedata.com to populate our database with SQL. To enhance our project's analytical capabilities, we used Power BI to simulate statistics with our dataset. We then delved into website development using Laravel, implementing Breeze to set up the authentication system.Additionally, we addressed the legal aspects of the website, including cookies, GDPR compliance, Privacy Policy, and Terms of Use. We adopted the Scrum agile methodology with sprint reviews. As of the current writing in December 2023, the project is not yet complete. We still need to finish the website, implement the cryptography part for security, and create the communication section, which includes a user guide.This project provided me with valuable insights and a practical understanding of how to approach a project, similar to what I might encounter in a professional setting. It taught me how to work effectively in a team, follow agile methods, manage deadlines, and handle multiple tasks simultaneously. Furthermore, it enhanced my skills with various software tools and programming languages that we utilized.",
      github: [],
    },
  ];

  localStorage.setItem("projects", JSON.stringify(projects));

  const skills = [
    { id: 1, src: "/skills/vue_logo.png", name: "Vue.js", alt: "Vue.js Logo" },
    { id: 2, src: "/skills/react_logo.png", name: "React", alt: "React Logo" },
    {
      id: 3,
      src: "/skills/laravel_logo.png",
      name: "Laravel",
      alt: "Laravel Logo",
    },
    {
      id: 4,
      src: "/skills/docker_logo.png",
      name: "Docker",
      alt: "Docker Logo",
    },
    { id: 5, src: "/skills/csharp_logo.png", name: "C#", alt: "C# Logo" },
    { id: 6, src: "/skills/vite_logo.png", name: "Vite", alt: "Vite Logo" },
    {
      id: 7,
      src: "/skills/azuredevops_logo.png",
      name: "Azure DevOps",
      alt: "Azure DevOps Logo",
    },
    {
      id: 8,
      src: "/skills/mongodb_logo.png",
      name: "MongoDB",
      alt: "MongoDB Logo",
    },
    {
      id: 9,
      src: "/skills/nodejs_logo.png",
      name: "Node.js",
      alt: "Node.js Logo",
    },
    { id: 10, src: "/skills/dart_logo.png", name: "Dart", alt: "Dart Logo" },
    {
      id: 11,
      src: "/skills/gitlab_logo.png",
      name: "GitLab",
      alt: "GitLab Logo",
    },
    {
      id: 12,
      src: "/skills/pgadmin4_logo.png",
      name: "pgAdmin",
      alt: "pgAdmin Logo",
    },
    { id: 13, src: "/skills/php_logo.png", name: "PHP", alt: "PHP Logo" },
    {
      id: 14,
      src: "/skills/js_logo.png",
      name: "JavaScript",
      alt: "JavaScript Logo",
    },
    {
      id: 15,
      src: "/skills/flutter_logo.png",
      name: "Flutter",
      alt: "Flutter Logo",
    },
    { id: 16, src: "/skills/css_logo.png", name: "CSS", alt: "CSS Logo" },
    {
      id: 17,
      src: "/skills/socketio_logo.png",
      name: "Socket.IO",
      alt: "Socket.IO Logo",
    },
    {
      id: 18,
      src: "/skills/github_logo.png",
      name: "GitHub",
      alt: "GitHub Logo",
    },
    { id: 19, src: "/skills/linux_logo.png", name: "Linux", alt: "Linux Logo" },
    {
      id: 20,
      src: "/skills/visualstudio_logo.png",
      name: "Visual Studio",
      alt: "Visual Studio Logo",
    },
    {
      id: 21,
      src: "/skills/poweramc_logo.png",
      name: "PowerAMC",
      alt: "PowerAMC Logo",
    },
    {
      id: 22,
      src: "/skills/powerbi_logo.png",
      name: "Power BI",
      alt: "Power BI Logo",
    },
    {
      id: 23,
      src: "/skills/python_logo.png",
      name: "Python",
      alt: "Python Logo",
    },
    {
      id: 24,
      src: "/skills/selenium_logo.png",
      name: "Selenium",
      alt: "Selenium Logo",
    },
    { id: 25, src: "/skills/sql_logo.png", name: "SQL", alt: "SQL Logo" },
    {
      id: 26,
      src: "/skills/virtualbox_logo.png",
      name: "VirtualBox",
      alt: "VirtualBox Logo",
    },
    {
      id: 27,
      src: "/skills/visualparadigm_logo.png",
      name: "Visual Paradigm",
      alt: "Visual Paradigm Logo",
    },
    {
      id: 28,
      src: "/skills/vscode_logo.png",
      name: "VS Code",
      alt: "VS Code Logo",
    },
    { id: 29, src: "/skills/excel_logo.png", name: "Excel", alt: "Excel Logo" },
    { id: 30, src: "/skills/html_logo.png", name: "HTML", alt: "HTML Logo" },
    {
      id: 31,
      src: "/skills/dbeaver_logo.png",
      name: "DBeaver",
      alt: "DBeaver Logo",
    },
  ];

  localStorage.setItem("skills", JSON.stringify(skills));
}
