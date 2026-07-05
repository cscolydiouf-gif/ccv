# CV Interactif — cheikh sadibou coly diouf

## Description du projet

Ce projet est un CV interactif sous forme de page web, réalisé dans le cadre du
module **Développement Web** (Licence 2 Informatique — Université Iba Der Thiam de Thiès).

Il présente mon profil (formation, compétences, expériences, projets, langues et
centres d'intérêt) au travers d'une interface moderne, responsive et accessible.

## Technologies utilisées

- **HTML5** — structure sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — Flexbox, CSS Grid, variables CSS, transitions, media queries
- **JavaScript natif (Vanilla JS)** — aucune librairie externe
- **Google Fonts** — Space Grotesk & JetBrains Mono
- **Font Awesome** — icônes

## Fonctionnalités

- Mode sombre / clair avec sauvegarde dans `localStorage`
- Menu de navigation responsive avec menu hamburger sur mobile
- Défilement fluide (smooth scroll) vers les sections
- Animation des barres de compétences au scroll (`IntersectionObserver`)
- Apparition progressive des sections au défilement
- Formulaire de contact avec validation JavaScript (champs requis, format e-mail)
- Bouton "Retour en haut" apparaissant au défilement
- Design responsive (adapté mobile, tablette, ordinateur)

## Arborescence

```
mon-cv/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── photo-profil.jpg
└── README.md
```

## Comment ouvrir le projet

1. Télécharger / décompresser le dossier `mon-cv`.
2. Remplacer `images/photo-profil.jpg` par votre propre photo (même nom de fichier,
   ou mettre à jour le chemin dans `index.html`).
3. Ouvrir le fichier `index.html` directement dans un navigateur (Chrome, Firefox…),
   ou utiliser une extension de type "Live Server" pour un rendu en local.
4. Aucune installation ni dépendance n'est nécessaire : tout le code est en HTML, CSS
   et JavaScript natifs.

## Personnalisation

Toutes les informations (nom, contact, formation, compétences, projets, etc.) sont
à remplacer dans `index.html` par vos propres données réelles. Les couleurs et
polices peuvent être ajustées via les variables définies en haut de `css/style.css`
(bloc `:root`).
