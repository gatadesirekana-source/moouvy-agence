/**
 * ==========================================================================
 * MOOUVY AGENCE - SCRIPT JAVASCRIPT PRINCIPAL
 * Auteur : Moouvy agence (Gata Kana Désiré)
 * Description : Interactions dynamiques, compteurs animés, accordéon FAQ,
 *               gestion du formulaire d'audit (mailto), menu mobile & WhatsApp.
 * ==========================================================================
 */

// Strict mode pour une exécution propre et sans erreur silencieuse
'use strict';

/* ==========================================================================
   BLOC DE CONFIGURATION UNIQUE (Modifiable facilement par l'administrateur)
   ========================================================================== */
const MOOUVY_CONFIG = {
  // Numéro WhatsApp au format international (+225 07 77 95 73 37)
  whatsappNumber: "2250777957337",

  // Format d'affichage officiel pour les textes du site
  whatsappDisplay: "+225 07 77 95 73 37",

  // Email officiel de l'agence (moouvyagence@gmail.com)
  email: "moouvyagence@gmail.com",

  // Nom de l'agence et localisation
  agencyName: "Moouvy agence",
  founderName: "Gata Kana Désiré",
  location: "Abidjan & Afrique",

  // Messages pré-remplis pour WhatsApp
  whatsappMessages: {
    general: "Bonjour Moouvy agence, je souhaite échanger avec vous pour faire grandir mon entreprise grâce au digital.",
    audit: "Bonjour Gata Kana Désiré, je souhaite échanger au sujet d'un accompagnement digital pour mon activité.",
    formation: "Bonjour Moouvy agence, je suis intéressé par votre programme de formation pour entrepreneurs.",
    serviceWeb: "Bonjour Moouvy agence, je souhaite un devis pour la création d'un site web ou plateforme.",
    serviceAds: "Bonjour Moouvy agence, je souhaite lancer des campagnes publicitaires pour acquérir plus de clients."
  },

  // Liens des réseaux sociaux officiels
  socialLinks: {
    youtube: "https://www.youtube.com/@gatakanadesire",
    facebook: "https://www.facebook.com/moouvyagence",
    linkedin: "https://www.linkedin.com/in/gata-kana-desire",
    tiktok: "https://www.tiktok.com/@gatakanadesire"
  }
};

/* ==========================================================================
   INITIALISATION GLOBALE DU DOM
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initDynamicConfig();
  initHeroRotator();
  initHeaderScroll();
  initMobileMenu();
  initAnimatedCounters();
  initStatsSlider();
  initTestimonialsSlider();
  initFaqAccordion();
  initAuditForm();
  initTeamSlider();
  initScrollAnimations();
  initLegalModal();
  initSmoothScrollLinks();
});

/**
 * 0. Animation rotative des questions du Header/Hero
 * Défilement fluide des 7 questions stratégiques fournies par le client
 */
function initHeroRotator() {
  const rotatorText = document.getElementById('hero-rotator-text');
  if (!rotatorText) return;

  const questions = [
    "Voulez-vous faire grandir votre entreprise ?",
    "Prêt à propulser votre entreprise ?",
    "Prêt à faire passer votre entreprise au niveau supérieur ?",
    "Et si votre entreprise passait au digital ?",
    "Envie de développer votre activité en ligne ?",
    "Votre entreprise est-elle prête pour le futur ?",
    "Et si votre prochaine croissance commençait ici ?"
  ];

  let currentIndex = 0;
  const intervalTime = 3800; // 3.8s entre chaque changement

  setInterval(() => {
    rotatorText.classList.add('fade-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % questions.length;
      rotatorText.textContent = questions[currentIndex].toUpperCase();
      rotatorText.classList.remove('fade-out');
      rotatorText.classList.add('fade-in');

      // Force reflow pour transition CSS
      void rotatorText.offsetWidth;

      rotatorText.classList.remove('fade-in');
    }, 450);
  }, intervalTime);
}

/**
 * 1. Injection dynamique des paramètres de configuration dans la page
 */
function initDynamicConfig() {
  // Construction du lien WhatsApp avec le message général par défaut
  const defaultWhatsAppUrl = `https://wa.me/${MOOUVY_CONFIG.whatsappNumber}?text=${encodeURIComponent(MOOUVY_CONFIG.whatsappMessages.general)}`;

  // Mise à jour de tous les liens WhatsApp du site
  document.querySelectorAll('.js-whatsapp-link').forEach(link => {
    link.href = defaultWhatsAppUrl;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // Mise à jour de l'affichage du numéro de téléphone
  document.querySelectorAll('.js-whatsapp-display').forEach(el => {
    el.textContent = MOOUVY_CONFIG.whatsappDisplay;
  });

  // Mise à jour de l'affichage et des liens emails
  document.querySelectorAll('.js-email-display').forEach(el => {
    el.textContent = MOOUVY_CONFIG.email;
    if (el.tagName === 'A') {
      el.href = `mailto:${MOOUVY_CONFIG.email}`;
    }
  });

  document.querySelectorAll('.js-email-link').forEach(link => {
    link.href = `mailto:${MOOUVY_CONFIG.email}?subject=${encodeURIComponent("Prise de contact - Moouvy agence")}`;
  });

  // Mise à jour des liens réseaux sociaux
  const ytBtn = document.querySelector('.js-social-youtube');
  if (ytBtn) ytBtn.href = MOOUVY_CONFIG.socialLinks.youtube;

  const fbBtn = document.querySelector('.js-social-facebook');
  if (fbBtn) fbBtn.href = MOOUVY_CONFIG.socialLinks.facebook;

  const inBtn = document.querySelector('.js-social-linkedin');
  if (inBtn) inBtn.href = MOOUVY_CONFIG.socialLinks.linkedin;

  const ttBtn = document.querySelector('.js-social-tiktok');
  if (ttBtn) ttBtn.href = MOOUVY_CONFIG.socialLinks.tiktok;
}

/**
 * 2. Header collant avec effet au scroll (fond flou & ombre)
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Menu Mobile (Burger & Tiroir coulissant)
 */
function initMobileMenu() {
  const burgerBtn = document.getElementById('burger-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!burgerBtn || !drawer) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : burgerBtn.getAttribute('aria-expanded') !== 'true';
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));
    drawer.classList.toggle('is-open', isOpen);

    // Empêcher le défilement de l'arrière-plan quand le menu est ouvert
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  burgerBtn.addEventListener('click', () => toggleMenu());

  // Fermer le menu au clic sur n'importe quel lien du tiroir
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
}

/**
 * 4. Compteurs Animés des Chiffres Clés (IntersectionObserver)
 * Anime les statistiques : 100+, 30 000+, 700 000+, 5
 */
function initAnimatedCounters() {
  const statCards = document.querySelectorAll('.stat-card');
  if (!statCards.length) return;

  // Formateur de nombres en français (ajoute des espaces pour les milliers)
  const formatNumberFr = (num) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  const animateCounter = (counterEl, targetValue, duration = 2000) => {
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out cubic pour une décélération naturelle
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * targetValue);

      counterEl.textContent = formatNumberFr(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counterEl.textContent = formatNumberFr(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const targetNumber = parseInt(card.getAttribute('data-count'), 10);
        const counterEl = card.querySelector('.counter-value');

        if (counterEl && !isNaN(targetNumber)) {
          animateCounter(counterEl, targetNumber, 2200);
        }
        obs.unobserve(card); // Déclencher une seule fois
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '0px 0px -50px 0px'
  });

  statCards.forEach(card => observer.observe(card));
}

/**
 * 5. Accordéon FAQ Interactif et Accessible
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';

      // Fermer les autres accordéons pour une meilleure lisibilité
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn && otherAns) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherAns.style.maxHeight = null;
          }
        }
      });

      // Basculer l'état de l'accordéon actuel
      if (isExpanded) {
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight + 20}px`;
      }
    });
  });
}

/**
 * 6. Formulaire d'Audit Gratuit
 * - Valide les champs requis
 * - Prépare et déclenche l'ouverture de mailto:moouvyagence@gmail.com pré-rempli
 * - Affiche une notification de confirmation élégante
 * - Propose une redirection WhatsApp immédiate en alternative
 */
function initAuditForm() {
  const form = document.getElementById('audit-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('audit-name');
    const whatsappInput = document.getElementById('audit-whatsapp');
    const businessInput = document.getElementById('audit-business');

    const name = nameInput ? nameInput.value.trim() : '';
    const whatsapp = whatsappInput ? whatsappInput.value.trim() : '';
    const business = businessInput ? businessInput.value.trim() : '';

    if (!name || !whatsapp || !business) {
      showToast('Veuillez remplir l’ensemble des champs requis.', 'error');
      return;
    }

    // Construction du sujet et corps de l'email pré-rempli
    const emailSubject = `Demande de Diagnostic Digital Gratuit - ${name}`;
    const emailBody = 
`Bonjour Gata Kana Désiré & l'équipe Moouvy agence,

Je souhaite recevoir mon audit digital offert pour mon entreprise.

Voici les informations sur mon activité :
- Nom complet : ${name}
- Numéro WhatsApp : ${whatsapp}
- Secteur d'activité : ${business}
- Objectif principal : Obtenir plus de clients et accélérer ma croissance en ligne.

Dans l'attente de votre diagnostic personnalisé sous 24h.

Cordialement,
${name}`;

    const mailtoUrl = `mailto:${MOOUVY_CONFIG.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Notification visuelle
    showToast('Ouverture de votre messagerie pour envoyer votre diagnostic...', 'success');

    // Déclenchement du client de messagerie
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    // Réinitialisation optionnelle du formulaire après envoi
    setTimeout(() => {
      form.reset();
    }, 1500);
  });
}

/**
 * 7. Animations d'apparition douce au défilement (Fade-up)
 */
function initScrollAnimations() {
  const elementsToAnimate = [
    '.section-heading',
    '.service-card',
    '.portfolio-card',
    '.testimonial-card',
    '.team-card',
    '.faq-item',
    '.founder-card',
    '.final-cta-content'
  ];

  const elements = document.querySelectorAll(elementsToAnimate.join(', '));
  if (!elements.length) return;

  elements.forEach((el, index) => {
    el.classList.add('fade-up');
  });

  const scrollObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => scrollObserver.observe(el));
}

/**
 * 8. Fenêtre Modale pour les Mentions Légales
 */
function initLegalModal() {
  const modal = document.getElementById('legal-modal');
  const openLegalBtn = document.getElementById('open-legal-modal');
  const openPrivacyBtn = document.getElementById('open-privacy-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openLegalBtn) openLegalBtn.addEventListener('click', openModal);
  if (openPrivacyBtn) openPrivacyBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Fermeture au clic sur le fond sombre
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fermeture par touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/**
 * 9. Défilement fluide vers les ancres
 */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#whatsapp-link' || targetId === '#whatsapp-action' || targetId === '#whatsapp-contact') {
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 10. Affichage d'un Toast de Notification
 */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  
  if (type === 'error') {
    toast.style.borderLeftColor = '#ff4444';
  } else {
    toast.style.borderLeftColor = '#7000FF';
  }

  toast.classList.add('is-visible');

  setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 4500);
}

/**
/**
 * 6. Slider des Chiffres Clés & Accompagnements
 * - Permet de faire basculer tous les accompagnements et expériences de gauche à droite
 * - Boutons flèches gauche/droite et points indicateurs (dots)
 */
function initStatsSlider() {
  const container = document.getElementById('stats-slider-container');
  const track = document.getElementById('stats-slider-track');
  const prevBtn = document.getElementById('stats-prev-btn');
  const nextBtn = document.getElementById('stats-next-btn');
  const dotsContainer = document.getElementById('stats-slider-dots');

  if (!container || !track) return;

  const cards = Array.from(track.querySelectorAll('.stat-card'));
  if (cards.length === 0) return;

  function getStep() {
    const card = cards[0];
    const gap = parseFloat(window.getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  }

  // Création des dots pour les stats
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((card, index) => {
      const dot = document.createElement('button');
      dot.className = `stat-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Voir accompagnement ${index + 1}`);
      dot.setAttribute('type', 'button');
      dot.addEventListener('click', () => {
        const step = getStep();
        container.scrollTo({
          left: index * step,
          behavior: 'smooth'
        });
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateStatsDots() {
    const step = getStep();
    const scrollLeft = container.scrollLeft;
    const activeIndex = Math.min(
      Math.max(0, Math.round(scrollLeft / step)),
      cards.length - 1
    );

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.stat-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const step = getStep();
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const step = getStep();
      if (container.scrollLeft <= 15) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -step, behavior: 'smooth' });
      }
    });
  }

  container.addEventListener('scroll', () => {
    requestAnimationFrame(updateStatsDots);
  }, { passive: true });

  updateStatsDots();
}

/**
 * 10. Slider automatique & interactif des témoignages (8 clients)
 * - Défilement automatique toutes les 4.5 secondes de gauche à droite
 * - Pause au survol (hover) ou lors d'une interaction utilisateur
 * - Flèches gauche/droite et pagination interactive par points
 */
function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-slider-track');
  const prevBtn = document.getElementById('testimonials-prev-btn');
  const nextBtn = document.getElementById('testimonials-next-btn');
  const dotsContainer = document.getElementById('testimonials-slider-dots');
  const fadeLeft = document.getElementById('testimonials-fade-left');
  const fadeRight = document.getElementById('testimonials-fade-right');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  if (cards.length === 0) return;

  function getScrollStep() {
    const card = cards[0];
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    return card.offsetWidth + gap;
  }

  // Création dynamique des points de pagination (dots)
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((card, index) => {
      const dot = document.createElement('button');
      dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
      const authorName = card.querySelector('.author-name')?.textContent || `Avis ${index + 1}`;
      dot.setAttribute('aria-label', `Voir le témoignage de ${authorName}`);
      dot.setAttribute('type', 'button');
      dot.addEventListener('click', () => {
        const step = getScrollStep();
        track.scrollTo({
          left: index * step,
          behavior: 'smooth'
        });
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSliderState() {
    const step = getScrollStep();
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const activeIndex = Math.min(
      Math.max(0, Math.round(scrollLeft / step)),
      cards.length - 1
    );

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }

    if (fadeLeft) {
      fadeLeft.style.opacity = scrollLeft > 15 ? '1' : '0';
    }
    if (fadeRight) {
      fadeRight.style.opacity = scrollLeft < maxScroll - 15 ? '1' : '0';
    }
  }

  function scrollNext() {
    const step = getScrollStep();
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 15) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: step, behavior: 'smooth' });
    }
  }

  function scrollPrev() {
    const step = getScrollStep();
    if (track.scrollLeft <= 15) {
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -step, behavior: 'smooth' });
    }
  }

  nextBtn.addEventListener('click', scrollNext);
  prevBtn.addEventListener('click', scrollPrev);

  track.addEventListener('scroll', () => {
    requestAnimationFrame(updateSliderState);
  }, { passive: true });

  window.addEventListener('resize', updateSliderState);
  updateSliderState();

  // Défilement automatique toutes les 4.5s avec pause au survol
  let autoPlayTimer = setInterval(scrollNext, 4500);

  const wrapper = document.querySelector('.testimonials-slider-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    wrapper.addEventListener('mouseleave', () => {
      clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(scrollNext, 4500);
    });
    wrapper.addEventListener('touchstart', () => clearInterval(autoPlayTimer), { passive: true });
    wrapper.addEventListener('touchend', () => {
      clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(scrollNext, 4500);
    });
  }
}

/**
 * 11. Carrousel / Slider de l'Équipe Moouvy
 * - Défilement fluide de gauche vers la droite avec flèches latérales
 * - 3 cartes pleines visibles avec cartes masquées qui sortent à gauche et à droite
 * - Voiles dégradés dynamiques
 * - Génération dynamique des points indicateurs (dots)
 * - Support tactile (swipe) et glisser à la souris (drag to scroll)
 */
function initTeamSlider() {
  const track = document.getElementById('team-slider-track');
  const prevBtn = document.getElementById('team-prev-btn');
  const nextBtn = document.getElementById('team-next-btn');
  const dotsContainer = document.getElementById('team-slider-dots');
  const fadeLeft = document.getElementById('team-fade-left');
  const fadeRight = document.getElementById('team-fade-right');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.querySelectorAll('.team-card'));
  if (cards.length === 0) return;

  // Calcul dynamique du pas de défilement (largeur d'une carte + espacement gap)
  function getScrollStep() {
    const card = cards[0];
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    return card.offsetWidth + gap;
  }

  // Création des points de pagination (dots)
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((card, index) => {
      const dot = document.createElement('button');
      dot.className = `team-dot ${index === 0 ? 'active' : ''}`;
      const memberName = card.querySelector('.team-name')?.textContent || `Membre ${index + 1}`;
      dot.setAttribute('aria-label', `Voir le profil de ${memberName}`);
      dot.setAttribute('type', 'button');
      dot.addEventListener('click', () => {
        const step = getScrollStep();
        track.scrollTo({
          left: index * step,
          behavior: 'smooth'
        });
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Mise à jour de l'état actif des points indicateurs et des voiles dégradés
  function updateSliderState() {
    const step = getScrollStep();
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const activeIndex = Math.min(
      Math.max(0, Math.round(scrollLeft / step)),
      cards.length - 1
    );

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.team-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }

    // Gestion dynamique des voiles dégradés gauche et droite
    if (fadeLeft) {
      fadeLeft.style.opacity = scrollLeft > 15 ? '1' : '0';
    }
    if (fadeRight) {
      fadeRight.style.opacity = scrollLeft < maxScroll - 15 ? '1' : '0';
    }
  }

  // Événements boutons de navigation Flèche Gauche & Droite
  nextBtn.addEventListener('click', () => {
    const step = getScrollStep();
    const maxScroll = track.scrollWidth - track.clientWidth;
    
    // Si l'utilisateur est rendu à la fin, on boucle de façon fluide vers le premier profil
    if (track.scrollLeft >= maxScroll - 15) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: step, behavior: 'smooth' });
    }
  });

  prevBtn.addEventListener('click', () => {
    const step = getScrollStep();
    
    // Si l'utilisateur est au tout début, on boucle vers la fin
    if (track.scrollLeft <= 15) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -step, behavior: 'smooth' });
    }
  });

  // Détection du défilement avec debounce pour la fluidité
  let isScrollingTimer;
  track.addEventListener('scroll', () => {
    window.clearTimeout(isScrollingTimer);
    isScrollingTimer = setTimeout(updateSliderState, 40);
  }, { passive: true });

  // Glisser-déposer à la souris (Mouse drag to scroll)
  let isPointerDown = false;
  let startPointerX = 0;
  let initialScrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isPointerDown = true;
    startPointerX = e.pageX - track.offsetLeft;
    initialScrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
  });

  window.addEventListener('mouseup', () => {
    if (isPointerDown) {
      isPointerDown = false;
      track.style.scrollBehavior = 'smooth';
      updateSliderState();
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isPointerDown) return;
    e.preventDefault();
    const currentX = e.pageX - track.offsetLeft;
    const distanceMoved = (currentX - startPointerX) * 1.4;
    track.scrollLeft = initialScrollLeft - distanceMoved;
  });

  // Mise à jour lors du redimensionnement de l'écran
  window.addEventListener('resize', updateSliderState, { passive: true });

  // État initial
  updateSliderState();
}
