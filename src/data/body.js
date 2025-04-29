// Translate Body
export const body = {
  title: {
    english: "Professional Experience",
    french: "Experience professionnelle",
  },
  environment: {
    english: "Technical Environments :",
    french: "Environnements techniques :",
  },
  project: {
    english: "My recent projects",
    french: "Mes projets récents",
  },
};

// Translate About Me
export const aboutMe = {
  title: {
    english: "About Me",
    french: "À propos de moi",
  },
  description: {
    english:
      "Graduated as a computer engineer from ESPRIT, with a specialization in mobile information systems, I have distinguished myself in web and mobile development, software testing, and DevOps practices. Through hands-on experience with technologies such as .NET MAUI, Android Jetpack Compose, Symfony, React, Angular, and the implementation of CI/CD pipelines using Jenkins, I have developed a versatile technical skill set. Currently serving as IT Manager at Berg Life Science, I oversee IT infrastructure, security, and the validation of computerized systems (ERP SAGE, Qualipro), while managing technical support and coordinating with service providers. My background is further enriched by prior military service, where I developed discipline, analytical thinking, and adaptability. Passionate about optimizing development processes and software quality, I am eager to contribute to innovative projects in agile environments.",
    french:
      "Titulaire d’un diplôme d’ingénieur en informatique de l’école ESPRIT, spécialisé en systèmes d'information mobile, je me suis distingué dans le développement web et mobile, les tests logiciels, ainsi que les pratiques DevOps. Grâce à mes expériences dans des projets concrets utilisant .NET MAUI, Android Jetpack Compose, Symfony, React, Angular, ainsi que la mise en place de pipelines CI/CD avec Jenkins, j’ai acquis une expertise polyvalente. Actuellement responsable IT chez Berg Life Science, je supervise l'infrastructure informatique, la sécurité, et la validation des systèmes informatisés (ERP SAGE, Qualipro), tout en assurant le support technique et le pilotage des prestataires. Mon parcours a également été enrichi par une expérience antérieure dans les forces armées, qui m’a permis de développer rigueur, esprit d’analyse et capacité d’adaptation. Passionné par l’optimisation des processus de développement et la qualité logicielle, je suis motivé à contribuer activement à des projets innovants en environnement agile.",
  },
};

export const recentProjects = {
  image: "https://i.imgur.com/sCsgXez.png",
  imageLink: "https://imgur.com/a/hKTAcYf",
  title: {
    english: "Web Application « PFE Management »",
    french: "Application Web « PFE MANGEMENT »",
  },
  description: {
    english: `
    The project we undertook aimed to create a specialized website for administrators, educational supervisors, and evaluators involved in the process of end-of-studies projects (PFE) within our academic institution. The mission of this website was to streamline and simplify the entire PFE management process, offering essential features for effective and transparent management.

    The main features of this website included:
    • Candidate Management: Enabled registration, updating, and tracking of candidates participating in PFEs, with comprehensive management of personal information, academic pathways, and chosen PFE topics.
    • Academic Year Management: Facilitated the management of different academic years, allowing precise and organized tracking of PFEs over time.
    • PFE Topic Management: Provided a system for managing PFE topics, including the creation, modification, and deletion of topics. Students were able to select topics, while supervisors could propose topics and administrators could validate them.
    • Session Management: Organized and managed the evaluation sessions of PFEs, enabling evaluators and candidates to engage in a structured process.
    • Evaluator Allocation: Automated the equitable distribution of evaluators for each PFE topic, taking into account the skills, availability, and preferences of the evaluators.
    • Grading and Remarks: Offered evaluators and supervisors the ability to assign grades and provide detailed remarks for each candidate and each project team. This feature was essential for objectively and constructively assessing the work of students.

    The site was developed using advanced technologies such as Angular and Symfony, ensuring a smooth user experience, strong security, and scalability for the future.`,
    french: `
    Le projet que nous avons entrepris visait à la création d'un site web spécialisé destiné aux administrateurs, aux encadrants pédagogiques, et aux évaluateurs impliqués dans le processus des projets de fin d'études (PFE) au sein de notre institution académique. Ce site web avait pour mission de rationaliser et de simplifier l'ensemble du processus de gestion des PFE, offrant des fonctionnalités essentielles pour une gestion efficace et transparente.

    Les principales fonctionnalités de ce site web incluaient :
    • Gestion des Candidats : Permettait l'inscription, la mise à jour et le suivi des candidats participant aux PFE, avec une gestion complète des informations personnelles, des parcours académiques et des sujets de PFE choisis.
    • Gestion des Années Scolaires : Facilitait la gestion des différentes années scolaires, permettant ainsi un suivi précis et organisé des PFE au fil du temps.
    • Gestion des Sujets de PFE : Offrait un système de gestion des sujets de PFE, incluant la création, la modification, et la suppression des sujets. Les étudiants pouvaient sélectionner des sujets, tandis que les encadrants pouvaient proposer des sujets et les administrateurs pouvaient les valider.
    • Gestion des Sessions : Organisait et gérait les sessions d'évaluation des PFE, permettant aux évaluateurs et aux candidats de s'engager dans un processus structuré.
    • Répartition des Évaluateurs : Automatisait la répartition équitable des évaluateurs pour chaque sujet de PFE, en prenant en compte les compétences, les disponibilités et les préférences des évaluateurs.
    • Attribution des Notes et des Remarques : Offrait aux évaluateurs et aux encadrants la possibilité d'attribuer des notes et de fournir des remarques détaillées pour chaque candidat et pour chaque équipe de projet. Cette fonctionnalité était essentielle pour évaluer le travail des étudiants de manière objective et constructive.

    Le site était développé en utilisant des technologies avancées telles qu'Angular et Symfony, assurant une expérience utilisateur fluide, une sécurité solide et une évolutivité pour l'avenir.`,
  },
  tools: {
    english: `Key Words : Angular, Symfony, MySQL, UML
      Management Tools : GitLab, Postman, Trello, Slack, Xampp
      IDE : Visual Studio Code`,
    french: `Environnements techniques : Angular, Symfony, MySQL, UML
      Outil de gestion : GitLab, Postman, Trello, Slack, Xampp
      IDE : Visual Studio Code`,
  },
  link1: "https://gitlab.com/FirasBenAbdallah/talan-pfe_mangement_front",
  link2: "https://gitlab.com/FirasBenAbdallah/talan-pfe_mangement_back",
};

// Translate Projects
export const projects = [
  // Addinn Project (Android)
  {
    id: 1,
    image: "https://i.imgur.com/xJOz8pb.jpg",
    imgLink: "https://imgur.com/a/HdH9oM3",
    title: {
      english: "Development of a mobile application « Team-Addinn »",
      french: "Développement d’une application mobile « Team-Addinn »",
    },
    description: {
      english: `
      Team-Addin is an Android application designed to invigorate collaboration within Addinn Group. It integrates key features for effective interaction:

      - Polls: Creating and participating in polls to gather member feedback.
      - Real-Time Chat: Instant communication to facilitate internal collaboration.
      - Discussion Channels: Dedicated channels for general discussions, file management, and the creation of custom groups.
      - Event Calendar: Viewing and adding corporate events.

      Team-Addin aims to enrich communication and engagement within Addinn by providing a digital workspace that centralizes exchanges and encourages the sharing of ideas.`,
      french: `
      Team-Addin est une application Android conçue pour dynamiser la collaboration au sein de Addinn Groupe. Elle intègre des fonctionnalités clés pour une interaction efficace :
      
      - Sondages : Création et participation à des sondages pour recueillir les avis des membres.
      - Chat en Temps Réel : Communication instantanée pour faciliter la collaboration interne.
      - Canaux de Discussion : Canaux dédiés pour les échanges généraux, la gestion des fichiers et la création de groupes personnalisés.
      - Calendrier d’Événements : Visualisation et ajout d'événements d'entreprise.
      
      Team-Addin vise à enrichir la communication et l'engagement au sein d'Addinn, en offrant un espace de travail numérique qui centralise les échanges et encourage le partage d’idées.`,
    },
    tools: {
      english: `Key Words : Android Jetpack compose, Firebase
      Management Tools : GitHub
      IDE : Android Studio`,
      french: `Environnements techniques : Android Jetpack compose, Firebase
      Outil de gestion : GitHub
      IDE : Android Studio`,
    },
    link: "https://github.com/FirasBenAbdallah/Addin.git",
  },

  //
  /* {
    id: 2,
    image:
      "https://www.wisembly.com/assets/wizuploads/2022/12/page-event-en-800x704.webp",
    title: {
      english: "Development of a web application with Laravel and React Js",
      french: "Developpement d'une application web avec Laravel et React Js",
    },
    description: {
      english:
        "Technical Environments : Laravel, ReactJS, MySQL, Bootstrap5, GitLab\nManagement Tool : GitLab, Postman\nIDE : Visual Studio Code",
      french:
        "Environnements techniques : Laravel, ReactJS, MySQL, Bootstrap5, GitLab\nOutil de gestion : GitLab, Postman\nIDE : Visual Studio Code",
    },
    tools: {
      english: "",
      french: "",
    },
  }, */

  // PIM-SIM Project (Web and Mobile)
  {
    id: 3,
    image: "https://i.imgur.com/YtKFJTe.png?4",
    imgLink: "https://imgur.com/a/dptXZcG",
    title: {
      english: "Web and Mobile Application « Education-ADO »",
      french: "Application web et mobile « Education-ADO »",
    },
    description: {
      english: `
      The educational platform described offers two specific interfaces:

      -Teacher Mode: Allows teachers to create and manage course content, track student progress, assign and correct work, and communicate with students.
        
      -Student Mode: Provides students with access to course materials, a space to submit work, a personal online storage space, and the ability to tak exams, including coding tests through an integrated compiler.
        
      The platform serves as an interactive and collaborative learning system with tools tailored to the needs of modern teaching and learning.`,
      french: `
      La plateforme éducative décrite offre deux interfaces spécifiques : 
      
      - Mode Enseignant : Permet aux enseignants de créer et gérer le contenu des cours, de suivre les progrès des étudiants, d'assigner et de corriger des travaux, et de communiquer avec les étudiants.
        
      - Mode Étudiant : Offre aux étudiants un accès aux matériaux de cours, un espace pour soumettre des travaux, un espace de stockage personnel en ligne et la capacité de passer des examens, notamment des tests de codage via un compilateur intégré.
        
        La plateforme sert de système d'apprentissage interactif et collaboratif avec des outils adaptés aux besoins de l'enseignement et de l'apprentissage modernes.`,
    },
    tools: {
      english: `Key Words : Angular, ReactJS, Flutter, Express.JS (Node.JS) et MongoDB
      Management Tools : Git, Postman
      IDE : Android Studio, VS Code`,
      french: `Environnements techniques : Angular, ReactJS, Flutter, Express.JS(Node.JS) et MongoDB
      Outil de gestion : Git, Postman
      IDE : Android Studio, VS Code`,
    },
    link: "https://github.com/FirasBenAbdallah/PIM_SIM.git",
  },

  // Social Goal Sharing Project (Android)
  {
    id: 4,
    image: "https://i.imgur.com/2P2czR1.png",
    imgLink: "https://imgur.com/a/IyY7koE",
    title: {
      english: "Android Application « Do it ! »",
      french: "Application Android « Do it ! »",
    },
    date: "| 2022",
    description: {
      english:
        "\nSocial Goal-Sharing App : A social goal-sharing app where users with similar challenges and  short-term goals like quitting smoking, working out regularly, dieting,  etc., come together to support each other with the right motivation  and words. A social media app where you can post a short-term goal and find  people to join the journey to completing it with you, or you can join a ready-made one. So it's basically like Instagram and Facebook, except instead of  followers or friends you have goals/challenges created and joined",
      french:
        "\nApplication de partage d'objectifs sociaux : Une application de partage d'objectifs sociaux où les utilisateurs ayant des défis et objectifs à court terme similaires, comme arrêter de fumer, faire régulièrement de l'exercice, suivre un régime, etc., se rassemblent pour se soutenir mutuellement avec la motivation et les encouragements appropriés. Une application de médias sociaux où vous pouvez publier un objectif à court terme et trouver des personnes pour vous accompagner dans l'accomplissement de celui-ci, ou vous pouvez rejoindre un objectif déjà établi. C'est donc en quelque sorte comme Instagram et Facebook, sauf qu'au lieu de suiveurs ou d'amis, vous créez et rejoignez des objectifs/défis.",
    },
    tools: {
      english: `Key Words : Android (Kotlin), XML, Gradle, Express.JS (Node.JS) and MongoDB
        Management Tools : Git, Postman
        IDE : Android Studio`,
      french: `Environnements techniques : Android (Kotlin), XML, Gradle, Express.JS (Node.JS) et MongoDB
        Outil de gestion : Git, Postman
        IDE : Android Studio`,
    },
    link: "https://github.com/FirasBenAbdallah/Social_Goal_Sharing.git",
  },

  // Smart ESPRIT Project (Linux)
  {
    id: 5,
    image: "https://i.imgur.com/s6B6x8H.png",
    imgLink: "https://i.imgur.com/s6B6x8H.png",
    title: {
      english: "Smart ESPRIT Application",
      french: "Application Smart ESPRIT",
    },
    date: "| 2021",
    description: {
      english:
        "\n'SmartEsprit' is a modern desktop application for Ubuntu designed to simplify tasks and enhance user experience. Developed primarily in the C language, the application utilizes the power of Glade-2.12.2 to present a user-friendly graphical interface.",
      french:
        "\n'SmartEsprit' est une application de bureau moderne pour Ubuntu conçue pour simplifier les tâches et améliorer l'expérience utilisateur Développée principalement en langage C, l'application utilise la puissance de Glade-2.12.2 pour présenter une interface graphique conviviale.",
    },
    tools: {
      english: "Key Words : C, Glade, Linux, Git",
      french: "Environnements techniques : C, Glade, Linux, Git",
    },
    link: "https://github.com/FirasBenAbdallah/SmartEsprit.git",
  },
];

// Translate Experience
export const experience = [
  {
    id: 1,
    title: {
      english: "Berg Life Sciences : IT Manager",
      french: "Berg Life Sciences : Responsable It",
    },
    date: {
      english: "October 2024 - present",
      french: "Octobre 2024 - présent",
    },
    description: {
      english: `• Implementation of cloud tools for backup and IT service continuity.
                • Development and maintenance of web features with WordPress and PHP, management of Microsoft SQL databases.
                • Definition of system/network architecture, security policy, and ERP management.`,
      french: `• Mise en place d’outils cloud pour la sauvegarde et la continuité des services IT.
              • Développement et maintenance de fonctionnalités web avec WordPress et PHP, gestion des bases Microsoft SQL.
              • Définition de l’architecture système/réseaux, de la politique de sécurité et Gestion de l'ERP.`,
    },
  },
  {
    id: 2,
    title: {
      english: "TSI Tunisia : Full Stack .Net Developer",
      french: "TSI Tunisie : Développeur Full stack .Net",
    },
    date: {
      english: "January 2024 - September 2024",
      french: "Janvier 2024 - Septembre 2024",
    },
    description: {
      english: `• Development of a web and mobile application on the client and server side and connecting it to an ERP system.
                • Contribution to the study and design of the solution.
                • Participation in sprint planning, review, and daily.`,
      french: `• Développement d’une application web et mobile côté client et serveur et la connectée à un système ERP.
              • Contribution à l’étude et conception de la solution.
              • Participation au sprint planning, review et daily.`,
    },
    environment: {
      english: `Technical Environments : C#, .Net, Angular, MAUI, ERP, ETL, Entity Framework, Azure, Microsoft SQL Server, Git, Scrum Agile`,
      french: `Environnements techniques : C#, .Net, Angular, MAUI, ERP, ETL, Entity Framework, Azure, Microsoft SQL Server, Git, Scrum Agile`,
    },
  },
  {
    id: 3,
    title: {
      english: "Talan Tunisia : Engineering Internship",
      french: "Talan Tunisie : Stage d'ingénieur",
    },
    date: {
      english: "July 2023- August 2023",
      french: "Juillet 2023- Août 2023",
    },
    description: {
      english: "Development of a web application 'PFE Management'",
      french: "Développement d’une application web 'PFE Management'",
    },
    environment: {
      english: `Technical Environments : Angular, Symfony, MySQL, Rest API, Bootstrap5, GitLab`,
      french: `Environnements techniques : Angular, Symfony, MySQL, Rest API, Bootstrap5, GitLab`,
    },
  },
  {
    id: 4,
    title: {
      english: "ADDINN Group : Engineering Internship",
      french: "ADDINN Group : Stage d'ingénieur",
    },
    date: {
      english: "May 2023- June 2023",
      french: "Mai 2023- Juin 2023",
    },
    description: {
      english: "Development of a mobile application 'Team-Addinn'",
      french: "Développement d’une application mobile 'Team-Addinn'",
    },
    environment: {
      english: `Technical Environments : Android Jetpack Compose, Firebase, GitHub`,
      french: `Environnements techniques : Android Jetpack Compose, Firebase, GitHub`,
    },
  },
  {
    id: 5,
    title: {
      english: "ABCeez Digital : Summer Internship",
      french: "ABCeez Digital : Stage d’été",
    },
    date: {
      english: "July 2022- August 2022",
      french: "Juillet 2022-Août 2022",
    },
    description: {
      english: "Development of a front-end web application",
      french: "Développement d’une application web front-end",
    },
    environment: {
      english: `Technical Environments : HTML5, CSS3, Bootstrap5, ReactJS, JavaScript`,
      french: `Environnements techniques : HTML5, CSS3, Bootstrap5, ReactJS, JavaScript`,
    },
  },
  {
    id: 6,
    title: {
      english: "CCMed Belgium : First Aid Internship",
      french: "CCMed Belgique : Stage Secourisme",
    },
    date: {
      english: "May 2018- June 2018",
      french: "Mai 2018-Juin 2018",
    },
    description: {
      english: "",
      french: "",
    },
  },
  {
    id: 7,
    title: {
      english: "Ministry of Defense Tunisia : Lieutenant",
      french: "Ministère de la Défense Tunisie : Lieutenant",
    },
    date: {
      english: "2016-2021",
      french: "2016-2021",
    },
    description: {
      english: "",
      french: "",
    },
  },
];
