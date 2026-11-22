# Moouvy agence — Site Vitrine Officiel

Site vitrine ultra-performant, responsive et orienté conversion pour **Moouvy agence**, l'accélérateur digital de croissance pour entrepreneurs et PME en Afrique et à l'international.

Conçu en **HTML5, CSS3 et JavaScript pur (Vanilla)**, sans aucun framework ni dépendance lourde, prêt à être déployé ou ouvert directement dans votre navigateur.

---

## 🚀 Démarrage Rapide

Double-cliquez simplement sur [index.html](file:///c:/Users/ernes/Downloads/Moouvy%20agence/index.html) pour l'ouvrir dans n'importe quel navigateur web moderne (Chrome, Edge, Firefox, Safari).

Pour le lancer avec un serveur local de développement :
```bash
python -m http.server 8000
```
Puis accédez à `http://localhost:8000`.

---

## 📁 Architecture des Fichiers

- [index.html](file:///c:/Users/ernes/Downloads/Moouvy%20agence/index.html) : Page principale complète, sémantique HTML5, métadonnées SEO, OpenGraph et microdonnées Schema.org.
- [questionnaire.html](file:///c:/Users/ernes/Downloads/Moouvy%20agence/questionnaire.html) : Questionnaire interactif multi-étapes de qualification de projet (« JE VEUX DES CLIENTS ») avec redirection WhatsApp et email.
- [mentions-legales.html](file:///c:/Users/ernes/Downloads/Moouvy%20agence/mentions-legales.html) : Page dédiée aux mentions légales obligatoires, conditions d'utilisation et politique de confidentialité (RGPD).
- [style.css](file:///c:/Users/ernes/Downloads/Moouvy%20agence/style.css) : Feuille de style complète avec Design System officiel (Cyan `#38D8D8`, Corail `#FF5A5F`, Sombre `#111827`, Blanc `#FFFFFF`), dégradés descendants, boutons pilule, animations et responsive design.
- [script.js](file:///c:/Users/ernes/Downloads/Moouvy%20agence/script.js) : Interactions dynamiques, slider de l'équipe (3 cartes + peeks latéraux), slider des chiffres clés/accompagnements de gauche à droite, compteurs animés, accordéon FAQ accessible et bouton flottant WhatsApp.

---

## ⚙️ Personnalisation Simple & Rapide

### 1. Modifier le numéro WhatsApp, l'Email et les Coordonnées
Toutes les coordonnées sont centralisées en tête du fichier [script.js](file:///c:/Users/ernes/Downloads/Moouvy%20agence/script.js#L14-L45) dans le bloc `MOOUVY_CONFIG` :

```javascript
const MOOUVY_CONFIG = {
  // Numéro WhatsApp au format international (+225 07 77 95 73 37)
  whatsappNumber: "2250777957337",

  // Format d'affichage convivial sur le site
  whatsappDisplay: "+225 07 77 95 73 37",

  // Email de réception des demandes
  email: "moouvyagence@gmail.com",

  // Nom et localisation
  agencyName: "Moouvy agence",
  founderName: "Gata Kana Désiré",
  location: "Abidjan & Afrique",

  // Liens des réseaux sociaux
  socialLinks: {
    youtube: "https://www.youtube.com/@gatakanadesire",
    facebook: "https://www.facebook.com/moouvyagence",
    linkedin: "https://www.linkedin.com/in/gata-kana-desire",
    tiktok: "https://www.tiktok.com/@gatakanadesire"
  }
};
```
*Toutes les occurrences sur la page (liens WhatsApp, formulaires, pied de page et bouton flottant) se mettent à jour automatiquement.*

---

### 2. Insérer une photo dans le cadre des Membres de l'Équipe

Dans la section `id="equipe"` de [index.html](file:///c:/Users/ernes/Downloads/Moouvy%20agence/index.html), chaque profil présente le nom et les fonctions **au-dessus** du cadre photo, et un grand cadre rectangulaire au fond. Pour insérer une vraie photo :
```html
<div class="team-photo-frame avatar-team-1">
  <img src="images/gata-kana-desire.jpg" alt="Gata Kana Désiré" class="team-full-photo">
</div>
```

---

### 3. Remplacer la photo du Fondateur (Section À Propos)

Dans la section À Propos de [index.html](file:///c:/Users/ernes/Downloads/Moouvy%20agence/index.html), remplacez `<div class="founder-photo-placeholder">` par :
```html
<img src="images/gata-kana-desire-portrait.jpg" alt="Gata Kana Désiré" class="founder-img">
```

---

## 🎨 Spécifications Visuelles & Charte Graphique

- **Cyan / Turquoise (Capsule Logo & Accents) :** `#38D8D8`
- **Corail Vif (Accent secondaire) :** `#FF5A5F`
- **Noir / Bleu Nuit Profond (Fonds sombres & typographies) :** `#111827`
- **Blanc Pur (Fonds de sections & cartes) :** `#FFFFFF`
- **Dégradé Header & Bandeau :** Dégradé subtil descendant, blanc au sommet `#FFFFFF` et dégradant vers le bas pour une mise en condition douce.
- **Typographie :** *Poppins* (Google Fonts) — Titres en **ExtraBold (800)**, corps en **Regular (400)**.
- **Bouton WhatsApp CTA Final :** Arrière-plan **blanc** permanent avec liseré vert WhatsApp `#25D366`.

---

## 📱 Fonctionnalités Incluses

1. **Logo officiel capsule :** Capsule cyan `MOOUVY` suivie du texte `AGENCE`.
2. **Bandeau d'annonce dégradé :** Pastille "NOUVEAU", texte d'audit offert et lien direct vers le questionnaire.
3. **Bascule des Accompagnements (Chiffres clés) :** Piste défilante de gauche à droite avec boutons flèches et points de pagination pour faire basculer tous les accompagnements et résultats.
4. **Slider Équipe 3 Cartes + Peeks :** Affichage de 3 profils entiers sur desktop avec aperçu débordant des cartes masquées à gauche et à droite, voiles dégradés et flèches latérales centrées verticalement.
5. **Noms & Titres au-dessus du cadre photo :** Lisibilité immédiate de l'identité des membres, cadre rectangulaire pleine largeur pour la photo.
6. **Questionnaire interactif (`questionnaire.html`) :** Diagnostic en 5 étapes pour qualifier le besoin, secteur, maturité, délai et coordonnées avec redirection WhatsApp automatique.
7. **Page Mentions Légales (`mentions-legales.html`) :** Page conforme pour la transparence juridique et la protection des données.
8. **Profil Fondateur avec Liens Réseaux Sociaux :** Présentation économique & monétariste de Gata Kana Désiré avec boutons directs YouTube (+30K), LinkedIn, Facebook et TikTok.
9. **FAQ Réajustée :** Vocation internationale et opportunités de partenariats/collaborations.
10. **Bouton flottant WhatsApp :** Pulsation d'attention en bas à droite vers le numéro `+225 07 77 95 73 37`.
