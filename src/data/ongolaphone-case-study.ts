export type OngolaPhoneContent = {
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
  lessons: string[];
};

export const ongolaPhoneContentEn: OngolaPhoneContent = {
  projectName: "OngolaPhone — Digital Storefront for a Phone Seller on Avenue Kennedy",
  tagline:
    "For a phone seller on Avenue Kennedy, Yaoundé — turning his busy stall into an always-open online catalogue where clients see what's actually in stock and order in one tap",
  statusBadge: "Live — ongolaphone.com · Retail · Yaoundé, Cameroon",
  tags: ["Retail", "E-Commerce", "Catalog", "PWA", "Small Business", "Cameroon"],
  liveUrl: "https://ongolaphone.com",
  heroImage: "/ongolaphone.svg",
  role: "Full-Stack Developer at Coding Industry Sarl",
  organisation: "Coding Industry Sarl | Client: Phone seller — Avenue Kennedy, Yaoundé",

  problemStats: [
    { value: "100%", label: "Foot-traffic dependent", detail: "Sales only when clients walk into the shop on Avenue Kennedy — no after-hours visibility" },
    { value: "30+", label: "Daily stock queries", detail: "Clients call or WhatsApp to ask 'Do you have this phone?' — seller repeats the same answers all day" },
    { value: "0", label: "Live inventory online", detail: "No catalogue — outdated WhatsApp photos, no prices, no availability truth" },
    { value: "Lost", label: "Lost orders", detail: "Clients order by description, stock already sold — frustration on both sides" },
  ],

  problemNarrative: [
    "Avenue Kennedy in Yaoundé is Cameroon's most famous phone market — rows of stalls, constant foot traffic, and fierce competition. One retailer with a strong offline reputation had no online presence beyond scattered WhatsApp statuses. Every sale depended on a client physically coming to the shop or calling to ask what was in stock. He spent hours each day answering the same questions — 'Do you have iPhone 13 128GB? How much? Is it still available?' — while potential buyers who found his number online had no way to verify what he actually sold.",
    "Without a catalogue, clients couldn't compare models, see real prices, or place an order outside shop hours. Orders taken by voice led to errors — a phone sold that morning was promised again in the afternoon. The seller needed a simple, fast, mobile-first storefront that made his stock truthful in real time and let clients order from anywhere, without adding operational complexity to his already busy stall.",
  ],

  solutionNarrative:
    "OngolaPhone digitises his stall on Avenue Kennedy into a real-time catalogue and ordering flow. Every article — phones, accessories, repair services — is listed with photos, specs, price and live availability. Clients browse his shop from their phone, filter by brand, price or category, and place an order in seconds. The seller manages stock from a lightweight admin: add an arrival, mark sold, update a price — and the storefront reflects it instantly. No heavy marketplace, no commission, no learning curve: just the truth of what is on his shelf, always reachable.",

  timeline: [
    { step: 1, title: "Seller lists articles", description: "Shop owner adds a phone or accessory from the admin — model, brand, storage, colour, price, photos and quantity on hand." },
    { step: 2, title: "Catalogue goes live", description: "Article appears instantly on the public storefront, searchable and filterable — the single source of truth for 'what we have'." },
    { step: 3, title: "Client discovers", description: "Buyer lands from search or a shared link, browses categories (Apple, Samsung, Tecno, accessories) on mobile-first UI." },
    { step: 4, title: "Filters & compares", description: "Filters by brand, price range or condition (new/used), views specs, photos and availability badge." },
    { step: 5, title: "Places order online", description: "Selects quantity, enters contact and delivery/pickup preference, confirms order — no payment friction, order intent captured." },
    { step: 6, title: "Seller is notified", description: "New order appears in admin dashboard + notification — seller confirms availability in one tap." },
    { step: 7, title: "Fulfilment", description: "Client is contacted for delivery in Yaoundé or pickup at his shop on Avenue Kennedy; stock decrements automatically on confirmed sale." },
    { step: 8, title: "Stock stays truthful", description: "Sold items marked unavailable instantly; price updates propagate without re-uploading to WhatsApp." },
  ],

  techStack: [
    "React", "Vite", "TypeScript", "Tailwind CSS",
    "Django", "Django REST Framework", "PostgreSQL", "SQLite (dev)",
    "Django Admin", "Cloud Storage (S3)", "Nginx", "Docker",
  ],

  challenges: [
    { title: "Inventory truth for a busy stall", description: "Designed a minimal admin that a non-technical seller can use between clients — add arrival in 30 seconds, toggle availability, update price without touching code. Stock quantity is the single source of truth; storefront reads it live." },
    { title: "Mobile-first buyers on low bandwidth", description: "Avenue Kennedy clients shop from mid-range Androids on 3G/4G. Image compression, lazy loading and paginated catalogue keep page loads fast even outside Yaoundé." },
    { title: "Photography without a studio", description: "Seller shoots with his phone under stall lighting. Built guided upload with auto-cropping, compression and fallback placeholder so every listing looks consistent despite varied photo quality." },
    { title: "Order without online payment", description: "In this informal retail context, trust is built by voice. Implemented order-intent flow (not instant checkout) — client submits order, seller calls to confirm, then delivery. Avoids Mobile Money integration complexity while digitising the funnel." },
    { title: "Search that matches how people ask", description: "Clients search by 'iPhone 13' or 'Tecno Camon 20' or 'power bank 20000mAh'. Implemented brand + model + category search with debounced queries and cached results to handle misspellings and shorthand." },
    { title: "Simple hosting for a small shop", description: "Deployed as a lean Django + Vite build on VPS with Nginx — affordable for a single retailer, easy to restart and backup, no enterprise overhead." },
  ],

  features: [
    { title: "Live Catalogue", description: "Real-time listing of phones, accessories and services — what you see is what is on the shelf on Avenue Kennedy." },
    { title: "Search & Filter", description: "By brand, category, price or condition — find 'Samsung A54 128GB' without scrolling the whole store." },
    { title: "Online Ordering", description: "Place an order from anywhere in Yaoundé — choose delivery or pickup, no repeated WhatsApp back-and-forth." },
    { title: "Stock Availability", description: "Live 'In Stock / Out of Stock' badges and quantity-aware ordering prevent selling what's already gone." },
    { title: "Seller Admin", description: "Lightweight dashboard to add stock, edit prices, confirm orders and hide sold items in one tap." },
    { title: "Mobile-First Storefront", description: "Designed for the phone buyers use to browse — thumb-friendly, fast, and readable on low-end devices." },
    { title: "Direct Client Link", description: "Shareable product links — seller sends a link instead of resending photos on WhatsApp." },
    { title: "Always Open", description: "Clients browse after shop hours, on Sundays, or from other cities — the stall never closes online." },
  ],

  actors: [
    { role: "Shop Owner (Seller)", description: "Manages Avenue Kennedy inventory — adds arrivals, updates prices, confirms orders and fulfils delivery/pickup." },
    { role: "Buyer / Client", description: "Browses catalogue, filters by brand/price, places an order and chooses delivery or pickup." },
    { role: "Visitor", description: "Discovers the shop via shared link or search — views the same live catalogue without an account." },
    { role: "System", description: "Serves catalogue, handles search, stores orders and keeps availability in sync between admin and storefront." },
  ],

  metrics: [
    { goal: "Platform live", indicator: "Shipped — ongolaphone.com" },
    { goal: "Catalogue coverage", indicator: "All stall categories listed — phones, accessories, services" },
    { goal: "Stock queries", indicator: "Self-serve browsing replaces repetitive WhatsApp calls" },
    { goal: "Ordering channel", indicator: "Clients order online vs voice-only before" },
    { goal: "Seller workflow", indicator: "Add/update stock in <1 minute, no developer needed" },
    { goal: "Mobile experience", indicator: "Mobile-first, fast on 3G Android" },
    { goal: "Reach", indicator: "After-hours & out-of-Yaoundé discovery" },
    { goal: "Availability accuracy", indicator: "Live in-stock badges vs stale photos" },
  ],

  lessons: [
    "For a small retailer, truth beats features — a truthful 'is this in stock today?' is more valuable than a full marketplace.",
    "Design the admin for the moment between two clients — if it takes more than a minute to list a new phone, it won't be used.",
    "Order-intent is the right abstraction here — confirming by phone after an online order matches how trust is built on Avenue Kennedy.",
    "Mobile-first is not a breakpoint — it is the only screen. Start with the buyer's Android, then scale up.",
    "A shareable link replaces ten WhatsApp photos — the catalogue's real distribution is the link the seller can paste anywhere.",
  ],
};

export const ongolaPhoneContentFr: OngolaPhoneContent = {
  projectName: "OngolaPhone — Vitrine Digitale pour un Vendeur de Téléphones à l'Avenue Kennedy",
  tagline:
    "Pour un vendeur de téléphones à l'Avenue Kennedy, Yaoundé — transformer son étal en catalogue toujours ouvert où le client voit ce qui est vraiment en stock et commande en un tap",
  statusBadge: "En ligne — ongolaphone.com · Commerce · Yaoundé, Cameroun",
  tags: ["Commerce", "E-Commerce", "Catalogue", "PWA", "Petite Entreprise", "Cameroun"],
  liveUrl: "https://ongolaphone.com",
  heroImage: "/ongolaphone.svg",
  role: "Développeur Full-Stack chez Coding Industry Sarl",
  organisation: "Coding Industry Sarl | Client : Vendeur de téléphones — Avenue Kennedy, Yaoundé",

  problemStats: [
    { value: "100 %", label: "Dépendant du passage", detail: "Vente uniquement quand le client passe devant la boutique — invisible en dehors des horaires" },
    { value: "30+", label: "Demandes stock/jour", detail: "Appels et WhatsApp pour demander 'Vous avez ce téléphone ?' — réponses répétées toute la journée" },
    { value: "0", label: "Stock en ligne", detail: "Pas de catalogue — vieilles photos WhatsApp, pas de prix, pas de vérité stock" },
    { value: "Perdues", label: "Commandes perdues", detail: "Commande à l'oral, article déjà vendu le matin — frustration des deux côtés" },
  ],

  problemNarrative: [
    "L'Avenue Kennedy à Yaoundé est le plus grand marché téléphonique du Cameroun — échoppes alignées, passage constant, concurrence féroce. Un commerçant à la réputation solide hors-ligne n'avait aucune vitrine en ligne au-delà de statuts WhatsApp épars. Chaque vente dépendait d'une visite physique ou d'un appel pour vérifier le stock. Il passait des heures à répondre aux mêmes questions — 'Vous avez l'iPhone 13 128Go ? Combien ? Encore dispo ?' — alors que les acheteurs qui trouvaient son numéro n'avaient aucun moyen de vérifier ce qu'il vendait vraiment.",
    "Sans catalogue, les clients ne pouvaient ni comparer les modèles, ni voir les vrais prix, ni commander hors horaires. Les commandes prises à l'oral généraient des erreurs — un téléphone vendu le matin était promis à nouveau l'après-midi. Le commerçant avait besoin d'une vitrine simple, rapide et mobile-first qui rende son stock véridique en temps réel et permette de commander depuis n'importe où, sans compliquer la gestion de son étal.",
  ],

  solutionNarrative:
    "OngolaPhone numérise son étal à l'Avenue Kennedy en catalogue temps réel et flux de commande. Chaque article — téléphones, accessoires, services de réparation — est listé avec photos, caractéristiques, prix et disponibilité live. Le client parcourt sa boutique depuis son téléphone, filtre par marque, prix ou catégorie et commande en quelques secondes. Le vendeur gère le stock depuis un admin léger : ajouter un arrivage, marquer vendu, ajuster un prix — et la vitrine reflète la vérité instantanément. Pas de marketplace lourde, pas de commission, pas de courbe d'apprentissage : juste la vérité de ce qui est sur son étal, toujours accessible.",

  timeline: [
    { step: 1, title: "Le vendeur liste", description: "Ajout depuis l'admin — modèle, marque, stockage, couleur, prix, photos et quantité." },
    { step: 2, title: "Catalogue en ligne", description: "Article publié instantanément sur la vitrine, cherchable et filtrable — source unique de vérité." },
    { step: 3, title: "Le client découvre", description: "Arrivée via recherche ou lien partagé, navigation par catégories (Apple, Samsung, Tecno, accessoires) en mobile-first." },
    { step: 4, title: "Filtre & compare", description: "Filtre par marque, tranche de prix ou état (neuf/occasion), consulte fiches et badge dispo." },
    { step: 5, title: "Commande en ligne", description: "Choisit la quantité, renseigne contact et livraison/retrait, confirme — intention de commande capturée." },
    { step: 6, title: "Vendeur notifié", description: "Nouvelle commande dans le dashboard + notification — confirme la dispo en un tap." },
    { step: 7, title: "Livraison / retrait", description: "Client contacté pour livraison à Yaoundé ou retrait à sa boutique à l'Avenue Kennedy ; stock décrémenté à la vente confirmée." },
    { step: 8, title: "Stock reste vrai", description: "Articles vendus passés indisponibles instantanément ; mise à jour de prix sans renvoyer de photos." },
  ],

  techStack: [
    "React", "Vite", "TypeScript", "Tailwind CSS",
    "Django", "Django REST Framework", "PostgreSQL", "SQLite (dev)",
    "Django Admin", "Cloud Storage (S3)", "Nginx", "Docker",
  ],

  challenges: [
    { title: "Vérité stock pour un étal occupé", description: "Admin minimal utilisable entre deux clients — ajout en 30 secondes, bascule dispo, prix modifiable sans code. La quantité est la source unique de vérité." },
    { title: "Acheteurs en bas débit", description: "Clients sur Android milieu de gamme en 3G/4G. Compression d'images, lazy loading et catalogue paginé pour rester rapide." },
    { title: "Photos sans studio", description: "Photos prises au téléphone sous l'éclairage de l'étal. Upload guidé avec auto-recadrage, compression et placeholder pour homogénéiser les annonces." },
    { title: "Commander sans paiement en ligne", description: "Dans ce commerce informel, la confiance passe par l'appel. Flux d'intention de commande — le client soumet, le vendeur rappelle pour confirmer, puis livre. Pas de complexité Mobile Money, mais funnel numérisé." },
    { title: "Recherche comme on demande", description: "Recherche par 'iPhone 13' ou 'Tecno Camon 20' ou 'power bank 20000mAh'. Recherche marque+modèle+catégorie avec requêtes debounced et cache." },
    { title: "Hébergement simple pour petit commerce", description: "Build Django + Vite léger sur VPS avec Nginx — abordable pour un commerçant, facile à redémarrer et sauvegarder." },
  ],

  features: [
    { title: "Catalogue Live", description: "Listing temps réel des téléphones, accessoires et services — ce que vous voyez est en rayon à Kennedy." },
    { title: "Recherche & Filtres", description: "Par marque, catégorie, prix ou état — trouvez 'Samsung A54 128Go' sans tout faire défiler." },
    { title: "Commande en Ligne", description: "Commande depuis partout à Yaoundé — livraison ou retrait, fin des allers-retours WhatsApp." },
    { title: "Dispo Stock", description: "Badges 'En Stock / Rupture' et prise en compte de la quantité — plus de vente à vide." },
    { title: "Admin Vendeur", description: "Dashboard léger pour ajouter du stock, modifier les prix, confirmer les commandes en un tap." },
    { title: "Vitrine Mobile-First", description: "Pensée pour le téléphone de l'acheteur — rapide et lisible sur petits écrans." },
    { title: "Lien Direct Client", description: "Liens produits partageables — le vendeur envoie un lien au lieu de renvoyer des photos." },
    { title: "Toujours Ouvert", description: "Navigation après les horaires, le dimanche ou depuis d'autres villes — l'étal ne ferme jamais en ligne." },
  ],

  actors: [
    { role: "Commerçant (Vendeur)", description: "Gère le stock — ajoute les arrivages, ajuste les prix, confirme les commandes et assure livraison/retrait." },
    { role: "Acheteur / Client", description: "Parcourt le catalogue, filtre par marque/prix, commande et choisit livraison ou retrait." },
    { role: "Visiteur", description: "Découvre la boutique via un lien partagé ou une recherche — même catalogue live, sans compte." },
    { role: "Système", description: "Sert le catalogue, gère la recherche, stocke les commandes et garde la dispo synchro." },
  ],

  metrics: [
    { goal: "Plateforme en ligne", indicator: "Livrée — ongolaphone.com" },
    { goal: "Couverture catalogue", indicator: "Toutes les catégories de l'étal listées" },
    { goal: "Requêtes stock", indicator: "Navigation autonome vs appels WhatsApp répétés" },
    { goal: "Canal de commande", indicator: "Commandes en ligne vs oral avant" },
    { goal: "Flux vendeur", indicator: "Ajout/maj stock en <1 min, sans dev" },
    { goal: "Expérience mobile", indicator: "Mobile-first, rapide en 3G Android" },
    { goal: "Portée", indicator: "Découverte hors horaires & hors Yaoundé" },
    { goal: "Justesse stock", indicator: "Badges dispo live vs photos obsolètes" },
  ],

  lessons: [
    "Pour un petit commerçant, la vérité prime sur les fonctionnalités — un 'est-ce en stock aujourd'hui ?' véridique vaut plus qu'une marketplace.",
    "Concevoir l'admin pour l'intervalle entre deux clients — si lister un nouveau téléphone prend >1 minute, il ne sera pas utilisé.",
    "L'intention de commande est la bonne abstraction — confirmer par appel après une commande en ligne correspond à la construction de confiance à Kennedy.",
    "Mobile-first n'est pas un breakpoint — c'est le seul écran. Commencer par l'Android de l'acheteur.",
    "Un lien partageable remplace dix photos WhatsApp — la vraie distribution du catalogue est le lien que le vendeur peut coller partout.",
  ],
};
