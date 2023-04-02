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
    left: "2%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-16%",
    translateTargetY: "-15%",
    rightPosition: "10%",
    topPosition: "50%",
    pieceOfCV: `<h1>ELODIE SPONTON</h1> 
      <h4>DEVELOPPEUSE WEB</h4>
      <h3>COORDONNEES</h3>
      <p>Tél : 06 42 96 52 26</p>
      <p>Mail : elodie.sponton@yahoo.fr</p>
      <p>Adresse : 4H allée de la 1er Division Fr Libre</p>
      <p>21000 DIJON</p>`,
    cvRetrieve: true,
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
      <p>Etude avec la formation en ligne Javascript de A à Z, de Fromscratch.podia.com</p>
      <h3>Apprentissage de Symfony</h3>
      <p>Etude avec la formation en ligne We Develop Me, de Lior Chamla</p>
      <h3>Apprentissage de HTML, CSS, PHP, SQL, GIT</h3>
      <p>Etude avec OpenClassRooms</p>`,
    cvRetrieve: false,
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
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-10%",
    translateTargetY: "-15%",
    rightPosition: "50%",
    topPosition: "50%",
    pieceOfCV: `<h2>FORMATIONS</h2> 
      <h3>Titre de niveau II, Responsable QSE</h3>
      <h4>2014-2016 / CESI Entreprise, Dijon</h4>
      <h3>Master 2, Management des Risques Industriels et Environnementaux</h3>
      <h4>2012-2013 / Université de Poitiers</h4>
      <h3>Master 2, Espace Rural et Environnement</h3>
      <h4>2011-2012 / Université de Bourgogne</h4>`,
    cvRetrieve: false,
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
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-24%",
    translateTargetY: "-20%",
    rightPosition: "50%",
    topPosition: "50%",
    pieceOfCV: `<h2>EXPERIENCES PROFESSIONNELLES</h2> 
      <h3>Assistante admnistrative - Sanitel</h3>
      <h4>Octobre 2017 - En cours</h4>
      <p>Accueil physique et téléphonique, Établissement de DC4 et contrat de sous-traitance, Vérification des factures...</p>
      <h3>Assistane administrative - Loiseau Volets Roulants</h3>
      <h4>Février - Octobre 2017</h4>
      <p>Prise et suivie de commandes, Suivide de la trésorerie, Accueil physique et téléphonique.</p>
      <h3>Ingénieure QSE - Schneider Electric</h3>
      <h4>Septembre 2014 - Mars 2016</h4>
      <p>Unification du système de management de deux usines.</p>`,
    cvRetrieve: false,
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
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-13%",
    translateTargetY: "-10%",
    rightPosition: "50%",
    topPosition: "40%",
    pieceOfCV: `<h2>INTÉRÊTS ET LOISIRS</h2> 
      <h4>Dessin et création</h4>
      <p>Animation d'un blog Wordpress et d'un compte Instagram.</p>
      <p>Création de vidéos Tiktok.</p>
      <p>Participation à l'Inktober depuis 2016.</p>`,
    cvRetrieve: false,
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
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-23%",
    translateTargetY: "-20%",
    rightPosition: "50%",
    topPosition: "20%",
    pieceOfCV: `<h2>PROJETS PERSONNELS</h2> 
      <h3>- Création d'un jeu de tir pour m'exercer à Javascript</h3>
      <p>https://kororoapps.github.io/ShootTeemo/</p>
      <h3>- Création d'un site internet "Cookiniste" pour m'exercer à Symfony</h3>`,
    cvRetrieve: false,
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
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-15%",
    translateTargetY: "-10%",
    rightPosition: "50%",
    topPosition: "20%",
    pieceOfCV: `<h2>PROFIL PERSONNEL</h2> 
      <p>Autonome</p>
      <p>Créative</p>
      <p>Persévérante</p>
      <p>Je suis confiante dans ma capacité à progresser</p>`,
    cvRetrieve: false,
  },
];
