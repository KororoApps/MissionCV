//CREATION ET PARAMETRAGE DES PLANETES

export const ELEMENTS = [
  {
    id: "intro-planet",
    planetSrc: "./Cv_Galaxy/map/intro_planet.png",
    backgroundSrc: "./Cv_Galaxy/story/story_fond.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/bravo.png",
    planetAlt: "Planète Terre",
    height: "22vh",
    top: "40%",
    left: "10%",
    portraitTop: "10px",
    portraitLeft: "30%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-16%",
    translateTargetY: "-15%",
    rightPosition: "10%",
    topPosition: "50%",
    pieceOfCV: `<h1>ELODIE SPONTON</h1> 
      <h4>DEVELOPPEUSE</h4>
      <h2>COORDONNEES</h2>
      <p><span>Tél</span> : N'hésitez pas à me le demander :)</p>
      <p><span>Mail</span>: <a href="mailto:elodie.sponton@yahoo.fr">elodie.sponton@yahoo.fr</a></p>
      <p><span>Adresse</span> : DIJON</p>`,
    cvRetrieve: true,
    pieceOfParchment: "./Cv_Galaxy/piece_of_cv/cv-introTerre.png",
  },
  {
    id: "mando-planet",
    planetSrc: "./Cv_Galaxy/map/mando_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mando.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/mando_cv.png",
    planetAlt: "Planète Mandalorian",
    backgroundAlt: "Mando et Grogu",
    parchmentAlt: "CV Parchemin",
    height: "20vh",
    top: "15%",
    left: "30%",
    portraitTop: "195px",
    portraitLeft: "33%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-20%",
    translateTargetY: "-20%",
    rightPosition: "0%",
    topPosition: "5%",
    pieceOfCV: `<h2>FORMATIONS AUTODIDACTES</h2> 
      <h3>Apprentissage de l'algorithmique et Java</h3>
      <p>Etude avec le livre "Algorithmique - Des bases à la POO en Java"</p>
      <h3>Apprentissage de Javascript</h3>
      <p>Etude avec la formation en ligne "Javascript de A à Z", de Fromscratch.podia.com</p>
      <h3>Apprentissage de Symfony</h3>
      <p>Etude avec la formation en ligne We Develop Me, de Lior Chamla</p>
      <h3>Apprentissage de HTML, CSS, PHP, SQL, GIT</h3>
      <p>Etude avec OpenClassRooms</p>`,
    cvRetrieve: false,
    pieceOfParchment: "./Cv_Galaxy/piece_of_cv/cv-formationsAutodidactes.png",
  },
  {
    id: "mononoke-planet",
    planetSrc: "./Cv_Galaxy/map/mononoke_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mononoke.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/mononoke_cv.png",
    planetAlt: "Planète Princesse Mononoké",
    backgroundAlt: "Dans la forêt",
    parchmentAlt: "CV Parchemin",
    height: "25vh",
    top: "10%",
    left: "50%",
    portraitTop: "360px",
    portraitLeft: "28%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-10%",
    translateTargetY: "-15%",
    rightPosition: "50%",
    topPosition: "50%",
    pieceOfCV: `<h2>FORMATIONS</h2> 
      <h3>BAC+3, titre RNCP, Administrateur des Systèmes d'Information</h3>
      <p>2023-2024 / DIIAGE, Parcours Dev Full Stack, Dijon</p>
      <h3>Titre de niveau II, Responsable QSE</h3>
      <p>2014-2016 / CESI Entreprise, Dijon</p>
      <h3>Master 2, Management des Risques Industriels et Environnementaux</h3>
      <p>2012-2013 / Université de Poitiers, Niort</p>
      <h3>Master 2, Espace Rural et Environnement</h3>
      <p>2011-2012 / Université de Bourgogne, Dijon</p>`,
    cvRetrieve: false,
    pieceOfParchment: "./Cv_Galaxy/piece_of_cv/cv-formations.png",
  },
  {
    id: "porco-planet",
    planetSrc: "./Cv_Galaxy/map/porco_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/porco.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/porco_cv.png",
    planetAlt: "Planète Porco Rosso",
    backgroundAlt: "Luffy aviatrice",
    parchmentAlt: "CV Parchemin",
    height: "20vh",
    top: "15%",
    left: "75%",
    portraitTop: "540px",
    portraitLeft: "36%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-24%",
    translateTargetY: "-20%",
    rightPosition: "50%",
    topPosition: "50%",
    pieceOfCV: `<h2>EXPERIENCES PROFESSIONNELLES</h2> 
      <h3>Développeuse</h3>
      <p><span>Octobre 2023 - En cours / IN-IT, Dijon</span></p>
      <p>Résolution d'incident, Mise en place d'évolutions</p>
      <h3>Assistante admnistrative</h3>
      <p><span>Octobre 2017 - Septembre 2023 / Sanitel, Dijon</span></p>
      <p>Accueil physique et téléphonique, Établissement de DC4 et contrat de sous-traitance, Vérification des factures...</p>
      <p><span>Février - Octobre 2017 / Loiseau Volets Roulants, Dijon</span></p>
      <p>Prise et suivie de commandes, Suivide de la trésorerie, Accueil physique et téléphonique.</p>
      <h3>Ingénieure QSE</h3>
      <p><span>Septembre 2014 - Mars 2016 / Schneider Electric, Dijon</span></p>
      <p>Unification du système de management de deux usines.</p>`,
    cvRetrieve: false,
    pieceOfParchment:
      "./Cv_Galaxy/piece_of_cv/cv-experiencesProfessionnelles.png",
  },
  {
    id: "catsby-planet",
    planetSrc: "./Cv_Galaxy/map/catsby_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/catsby.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/catsby_cv.png",
    planetAlt: "Planète Catsby",
    backgroundAlt: "Chat Catsby",
    parchmentAlt: "CV Parchemin",
    height: "25vh",
    top: "70%",
    left: "20%",
    portraitTop: "680px",
    portraitLeft: "30%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-13%",
    translateTargetY: "-10%",
    rightPosition: "50%",
    topPosition: "40%",
    pieceOfCV: `<h2>INTÉRÊTS ET LOISIRS</h2> 
      <h3>- Animation d'un blog Wordpress depuis 2013</h3>
      <p>638 articles au 04/02/2023</p>
      <h3>- Animation d'un compte Instagram depuis 2015</h3>
      <p>740 publications au 04/02/2023</p> 
      <h3>- Création de vidéos Tiktok depuis 2020</h3>
      <p>147 vidéos au 04/02/2023</p>
      <h3>- Participation à l'Inktober depuis 2016</h3>
      <p>Publication de 31 dessins tout le long du mois d'octobre</p>`,
    cvRetrieve: false,
    pieceOfParchment: "./Cv_Galaxy/piece_of_cv/cv-interetsLoisirs.png",
  },
  {
    id: "simpson-planet",
    planetSrc: "./Cv_Galaxy/map/simpson_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/simpson.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/simpson_cv.png",
    planetAlt: "Planète Simpson",
    backgroundAlt: "Petit papa Noël devant la télé",
    parchmentAlt: "CV Parchemin",
    height: "20vh",
    top: "75%",
    left: "45%",
    portraitTop: "890px",
    portraitLeft: "35%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-23%",
    translateTargetY: "-20%",
    rightPosition: "50%",
    topPosition: "20%",
    pieceOfCV: `<h2>PROJETS</h2>
      <h3>- Webzine de musique / Projet 4 au DIIAGE</h3>
      <p>Réalisation d'un site internet recensant des milliers de musiques et permettant aux visiteurs de donner leur avis sur les titres.</p>
      <p>Compétences : ASP.net Core, C#, Bootstrap</p> 
      <h3>- Projet Assistant Cybersécurité / Projet 3 au DIIAGE</h3>
      <p>Le projet consiste à créer un référentiel des solutions de cybersécurité existantes sur le marché.</p>
      <p>Compétences : React, PostgreSQL, JavaScript, Express.js, Node.js, CSS, HTML5</p> 
      <h3>- Création d'une plate-forme de gestion de noms de domaine / Projet 2 au DIIAGE</h3>
      <p>Le but était de développer un site web permettant à des utilisateurs de gérer des noms de domaine.</p>
      <p>Compétences : JavaScript, Express.js, Microsoft SQL Server, Node.js, CSS, HTML5</p>
      <h3>- Création d'un jeu en réseau / Projet 1 au DIIAGE</h3>
      <p>Jeux consistant à incarner une entreprise qui recrute des développeurs afin de s'étendre.</p>
      <p>Compétences : C#, Test Driven Development</p>
      <h3>- Création de ce CV intéractif / Projet personnel</h3>
      <p><a href="https://kororoapps.github.io/MissionCV/" target="_blank">https://kororoapps.github.io/MissionCV/</a></p>
      <p>Compétences : JavaScript, CSS, HTML</p>
      <h3>- Création d'un jeu de tir pour m'exercer à Javascript / Projet personnel</h3>
      <p><a href="https://kororoapps.github.io/ShootTeemo/" target="_blank">https://kororoapps.github.io/ShootTeemo/</a></p>
      <p>Compétences : JavaScript, CSS, HTML</p>
      <h3>- Création d'un site internet "Cookiniste" pour m'exercer à Symfony / Projet personnel</h3>
      <p><a href="https://github.com/KororoApps/cookiniste" target="_blank">https://github.com/KororoApps/cookiniste</a></p>
      <p>Compétences : PHP, Symfony, Twig</p>`,    
      cvRetrieve: false,
    pieceOfParchment: "./Cv_Galaxy/piece_of_cv/cv-projetsPersonnels.png",
  },
  {
    id: "ange-planet",
    planetSrc: "./Cv_Galaxy/map/ange_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/ange.jpg",
    parchmentSrc: "./Cv_Galaxy/background_worlds/ange_cv.png",
    planetAlt: "Planète tableau",
    backgroundAlt: "Un ange",
    parchmentAlt: "CV Parchemin",
    height: "25vh",
    top: "60%",
    left: "70%",
    portraitTop: "1050px",
    portraitLeft: "31%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-15%",
    translateTargetY: "-10%",
    rightPosition: "50%",
    topPosition: "20%",
    pieceOfCV: `<h2>SOFT SKILLS</h2> 
      <p>Autonome,</p>
      <p>Créative,</p>
      <p>Persévérante.</p>
      <br>
      <p>Je suis confiante dans ma capacité à progresser.</p>`,
    cvRetrieve: false,
    pieceOfParchment: "./Cv_Galaxy/piece_of_cv/cv-profilPersonnel.png",
  },
];
