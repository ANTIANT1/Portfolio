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
            'footer-rights': '© 2026 Yevhenii Korchevskyi. All rights reserved.',
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
            'skill-eng-1': 'M.Sc. Civil Engineering (Odessa)',
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
            'footer-rights': '© 2026 Yevhenii Korchevskyi. Alle Rechte vorbehalten.',
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
            'skill-eng-1': 'M.Sc. Bauingenieurwesen (Odessa)',
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
            'footer-rights': '© 2026 Евгений Корчевский. Все права защищены.',
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
            'skill-eng-1': 'М.Sc. Гражданское строительство (Одесса)',
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
            'footer-rights': '© 2026 Євгеній Корчевський. Усі права захищені.',
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

    let currentLang = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
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
