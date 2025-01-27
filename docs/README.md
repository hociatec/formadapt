# Projet FormAdapt Windsurf

    ## Description
    Ce projet est une application web pour l'apprentissage des techniques de windsurf. Il inclut des fonctionnalités telles que l'authentification utilisateur, des recommandations personnalisées, un système de favoris, des notifications, un parcours d'apprentissage et des tests pratiques interactifs.

    ## Technologies utilisées
    - **Frontend**: React.js, React Router, Tailwind CSS, Framer Motion
    - **Backend**: Node.js, Express, MySQL, JWT, WebSocket

    ## Démarrage
    1. Cloner le dépôt
    2. Naviguer vers le répertoire `client` et exécuter `npm install`
    3. Naviguer vers le répertoire `server` et exécuter `npm install`
    4. Exécuter `npm run dev` dans le répertoire racine pour démarrer le client et le serveur

    ## Structure du projet
    ```
    formadapt-windsurf/
    ├── client/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── auth/
    │   │   │   ├── common/
    │   │   │   ├── notifications/
    │   │   │   ├── favorites/
    │   │   │   └── recommendations/
    │   │   ├── contexts/
    │   │   ├── pages/
    │   │   ├── styles/
    │   │   └── utils/
    ├── server/
    │   ├── routes/
    │   ├── controllers/
    │   ├── models/
    │   └── services/
    ├── docs/
    └── tests/
    ```

    ## Guide de contribution
    1. Créer une branche pour votre fonctionnalité :
    ```bash
    git checkout -b feature/nom-de-la-fonctionnalite
    ```
    2. Committer vos changements :
    ```bash
    git commit -m "Description détaillée des changements"
    ```
    3. Pousser vers la branche :
    ```bash
    git push origin feature/nom-de-la-fonctionnalite
    ```
    4. Ouvrir une Pull Request

    ## Conventions de nommage
    - **Composants React**: PascalCase (ex: `LoginPage.jsx`)
    - **Fichiers utilitaires**: camelCase (ex: `authUtils.js`)
    - **Styles**: kebab-case (ex: `button-primary.css`)
    - **Routes API**: kebab-case (ex: `/api/user-preferences`)
