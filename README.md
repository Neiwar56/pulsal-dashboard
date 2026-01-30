# PulsAl - Dashboard CRM

> Ce projet a été réalisé dans le cadre du test d'intégration technique pour le stage chez HARNIX. Il s'agit d'une interface de Dashboard CRM moderne, réactive et animée.

##  Démo en ligne
Le projet est déployé et accessible ici :  
 **[Voir la démo sur Vercel](https://pulsal-dashboard.vercel.app/)**

---

##  Stack Technique
Ce projet utilise les technologies imposées par le cahier des charges :

* **Framework :** [Next.js 14] (App Router)
* **Styling :** [TailwindCSS]
* **Icônes :** [Lucide React]
* **Animations :** [Framer Motion] (Transitions de pages & éléments)
* **Graphiques :** [Recharts]

---

##  Installation & Lancement
Pour tester le projet localement sur votre machine :

1.  **Cloner le repository :**
    ```bash
    git clone [https://github.com/Neiwar56/pulsal-dashboard.git](https://github.com/Neiwar56/pulsal-dashboard.git)
    cd pulsal-dashboard
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

4.  Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

##  Pages Implémentées

L'application comprend 4 pages principales entièrement responsive :

### 1. Dashboard (Vue d'ensemble)
* Vue synthétique des KPIs clés (Utilisateurs, Tickets, Campagnes).
* Graphique d'activité interactif (Recharts).
* Liste des tickets urgents à traiter.
* *Animation d'apparition en cascade des statistiques.*

### 2. Messagerie (Inbox)
* Interface complexe inspirée des leaders du marché (Crisp, Intercom).
* Architecture 3 colonnes : Liste des conversations / Chat central / Détails client.
* Système de bulles de messages distinctes (Expéditeur/Receveur).
* *Animation fluide des messages à l'ouverture.*

### 3. Équipe
* Grille de cartes présentant les membres de l'équipe.
* Informations de contact et rôles visuels.
* Effet de survol

### 4. Paramètres
* Formulaire d'édition de profil complet.
* Menu de navigation latéral animé.

---

##  Aperçu

| Dashboard | Messagerie |
|-----------|------------|
| ![Tableau de bord](public/image.png) | ![Messagerie](public/image-1.png) |

---

##  Auteur

Réalisé par **Nelson Harry AWOUDO** *Candidat au poste de Stagiaire Développeur Front-End chez Harnix*