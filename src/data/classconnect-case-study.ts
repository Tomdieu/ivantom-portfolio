export type ClassConnectContent = {
  projectName: string;
  tagline: string;
  statusBadge: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  heroImage: string;
  role: string;
  organisation: string;
  problemStats: { value: string; label: string; detail: string }[];
  problemNarrative: string[];
  solutionNarrative: string;
  timeline: { step: number; title: string; description: string }[];
  techStack: string[];
  challenges: { title: string; description: string }[];
  features: { title: string; description: string }[];
  actors: { role: string; description: string }[];
  metrics: { goal: string; indicator: string }[];
  testimonials: { quote: string; author: string }[];
  lessons: string[];
};

export const classconnectContentEn: ClassConnectContent = {
  projectName: "ClassConnect — Adaptive Learning for Africa",
  tagline:
    "Cameroon's first adaptive e-learning platform — personalized courses at your own pace, from middle school to professional upskilling",
  statusBadge: "Live — classconnect.cm · 1,780+ commits · Open Source",
  tags: ["Education", "E-Learning", "EdTech", "PWA", "Social Impact", "Cameroon"],
  liveUrl: "https://classconnect.cm",
  githubUrl: "https://github.com/Tomdieu/class-connect",
  heroImage: "/classconnect.png",
  role: "Lead Full-Stack Engineer & Platform Architect",
  organisation: "Founder | Tomdieu Ivan — Yaoundé, Cameroon",

  problemStats: [
    { value: "78%", label: "Learn via WhatsApp", detail: "Courses shared as scattered PDFs & voice notes — no curriculum, no progress tracking" },
    { value: "2.1M+", label: "University students", detail: "Overcrowded lecture halls across Cameroon — limited access to qualified instructors" },
    { value: "11.4M+", label: "Mobile Money accounts", detail: "MTN MoMo + Orange Money penetration — yet no integrated subscription flow for education" },
    { value: "0", label: "Unified platform", detail: "No centralized system for multi-level curricula before ClassConnect" },
  ],

  problemNarrative: [
    "In Cameroon, quality education is fragmented across WhatsApp groups, photocopied handouts, and informal tutoring. Middle school students, high school candidates, university learners and working professionals all face the same gap: no structured curriculum, no verified resources, and no way to track progress or join live sessions with qualified teachers.",
    "11.4 million active Mobile Money accounts exist on MTN MoMo and Orange Money — yet no learning platform had turned this payment rails into frictionless education subscriptions. Bilingual learners (French/English) lacked a single platform that could serve both languages while supporting low-bandwidth, mobile-first access. Existing foreign MOOCs ignore local curricula, local payment methods, and local academic calendars.",
  ],

  solutionNarrative:
    "ClassConnect digitises the entire learning journey — structured class hierarchies → subjects → chapters → topics, each with videos, PDFs, exercises and revision materials, live Jitsi classrooms and real-time community. One account gives a middle-schooler, a university student and a working professional the same adaptive experience: enroll, subscribe via Mobile Money, learn live or async, discuss in forums, chat in real time, and watch progress sync automatically. Every course is bilingual FR/EN, mobile-first, and built for Cameroon's connectivity realities.",

  timeline: [
    { step: 1, title: "Discover by level", description: "Student selects education level — College, Lycée, University or Professional — and browses structured classes." },
    { step: 2, title: "Explore curriculum", description: "Drill into subjects → chapters → topics with curated videos, PDFs, exercises and revision sheets." },
    { step: 3, title: "Enroll & subscribe", description: "Choose Basic / Standard / Premium and pay with MTN MoMo or Orange Money via CamPay/FreemoPay — OAuth2 + Google login, no bank required." },
    { step: 4, title: "Access resource library", description: "Stream videos, download PDFs, complete exercises — progress auto-tracked with analytics per topic." },
    { step: 5, title: "Join live sessions", description: "Scheduled or on-demand Jitsi Meet classrooms with recording, participant tracking and calendar sync." },
    { step: 6, title: "Collaborate in real time", description: "Ask in public/private forums, DM via WebSocket chat, and receive push notifications for replies and deadlines." },
    { step: 7, title: "Track school year", description: "Academic year & course-declaration flow mirrors real Cameroonian enrolment — school-year scoped progress." },
    { step: 8, title: "Get certified by progress", description: "Analytics dashboard shows time-on-topic, exercise scores and live-session attendance — visible to students, teachers and admins." },
  ],

  techStack: [
    "Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui",
    "Zustand", "TanStack Query", "NextAuth v5", "next-international", "Framer Motion",
    "Django 5.1.4", "Django REST Framework", "PostgreSQL", "OAuth2 (django-oauth-toolkit)", "drf-yasg (Swagger)",
    "Celery", "Redis", "RabbitMQ", "Django Channels", "Docker Compose", "Nginx", "Gunicorn",
    "Jitsi Meet", "CamPay / FreemoPay", "AWS S3 / Backblaze B2",
  ],

  challenges: [
    { title: "Hierarchical curriculum modelling", description: "Designed a 5-level relational model — Class → Subject → Chapter → Topic → Resource — with nested serializers, ordered querysets, and admin inlines so non-technical staff can publish an entire academic year without code changes." },
    { title: "RBAC + OAuth2 across 4 roles", description: "Students, Professionals, Teachers and Admins share one auth layer (django-oauth-toolkit + NextAuth v5). Scoped querysets, permission classes and Next.js middleware enforce class-enrollment and subscription checks on every request." },
    { title: "Mobile Money subscriptions — idempotency", description: "CamPay/FreemoPay webhooks carry duplicate retries on flaky networks. Built idempotency keys, server-side signature verification, and subscription-state machine (pending → active → expired) to prevent double-crediting and race conditions." },
    { title: "Real-time at Cameroonian latency", description: "Django Channels + Redis pub/sub powers forum live-updates and WebSocket chat. Presence tracking, typing indicators and offline message queues keep collaboration snappy even on 2G / intermittent connectivity." },
    { title: "Jitsi live classrooms, embedded", description: "Integrated Jitsi Meet IFrame API with JWT-authenticated rooms, scheduled sessions, participant join/leave tracking, recording hooks and Google Calendar API sync — all rendered inside Next.js without leaving the platform." },
    { title: "Bilingual PWA, single codebase", description: "next-international with FR/EN dictionaries across all UI and curriculum metadata. PWA-cached critical assets, lazy-loaded videos/PDFs and compressed S3 delivery keep the platform usable on low-end Android devices." },
    { title: "Monolith → microservices runway", description: "Shipped as a Dockerized Django monolith (backend/monolithic/) with a parallel backend/micro-services/ skeleton. API boundaries are service-ready — User, Course, Payment, Notification and Streaming services can split without frontend rewrites." },
  ],

  features: [
    { title: "Multi-Level by Design", description: "College, Lycée, University and Professional tracks — each with its own class hierarchy and curriculum." },
    { title: "Structured Curriculum", description: "Class → Subject → Chapter → Topic graph with ordered resources (videos, PDFs, exercises, revisions)." },
    { title: "Resource Library", description: "Centralized library per topic; S3-backed delivery with streaming, download and offline-friendly caching." },
    { title: "Live Classrooms", description: "Jitsi-powered video conferencing — scheduled & on-demand, with recording and attendance." },
    { title: "Forum + Real-Time Chat", description: "Public/private forums plus WebSocket DM — the community that WhatsApp never provided." },
    { title: "Flexible Subscriptions", description: "Basic / Standard / Premium tiers via MTN MoMo & Orange Money — no bank, no friction." },
    { title: "Progress & Analytics", description: "Per-topic progress, exercise scores, live attendance and admin-wide activity audit trail." },
    { title: "Bilingual & PWA-Ready", description: "Full FR/EN i18n, OAuth2 + Google SSO, and PWA install for low-bandwidth continuity." },
  ],

  actors: [
    { role: "Middle/High-School Student", description: "Follows college/lycée curriculum, accesses revision materials, joins live revision sessions." },
    { role: "University Student", description: "Enrolls by faculty/class, streams lecture resources, collaborates in course forums." },
    { role: "Professional Learner", description: "Upskills via professional track — short courses with certificates and async resources." },
    { role: "Teacher", description: "Creates course offerings, publishes chapters/topics, schedules Jitsi sessions, tracks class progress." },
    { role: "Administrator", description: "Manages users, school years, course declarations, subscriptions and platform analytics." },
    { role: "CamPay / FreemoPay", description: "Processes MTN MoMo & Orange Money subscriptions; webhooks drive plan activation." },
    { role: "Jitsi Meet", description: "Provides embedded live classrooms — room creation, JWT auth, recording and presence." },
    { role: "System", description: "Celery/Redis + Channels workers for notifications, activity logging and push alerts." },
  ],

  metrics: [
    { goal: "Platform live & functional", indicator: "Shipped — classconnect.cm + alpha vercel deploy" },
    { goal: "Education levels covered", indicator: "4 — College, Lycée, University, Professional" },
    { goal: "Curriculum depth", indicator: "Class → Subject → Chapter → Topic → Resource" },
    { goal: "Payment integration", indicator: "MTN MoMo + Orange Money (CamPay/FreemoPay)" },
    { goal: "Live classrooms", indicator: "Jitsi Meet embedded, recording-ready" },
    { goal: "Real-time community", indicator: "Forums + WebSocket chat + push notifications" },
    { goal: "Languages", indicator: "FR/EN bilingual across UI & content" },
    { goal: "Platform uptime", indicator: "99.9% target, Docker + Nginx + Gunicorn" },
  ],

  testimonials: [],

  lessons: [
    "Curriculum is the data model — modelling Class→Subject→Chapter→Topic→Resource correctly upfront saved months of refactoring and made the admin usable by non-developers.",
    "Mobile Money UX must assume webhook retries and USSD delays — idempotency keys and explicit subscription states (pending/active/expired) are non-negotiable.",
    "Bilingual from day one changes everything — from DB schema (translatable fields) to Next.js routing and content authoring workflows.",
    "Live + async is the real pedagogy split — Jitsi sessions drive engagement, but offline-friendly resource caching is what retains learners on low bandwidth.",
    "Ship a disciplined monolith with service boundaries in mind — the micro-services folder is empty on purpose, but API contracts already allow User/Course/Payment/Notification/Streaming to split cleanly later.",
  ],
};

export const classconnectContentFr: ClassConnectContent = {
  projectName: "ClassConnect — L'Apprentissage Adaptatif pour l'Afrique",
  tagline:
    "La première plateforme e-learning adaptative du Cameroun — des cours personnalisés à votre rythme, du collège à la montée en compétences pro",
  statusBadge: "En ligne — classconnect.cm · 1 780+ commits · Open Source",
  tags: ["Éducation", "E-Learning", "EdTech", "PWA", "Impact Social", "Cameroun"],
  liveUrl: "https://classconnect.cm",
  githubUrl: "https://github.com/Tomdieu/class-connect",
  heroImage: "/classconnect.png",
  role: "Ingénieur Full-Stack Principal & Architecte Plateforme",
  organisation: "Fondateur | Tomdieu Ivan — Yaoundé, Cameroun",

  problemStats: [
    { value: "78 %", label: "Apprennent via WhatsApp", detail: "Cours éparpillés en PDFs et vocaux — pas de programme, pas de suivi" },
    { value: "2,1 M+", label: "Étudiants universitaires", detail: "Amphis surchargés au Cameroun — accès limité aux enseignants" },
    { value: "11,4 M+", label: "Comptes Mobile Money", detail: "MTN MoMo + Orange Money — mais aucun abonnement éducation intégré" },
    { value: "0", label: "Plateforme unifiée", detail: "Aucun système centralisé pour programmes multi-niveaux avant ClassConnect" },
  ],

  problemNarrative: [
    "Au Cameroun, l'éducation de qualité est fragmentée entre groupes WhatsApp, polycopiés et tutorat informel. Collégiens, lycéens, universitaires et professionnels subissent le même vide : pas de programme structuré, pas de ressources vérifiées, et aucun moyen de suivre sa progression ou de rejoindre des sessions live avec des enseignants qualifiés.",
    "Plus de 11,4 millions de comptes Mobile Money actifs existent sur MTN MoMo et Orange Money — mais aucune plateforme d'apprentissage n'avait transformé ce rail de paiement en abonnements éducatifs sans friction. Les apprenants bilingues (français/anglais) ne disposaient d'aucune plateforme unique servant les deux langues tout en restant utilisable en bas débit et en mobile-first. Les MOOCs étrangers ignorent les programmes locaux, les paiements locaux et les calendriers académiques.",
  ],

  solutionNarrative:
    "ClassConnect numérise tout le parcours d'apprentissage — hiérarchies de classes → matières → chapitres → sujets, chacun avec vidéos, PDFs, exercices et fiches de révision, classes live Jitsi et communauté temps réel. Un seul compte offre à un collégien, à un étudiant et à un professionnel la même expérience adaptative : s'inscrire, s'abonner via Mobile Money, apprendre en live ou en asynchrone, discuter sur le forum, chatter en temps réel et voir sa progression se synchroniser automatiquement. Chaque cours est bilingue FR/EN, mobile-first et conçu pour la connectivité camerounaise.",

  timeline: [
    { step: 1, title: "Découverte par niveau", description: "L'élève choisit son niveau — Collège, Lycée, Université ou Professionnel — et parcourt les classes structurées." },
    { step: 2, title: "Exploration du programme", description: "Navigation matières → chapitres → sujets avec vidéos, PDFs, exercices et fiches de révision." },
    { step: 3, title: "Inscription & abonnement", description: "Choix Basic / Standard / Premium et paiement MTN MoMo ou Orange Money via CamPay/FreemoPay — OAuth2 + Google, sans banque." },
    { step: 4, title: "Accès à la bibliothèque", description: "Vidéos en streaming, PDFs téléchargeables, exercices — progression suivie par sujet." },
    { step: 5, title: "Sessions live", description: "Classes Jitsi programmées ou à la demande, avec enregistrement et suivi des participants." },
    { step: 6, title: "Collaboration temps réel", description: "Questions sur forums publics/privés, messages WebSocket et notifications push." },
    { step: 7, title: "Année scolaire", description: "Flux d'année scolaire et déclarations de cours fidèles à l'inscription académique camerounaise." },
    { step: 8, title: "Certification par progression", description: "Tableau de bord d'analytique : temps par sujet, scores, présence live — visible élèves, enseignants, admins." },
  ],

  techStack: [
    "Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui",
    "Zustand", "TanStack Query", "NextAuth v5", "next-international", "Framer Motion",
    "Django 5.1.4", "Django REST Framework", "PostgreSQL", "OAuth2 (django-oauth-toolkit)", "drf-yasg (Swagger)",
    "Celery", "Redis", "RabbitMQ", "Django Channels", "Docker Compose", "Nginx", "Gunicorn",
    "Jitsi Meet", "CamPay / FreemoPay", "AWS S3 / Backblaze B2",
  ],

  challenges: [
    { title: "Modélisation curriculum hiérarchique", description: "Modèle relationnel à 5 niveaux — Classe → Matière → Chapitre → Sujet → Ressource — avec serializers imbriqués et inlines admin pour publier une année académique sans code." },
    { title: "RBAC + OAuth2 sur 4 rôles", description: "Élèves, Professionnels, Enseignants et Admins sur une seule couche d'auth (django-oauth-toolkit + NextAuth v5). Vérifications d'inscription et d'abonnement à chaque requête." },
    { title: "Abonnements Mobile Money — idempotence", description: "Retries de webhooks CamPay/FreemoPay sur réseau instable. Clés d'idempotence, vérification de signature et machine d'état d'abonnement pour éviter les doubles crédits." },
    { title: "Temps réel à latence camerounaise", description: "Django Channels + Redis pour le forum et le chat WebSocket — présence, indicateur de saisie et file d'attente hors-ligne." },
    { title: "Classes live Jitsi intégrées", description: "API IFrame Jitsi avec salles JWT, sessions planifiées, suivi des participants et sync Google Calendar — sans quitter la plateforme." },
    { title: "PWA bilingue, un seul code", description: "next-international FR/EN sur toute l'UI et les métadonnées curriculum. Assets critiques en cache PWA, vidéos/PDFs en lazy-load via S3." },
    { title: "Monolithe → microservices", description: "Monolithe Django Dockerisé avec squelette backend/micro-services/. Frontières d'API prêtes à découper Utilisateur/Cours/Paiement/Notification/Streaming sans réécrire le frontend." },
  ],

  features: [
    { title: "Multi-Niveau Natif", description: "Collège, Lycée, Université et Professionnel — chacun avec sa hiérarchie et son programme." },
    { title: "Programme Structuré", description: "Graphe Classe → Matière → Chapitre → Sujet avec ressources ordonnées." },
    { title: "Bibliothèque de Ressources", description: "Bibliothèque centralisée par sujet ; livraison S3 avec streaming et cache offline." },
    { title: "Classes Live", description: "Vidéoconférence Jitsi — programmée & à la demande, avec enregistrement." },
    { title: "Forum + Chat Temps Réel", description: "Forums publics/privés + DM WebSocket — la communauté que WhatsApp n'offrait pas." },
    { title: "Abonnements Flexibles", description: "Offres Basic / Standard / Premium via MTN MoMo & Orange Money." },
    { title: "Progression & Analytique", description: "Progression par sujet, scores, présence live et audit trail admin complet." },
    { title: "Bilingue & PWA", description: "i18n FR/EN complet, SSO OAuth2/Google et installation PWA pour continuité bas débit." },
  ],

  actors: [
    { role: "Élève Collège/Lycée", description: "Suit le programme collège/lycée, accède aux fiches de révision et sessions live." },
    { role: "Étudiant Universitaire", description: "S'inscrit par faculté/classe, suit les ressources et collabore sur les forums." },
    { role: "Apprenant Pro", description: "Se forme via le parcours pro — cours courts avec certificats et ressources asynchrones." },
    { role: "Enseignant", description: "Crée les offres de cours, publie chapitres/sujets, planifie les sessions Jitsi." },
    { role: "Administrateur", description: "Gère utilisateurs, années scolaires, déclarations, abonnements et analytique." },
    { role: "CamPay / FreemoPay", description: "Traite les abonnements MTN MoMo & Orange Money ; webhooks pour l'activation." },
    { role: "Jitsi Meet", description: "Fournit les classes live intégrées — création de salle, auth JWT, enregistrement." },
    { role: "Système", description: "Workers Celery/Redis + Channels pour notifications et logging d'activité." },
  ],

  metrics: [
    { goal: "Plateforme en ligne", indicator: "Livrée — classconnect.cm + deploy vercel alpha" },
    { goal: "Niveaux couverts", indicator: "4 — Collège, Lycée, Université, Professionnel" },
    { goal: "Profondeur programme", indicator: "Classe → Matière → Chapitre → Sujet → Ressource" },
    { goal: "Paiements", indicator: "MTN MoMo + Orange Money (CamPay/FreemoPay)" },
    { goal: "Classes live", indicator: "Jitsi Meet intégré, prêt enregistrement" },
    { goal: "Communauté temps réel", indicator: "Forums + chat WebSocket + notifications push" },
    { goal: "Langues", indicator: "Bilingue FR/EN sur UI & contenus" },
    { goal: "Disponibilité", indicator: "Objectif 99,9 %, Docker + Nginx + Gunicorn" },
  ],

  testimonials: [],

  lessons: [
    "Le curriculum est le modèle de données — bien modéliser Classe→Matière→Chapitre→Sujet→Ressource dès le départ évite des mois de refacto et rend l'admin utilisable par des non-développeurs.",
    "L'UX Mobile Money doit supposer retries et délais USSD — clés d'idempotence et états explicites d'abonnement sont indispensables.",
    "Bilingue dès le jour 1 change tout — du schéma DB (champs traduisibles) au routing Next.js et aux workflows de création de contenu.",
    "Live + asynchrone, la vraie pédagogie — les sessions Jitsi engagent, mais le cache offline des ressources fidélise en bas débit.",
    "Livrer un monolithe discipliné avec des frontières de service — le dossier micro-services est vide à dessein, mais les contrats d'API permettent déjà de découper Utilisateur/Cours/Paiement/Notification/Streaming proprement.",
  ],
};
