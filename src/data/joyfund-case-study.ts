export type JoyFundContent = {
  projectName: string;
  tagline: string;
  statusBadge: string;
  tags: string[];
  liveUrl: string;
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

export const joyfundContentEn: JoyFundContent = {
  projectName: "JoyFund — Solidarity Health Bridge",
  tagline:
    '"Your Joy Saves Lives" — Turning Cameroon\'s celebration culture into life-saving healthcare funding',
  statusBadge: "Live — joy-fund.com",
  tags: ["Healthcare", "Fintech", "Crowdfunding", "PWA", "Social Impact", "Cameroon"],
  liveUrl: "https://joy-fund.com",
  heroImage: "/joyfund-logo.jpeg",
  role: "Lead Full-Stack Engineer & Product Architect at Durable Impact",
  organisation: "Durable Impact | Client: Dr. Eric Kepeh Moh",

  problemStats: [
    { value: "<2%", label: "Health insurance coverage", detail: "Fewer than 2% of Cameroonians hold formal health insurance" },
    { value: "258–406", label: "Maternal mortality", detail: "Per 100,000 live births — one of the highest rates globally" },
    { value: "11.4M+", label: "Mobile Money accounts", detail: "MTN MoMo + Orange Money — yet no health funding platform" },
    { value: "100%", label: "Out-of-pocket payments", detail: "Households pay directly, leading to catastrophic expenditures" },
  ],

  problemNarrative: [
    "In Cameroon, fewer than 2% of citizens hold formal health insurance. Hospital detention is widespread — mothers who cannot pay post-delivery bills are physically held in health facilities. Maternal mortality is estimated between 258 and 406 deaths per 100,000 live births, one of the highest rates globally.",
    "Over 11.4 million active Mobile Money accounts exist across MTN MoMo and Orange Money networks — yet no platform had ever channelled this infrastructure into community health funding. Every household relies entirely on out-of-pocket payments, creating a cycle of catastrophic health expenditures and preventable deaths.",
  ],

  solutionNarrative:
    "JoyFund digitises Cameroon's traditional Njangi and alumni solidarity culture — redirecting everyday celebratory contributions (birthdays, weddings, graduations, promotions) into a pooled People's Health Insurance Fund (PHIF) that pays hospital bills directly for verified vulnerable mothers and elderly persons. No cash changes hands. Every donation becomes a care voucher. Every voucher is tracked from donation to delivery room.",

  timeline: [
    { step: 1, title: "Donor creates campaign", description: "A donor creates a JoyFund campaign linked to a personal milestone — birthday, wedding, graduation, or promotion." },
    { step: 2, title: "Friends contribute", description: "Friends and family contribute via MTN MoMo or Orange Money — no app registration required, just a campaign link." },
    { step: 3, title: "Funds enter PHIF escrow", description: "Contributions flow into the People's Health Insurance Fund escrow (85% to fund, 15% operational fee)." },
    { step: 4, title: "Beneficiary is enrolled", description: "A social worker identifies and enrolls a verified vulnerable beneficiary through the provider portal." },
    { step: 5, title: "Care voucher issued", description: "A 6-digit care voucher code with QR is sent to the beneficiary via SMS — works on any phone." },
    { step: 6, title: "Voucher presented at hospital", description: "The beneficiary presents the voucher at a partner hospital. Works on smartphones and feature phones." },
    { step: 7, title: "Hospital validates", description: "Hospital validates the voucher via the Provider Portal." },
    { step: 8, title: "Anti-fraud PIN confirmation", description: "After service, a 4-digit anti-fraud PIN is sent to the beneficiary — funds release only after PIN confirmation." },
    { step: 9, title: "Funds disbursed to hospital", description: "Funds are disbursed directly to the hospital via Mobile Money API — no cash, no detained patients." },
    { step: 10, title: "Full chain visible", description: "Every transaction is publicly visible on the transparency dashboard — from donation to delivery room." },
  ],

  techStack: [
    "Next.js (App Router)", "Tailwind CSS", "Django", "Django REST Framework",
    "PostgreSQL", "Docker Compose", "Nginx Proxy Manager", "GitHub Actions",
    "Celery", "RabbitMQ", "Redis", "Twilio",
    "Campay", "Prometheus", "Grafana", "Loki",
  ],

  challenges: [
    { title: "Idempotent webhook processing", description: "Implemented duplicate transaction detection to prevent double-crediting the PHIF escrow when the payment gateway retries webhooks. Every webhook carries a unique idempotency key; already-processed keys return a cached response instead of re-executing the fund allocation." },
    { title: "Escrow fund lifecycle", description: "Funds are locked at voucher check-in and only released after the beneficiary confirms with a 4-digit anti-fraud PIN. A 48-hour escalation flow handles unconfirmed cases — the hospital provides evidence, and an admin resolves manually if needed." },

    { title: "HMAC webhook signature validation", description: "Every incoming webhook from Campay carries an HMAC-SHA256 signature in the headers. A custom Django middleware validates the signature against a shared secret before any payload processing — preventing fraudulent transaction injection from spoofed payloads." },
    { title: "Multi-device push notifications (PWA)", description: "Built FCM web push with service worker registration, offline delivery queue, and multi-device support. Hospital staff and social workers receive real-time alerts for new vouchers, check-ins, and disbursements — even on low-bandwidth connections." },
    { title: "Bilingual PWA", description: "Full French/English internationalisation using Next.js App Router i18n. The PWA is optimised for low-bandwidth connections in Cameroon — critical assets are pre-cached via service worker, and non-essential scripts load lazily." },
    { title: "6-portal RBAC system", description: "Role-based access control spanning six distinct portals: Donor, Contributor, Beneficiary, Social Worker, Hospital (Admin + Receptionist), and System Admin. Each portal has fine-grained permissions, custom dashboards, and scoped data access." },
  ],

  features: [
    { title: "Easy to Start", description: "Create a JoyFund in 2 minutes, linked to any celebration — birthday, wedding, graduation, or promotion." },
    { title: "Verified Beneficiaries", description: "Every recipient is screened by social workers and partner hospitals before receiving a care voucher." },
    { title: "Mobile Money Native", description: "MTN MoMo and Orange Money built-in as first-class payment methods — no bank account needed." },
    { title: "Real-Time Transparency", description: "Live dashboard tracking every contribution from donation to delivery room — fully public." },
    { title: "Diaspora Friendly", description: "Support Cameroon from anywhere in the world — the platform works globally with Mobile Money." },
    { title: "Direct Hospital Settlement", description: "Funds go straight to partner hospitals as care vouchers — no cash changes hands, no detained patients." },
    { title: "Community Health Pooling", description: "Built on Njangi and alumni mutual aid culture, reimagined as a digital health insurance fund." },
  ],

  actors: [
    { role: "Donor", description: "Creates milestone campaigns, drives fundraising through personal networks." },
    { role: "Contributor / Guest Donor", description: "Donates via campaign link — no registration needed, just Mobile Money." },
    { role: "Beneficiary", description: "Verified vulnerable patient who receives a care voucher for medical treatment." },
    { role: "Social Worker", description: "Enrolls and verifies beneficiaries, issues vouchers through the provider portal." },
    { role: "Hospital Admin", description: "Manages staff accounts, reconciliation, and compliance reports." },
    { role: "Receptionist", description: "Validates vouchers at point of care, confirms service completion via the portal." },
    { role: "System Admin", description: "Manages the full platform, onboards hospitals, and oversees system health." },
    { role: "Campay (Gateway)", description: "Processes MTN MoMo and Orange Money payments; sends webhooks for transaction status." },
  ],

  metrics: [
    { goal: "Platform live & functional", indicator: "Shipped — joy-fund.com" },
    { goal: "Funds raised", indicator: "Tracked via live dashboard" },
    { goal: "Beneficiaries assisted", indicator: "Target: 500 (Month 6)" },
    { goal: "Partner hospitals", indicator: "Target: 10 (Month 6)" },
    { goal: "Active campaigns", indicator: "Target: 200 (Month 6)" },
    { goal: "Voucher utilisation rate", indicator: "Target: >80%" },
    { goal: "Disbursement speed", indicator: "Target: <24 hours" },
    { goal: "Transaction visibility", indicator: "100% public dashboard" },
    { goal: "Platform uptime", indicator: "99.9%" },
  ],

  testimonials: [
    { quote: "My 30th birthday funded 2 safe deliveries. Nothing could have made this milestone more meaningful.", author: "Jean-Pierre M., Birthday Donor" },
    { quote: "We asked for JoyFund contributions instead of gifts. Our guests loved it — we raised 234,000 XAF!", author: "Solange N., Wedding Donor" },
    { quote: "The voucher system is simple, transparent, and fraud-proof. Exactly what maternal healthcare needs.", author: "Dr. Mireille O., Partner Hospital" },
  ],

  lessons: [
    "Designing for both digital and physical realities simultaneously — smartphones, feature phones, and printed vouchers all need to work seamlessly together.",
    "Building financial systems where radical transparency is the product itself, not a feature. Every transaction must be auditable by any user, at any time.",
    "The Njangi cultural model as a product design pattern — community-first, not app-first. The platform succeeds because it digitises existing trust networks rather than replacing them.",
    "Shipping production-grade fintech on a startup timeline in the African market context — balancing compliance, reliability, and speed requires ruthless prioritisation.",
    "Handling mobile money webhook reliability and idempotency in low-connectivity environments — network failures are the norm, not the exception.",
  ],
};

export const joyfundContentFr: JoyFundContent = {
  projectName: "JoyFund — Pont Solidaire pour la Santé",
  tagline:
    '"Votre Joie Sauve des Vies" — Transformer la culture de célébration camerounaise en financement vital pour la santé',
  statusBadge: "En ligne — joy-fund.com",
  tags: ["Santé", "Fintech", "Crowdfunding", "PWA", "Impact Social", "Cameroun"],
  liveUrl: "https://joy-fund.com",
  heroImage: "/joyfund-logo.jpeg",
  role: "Ingénieur Full-Stack Principal & Architecte Produit chez Durable Impact",
  organisation: "Durable Impact | Client : Dr. Eric Kepeh Moh",

  problemStats: [
    { value: "<2 %", label: "Couverture santé", detail: "Moins de 2 % des Camerounais ont une assurance maladie formelle" },
    { value: "258–406", label: "Mortalité maternelle", detail: "Pour 100 000 naissances vivantes — parmi les taux les plus élevés au monde" },
    { value: "11,4 M+", label: "Comptes Mobile Money", detail: "MTN MoMo + Orange Money — mais aucune plateforme de financement santé" },
    { value: "100 %", label: "Paiements directs", detail: "Les ménages payent de leur poche, menant à des dépenses de santé catastrophiques" },
  ],

  problemNarrative: [
    "Au Cameroun, moins de 2 % des citoyens possèdent une assurance maladie formelle. La rétention hospitalière est courante — les mères qui ne peuvent pas payer leurs factures d'accouchement sont retenues physiquement dans les établissements de santé. La mortalité maternelle est estimée entre 258 et 406 décès pour 100 000 naissances vivantes, l'un des taux les plus élevés au monde.",
    "Plus de 11,4 millions de comptes Mobile Money actifs existent sur les réseaux MTN MoMo et Orange Money — mais aucune plateforme n'avait encore canalisé cette infrastructure vers le financement communautaire de la santé. Chaque ménage dépend entièrement des paiements directs, créant un cycle de dépenses de santé catastrophiques et de décès évitables.",
  ],

  solutionNarrative:
    "JoyFund numérise la culture traditionnelle camerounaise du Njangi et de la solidarité des anciens élèves — redirigeant les contributions festives quotidiennes (anniversaires, mariages, remises de diplômes, promotions) vers un Fonds d'Assurance Santé Populaire (PHIF) qui paie directement les factures hospitalières des mères vulnérables et des personnes âgées vérifiées. Aucun cash ne circule. Chaque don devient un bon de soins. Chaque bon est tracé du don à la salle d'accouchement.",

  timeline: [
    { step: 1, title: "Le donateur crée une campagne", description: "Un donateur crée une campagne JoyFund liée à un événement personnel — anniversaire, mariage, remise de diplôme ou promotion." },
    { step: 2, title: "Les amis contribuent", description: "Les amis et la famille contribuent via MTN MoMo ou Orange Money — aucune inscription requise, juste un lien de campagne." },
    { step: 3, title: "Les fonds entrent dans le PHIF", description: "Les contributions sont versées dans le Fonds d'Assurance Santé Populaire (85 % au fonds, 15 % de frais opérationnels)." },
    { step: 4, title: "Le bénéficiaire est inscrit", description: "Un assistant social identifie et inscrit un bénéficiaire vulnérable vérifié via le portail fournisseur." },
    { step: 5, title: "Bon de soins émis", description: "Un code de bon de soins à 6 chiffres avec QR est envoyé au bénéficiaire par SMS — fonctionne sur tous les téléphones." },
    { step: 6, title: "Bon présenté à l'hôpital", description: "Le bénéficiaire présente le bon à l'hôpital partenaire. Fonctionne sur smartphones et téléphones de base." },
    { step: 7, title: "Validation par l'hôpital", description: "L'hôpital valide le bon via le portail fournisseur." },
    { step: 8, title: "Confirmation anti-fraude", description: "Après le service, un code PIN anti-fraude à 4 chiffres est envoyé au bénéficiaire — les fonds ne sont libérés qu'après confirmation du code." },
    { step: 9, title: "Fonds versés à l'hôpital", description: "Les fonds sont versés directement à l'hôpital via l'API Mobile Money — pas de cash, pas de patients retenus." },
    { step: 10, title: "Chaîne visible", description: "Chaque transaction est visible publiquement sur le tableau de bord de transparence — du don à la salle d'accouchement." },
  ],

  techStack: [
    "Next.js (App Router)", "Tailwind CSS", "Django", "Django REST Framework",
    "PostgreSQL", "Docker Compose", "Nginx Proxy Manager", "GitHub Actions",
    "Celery", "RabbitMQ", "Redis", "Twilio",
    "Campay", "Prometheus", "Grafana", "Loki",
  ],

  challenges: [
    { title: "Traitement idempotent des webhooks", description: "Détection des transactions en double pour éviter un double-crédit du PHIF lorsque la passerelle de paiement renvoie des webhooks. Chaque webhook porte une clé d'idempotence unique ; les clés déjà traitées retournent une réponse mise en cache." },
    { title: "Cycle de vie des fonds sous séquestre", description: "Les fonds sont verrouillés à l'enregistrement du bon et libérés uniquement après confirmation du bénéficiaire par un code PIN anti-fraude à 4 chiffres. Un délai de 48h gère les cas non confirmés." },

    { title: "Validation HMAC des webhooks", description: "Chaque webhook entrant de Campay porte une signature HMAC-SHA256 dans les en-têtes. Un middleware Django personnalisé valide la signature avant tout traitement — empêchant l'injection de transactions frauduleuses." },
    { title: "Notifications push multi-appareils (PWA)", description: "Notifications push FCM avec enregistrement du service worker, file d'attente hors-ligne et support multi-appareils. Alertes en temps réel pour le personnel hospitalier et les assistants sociaux." },
    { title: "PWA bilingue", description: "Internationalisation complète français/anglais avec l'i18n du routeur App Router Next.js. Optimisée pour les connexions à faible bande passante au Cameroun." },
    { title: "Système RBAC à 6 portails", description: "Contrôle d'accès basé sur les rôles couvrant six portails distincts : Donateur, Contributeur, Bénéficiaire, Assistant Social, Hôpital (Admin + Réceptionniste) et Admin Système." },
  ],

  features: [
    { title: "Démarrage Facile", description: "Créez un JoyFund en 2 minutes, lié à n'importe quelle célébration — anniversaire, mariage, diplôme ou promotion." },
    { title: "Bénéficiaires Vérifiés", description: "Chaque bénéficiaire est contrôlé par des assistants sociaux et des hôpitaux partenaires avant de recevoir un bon de soins." },
    { title: "Mobile Money Natif", description: "MTN MoMo et Orange Money intégrés comme méthodes de paiement de première classe — pas de compte bancaire nécessaire." },
    { title: "Transparence en Temps Réel", description: "Tableau de bord en direct qui suit chaque contribution du don à la salle d'accouchement — entièrement public." },
    { title: "Accessible à la Diaspora", description: "Soutenez le Cameroun depuis n'importe où dans le monde — la plateforme fonctionne globalement avec Mobile Money." },
    { title: "Paiement Direct à l'Hôpital", description: "Les fonds vont directement aux hôpitaux partenaires sous forme de bons de soins — pas de cash, pas de patients retenus." },
    { title: "Mutualisation Communautaire", description: "Construit sur la culture Njangi et l'entraide des anciens élèves, réimaginée comme un fonds d'assurance santé numérique." },
  ],

  actors: [
    { role: "Donateur", description: "Crée des campagnes événementielles et mobilise son réseau pour collecter des fonds." },
    { role: "Contributeur / Donateur Invité", description: "Donne via un lien de campagne — aucune inscription nécessaire, juste Mobile Money." },
    { role: "Bénéficiaire", description: "Patient vulnérable vérifié qui reçoit un bon de soins pour un traitement médical." },
    { role: "Assistant Social", description: "Inscrit et vérifie les bénéficiaires, émet des bons via le portail fournisseur." },
    { role: "Admin Hôpital", description: "Gère les comptes du personnel, la réconciliation et les rapports de conformité." },
    { role: "Réceptionniste", description: "Valide les bons au point de soins, confirme la fin du service via le portail." },
    { role: "Admin Système", description: "Gère la plateforme complète, intègre les hôpitaux et supervise l'état du système." },
    { role: "Campay (Passerelle)", description: "Traite les paiements MTN MoMo et Orange Money ; envoie des webhooks pour le statut des transactions." },
  ],

  metrics: [
    { goal: "Plateforme en ligne et fonctionnelle", indicator: "Livrée — joy-fund.com" },
    { goal: "Fonds collectés", indicator: "Suivi via tableau de bord en direct" },
    { goal: "Bénéficiaires assistés", indicator: "Objectif : 500 (Mois 6)" },
    { goal: "Hôpitaux partenaires", indicator: "Objectif : 10 (Mois 6)" },
    { goal: "Campagnes actives", indicator: "Objectif : 200 (Mois 6)" },
    { goal: "Taux d'utilisation des bons", indicator: "Objectif : >80 %" },
    { goal: "Rapidité de décaissement", indicator: "Objectif : <24 heures" },
    { goal: "Visibilité des transactions", indicator: "Tableau de bord 100 % public" },
    { goal: "Disponibilité de la plateforme", indicator: "99,9 %" },
  ],

  testimonials: [
    { quote: "Mon 30e anniversaire a financé 2 accouchements en sécurité. Rien n'aurait pu rendre cette étape plus significative.", author: "Jean-Pierre M., Donateur Anniversaire" },
    { quote: "Nous avons demandé des contributions JoyFund au lieu de cadeaux. Nos invités ont adoré — nous avons récolté 234 000 XAF !", author: "Solange N., Donatrice Mariage" },
    { quote: "Le système de bons est simple, transparent et infalsifiable. Exactement ce dont les soins maternels ont besoin.", author: "Dr. Mireille O., Hôpital Partenaire" },
  ],

  lessons: [
    "Concevoir simultanément pour les réalités numériques et physiques — smartphones, téléphones de base et bons imprimés doivent fonctionner ensemble de manière fluide.",
    "Construire des systèmes financiers où la transparence radicale est le produit lui-même, pas une fonctionnalité. Chaque transaction doit être vérifiable par n'importe quel utilisateur, à tout moment.",
    "Le modèle culturel Njangi comme motif de conception produit — d'abord la communauté, pas l'application. La plateforme réussit parce qu'elle numérise les réseaux de confiance existants plutôt que de les remplacer.",
    "Livrer une fintech de qualité production dans les délais d'une startup sur le marché africain — trouver l'équilibre entre conformité, fiabilité et rapidité nécessite une priorisation impitoyable.",
    "Gérer la fiabilité et l'idempotence des webhooks Mobile Money dans des environnements à faible connectivité — les pannes réseau sont la norme, pas l'exception.",
  ],
};
