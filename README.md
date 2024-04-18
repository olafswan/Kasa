#### Projet 11 de la formation "Développeur d'application - JavaScript React" par OpenClassrooms

# Développez une application Web avec React et React Router

### Qu’allez-vous apprendre dans ce projet ?
 
Dans ce projet, vous allez implémenter le front-end d’une application en utilisant React et React Router pour créer 
une expérience utilisateur moderne et réactive.

Vous travaillerez sur la logique de présentation des données et les composants **React**, une bibliothèque JavaScript 
populaire pour la création d'interfaces utilisateur.

Vous apprendrez à mettre en œuvre des **animations CSS** et à développer l'interface avec **SASS**, un préprocesseur CSS, 
pour améliorer l'expérience visuelle de l'application.

Vous utiliserez **React Router** pour configurer la navigation entre les différentes pages de l'application. Cela vous 
permettra de comprendre comment gérer efficacement le routage dans une application web moderne.

Le projet se concentrera exclusivement sur le développement front-end, en se basant sur les maquettes fournies et en 
utilisant des données simulées extraites d'un **fichier JSON**.

Vous débuterez le projet avec **Create React App**, un outil qui simplifie la configuration initiale d'une application React. Vous utiliserez également **Node.js** pour exécuter du code JavaScript en dehors du navigateur.

### En quoi ces compétences seront-elles importantes pour votre carrière ? 

La maîtrise de React et de React Router est essentielle dans le développement web moderne, en particulier pour la 
création d'applications web dynamiques et réactives. 

L'utilisation de SASS pour gérer le CSS et l'implémentation des animations CSS sont également des compétences clés 
pour améliorer l'expérience utilisateur. 

Ces compétences vous permettront de créer des applications web interactives et visuellement attrayantes, très 
demandées dans l'industrie du développement web.

### Objectifs pédagogiques
* Créer des composants avec React
* Développer les routes d'une application web avec React Router
* Initialiser une application web avec un framework

***

### Scénario :

Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de 
la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait 
partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

![Logo de Kasa](https://user.oc-static.com/upload/2022/06/24/16560899769906_FR_811_P8_Banner-Kasa%20%281%29.png)


Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une 
refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également 
profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission 
vous trouvez le récapitulatif suivant dans votre boîte mail :


```bash
Objet : Brief refonte site Kasa
De : Laura
À : Moi

Hello,
Bienvenue pour ton premier jour !

On est vraiment ravis de te compter parmi nous !
Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.

Je préfère te mettre par écrit quelques éléments de contexte qui t'aideront à te projeter dans ta mission avant notre point de jeudi.

Ton objectif 

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes
Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité ! 

Back-end / data : Le recrutement de la personne en charge du Back-End n'est pas terminé et va prendre plus de temps que prévu. Du coup, il
va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses
construire le Front qui correspond.

Contraintes techniques

Tu trouveras les coding guidelines de Kasa ici. Comme tu le verras, nous utilisons habituellement Create React App pour créer les applications
React, mais tu peux utiliser un autre bundler comme Vite par exemple si tu préfères.

Voilà j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.

Très bonne journée à toi !

Laura
```

Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités 
du site.

```bash
Objet : Fonctionnalité et design
De : Paul
À : Moi

Salut,

Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site alors voici les infos clés.

Design

Voici les maquettes sur Figma pour le design d’interface. Pour avoir un rendu le plus réaliste possible de l'application, utilise les prototypes
du site disponibles ici. Tu verras qu'il y a des animations sur les menus déroulants mais ce n'est pas indispensable de les intégrer dans ton
code à ce stade.

J’ai l’habitude de travailler avec la logique de composants sur Figma, Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras
toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer
sur la ressource souhaitée et de faire "Exporter" au format voulu. Sur les vignettes des logements, pour les images de couverture, j'ai mis
une rectangle orange que tu peux remplacer par l'image correspondante.

Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

Pour le défilement des photos dans la galerie (composant Gallery) :
  Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
  Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première
  image. 
  S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le
cadre de l’image.
Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !

Paul
```

### Pièces jointes :

[Guide des étapes clés ](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Guide+d'etapes+cles+-+Creez+une+application+web+de+location+immobiliere+avec+React+1.pdf)

[Fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)

[Coding guidelines de Kasa](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf)

[Maquette Figma](https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design&t=BeorNz9YLHk4zv3O-0)

[Prototype](https://www.figma.com/proto/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=3-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1)


Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !

***

### Livrables :
1. Un fichier au format TXT ou PDF comprenant le lien vers **votre projet sur GitHub** contenant l’ensemble du code de l'application.

### Cours :
[Débutez avec React](https://openclassrooms.com/fr/courses/7008001-debutez-avec-react)

[Créez une application React complète](https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete)

### Résultat final lors du passage de la soutenance :
[Lien du site Kasa](https://olafswan.github.io/OC_DAJR_P11/)
