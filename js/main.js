// Main JavaScript for Personal Portfolio

document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Progress bar
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Language toggle
    const translations = {
        en: {
            'nav-services': 'Services',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills',
            'nav-contact': 'Contact',
            'btn-projects': 'View Projects',
            'btn-cv': 'Download CV',
            'hero-tagline': 'System Architect & DevOps Engineer',
            'hero-subtitle': 'Specializing in enterprise-grade infrastructure, CI/CD automation, and AI integration. Building scalable systems with modern tech stack and clean architecture.',
            'services-badge': 'What I Offer',
            'services-title': 'Professional Services',
            'services-subtitle': 'Freelance engineering services for B2B clients in Germany (NRW region)',
            'projects-badge': 'Portfolio',
            'projects-title': 'Featured Projects',
            'projects-subtitle': 'A selection of my recent work in software development, AI, and automation.',
            'skills-badge': 'Expertise',
            'skills-title': 'Technical Skills',
            'skills-subtitle': 'Comprehensive toolset for modern software development and infrastructure.',
            'contact-badge': 'Get In Touch',
            'contact-title': 'Let\'s Work Together',
            'contact-subtitle': 'Available for freelance projects in Essen, NRW region. German B1 certified (B2 in progress).',
            'contact-email': 'Email',
            'contact-phone': 'Phone',
            'contact-location': 'Location',
            'contact-location-val': 'Essen, NRW<br>Germany',
            'contact-languages': 'Languages',
            'contact-languages-val': 'German B1→B2<br>English C1<br>Russian Native<br>Ukrainian Native',
            'footer-rights': '© 2026 ANTIANTI. All rights reserved.',
            'footer-role': 'System Architect & DevOps Engineer | Essen, Germany',

            // Services
            'service-1-title': 'System Architecture & DevOps',
            'service-1-desc': 'Design and implementation of CI/CD pipelines, containerization, and infrastructure automation.',
            'service-1-li-1': 'Docker & Kubernetes setup',
            'service-1-li-2': 'GitHub Actions / GitLab CI',
            'service-1-li-3': 'Backend API development (FastAPI, NestJS)',
            'service-1-li-4': 'Database architecture (SQL/NoSQL)',

            'service-2-title': 'Real Estate Visualization',
            'service-2-desc': 'Professional photography and 360° virtual tours for real estate marketing.',
            'service-2-li-1': 'Interior & exterior photography',
            'service-2-li-2': '360° virtual tours (interactive)',
            'service-2-li-3': 'Video tours with music & text',
            'service-2-li-4': 'Drone footage (planned: A2 license)',

            'service-3-title': 'AI Integration & Automation',
            'service-3-desc': 'Multi-LLM integration, intelligent automation pipelines, and custom AI-powered solutions.',
            'service-3-li-1': 'Multi-LLM Integration (OpenAI, Claude, Gemini)',
            'service-3-li-2': 'Custom MCP servers for AI workflows',
            'service-3-li-3': 'Document processing pipelines (ETL)',
            'service-3-li-4': 'Webhook automation (n8n, Zapier)',

            // Projects - DreamVerse
            'dreamverse-desc': 'The first AI-native game where players become architects of reality itself',
            'dreamverse-p1': '<strong>Revolutionary Game Design:</strong> No classes, no pre-defined roles. Your identity is defined by what you hold—weapons are programmable platforms with memory slots for skills (NFT-based). Design your own weapon forms through AI "Demiurge" system, from Heavy Souls-like builds to GunZ K-Style speedsters. Physics adapts to your equipment load: <30% = air-strafe mobility, >70% = tank poise.',
            'dreamverse-p2': '<strong>Living World Economy:</strong> Hexagonal land NFT system with territorial DAO governance. Players own plots, build infrastructure, mine resources, and tax trade routes. Procedural generation creates endless biomes. Wave-based expansion unlocks new continents (Genesis → Frontier → Abyss → Void).',
            'dreamverse-p3': '<strong>Autonomous NPCs with Real Memory:</strong> "Living NPC Protocol" using ERC-6551 token-bound accounts + GraphRAG synaptic memory. NPCs remember conversations, form relationships, make autonomous decisions. Tier 3 "Awakened" NPCs can interact with Twitter/Discord and conduct real-world transactions. 5 archetypes: Quantum Trader, Defense Commander, World Builder, Intelligence Agent, Diplomat.',
            'dreamverse-p4': '<strong>Technical Innovation:</strong> Hybrid architecture—UE5 rendering + Python FastAPI "Demiurge" orchestrator generating content via LLM. Custom MCP integration with 21 editor automation commands. Knowledge Graph with 185 nodes forming synaptic connections for NPC memory persistence. AI balance validator ensures generated weapons maintain competitive integrity.',
            'dreamverse-p5': '<strong>Vision:</strong> Merging FromSoftware\'s combat depth (Elden Ring verticality + Sekiro flow + Bloodborne aggression) with player-driven economy and AI co-creation. Not a game you play—a world you build.',
            'btn-explore': 'Explore World',
            'btn-docs': 'Technical Docs',

            // Projects - NeuroDrive
            'neurodrive-desc': 'ETL pipeline with AI-powered document processing',
            'neurodrive-text': 'Automated Google Drive to Obsidian pipeline with AI categorization, smart title generation, and webhook automation. 1000+ documents processed.',

            // Projects - JETZWORK
            'jetzwork-desc': 'B2B marketplace mobile application',
            'jetzwork-text': 'Cross-platform B2B marketplace with GPS-based time tracking (ArbZG compliant), 3-tier verification system, and real-time Firebase backend.',

            // Projects - LiD Trainer
            'lid-desc': 'Leben in Deutschland exam preparation',
            'lid-text': 'Interactive trainer for German citizenship test with roulette mode (instant feedback) and full exam simulation. All 33 questions with explanations.',
            'btn-demo': 'Try Demo',

            // Projects - DTZ Trainer
            'dtz-desc': 'Interactive German language exam trainer',
            'dtz-text': 'Interactive trainer for DTZ B1 German exam with 4 grammar modules, 100+ practice questions, and responsive design.',

            // Projects - Cannabis Clubs
            'cannabis-desc': 'SaaS for Cannabis Social Clubs compliance',
            'cannabis-text': 'Digital infrastructure for Cannabis Social Clubs with KCanG and GDPR compliance, automated limit monitoring, and analytics dashboard.',
            'btn-landing': 'View Landing',

            // Projects - ContentFlow
            'contentflow-desc': 'AI-Powered Cross-Platform CMS',
            'contentflow-text': 'Desktop CMS for 4 platforms (Windows/macOS/Linux/Web) with clean architecture, analytics dashboard, and 85% test coverage.',
            'contentflow-p1': '<strong>Enterprise Core:</strong> Cross-platform Clean Architecture (BLoC) app for Windows/macOS/Linux/Web. Features robust CI/CD pipelines (GitHub Actions), 85% test coverage, and optimized Hive local storage.',
            'contentflow-p2': '<strong>AI & Features:</strong> Gemini AI engine for instant content generation (scripts, posts) via Python Flask. Includes real-time Analytics Dashboard, Kanban task management, and rich media handling.',
            'btn-details': 'Details',

            // Projects - StartKlar
            'startklar-desc': 'AI-powered requirements gathering through natural dialogue',
            'startklar-text': '<strong>Automated tech specs collection via AI conversation.</strong> Multi-language dialogue system (DE/RU/EN) with real-time data extraction, live document preview, and REST API. Reduces client onboarding time by 70%. Full monorepo architecture with Docker Compose.',
            'startklar-stats': 'MVP Ready &nbsp;&bull;&nbsp; 8K+ LOC &nbsp;&bull;&nbsp; 3 Languages',

            // Projects - AI Game Studio
            'aigamestudio-desc': 'Automated tabletop game generator for Tabletop Simulator',
            'aigamestudio-text': '<strong>From idea to playable prototype in 5 minutes.</strong> Multi-agent pipeline (Concept &rarr; Designer &rarr; Writer) generates GDD, 20 cards with mana curve, AI art via Flux Schnell, and exports a ready-to-play TTS .json mod. Hybrid Search META-RAG uses BGG Top-100 + Steam Workshop as knowledge base.',
            'aigamestudio-stats': '~$0.46 per game &nbsp;&bull;&nbsp; 3-5 min pipeline &nbsp;&bull;&nbsp; MIT License',

            // Projects - NRW ART
            'nrwart-desc': 'Online gallery for NRW artists',
            'nrwart-text': 'Full-stack e-commerce platform for emerging NRW artists. Monorepo (npm workspaces). Gallery with search/filters, shopping cart, checkout with 15% commission, Cloudinary image storage. Built to explore Next.js App Router + Express + MongoDB stack.',

            // Skills
            'skill-backend-title': 'Backend & DevOps',
            'skill-backend-1': 'Python FastAPI (DreamVerse, NeuroDrive)',
            'skill-backend-2': 'NestJS / Node.js (StartKlar)',
            'skill-backend-3': 'Docker Compose (planned deployments)',
            'skill-backend-4': 'REST API & WebSocket (TCP)',
            'skill-backend-5': 'SQLite, Firebase Firestore, Hive',

            'skill-ai-title': 'AI Integration & Automation',
            'skill-ai-1': 'Multi-LLM Integration: OpenAI GPT-4o, Anthropic Claude, Google Gemini',
            'skill-ai-2': 'Custom MCP Protocol servers (21+ tools for Unreal Engine)',
            'skill-ai-3': 'Google Drive API OAuth2 + ETL pipelines',
            'skill-ai-4': 'n8n & Zapier Webhook automation',
            'skill-ai-5': 'Prompt Engineering & System Prompts optimization',

            'skill-app-title': 'Application Development',
            'skill-app-1': 'Flutter (Mobile + Desktop)',
            'skill-app-2': 'React 18 + TailwindCSS',
            'skill-app-3': 'BLoC Pattern, Provider, GetIt DI',
            'skill-app-4': 'Firebase Stack (Auth, Firestore)',
            'skill-app-5': 'Unreal Engine 5 (Blueprints + Python)',

            'skill-lang-title': 'Programming Languages',
            'skill-lang-1': 'Python (FastAPI, ETL, Async)',
            'skill-lang-2': 'Dart (Flutter Apps)',
            'skill-lang-3': 'JavaScript/TypeScript (React, Node.js)',
            'skill-lang-4': 'C++ (Unreal Engine 5 Helpers)',
            'skill-lang-5': 'SQL (SQLite, Firestore Patterns)',

            'skill-content-title': 'Content Production',
            'skill-content-1': 'DSLR/Mirrorless Photography',
            'skill-content-2': '360° Virtual Tours',
            'skill-content-3': 'DaVinci Resolve, Premiere Pro',
            'skill-content-4': 'Lightroom, Photoshop',
            'skill-content-5': 'Real Estate Photography',

            'skill-eng-title': 'Engineering',
            'skill-eng-1': 'M.Sc. Civil Engineering (Odesa)',
            'skill-eng-2': 'AutoCAD, Revit (BIM)',
            'skill-eng-3': 'Blender (Basic 3D Modeling)',
            'skill-eng-4': 'Technical Documentation',
            'skill-eng-5': 'FEM, CFD Simulation'
        },
        de: {
            'nav-services': 'Dienstleistungen',
            'nav-projects': 'Projekte',
            'nav-skills': 'Kompetenzen',
            'nav-contact': 'Kontakt',
            'btn-projects': 'Projekte ansehen',
            'btn-cv': 'Lebenslauf herunterladen',
            'hero-tagline': 'Systemarchitekt & DevOps-Ingenieur',
            'hero-subtitle': 'Spezialisiert auf Unternehmensinfrastruktur, CI/CD-Automatisierung und KI-Integration. Entwicklung skalierbarer Systeme mit modernem Tech-Stack und sauberer Architektur.',
            'services-badge': 'Was ich biete',
            'services-title': 'Professionelle Dienstleistungen',
            'services-subtitle': 'Freelance-Ingenieurdienstleistungen für B2B-Kunden in Deutschland (NRW)',
            'projects-badge': 'Portfolio',
            'projects-title': 'Ausgewählte Projekte',
            'projects-subtitle': 'Eine Auswahl meiner aktuellen Arbeiten in Softwareentwicklung, KI und Automatisierung.',
            'skills-badge': 'Expertise',
            'skills-title': 'Technische Fähigkeiten',
            'skills-subtitle': 'Umfassendes Toolset für moderne Softwareentwicklung und Infrastruktur.',
            'contact-badge': 'Kontakt aufnehmen',
            'contact-title': 'Lassen Sie uns zusammenarbeiten',
            'contact-subtitle': 'Verfügbar für Freelance-Projekte in Essen, NRW. Deutsch B1 zertifiziert (B2 in Arbeit).',
            'contact-email': 'E-Mail',
            'contact-phone': 'Telefon',
            'contact-location': 'Standort',
            'contact-location-val': 'Essen, NRW<br>Deutschland',
            'contact-languages': 'Sprachen',
            'contact-languages-val': 'Deutsch B1→B2<br>Englisch C1<br>Russisch Muttersprache<br>Ukrainisch Muttersprache',
            'footer-rights': '© 2026 ANTIANTI. Alle Rechte vorbehalten.',
            'footer-role': 'Systemarchitekt & DevOps-Ingenieur | Essen, Deutschland',

            // Services
            'service-1-title': 'Systemarchitektur & DevOps',
            'service-1-desc': 'Design und Implementierung von CI/CD-Pipelines, Containerisierung und Infrastrukturautomatisierung.',
            'service-1-li-1': 'Docker & Kubernetes Setup',
            'service-1-li-2': 'GitHub Actions / GitLab CI',
            'service-1-li-3': 'Backend API-Entwicklung (FastAPI, NestJS)',
            'service-1-li-4': 'Datenbankarchitektur (SQL/NoSQL)',

            'service-2-title': 'Immobilien-Visualisierung',
            'service-2-desc': 'Professionelle Fotografie und virtuelle 360°-Rundgänge für Immobilienmarketing.',
            'service-2-li-1': 'Innen- und Außenfotografie',
            'service-2-li-2': 'Virtuelle 360°-Rundgänge (interaktiv)',
            'service-2-li-3': 'Videotouren mit Musik & Text',
            'service-2-li-4': 'Drohnenaufnahmen (geplant: A2-Lizenz)',

            'service-3-title': 'KI-Integration & Automatisierung',
            'service-3-desc': 'Multi-LLM-Integration, intelligente Automatisierungspipelines und maßgeschneiderte KI-Lösungen.',
            'service-3-li-1': 'Multi-LLM Integration (OpenAI, Claude, Gemini)',
            'service-3-li-2': 'Benutzerdefinierte MCP-Server für KI-Workflows',
            'service-3-li-3': 'Dokumentenverarbeitungs-Pipelines (ETL)',
            'service-3-li-4': 'Webhook-Automatisierung (n8n, Zapier)',

            // Projects - DreamVerse
            'dreamverse-desc': 'Das erste KI-native Spiel, in dem Spieler Architekten der Realität werden',
            'dreamverse-p1': '<strong>Revolutionäres Game Design:</strong> Keine Klassen, keine vordefinierten Rollen. Deine Identität wird durch das bestimmt, was du hältst – Waffen sind programmierbare Plattformen mit Speicherplätzen für Fähigkeiten (NFT-basiert). Entwirf deine eigenen Waffenformen durch das KI-"Demiurge"-System, von Heavy Souls-ähnlichen Builds bis hin zu GunZ K-Style Speedstern. Die Physik passt sich deiner Ausrüstungslast an: <30% = Air-Strafe-Mobilität, >70% = Tank-Haltung.',
            'dreamverse-p2': '<strong>Lebendige Weltwirtschaft:</strong> Hexagonales Land-NFT-System mit territorialer DAO-Governance. Spieler besitzen Grundstücke, bauen Infrastruktur, bauen Ressourcen ab und besteuern Handelsrouten. Prozedurale Generierung schafft endlose Biome. Wellenbasierte Expansion schaltet neue Kontinente frei (Genesis → Frontier → Abyss → Void).',
            'dreamverse-p3': '<strong>Autonome NPCs mit echtem Gedächtnis:</strong> "Living NPC Protocol" unter Verwendung von ERC-6551 Token-Bound Accounts + GraphRAG synaptischem Gedächtnis. NPCs erinnern sich an Gespräche, bilden Beziehungen und treffen autonome Entscheidungen. Tier 3 "Awakened" NPCs können mit Twitter/Discord interagieren und reale Transaktionen durchführen. 5 Archetypen: Quantenhändler, Verteidigungskommandant, Weltenbauer, Geheimdienstagent, Diplomat.',
            'dreamverse-p4': '<strong>Technische Innovation:</strong> Hybridarchitektur – UE5-Rendering + Python FastAPI "Demiurge"-Orchestrator, der Inhalte über LLM generiert. Benutzerdefinierte MCP-Integration mit 21 Editor-Automatisierungsbefehlen. Knowledge Graph mit 185 Knoten bildet synaptische Verbindungen für NPC-Gedächtnispersistenz. KI-Balance-Validator stellt sicher, dass generierte Waffen die Wettbewerbsintegrität wahren.',
            'dreamverse-p5': '<strong>Vision:</strong> Verschmelzung von FromSoftware\'s Kampftiefe (Elden Ring Vertikalität + Sekiro Flow + Bloodborne Aggression) mit spielergesteuerter Wirtschaft und KI-Ko-Kreation. Kein Spiel, das du spielst – eine Welt, die du baust.',
            'btn-explore': 'Welt erkunden',
            'btn-docs': 'Technische Doku',

            // Projects - NeuroDrive
            'neurodrive-desc': 'ETL-Pipeline mit KI-gestützter Dokumentenverarbeitung',
            'neurodrive-text': 'Automatisierte Google Drive zu Obsidian Pipeline mit KI-Kategorisierung, intelligenter Titelgenerierung und Webhook-Automatisierung. Über 1000 Dokumente verarbeitet.',

            // Projects - JETZWORK
            'jetzwork-desc': 'B2B-Marktplatz Mobile Applikation',
            'jetzwork-text': 'Plattformübergreifender B2B-Marktplatz mit GPS-basierter Zeiterfassung (ArbZG-konform), 3-stufigem Verifizierungssystem und Echtzeit-Firebase-Backend.',

            // Projects - LiD Trainer
            'lid-desc': 'Vorbereitung auf den "Leben in Deutschland"-Test',
            'lid-text': 'Interaktiver Trainer für den deutschen Einbürgerungstest mit Roulette-Modus (sofortiges Feedback) und vollständiger Prüfungssimulation. Alle 33 Fragen mit Erklärungen.',
            'btn-demo': 'Demo testen',

            // Projects - DTZ Trainer
            'dtz-desc': 'Interaktiver Deutsch-Prüfungstrainer',
            'dtz-text': 'Interaktiver Trainer für die DTZ B1 Deutschprüfung mit 4 Grammatikmodulen, 100+ Übungsfragen und responsivem Design.',

            // Projects - Cannabis Clubs
            'cannabis-desc': 'SaaS für Cannabis Social Clubs Compliance',
            'cannabis-text': 'Digitale Infrastruktur für Cannabis Social Clubs mit KCanG- und DSGVO-Konformität, automatisierter Limit-Überwachung und Analyse-Dashboard.',
            'btn-landing': 'Landing Page',

            // Projects - ContentFlow
            'contentflow-desc': 'KI-gestütztes plattformübergreifendes CMS',
            'contentflow-text': 'Desktop-CMS für 4 Plattformen (Windows/macOS/Linux/Web) mit sauberer Architektur, Analyse-Dashboard und 85% Testabdeckung.',
            'contentflow-p1': '<strong>Enterprise Core:</strong> Plattformübergreifende Clean Architecture (BLoC) App für Windows/macOS/Linux/Web. Bietet robuste CI/CD-Pipelines, 85% Testabdeckung und optimierten Hive-Speicher.',
            'contentflow-p2': '<strong>KI & Features:</strong> Gemini KI-Engine für sofortige Content-Generierung (Skripte, Posts) via Python Flask. Inklusive Echtzeit-Analyse-Dashboard, Kanban-Board und Medienverwaltung.',
            'btn-details': 'Details',

            // Projects - StartKlar
            'startklar-desc': 'KI-gestützte Anforderungserfassung durch natürlichen Dialog',
            'startklar-text': '<strong>Automatisierte Lastenheft-Erfassung via KI-Gespräch.</strong> Mehrsprachiges Dialogsystem (DE/RU/EN) mit Echtzeit-Datenextraktion, Live-Dokumentenvorschau und REST API. Reduziert Kunden-Onboarding-Zeit um 70%. Vollständige Monorepo-Architektur mit Docker Compose.',
            'startklar-stats': 'MVP Bereit &nbsp;&bull;&nbsp; 8K+ LOC &nbsp;&bull;&nbsp; 3 Sprachen',

            // Projects - AI Game Studio
            'aigamestudio-desc': 'Automatisierter Tabletop-Spielgenerator für Tabletop Simulator',
            'aigamestudio-text': '<strong>Von der Idee zum spielbaren Prototyp in 5 Minuten.</strong> Multi-Agent-Pipeline (Konzept &rarr; Designer &rarr; Writer) generiert GDD, 20 Karten mit Mana-Kurve, KI-Kunst via Flux Schnell und exportiert ein spielfertiges TTS .json Mod. Hybrid Search META-RAG nutzt BGG Top-100 + Steam Workshop als Wissensbasis.',
            'aigamestudio-stats': '~0,46 $ pro Spiel &nbsp;&bull;&nbsp; 3-5 Min Pipeline &nbsp;&bull;&nbsp; MIT Lizenz',

            // Projects - NRW ART
            'nrwart-desc': 'Online-Galerie für NRW-Künstler',
            'nrwart-text': 'Full-Stack E-Commerce-Plattform für aufstrebende NRW-Künstler. Monorepo (npm workspaces). Galerie mit Suche/Filtern, Warenkorb, Checkout mit 15% Provision, Cloudinary Bildspeicherung. Entwickelt zur Erkundung von Next.js App Router + Express + MongoDB Stack.',

            // Skills
            'skill-backend-title': 'Backend & DevOps',
            'skill-backend-1': 'Python FastAPI (DreamVerse, NeuroDrive)',
            'skill-backend-2': 'NestJS / Node.js (StartKlar)',
            'skill-backend-3': 'Docker Compose (geplante Deployments)',
            'skill-backend-4': 'REST API & WebSocket (TCP)',
            'skill-backend-5': 'SQLite, Firebase Firestore, Hive',

            'skill-ai-title': 'KI-Integration & Automatisierung',
            'skill-ai-1': 'Multi-LLM Integration: OpenAI GPT-4o, Anthropic Claude, Google Gemini',
            'skill-ai-2': 'Custom MCP Protocol Server (21+ Tools für Unreal Engine)',
            'skill-ai-3': 'Google Drive API OAuth2 + ETL Pipelines',
            'skill-ai-4': 'n8n & Zapier Webhook Automatisierung',
            'skill-ai-5': 'Prompt Engineering & System Prompts Optimierung',

            'skill-app-title': 'Anwendungsentwicklung',
            'skill-app-1': 'Flutter (Mobile + Desktop)',
            'skill-app-2': 'React 18 + TailwindCSS',
            'skill-app-3': 'BLoC Pattern, Provider, GetIt DI',
            'skill-app-4': 'Firebase Stack (Auth, Firestore)',
            'skill-app-5': 'Unreal Engine 5 (Blueprints + Python)',

            'skill-lang-title': 'Programmiersprachen',
            'skill-lang-1': 'Python (FastAPI, ETL, Async)',
            'skill-lang-2': 'Dart (Flutter Apps)',
            'skill-lang-3': 'JavaScript/TypeScript (React, Node.js)',
            'skill-lang-4': 'C++ (Unreal Engine 5 Helpers)',
            'skill-lang-5': 'SQL (SQLite, Firestore Patterns)',

            'skill-content-title': 'Content-Produktion',
            'skill-content-1': 'DSLR/Spiegellose Fotografie',
            'skill-content-2': 'Virtuelle 360°-Rundgänge',
            'skill-content-3': 'DaVinci Resolve, Premiere Pro',
            'skill-content-4': 'Lightroom, Photoshop',
            'skill-content-5': 'Immobilienfotografie',

            'skill-eng-title': 'Ingenieurwesen',
            'skill-eng-1': 'M.Sc. Bauingenieurwesen (Odesa)',
            'skill-eng-2': 'AutoCAD, Revit (BIM)',
            'skill-eng-3': 'Blender (Grundlegende 3D-Modellierung)',
            'skill-eng-4': 'Technische Dokumentation',
            'skill-eng-5': 'FEM, CFD Simulation'
        },
        ru: {
            'nav-services': 'Услуги',
            'nav-projects': 'Проекты',
            'nav-skills': 'Навыки',
            'nav-contact': 'Контакты',
            'btn-projects': 'Смотреть проекты',
            'btn-cv': 'Скачать резюме',
            'hero-tagline': 'Системный Архитектор и DevOps Инженер',
            'hero-subtitle': 'Специализируюсь на корпоративной инфраструктуре, CI/CD автоматизации и интеграции AI. Создаю масштабируемые системы с современным стеком технологий и чистой архитектурой.',
            'services-badge': 'Мои услуги',
            'services-title': 'Профессиональные услуги',
            'services-subtitle': 'Фриланс-инженерные услуги для B2B клиентов в Германии (регион NRW)',
            'projects-badge': 'Портфолио',
            'projects-title': 'Избранные проекты',
            'projects-subtitle': 'Подборка моих последних работ в разработке ПО, AI и автоматизации.',
            'skills-badge': 'Экспертиза',
            'skills-title': 'Технические навыки',
            'skills-subtitle': 'Комплексный набор инструментов для современной разработки ПО и инфраструктуры.',
            'contact-badge': 'Связаться',
            'contact-title': 'Давайте работать вместе',
            'contact-subtitle': 'Доступен для фриланс-проектов в Эссене, регион NRW. Немецкий B1 сертифицирован (B2 в процессе).',
            'contact-email': 'Email',
            'contact-phone': 'Телефон',
            'contact-location': 'Локация',
            'contact-location-val': 'Эссен, NRW<br>Германия',
            'contact-languages': 'Языки',
            'contact-languages-val': 'Немецкий B1→B2<br>Английский C1<br>Русский Родной<br>Украинский Родной',
            'footer-rights': '© 2026 ANTIANTI. Все права защищены.',
            'footer-role': 'Системный Архитектор и DevOps Инженер | Эссен, Германия',

            // Services
            'service-1-title': 'Системная архитектура и DevOps',
            'service-1-desc': 'Проектирование и реализация CI/CD пайплайнов, контейнеризации и автоматизации инфраструктуры.',
            'service-1-li-1': 'Настройка Docker и Kubernetes',
            'service-1-li-2': 'GitHub Actions / GitLab CI',
            'service-1-li-3': 'Разработка Backend API (FastAPI, NestJS)',
            'service-1-li-4': 'Архитектура баз данных (SQL/NoSQL)',

            'service-2-title': 'Визуализация недвижимости',
            'service-2-desc': 'Профессиональная фотография и виртуальные 360° туры для маркетинга недвижимости.',
            'service-2-li-1': 'Интерьерная и экстерьерная фотография',
            'service-2-li-2': 'Виртуальные 360° туры (интерактивные)',
            'service-2-li-3': 'Видео-туры с музыкой и текстом',
            'service-2-li-4': 'Съёмка с дрона (планируется: лицензия A2)',

            'service-3-title': 'AI интеграция и автоматизация',
            'service-3-desc': 'Мульти-LLM интеграция, интеллектуальные пайплайны автоматизации и кастомные AI-решения.',
            'service-3-li-1': 'Мульти-LLM интеграция (OpenAI, Claude, Gemini)',
            'service-3-li-2': 'Кастомные MCP серверы для AI рабочих процессов',
            'service-3-li-3': 'Пайплайны обработки документов (ETL)',
            'service-3-li-4': 'Webhook автоматизация (n8n, Zapier)',

            // Projects - DreamVerse
            'dreamverse-desc': 'Первая AI-нативная игра, где игроки становятся архитекторами реальности',
            'dreamverse-p1': '<strong>Революционный игровой дизайн:</strong> Без классов, без предопределённых ролей. Твоя идентичность определяется тем, что ты держишь — оружие это программируемые платформы с слотами памяти для навыков (на базе NFT). Проектируй собственные формы оружия через систему AI "Демиург", от тяжёлых Souls-подобных билдов до GunZ K-Style спидстеров. Физика адаптируется к нагрузке экипировки: <30% = мобильность с air-strafe, >70% = танковая устойчивость.',
            'dreamverse-p2': '<strong>Живая экономика мира:</strong> Гексагональная система земельных NFT с территориальным DAO управлением. Игроки владеют участками, строят инфраструктуру, добывают ресурсы и облагают налогом торговые маршруты. Процедурная генерация создаёт бесконечные биомы. Волновое расширение открывает новые континенты (Genesis → Frontier → Abyss → Void).',
            'dreamverse-p3': '<strong>Автономные NPC с реальной памятью:</strong> "Living NPC Protocol" с использованием ERC-6551 токен-привязанных аккаунтов + GraphRAG синаптической памяти. NPC помнят разговоры, формируют отношения, принимают автономные решения. Tier 3 "Пробуждённые" NPC могут взаимодействовать с Twitter/Discord и проводить реальные транзакции. 5 архетипов: Квантовый Трейдер, Командир Обороны, Строитель Мира, Агент Разведки, Дипломат.',
            'dreamverse-p4': '<strong>Техническая инновация:</strong> Гибридная архитектура — UE5 рендеринг + Python FastAPI "Демиург"-оркестратор, генерирующий контент через LLM. Кастомная MCP интеграция с 21 командой автоматизации редактора. Knowledge Graph с 185 узлами, формирующими синаптические связи для персистентности памяти NPC. AI валидатор баланса гарантирует сохранение конкурентной целостности генерируемого оружия.',
            'dreamverse-p5': '<strong>Видение:</strong> Слияние глубины боёвки FromSoftware (вертикальность Elden Ring + флоу Sekiro + агрессия Bloodborne) с управляемой игроками экономикой и AI со-творчеством. Не игра, в которую ты играешь — мир, который ты строишь.',
            'btn-explore': 'Исследовать мир',
            'btn-docs': 'Техническая документация',

            // Projects - NeuroDrive
            'neurodrive-desc': 'ETL пайплайн с AI-обработкой документов',
            'neurodrive-text': 'Автоматизированный пайплайн Google Drive → Obsidian с AI категоризацией, умной генерацией заголовков и webhook автоматизацией. Обработано 1000+ документов.',

            // Projects - JETZWORK
            'jetzwork-desc': 'B2B маркетплейс мобильное приложение',
            'jetzwork-text': 'Кроссплатформенный B2B маркетплейс с GPS-трекингом времени (соответствие ArbZG), 3-уровневой системой верификации и реал-тайм Firebase бэкендом.',

            // Projects - LiD Trainer
            'lid-desc': 'Подготовка к экзамену "Жизнь в Германии"',
            'lid-text': 'Интерактивный тренажёр для теста на гражданство Германии с рулеточным режимом (мгновенная обратная связь) и полной симуляцией экзамена. Все 33 вопроса с объяснениями.',
            'btn-demo': 'Попробовать демо',

            // Projects - DTZ Trainer
            'dtz-desc': 'Интерактивный тренажёр по немецкому языку',
            'dtz-text': 'Интерактивный тренажёр для экзамена DTZ B1 по немецкому с 4 грамматическими модулями, 100+ практическими вопросами и адаптивным дизайном.',

            // Projects - Cannabis Clubs
            'cannabis-desc': 'SaaS для соответствия Cannabis Social Clubs',
            'cannabis-text': 'Цифровая инфраструктура для Cannabis Social Clubs с соответствием KCanG и GDPR, автоматическим мониторингом лимитов и аналитической панелью.',
            'btn-landing': 'Посмотреть лендинг',

            // Projects - ContentFlow
            'contentflow-desc': 'AI-управляемая кроссплатформенная CMS',
            'contentflow-text': 'Десктопная CMS для 4 платформ (Windows/macOS/Linux/Web) с чистой архитектурой, аналитической панелью и 85% покрытием тестами.',
            'contentflow-p1': '<strong>Корпоративное ядро:</strong> Кроссплатформенное приложение с Clean Architecture (BLoC) для Windows/macOS/Linux/Web. Функции включают надёжные CI/CD пайплайны (GitHub Actions), 85% покрытие тестами и оптимизированное Hive локальное хранилище.',
            'contentflow-p2': '<strong>AI и функции:</strong> Gemini AI движок для мгновенной генерации контента (скрипты, посты) через Python Flask. Включает реал-тайм аналитическую панель, Kanban управление задачами и обработку медиа.',
            'btn-details': 'Подробнее',

            // Projects - StartKlar
            'startklar-desc': 'AI-сбор требований через естественный диалог',
            'startklar-text': '<strong>Автоматизированный сбор ТЗ через AI-беседу.</strong> Многоязычная диалоговая система (DE/RU/EN) с извлечением данных в реальном времени, живой предпросмотр документа и REST API. Сокращает время онбординга клиентов на 70%. Полная монорепо архитектура с Docker Compose.',
            'startklar-stats': 'MVP готов &nbsp;&bull;&nbsp; 8K+ LOC &nbsp;&bull;&nbsp; 3 языка',

            // Projects - AI Game Studio
            'aigamestudio-desc': 'Автоматизированный генератор настольных игр для Tabletop Simulator',
            'aigamestudio-text': '<strong>От идеи до играбельного прототипа за 5 минут.</strong> Мульти-агентный пайплайн (Концепция &rarr; Дизайнер &rarr; Райтер) генерирует GDD, 20 карт с мана-кривой, AI-арт через Flux Schnell и экспортирует готовый к игре TTS .json мод. Hybrid Search META-RAG использует BGG Top-100 + Steam Workshop как базу знаний.',
            'aigamestudio-stats': '~$0.46 за игру &nbsp;&bull;&nbsp; 3-5 мин пайплайн &nbsp;&bull;&nbsp; MIT License',

            // Projects - NRW ART
            'nrwart-desc': 'Онлайн-галерея для художников NRW',
            'nrwart-text': 'Full-stack e-commerce платформа для начинающих художников NRW. Монорепо (npm workspaces). Галерея с поиском/фильтрами, корзина, чекаут с 15% комиссией, хранение изображений Cloudinary. Создана для изучения Next.js App Router + Express + MongoDB стека.',

            // Skills
            'skill-backend-title': 'Backend и DevOps',
            'skill-backend-1': 'Python FastAPI (DreamVerse, NeuroDrive)',
            'skill-backend-2': 'NestJS / Node.js (StartKlar)',
            'skill-backend-3': 'Docker Compose (планируемые развёртывания)',
            'skill-backend-4': 'REST API и WebSocket (TCP)',
            'skill-backend-5': 'SQLite, Firebase Firestore, Hive',

            'skill-ai-title': 'AI интеграция и автоматизация',
            'skill-ai-1': 'Мульти-LLM интеграция: OpenAI GPT-4o, Anthropic Claude, Google Gemini',
            'skill-ai-2': 'Кастомные MCP Protocol серверы (21+ инструментов для Unreal Engine)',
            'skill-ai-3': 'Google Drive API OAuth2 + ETL пайплайны',
            'skill-ai-4': 'n8n и Zapier Webhook автоматизация',
            'skill-ai-5': 'Prompt Engineering и оптимизация системных промптов',

            'skill-app-title': 'Разработка приложений',
            'skill-app-1': 'Flutter (мобильные + десктопные)',
            'skill-app-2': 'React 18 + TailwindCSS',
            'skill-app-3': 'BLoC Pattern, Provider, GetIt DI',
            'skill-app-4': 'Firebase Stack (Auth, Firestore)',
            'skill-app-5': 'Unreal Engine 5 (Blueprints + Python)',

            'skill-lang-title': 'Языки программирования',
            'skill-lang-1': 'Python (FastAPI, ETL, Async)',
            'skill-lang-2': 'Dart (Flutter приложения)',
            'skill-lang-3': 'JavaScript/TypeScript (React, Node.js)',
            'skill-lang-4': 'C++ (Unreal Engine 5 Helpers)',
            'skill-lang-5': 'SQL (SQLite, Firestore Patterns)',

            'skill-content-title': 'Производство контента',
            'skill-content-1': 'DSLR/Беззеркальная фотография',
            'skill-content-2': 'Виртуальные 360° туры',
            'skill-content-3': 'DaVinci Resolve, Premiere Pro',
            'skill-content-4': 'Lightroom, Photoshop',
            'skill-content-5': 'Фотография недвижимости',

            'skill-eng-title': 'Инженерное дело',
            'skill-eng-1': 'М.Sc. Гражданское строительство (Одеса)',
            'skill-eng-2': 'AutoCAD, Revit (BIM)',
            'skill-eng-3': 'Blender (базовое 3D моделирование)',
            'skill-eng-4': 'Техническая документация',
            'skill-eng-5': 'FEM, CFD симуляция'
        },
        ua: {
            'nav-services': 'Послуги',
            'nav-projects': 'Проєкти',
            'nav-skills': 'Навички',
            'nav-contact': 'Контакти',
            'btn-projects': 'Дивитися проєкти',
            'btn-cv': 'Завантажити резюме',
            'hero-tagline': 'Системний Архітектор та DevOps Інженер',
            'hero-subtitle': 'Спеціалізуюся на корпоративній інфраструктурі, CI/CD автоматизації та інтеграції AI. Створюю масштабовані системи з сучасним стеком технологій та чистою архітектурою.',
            'services-badge': 'Мої послуги',
            'services-title': 'Професійні послуги',
            'services-subtitle': 'Фріланс-інженерні послуги для B2B клієнтів у Німеччині (регіон NRW)',
            'projects-badge': 'Портфоліо',
            'projects-title': 'Обрані проєкти',
            'projects-subtitle': 'Добірка моїх останніх робіт у розробці ПЗ, AI та автоматизації.',
            'skills-badge': 'Експертиза',
            'skills-title': 'Технічні навички',
            'skills-subtitle': 'Комплексний набір інструментів для сучасної розробки ПЗ та інфраструктури.',
            'contact-badge': 'Зв\'язатися',
            'contact-title': 'Давайте працювати разом',
            'contact-subtitle': 'Доступний для фріланс-проєктів в Ессені, регіон NRW. Німецька B1 сертифікований (B2 у процесі).',
            'contact-email': 'Email',
            'contact-phone': 'Телефон',
            'contact-location': 'Локація',
            'contact-location-val': 'Ессен, NRW<br>Німеччина',
            'contact-languages': 'Мови',
            'contact-languages-val': 'Німецька B1→B2<br>Англійська C1<br>Російська Рідна<br>Українська Рідна',
            'footer-rights': '© 2026 ANTIANTI. Усі права захищені.',
            'footer-role': 'Системний Архітектор та DevOps Інженер | Ессен, Німеччина',

            // Services
            'service-1-title': 'Системна архітектура та DevOps',
            'service-1-desc': 'Проєктування та реалізація CI/CD пайплайнів, контейнеризації та автоматизації інфраструктури.',
            'service-1-li-1': 'Налаштування Docker та Kubernetes',
            'service-1-li-2': 'GitHub Actions / GitLab CI',
            'service-1-li-3': 'Розробка Backend API (FastAPI, NestJS)',
            'service-1-li-4': 'Архітектура баз даних (SQL/NoSQL)',

            'service-2-title': 'Візуалізація нерухомості',
            'service-2-desc': 'Професійна фотографія та віртуальні 360° тури для маркетингу нерухомості.',
            'service-2-li-1': 'Інтер\'єрна та екстер\'єрна фотографія',
            'service-2-li-2': 'Віртуальні 360° тури (інтерактивні)',
            'service-2-li-3': 'Відео-тури з музикою та текстом',
            'service-2-li-4': 'Зйомка з дрону (планується: ліцензія A2)',

            'service-3-title': 'AI інтеграція та автоматизація',
            'service-3-desc': 'Мульті-LLM інтеграція, інтелектуальні пайплайни автоматизації та кастомні AI-рішення.',
            'service-3-li-1': 'Мульті-LLM інтеграція (OpenAI, Claude, Gemini)',
            'service-3-li-2': 'Кастомні MCP сервери для AI робочих процесів',
            'service-3-li-3': 'Пайплайни обробки документів (ETL)',
            'service-3-li-4': 'Webhook автоматизація (n8n, Zapier)',

            // Projects - DreamVerse
            'dreamverse-desc': 'Перша AI-нативна гра, де гравці стають архітекторами реальності',
            'dreamverse-p1': '<strong>Революційний ігровий дизайн:</strong> Без класів, без попередньо визначених ролей. Твоя ідентичність визначається тим, що ти тримаєш — зброя це програмовані платформи зі слотами пам\'яті для навичок (на базі NFT). Проєктуй власні форми зброї через систему AI "Деміург", від важких Souls-подібних білдів до GunZ K-Style спідстерів. Фізика адаптується до навантаження екіпіровки: <30% = мобільність з air-strafe, >70% = танкова стійкість.',
            'dreamverse-p2': '<strong>Жива економіка світу:</strong> Гексагональна система земельних NFT з територіальним DAO управлінням. Гравці володіють ділянками, будують інфраструктуру, видобувають ресурси та обкладають податком торгові маршрути. Процедурна генерація створює нескінченні біоми. Хвильове розширення відкриває нові континенти (Genesis → Frontier → Abyss → Void).',
            'dreamverse-p3': '<strong>Автономні NPC з реальною пам\'яттю:</strong> "Living NPC Protocol" з використанням ERC-6551 токен-прив\'язаних акаунтів + GraphRAG синаптичної пам\'яті. NPC пам\'ятають розмови, формують стосунки, приймають автономні рішення. Tier 3 "Пробуджені" NPC можуть взаємодіяти з Twitter/Discord та проводити реальні транзакції. 5 архетипів: Квантовий Трейдер, Командир Оборони, Будівельник Світу, Агент Розвідки, Дипломат.',
            'dreamverse-p4': '<strong>Технічна інновація:</strong> Гібридна архітектура — UE5 рендеринг + Python FastAPI "Деміург"-оркестратор, що генерує контент через LLM. Кастомна MCP інтеграція з 21 командою автоматизації редактора. Knowledge Graph з 185 вузлами, що формують синаптичні зв\'язки для персистентності пам\'яті NPC. AI валідатор балансу гарантує збереження конкурентної цілісності генерованої зброї.',
            'dreamverse-p5': '<strong>Бачення:</strong> Злиття глибини бойовики FromSoftware (вертикальність Elden Ring + флоу Sekiro + агресія Bloodborne) з керованою гравцями економікою та AI спів-творчістю. Не гра, в яку ти граєш — світ, який ти будуєш.',
            'btn-explore': 'Досліджувати світ',
            'btn-docs': 'Технічна документація',

            // Projects - NeuroDrive
            'neurodrive-desc': 'ETL пайплайн з AI-обробкою документів',
            'neurodrive-text': 'Автоматизований пайплайн Google Drive → Obsidian з AI категоризацією, розумною генерацією заголовків та webhook автоматизацією. Оброблено 1000+ документів.',

            // Projects - JETZWORK
            'jetzwork-desc': 'B2B маркетплейс мобільний додаток',
            'jetzwork-text': 'Кросплатформений B2B маркетплейс з GPS-трекінгом часу (відповідність ArbZG), 3-рівневою системою верифікації та реал-тайм Firebase бекендом.',

            // Projects - LiD Trainer
            'lid-desc': 'Підготовка до іспиту "Життя в Німеччині"',
            'lid-text': 'Інтерактивний тренажер для тесту на громадянство Німеччини з рулеточним режимом (миттєвий зворотний зв\'язок) та повною симуляцією іспиту. Усі 33 питання з поясненнями.',
            'btn-demo': 'Спробувати демо',

            // Projects - DTZ Trainer
            'dtz-desc': 'Інтерактивний тренажер з німецької мови',
            'dtz-text': 'Інтерактивний тренажер для іспиту DTZ B1 з німецької з 4 граматичними модулями, 100+ практичними питаннями та адаптивним дизайном.',

            // Projects - Cannabis Clubs
            'cannabis-desc': 'SaaS для відповідності Cannabis Social Clubs',
            'cannabis-text': 'Цифрова інфраструктура для Cannabis Social Clubs з відповідністю KCanG та GDPR, автоматичним моніторингом лімітів та аналітичною панеллю.',
            'btn-landing': 'Подивитись лендінг',

            // Projects - ContentFlow
            'contentflow-desc': 'AI-керована кросплатформна CMS',
            'contentflow-text': 'Десктопна CMS для 4 платформ (Windows/macOS/Linux/Web) з чистою архітектурою, аналітичною панеллю та 85% покриттям тестами.',
            'contentflow-p1': '<strong>Корпоративне ядро:</strong> Кросплатформний додаток з Clean Architecture (BLoC) для Windows/macOS/Linux/Web. Функції включають надійні CI/CD пайплайни (GitHub Actions), 85% покриття тестами та оптимізоване Hive локальне сховище.',
            'contentflow-p2': '<strong>AI та функції:</strong> Gemini AI рушій для миттєвої генерації контенту (скрипти, пости) через Python Flask. Включає реал-тайм аналітичну панель, Kanban управління завданнями та обробку медіа.',
            'btn-details': 'Детальніше',

            // Projects - StartKlar
            'startklar-desc': 'AI-збір вимог через природний діалог',
            'startklar-text': '<strong>Автоматизований збір ТЗ через AI-бесіду.</strong> Багатомовна діалогова система (DE/RU/EN) з витягненням даних в реальному часі, живий попередній перегляд документа та REST API. Скорочує час онбордингу клієнтів на 70%. Повна монорепо архітектура з Docker Compose.',
            'startklar-stats': 'MVP готовий &nbsp;&bull;&nbsp; 8K+ LOC &nbsp;&bull;&nbsp; 3 мови',

            // Projects - AI Game Studio
            'aigamestudio-desc': 'Автоматизований генератор настільних ігор для Tabletop Simulator',
            'aigamestudio-text': '<strong>Від ідеї до грабельного прототипу за 5 хвилин.</strong> Мульти-агентний пайплайн (Концепція &rarr; Дизайнер &rarr; Райтер) генерує GDD, 20 карт з мана-кривою, AI-арт через Flux Schnell та експортує готовий до гри TTS .json мод. Hybrid Search META-RAG використовує BGG Top-100 + Steam Workshop як базу знань.',
            'aigamestudio-stats': '~$0.46 за гру &nbsp;&bull;&nbsp; 3-5 хв пайплайн &nbsp;&bull;&nbsp; MIT License',

            // Projects - NRW ART
            'nrwart-desc': 'Онлайн-галерея для художників NRW',
            'nrwart-text': 'Full-stack e-commerce платформа для починаючих художників NRW. Монорепо (npm workspaces). Галерея з пошуком/фільтрами, кошик, чекаут з 15% комісією, зберігання зображень Cloudinary. Створена для вивчення Next.js App Router + Express + MongoDB стеку.',

            // Skills
            'skill-backend-title': 'Backend та DevOps',
            'skill-backend-1': 'Python FastAPI (DreamVerse, NeuroDrive)',
            'skill-backend-2': 'NestJS / Node.js (StartKlar)',
            'skill-backend-3': 'Docker Compose (плановані розгортання)',
            'skill-backend-4': 'REST API та WebSocket (TCP)',
            'skill-backend-5': 'SQLite, Firebase Firestore, Hive',

            'skill-ai-title': 'AI інтеграція та автоматизація',
            'skill-ai-1': 'Мульті-LLM інтеграція: OpenAI GPT-4o, Anthropic Claude, Google Gemini',
            'skill-ai-2': 'Кастомні MCP Protocol сервери (21+ інструментів для Unreal Engine)',
            'skill-ai-3': 'Google Drive API OAuth2 + ETL пайплайни',
            'skill-ai-4': 'n8n та Zapier Webhook автоматизація',
            'skill-ai-5': 'Prompt Engineering та оптимізація системних промптів',

            'skill-app-title': 'Розробка додатків',
            'skill-app-1': 'Flutter (мобільні + десктопні)',
            'skill-app-2': 'React 18 + TailwindCSS',
            'skill-app-3': 'BLoC Pattern, Provider, GetIt DI',
            'skill-app-4': 'Firebase Stack (Auth, Firestore)',
            'skill-app-5': 'Unreal Engine 5 (Blueprints + Python)',

            'skill-lang-title': 'Мови програмування',
            'skill-lang-1': 'Python (FastAPI, ETL, Async)',
            'skill-lang-2': 'Dart (Flutter додатки)',
            'skill-lang-3': 'JavaScript/TypeScript (React, Node.js)',
            'skill-lang-4': 'C++ (Unreal Engine 5 Helpers)',
            'skill-lang-5': 'SQL (SQLite, Firestore Patterns)',

            'skill-content-title': 'Виробництво контенту',
            'skill-content-1': 'DSLR/Бездзеркальна фотографія',
            'skill-content-2': 'Віртуальні 360° тури',
            'skill-content-3': 'DaVinci Resolve, Premiere Pro',
            'skill-content-4': 'Lightroom, Photoshop',
            'skill-content-5': 'Фотографія нерухомості',

            'skill-eng-title': 'Інженерна справа',
            'skill-eng-1': 'М.Sc. Цивільне будівництво (Одеса)',
            'skill-eng-2': 'AutoCAD, Revit (BIM)',
            'skill-eng-3': 'Blender (базове 3D моделювання)',
            'skill-eng-4': 'Технічна документація',
            'skill-eng-5': 'FEM, CFD симуляція'
        }
    };

    const portfolioUpdates = {
        en: {
            'hero-tagline': 'Knowledge & AI Systems Engineer',
            'hero-subtitle': 'I build knowledge graphs, GraphRAG and retrieval pipelines that turn complex domains into reliable context for AI agents — plus product-grade backends and automation from prototype to deployment.',
            'stat-projects': 'Product & engineering projects',
            'stat-tech': 'Technologies in active use',
            'stat-german': 'German language',
            'stat-degree': 'ZAB',
            'stat-degree-label': 'Master-level degree',
            'services-badge': 'Capabilities',
            'services-title': 'What I build',
            'services-subtitle': 'Knowledge systems, product backends and digital visualization workflows for complex real-world domains.',
            'service-1-title': 'Knowledge & AI Systems',
            'service-1-desc': 'Reliable context layers for LLMs and agents, grounded in domain models and traceable sources.',
            'service-1-li-1': 'Knowledge graphs with Neo4j and Cypher',
            'service-1-li-2': 'GraphRAG, Qdrant, ChromaDB and BM25',
            'service-1-li-3': 'Semantic indexing, chunking and re-ranking',
            'service-1-li-4': 'MCP tools and persistent agent context',
            'service-2-title': 'PropTech & Real Estate Visualization',
            'service-2-desc': 'Photography, immersive property presentation and automation concepts for faster real-estate marketing.',
            'service-2-li-1': 'Sony A7 III interior and exterior photography',
            'service-2-li-2': 'Insta360 ONE RS 1-Inch virtual tours',
            'service-2-li-3': '360° panoramas and walkthrough assets',
            'service-2-li-4': 'Automated visualization and publishing pipelines',
            'service-3-title': 'Product Engineering & Automation',
            'service-3-desc': 'End-to-end implementation of product backends, realtime systems and repeatable delivery pipelines.',
            'service-3-li-1': 'Python/FastAPI and Rust/Axum services',
            'service-3-li-2': 'PostgreSQL, SQLAlchemy, sqlx and Redis',
            'service-3-li-3': 'WebSocket, LiveKit and REST integrations',
            'service-3-li-4': 'Docker, GitHub Actions, Railway and Vercel',
            'projects-subtitle': 'Implemented systems and active products, with clear boundaries between working features and roadmap.',
            'dreamverse-desc': 'A knowledge and agent platform connecting semantic retrieval with an Unreal Engine production environment',
            'dreamverse-p1': '<strong>GraphRAG service:</strong> combines Qdrant vector search with Neo4j subgraph expansion to provide structured, source-aware context for LLMs and AI agents.',
            'dreamverse-p2': '<strong>Knowledge pipeline:</strong> indexes Markdown/Obsidian and PostgreSQL content through normalized text and image embeddings, batch upserts, caching and controlled re-indexing.',
            'dreamverse-p3': '<strong>Agent integration:</strong> exposes knowledge context and callable functions through an MCP bridge to Unreal Engine, backed by tests, Docker and GitHub Actions.',
            'deutschecore-desc': 'Rule-grounded AI platform for German language and professional exam preparation',
            'deutschecore-text': '<strong>Architecture-first MVP:</strong> models grammar rules, task formats and domain vocabulary in Neo4j; retrieves semantically relevant examples from Qdrant; and persists content and learning data in PostgreSQL. The DTB B2 writing module exposes FastAPI endpoints for task generation and rule-grounded feedback.',
            'deutschecore-stats': 'Active development &nbsp;&bull;&nbsp; DTB B2 Schreiben &nbsp;&bull;&nbsp; LiD and DTZ modules',
            'mafia-desc': 'Video-first competitive Mafia platform with a reconnect-safe, authoritative game core',
            'mafia-text': '<strong>Playable core loop:</strong> lobby, role reveal, night/day phases, voting, tie-breaks, fouls and endgame. Explicit host authority, private rooms, spectators and seat-preserving reconnects are implemented and tested across backend and frontend.',
            'mafia-stats': 'Steam Alpha path &nbsp;&bull;&nbsp; Realtime media &nbsp;&bull;&nbsp; Active development',
            'btn-private': 'Private repository',
            'btn-lid': 'LiD demo',
            'btn-dtz': 'DTZ demo',
            'skills-title': 'Engineering toolkit',
            'skills-subtitle': 'Technologies used across the systems shown above — from semantic retrieval to realtime product delivery.',
            'skill-backend-1': 'Python / FastAPI / AsyncIO',
            'skill-backend-2': 'Rust / Axum / Tokio',
            'skill-backend-3': 'PostgreSQL / SQLAlchemy / sqlx',
            'skill-backend-4': 'Docker / Railway / Vercel',
            'skill-backend-5': 'GitHub Actions / CI/CD / automated tests',
            'skill-ai-1': 'Knowledge Graphs: Neo4j, Cypher and domain modelling',
            'skill-ai-2': 'GraphRAG, Qdrant, ChromaDB, BM25 and re-ranking',
            'skill-ai-3': 'Embeddings, semantic chunking and indexing pipelines',
            'skill-ai-4': 'MCP tools and persistent context for AI agents',
            'skill-ai-5': 'OpenAI, Anthropic and Google model integrations',
            'skill-app-1': 'React / TypeScript / Vite',
            'skill-app-2': 'Realtime video with LiveKit and WebSocket',
            'skill-app-3': 'Unreal Engine 5 with Python and MCP',
            'skill-app-4': 'REST APIs and asynchronous backend services',
            'skill-app-5': 'Product architecture from MVP to deployment',
            'skill-lang-1': 'Python (FastAPI, ETL, AsyncIO)',
            'skill-lang-2': 'Rust (Axum, Tokio, sqlx)',
            'skill-lang-3': 'TypeScript / JavaScript (React, Vite)',
            'skill-lang-4': 'SQL and Cypher',
            'skill-lang-5': 'C++ / Unreal Engine integration',
            'skill-content-1': 'Sony A7 III photography',
            'skill-content-2': 'Insta360 ONE RS 1-Inch virtual tours',
            'skill-content-3': '360° panoramas and property walkthroughs',
            'skill-content-4': 'DaVinci Resolve, Lightroom and Photoshop',
            'skill-content-5': 'Automated PropTech visualization workflows',
            'skill-eng-1': 'Civil Engineering degree (ZAB: German master level)',
            'skill-eng-2': 'AutoCAD, Revit and BIM workflows',
            'skill-eng-3': 'Blender and 3D visualization basics',
            'skill-eng-4': 'Technical documentation and domain modelling',
            'skill-eng-5': 'Industrial and civil engineering background',
            'contact-subtitle': 'Based in Essen and open to full-time roles and selected projects across the DACH region.',
            'footer-rights': '© 2026 Yevhenii Korchevskyi. All rights reserved.',
            'footer-role': 'Knowledge & AI Systems Engineer | Essen, Germany'
        },
        de: {
            'hero-tagline': 'Knowledge & AI Systems Engineer',
            'hero-subtitle': 'Ich entwickle Wissensgraphen, GraphRAG- und Retrieval-Pipelines, die komplexe Fachdomänen in verlässlichen Kontext für KI-Agenten übersetzen — ergänzt durch produktionsnahe Backends und Automatisierung vom Prototyp bis zum Deployment.',
            'stat-projects': 'Produkt- und Engineering-Projekte',
            'stat-tech': 'Aktiv eingesetzte Technologien',
            'stat-german': 'Deutschkenntnisse',
            'stat-degree': 'ZAB',
            'stat-degree-label': 'Abschluss auf Master-Niveau',
            'services-badge': 'Kompetenzen',
            'services-title': 'Was ich entwickle',
            'services-subtitle': 'Wissenssysteme, Produkt-Backends und digitale Visualisierungs-Workflows für komplexe reale Domänen.',
            'service-1-title': 'Wissens- & KI-Systeme',
            'service-1-desc': 'Verlässliche Kontextschichten für LLMs und Agenten, verankert in Domänenmodellen und nachvollziehbaren Quellen.',
            'service-1-li-1': 'Wissensgraphen mit Neo4j und Cypher',
            'service-1-li-2': 'GraphRAG, Qdrant, ChromaDB und BM25',
            'service-1-li-3': 'Semantische Indexierung, Chunking und Re-Ranking',
            'service-1-li-4': 'MCP-Tools und persistenter Agentenkontext',
            'service-2-title': 'PropTech & Immobilienvisualisierung',
            'service-2-desc': 'Fotografie, immersive Objektpräsentation und Automatisierungskonzepte für schnelleres Immobilienmarketing.',
            'service-2-li-1': 'Innen- und Außenfotografie mit Sony A7 III',
            'service-2-li-2': 'Virtuelle Touren mit Insta360 ONE RS 1-Inch',
            'service-2-li-3': '360°-Panoramen und Walkthrough-Assets',
            'service-2-li-4': 'Automatisierte Visualisierungs- und Publishing-Pipelines',
            'service-3-title': 'Product Engineering & Automatisierung',
            'service-3-desc': 'Durchgängige Umsetzung von Produkt-Backends, Echtzeitsystemen und reproduzierbaren Delivery-Pipelines.',
            'service-3-li-1': 'Python/FastAPI- und Rust/Axum-Services',
            'service-3-li-2': 'PostgreSQL, SQLAlchemy, sqlx und Redis',
            'service-3-li-3': 'WebSocket-, LiveKit- und REST-Integrationen',
            'service-3-li-4': 'Docker, GitHub Actions, Railway und Vercel',
            'projects-title': 'Ausgewählte Systeme und Produkte',
            'projects-subtitle': 'Implementierte Systeme und aktive Produkte — mit klarer Trennung zwischen funktionierenden Features und Roadmap.',
            'dreamverse-desc': 'Wissens- und Agentenplattform, die semantisches Retrieval mit einer Unreal-Engine-Produktionsumgebung verbindet',
            'dreamverse-p1': '<strong>GraphRAG-Service:</strong> verbindet Qdrant-Vektorsuche mit Neo4j-Subgraph-Expansion und liefert strukturierten, quellenbezogenen Kontext für LLMs und KI-Agenten.',
            'dreamverse-p2': '<strong>Wissenspipeline:</strong> indexiert Markdown/Obsidian- und PostgreSQL-Inhalte über normalisierte Text- und Bild-Embeddings, Batch-Upserts, Caching und kontrollierte Reindexierung.',
            'dreamverse-p3': '<strong>Agentenintegration:</strong> stellt Wissenskontext und aufrufbare Funktionen über eine MCP-Bridge zu Unreal Engine bereit, abgesichert durch Tests, Docker und GitHub Actions.',
            'deutschecore-desc': 'Regelbasiert fundierte KI-Plattform zur Vorbereitung auf deutsche Sprach- und Berufsprüfungen',
            'deutschecore-text': '<strong>Architecture-first MVP:</strong> modelliert Grammatikregeln, Aufgabenformate und Fachwortschatz in Neo4j, ruft semantisch passende Beispiele aus Qdrant ab und persistiert Inhalte sowie Lerndaten in PostgreSQL. Das DTB-B2-Schreiben-Modul bietet FastAPI-Endpunkte für Aufgabengenerierung und regelbasiertes Feedback.',
            'deutschecore-stats': 'Aktive Entwicklung &nbsp;&bull;&nbsp; DTB B2 Schreiben &nbsp;&bull;&nbsp; LiD- und DTZ-Module',
            'mafia-desc': 'Video-first-Wettkampfplattform für Mafia mit reconnect-sicherem, autoritativem Spielkern',
            'mafia-text': '<strong>Spielbarer Core-Loop:</strong> Lobby, Rollenverteilung, Nacht-/Tagphasen, Abstimmungen, Tie-Breaks, Fouls und Endgame. Explizite Host-Autorität, private Räume, Zuschauer und Reconnect mit Sitzplatz-Erhalt sind in Backend und Frontend implementiert und getestet.',
            'mafia-stats': 'Steam-Alpha-Pfad &nbsp;&bull;&nbsp; Echtzeitmedien &nbsp;&bull;&nbsp; Aktive Entwicklung',
            'btn-private': 'Privates Repository',
            'btn-lid': 'LiD-Demo',
            'btn-dtz': 'DTZ-Demo',
            'skills-title': 'Engineering-Toolbox',
            'skills-subtitle': 'Technologien aus den oben gezeigten Systemen — vom semantischen Retrieval bis zur Echtzeit-Produktauslieferung.',
            'skill-backend-1': 'Python / FastAPI / AsyncIO',
            'skill-backend-2': 'Rust / Axum / Tokio',
            'skill-backend-3': 'PostgreSQL / SQLAlchemy / sqlx',
            'skill-backend-4': 'Docker / Railway / Vercel',
            'skill-backend-5': 'GitHub Actions / CI/CD / automatisierte Tests',
            'skill-ai-1': 'Wissensgraphen: Neo4j, Cypher und Domänenmodellierung',
            'skill-ai-2': 'GraphRAG, Qdrant, ChromaDB, BM25 und Re-Ranking',
            'skill-ai-3': 'Embeddings, semantisches Chunking und Indexierungspipelines',
            'skill-ai-4': 'MCP-Tools und persistenter Kontext für KI-Agenten',
            'skill-ai-5': 'OpenAI-, Anthropic- und Google-Modellintegrationen',
            'skill-app-1': 'React / TypeScript / Vite',
            'skill-app-2': 'Echtzeitvideo mit LiveKit und WebSocket',
            'skill-app-3': 'Unreal Engine 5 mit Python und MCP',
            'skill-app-4': 'REST-APIs und asynchrone Backend-Services',
            'skill-app-5': 'Produktarchitektur vom MVP bis zum Deployment',
            'skill-lang-1': 'Python (FastAPI, ETL, AsyncIO)',
            'skill-lang-2': 'Rust (Axum, Tokio, sqlx)',
            'skill-lang-3': 'TypeScript / JavaScript (React, Vite)',
            'skill-lang-4': 'SQL und Cypher',
            'skill-lang-5': 'C++ / Unreal-Engine-Integration',
            'skill-content-1': 'Fotografie mit Sony A7 III',
            'skill-content-2': 'Virtuelle Touren mit Insta360 ONE RS 1-Inch',
            'skill-content-3': '360°-Panoramen und Objekt-Walkthroughs',
            'skill-content-4': 'DaVinci Resolve, Lightroom und Photoshop',
            'skill-content-5': 'Automatisierte PropTech-Visualisierungsworkflows',
            'skill-eng-1': 'Bauingenieurabschluss (ZAB: deutsches Master-Niveau)',
            'skill-eng-2': 'AutoCAD, Revit und BIM-Workflows',
            'skill-eng-3': 'Blender und Grundlagen der 3D-Visualisierung',
            'skill-eng-4': 'Technische Dokumentation und Domänenmodellierung',
            'skill-eng-5': 'Industrie- und Bauingenieurhintergrund',
            'contact-subtitle': 'Standort Essen; offen für Festanstellungen und ausgewählte Projekte im DACH-Raum.',
            'footer-rights': '© 2026 Yevhenii Korchevskyi. Alle Rechte vorbehalten.',
            'footer-role': 'Knowledge & AI Systems Engineer | Essen, Deutschland'
        },
        ru: {
            'hero-tagline': 'Инженер систем знаний и AI',
            'hero-subtitle': 'Разрабатываю графы знаний, GraphRAG и retrieval-пайплайны, превращающие сложные предметные области в надёжный контекст для AI-агентов, а также продуктовые бэкенды и автоматизацию от прототипа до деплоя.',
            'stat-projects': 'Продуктовые и инженерные проекты',
            'stat-tech': 'Технологии в активной работе',
            'stat-german': 'Немецкий язык',
            'stat-degree': 'ZAB',
            'stat-degree-label': 'Диплом уровня Master',
            'services-badge': 'Компетенции',
            'services-title': 'Что я разрабатываю',
            'services-subtitle': 'Системы знаний, продуктовые бэкенды и цифровые пайплайны визуализации для сложных реальных областей.',
            'service-1-title': 'Системы знаний и AI',
            'service-1-desc': 'Надёжные контекстные слои для LLM и агентов, основанные на доменных моделях и проверяемых источниках.',
            'service-1-li-1': 'Графы знаний на Neo4j и Cypher',
            'service-1-li-2': 'GraphRAG, Qdrant, ChromaDB и BM25',
            'service-1-li-3': 'Семантическая индексация, чанкинг и re-ranking',
            'service-1-li-4': 'MCP-инструменты и постоянный контекст агентов',
            'service-2-title': 'PropTech и визуализация недвижимости',
            'service-2-desc': 'Фотография, иммерсивная презентация объектов и автоматизация маркетинга недвижимости.',
            'service-2-li-1': 'Интерьерная и экстерьерная съёмка на Sony A7 III',
            'service-2-li-2': 'Виртуальные туры на Insta360 ONE RS 1-Inch',
            'service-2-li-3': '360°-панорамы и материалы для walkthrough',
            'service-2-li-4': 'Автоматизированные пайплайны визуализации и публикации',
            'service-3-title': 'Продуктовая разработка и автоматизация',
            'service-3-desc': 'Реализация продуктовых бэкендов, realtime-систем и воспроизводимых delivery-пайплайнов.',
            'service-3-li-1': 'Сервисы Python/FastAPI и Rust/Axum',
            'service-3-li-2': 'PostgreSQL, SQLAlchemy, sqlx и Redis',
            'service-3-li-3': 'Интеграции WebSocket, LiveKit и REST',
            'service-3-li-4': 'Docker, GitHub Actions, Railway и Vercel',
            'projects-title': 'Избранные системы и продукты',
            'projects-subtitle': 'Реализованные системы и активные продукты с честным разделением рабочих функций и дорожной карты.',
            'dreamverse-desc': 'Платформа знаний и агентов, связывающая семантический поиск с производственной средой Unreal Engine',
            'dreamverse-p1': '<strong>GraphRAG-сервис:</strong> объединяет векторный поиск Qdrant с расширением подграфов Neo4j и выдаёт структурированный контекст со ссылками на источники для LLM и AI-агентов.',
            'dreamverse-p2': '<strong>Пайплайн знаний:</strong> индексирует Markdown/Obsidian и PostgreSQL через нормализованные текстовые и визуальные embeddings, batch-upsert, кэширование и управляемую переиндексацию.',
            'dreamverse-p3': '<strong>Интеграция агентов:</strong> предоставляет контекст и вызываемые функции через MCP-мост к Unreal Engine; поддерживается тестами, Docker и GitHub Actions.',
            'deutschecore-desc': 'AI-платформа с опорой на правила для подготовки к немецким языковым и профессиональным экзаменам',
            'deutschecore-text': '<strong>Architecture-first MVP:</strong> моделирует грамматику, форматы заданий и предметную лексику в Neo4j, извлекает подходящие примеры из Qdrant и хранит контент и прогресс в PostgreSQL. Модуль DTB B2 Schreiben предоставляет FastAPI-эндпоинты для генерации заданий и проверки по правилам.',
            'deutschecore-stats': 'Активная разработка &nbsp;&bull;&nbsp; DTB B2 Schreiben &nbsp;&bull;&nbsp; Модули LiD и DTZ',
            'mafia-desc': 'Video-first платформа спортивной мафии с устойчивым к переподключениям авторитетным игровым ядром',
            'mafia-text': '<strong>Играбельный core-loop:</strong> лобби, выдача ролей, ночь/день, голосование, tie-break, фолы и завершение игры. Реализованы права ведущего, приватные комнаты, зрители и возврат на прежнее место после reconnect.',
            'mafia-stats': 'Путь к Steam Alpha &nbsp;&bull;&nbsp; Realtime-медиа &nbsp;&bull;&nbsp; Активная разработка',
            'btn-private': 'Приватный репозиторий',
            'btn-lid': 'Демо LiD',
            'btn-dtz': 'Демо DTZ',
            'skills-title': 'Инженерный инструментарий',
            'skills-subtitle': 'Технологии из показанных систем: от семантического поиска до realtime-продуктов.',
            'contact-subtitle': 'Живу в Эссене и открыт к постоянной работе и отдельным проектам в регионе DACH.',
            'footer-rights': '© 2026 Yevhenii Korchevskyi. Все права защищены.',
            'footer-role': 'Инженер систем знаний и AI | Эссен, Германия'
        },
        ua: {
            'hero-tagline': 'Інженер систем знань та AI',
            'hero-subtitle': 'Розробляю графи знань, GraphRAG і retrieval-пайплайни, що перетворюють складні предметні області на надійний контекст для AI-агентів, а також продуктові бекенди й автоматизацію від прототипу до деплою.',
            'stat-projects': 'Продуктові та інженерні проєкти',
            'stat-tech': 'Технології в активній роботі',
            'stat-german': 'Німецька мова',
            'stat-degree': 'ZAB',
            'stat-degree-label': 'Диплом рівня Master',
            'services-badge': 'Компетенції',
            'services-title': 'Що я розробляю',
            'services-subtitle': 'Системи знань, продуктові бекенди та цифрові пайплайни візуалізації для складних реальних доменів.',
            'service-1-title': 'Системи знань та AI',
            'service-1-desc': 'Надійні контекстні шари для LLM та агентів, засновані на доменних моделях і перевірених джерелах.',
            'service-1-li-1': 'Графи знань на Neo4j та Cypher',
            'service-1-li-2': 'GraphRAG, Qdrant, ChromaDB та BM25',
            'service-1-li-3': 'Семантична індексація, чанкінг і re-ranking',
            'service-1-li-4': 'MCP-інструменти та постійний контекст агентів',
            'service-2-title': 'PropTech і візуалізація нерухомості',
            'service-2-desc': 'Фотографія, імерсивна презентація об’єктів та автоматизація маркетингу нерухомості.',
            'service-2-li-1': 'Інтер’єрна та екстер’єрна зйомка на Sony A7 III',
            'service-2-li-2': 'Віртуальні тури на Insta360 ONE RS 1-Inch',
            'service-2-li-3': '360°-панорами й матеріали для walkthrough',
            'service-2-li-4': 'Автоматизовані пайплайни візуалізації та публікації',
            'service-3-title': 'Продуктова розробка й автоматизація',
            'service-3-desc': 'Реалізація продуктових бекендів, realtime-систем і відтворюваних delivery-пайплайнів.',
            'service-3-li-1': 'Сервіси Python/FastAPI та Rust/Axum',
            'service-3-li-2': 'PostgreSQL, SQLAlchemy, sqlx та Redis',
            'service-3-li-3': 'Інтеграції WebSocket, LiveKit та REST',
            'service-3-li-4': 'Docker, GitHub Actions, Railway та Vercel',
            'projects-title': 'Вибрані системи та продукти',
            'projects-subtitle': 'Реалізовані системи й активні продукти з чесним поділом робочих функцій та дорожньої карти.',
            'dreamverse-desc': 'Платформа знань і агентів, що поєднує семантичний пошук із виробничим середовищем Unreal Engine',
            'dreamverse-p1': '<strong>GraphRAG-сервіс:</strong> об’єднує векторний пошук Qdrant із розширенням підграфів Neo4j і надає структурований контекст із посиланнями на джерела для LLM та AI-агентів.',
            'dreamverse-p2': '<strong>Пайплайн знань:</strong> індексує Markdown/Obsidian і PostgreSQL через нормалізовані текстові та візуальні embeddings, batch-upsert, кешування та керовану переіндексацію.',
            'dreamverse-p3': '<strong>Інтеграція агентів:</strong> надає контекст і викликані функції через MCP-міст до Unreal Engine; підтримується тестами, Docker і GitHub Actions.',
            'deutschecore-desc': 'AI-платформа з опорою на правила для підготовки до німецьких мовних і професійних іспитів',
            'deutschecore-text': '<strong>Architecture-first MVP:</strong> моделює граматику, формати завдань і предметну лексику в Neo4j, дістає релевантні приклади з Qdrant і зберігає контент та прогрес у PostgreSQL. Модуль DTB B2 Schreiben має FastAPI-ендпоїнти для генерації завдань і перевірки за правилами.',
            'deutschecore-stats': 'Активна розробка &nbsp;&bull;&nbsp; DTB B2 Schreiben &nbsp;&bull;&nbsp; Модулі LiD та DTZ',
            'mafia-desc': 'Video-first платформа спортивної мафії зі стійким до перепідключень авторитетним ігровим ядром',
            'mafia-text': '<strong>Ігровий core-loop:</strong> лобі, розподіл ролей, ніч/день, голосування, tie-break, фоли та завершення гри. Реалізовані права ведучого, приватні кімнати, глядачі й повернення на попереднє місце після reconnect.',
            'mafia-stats': 'Шлях до Steam Alpha &nbsp;&bull;&nbsp; Realtime-медіа &nbsp;&bull;&nbsp; Активна розробка',
            'btn-private': 'Приватний репозиторій',
            'btn-lid': 'Демо LiD',
            'btn-dtz': 'Демо DTZ',
            'skills-title': 'Інженерний інструментарій',
            'skills-subtitle': 'Технології з показаних систем: від семантичного пошуку до realtime-продуктів.',
            'contact-subtitle': 'Живу в Ессені та відкритий до постійної роботи й окремих проєктів у регіоні DACH.',
            'footer-rights': '© 2026 Yevhenii Korchevskyi. Усі права захищені.',
            'footer-role': 'Інженер систем знань та AI | Ессен, Німеччина'
        }
    };

    Object.assign(portfolioUpdates.ru, {
        'skill-backend-1': 'Python / FastAPI / AsyncIO',
        'skill-backend-2': 'Rust / Axum / Tokio',
        'skill-backend-3': 'PostgreSQL / SQLAlchemy / sqlx',
        'skill-backend-4': 'Docker / Railway / Vercel',
        'skill-backend-5': 'GitHub Actions / CI/CD / автоматизированные тесты',
        'skill-ai-1': 'Графы знаний: Neo4j, Cypher и доменное моделирование',
        'skill-ai-2': 'GraphRAG, Qdrant, ChromaDB, BM25 и re-ranking',
        'skill-ai-3': 'Embeddings, семантический чанкинг и пайплайны индексации',
        'skill-ai-4': 'MCP-инструменты и постоянный контекст для AI-агентов',
        'skill-ai-5': 'Интеграции моделей OpenAI, Anthropic и Google',
        'skill-app-1': 'React / TypeScript / Vite',
        'skill-app-2': 'Realtime-видео с LiveKit и WebSocket',
        'skill-app-3': 'Unreal Engine 5 с Python и MCP',
        'skill-app-4': 'REST API и асинхронные backend-сервисы',
        'skill-app-5': 'Продуктовая архитектура от MVP до деплоя',
        'skill-lang-1': 'Python (FastAPI, ETL, AsyncIO)',
        'skill-lang-2': 'Rust (Axum, Tokio, sqlx)',
        'skill-lang-3': 'TypeScript / JavaScript (React, Vite)',
        'skill-lang-4': 'SQL и Cypher',
        'skill-lang-5': 'C++ / интеграция с Unreal Engine',
        'skill-content-1': 'Фотография на Sony A7 III',
        'skill-content-2': 'Виртуальные туры на Insta360 ONE RS 1-Inch',
        'skill-content-3': '360°-панорамы и walkthrough объектов',
        'skill-content-4': 'DaVinci Resolve, Lightroom и Photoshop',
        'skill-content-5': 'Автоматизированные PropTech-пайплайны визуализации',
        'skill-eng-1': 'Диплом инженера-строителя (ZAB: немецкий уровень Master)',
        'skill-eng-2': 'AutoCAD, Revit и BIM-процессы',
        'skill-eng-3': 'Blender и основы 3D-визуализации',
        'skill-eng-4': 'Техническая документация и доменное моделирование',
        'skill-eng-5': 'Опыт в промышленном и гражданском строительстве'
    });

    Object.assign(portfolioUpdates.ua, {
        'skill-backend-1': 'Python / FastAPI / AsyncIO',
        'skill-backend-2': 'Rust / Axum / Tokio',
        'skill-backend-3': 'PostgreSQL / SQLAlchemy / sqlx',
        'skill-backend-4': 'Docker / Railway / Vercel',
        'skill-backend-5': 'GitHub Actions / CI/CD / автоматизовані тести',
        'skill-ai-1': 'Графи знань: Neo4j, Cypher і доменне моделювання',
        'skill-ai-2': 'GraphRAG, Qdrant, ChromaDB, BM25 і re-ranking',
        'skill-ai-3': 'Embeddings, семантичний чанкінг і пайплайни індексації',
        'skill-ai-4': 'MCP-інструменти та постійний контекст для AI-агентів',
        'skill-ai-5': 'Інтеграції моделей OpenAI, Anthropic і Google',
        'skill-app-1': 'React / TypeScript / Vite',
        'skill-app-2': 'Realtime-відео з LiveKit і WebSocket',
        'skill-app-3': 'Unreal Engine 5 з Python і MCP',
        'skill-app-4': 'REST API та асинхронні backend-сервіси',
        'skill-app-5': 'Продуктова архітектура від MVP до деплою',
        'skill-lang-1': 'Python (FastAPI, ETL, AsyncIO)',
        'skill-lang-2': 'Rust (Axum, Tokio, sqlx)',
        'skill-lang-3': 'TypeScript / JavaScript (React, Vite)',
        'skill-lang-4': 'SQL і Cypher',
        'skill-lang-5': 'C++ / інтеграція з Unreal Engine',
        'skill-content-1': 'Фотографія на Sony A7 III',
        'skill-content-2': 'Віртуальні тури на Insta360 ONE RS 1-Inch',
        'skill-content-3': '360°-панорами та walkthrough об’єктів',
        'skill-content-4': 'DaVinci Resolve, Lightroom і Photoshop',
        'skill-content-5': 'Автоматизовані PropTech-пайплайни візуалізації',
        'skill-eng-1': 'Диплом інженера-будівельника (ZAB: німецький рівень Master)',
        'skill-eng-2': 'AutoCAD, Revit і BIM-процеси',
        'skill-eng-3': 'Blender та основи 3D-візуалізації',
        'skill-eng-4': 'Технічна документація та доменне моделювання',
        'skill-eng-5': 'Досвід у промисловому та цивільному будівництві'
    });

    Object.keys(portfolioUpdates).forEach((lang) => {
        Object.assign(translations[lang], portfolioUpdates[lang]);
    });

    let currentLang = localStorage.getItem('language') || (navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en');

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
        
        // Update DOM elements
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update dropdown value
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.value = lang;
        }
    }

    // Initialize language
    setLanguage(currentLang);
    // Set dropdown value
    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.value = currentLang;

    // Make setLanguage global for dropdown
    window.setLanguage = setLanguage;

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.service-card, .project-card, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // ==================== SPOTLIGHT EFFECT ====================
    // Track mouse position for spotlight glow
    document.querySelectorAll('.project-card, .service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

}); // End DOMContentLoaded
