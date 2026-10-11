// ─────────────────────────────────────────────────────────────
//  i18n.js  –  Language switcher (EN / DE)
// ─────────────────────────────────────────────────────────────
(function () {
    'use strict';

    // Stored choice wins; otherwise fall back to the browser language
    // (German is the source language, so de-* visitors should land in German).
    function detectLang() {
        var stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'de') return stored;
        var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
        return nav.toLowerCase().indexOf('de') === 0 ? 'de' : 'en';
    }

    window.currentLang = detectLang();

    // ── ALL TRANSLATIONS ─────────────────────────────────────────
    window.i18n = {

        // ── static DOM strings ───────────────────────────────────
        static: {
            en: {
                page_title:           'Tayfun Akincir | XR Software Developer',
                header_subtitle:      'XR Software Developer<br />Unity, Unreal Engine, C#, C++, Python',
                nav_work:             'Work',
                nav_demo:             'Demo',
                nav_about:            'About',
                lang_toggle: '<img src="https://flagcdn.com/24x18/gb.png" alt="EN" width="24" height="18"><span id="lang-toggle-text">Sprache wechseln?</span>',
                work_heading:         'Overview of my work',
                filter_label:         'Filter by type',
                filter_all:           'All',
                about_heading:        'About me',
                terminal_title:       'Command Prompt',
                terminal_welcome:     "Welcome to my interactive portfolio terminal!<br>Type 'help' to see available commands, click the buttons below or try out some commands yourself! Maybe you'll find some interesting info!<br>",
                terminal_placeholder: 'Type a command...',

                // project card summaries
                sum_project13:  'Multiplayer VR product configurator for Goldbeck',
                sum_project12:  'Published VR sports title available on Meta Quest &amp; Pico',
                sum_project1:   'Network replication prototype with C++ implementation',
                sum_project2:   'Collaborative VR furnishing application',
                sum_project3:   'Body tracking showroom with multiplayer support',
                sum_project4:   'Dynamic mesh creation for house design editor',
                sum_project5:   'Emergency triage simulation (Bachelor thesis)',
                sum_project6:   'Interactive paleontology serious game',
                sum_project7:   'Overview of 200+ VR/AR/MR design patterns',
                sum_project8:   'Interactive workplace presentation for Rossmann',
                sum_project9:   'Interactive workplace presentation for KIND',
                sum_project10:  'Humorous VR cooking simulation for students',
                sum_project11:  'Classic "Gauntlet"-inspired university project',

                // project card titles
                title_project13: 'GBCity Experience',
                title_project12: 'Goal King',
                title_project1:  'Arcane Arsenal',
                title_project2:  'VR House Designer',
                title_project3:  'Antilatency Showroom',
                title_project4:  'Procedural Mesh Generation',
                title_project5:  'VR-Triage Prototype',
                title_project6:  'VRex: Virtual Paleontology',
                title_project7:  'UI Design Patterns Paper',
                title_project8:  'Rossmann VR',
                title_project9:  'KIND VR',
                title_project10: 'University Recipes',
                title_project11: 'Blade Gunner',

                // project card tag chips
                tag_multiplayer:  'Multiplayer',
                tag_unity:        'Unity',
                tag_commercial:   'Commercial',
                tag_blueprints:   'Blueprints',
                tag_vr:           'VR',
                tag_collaboration:'Collaboration',
                tag_bodytracking: 'Body Tracking',
                tag_procedural:   'Procedural',
                tag_meshapi:      'Mesh API',
                tag_medical:      'Medical',
                tag_thesis:       'Thesis',
                tag_educational:  'Educational',
                tag_seriousgame:  'Serious Game',
                tag_research:     'Research',
                tag_academic:     'Academic',
                tag_training:     'Training',
                tag_game:         'Game',
                tag_simulation:   'Simulation',
                tag_cpp:          'C++',

                // footer
                footer_design:    'Design: Based on',
                footer_bg:        'BG:',
                footer_impressum: 'Legal Notice',
                footer_privacy:   'Privacy Policy',

                // contact article
                contact_heading: 'Contact',
                contact_name:    'Name',
                contact_email:   'Email',
                contact_message: 'Message',
                contact_send:    'Send Message',
                contact_reset:   'Reset',

                // modal link labels
                link_video:    'Project video:',
                link_click:    'Click me!',
                link_thesis:   'Link to my bachelor thesis:',
                link_paper:    'Link to the paper:',
                link_download: 'Download / Play:',

                // terminal misc
                terminal_cmd_prefix: 'Command',
                cmd_not_found:    "Command not found: {cmd}<br>Type 'help' for available commands.",
                secret_prefix:    'Secret button discovered!',
                secret_msg:       'Ah you found the secret button! Here are the hidden commands you can use: hire, coffee, quote, bossfight.',

                // === TERMINAL COMMANDS (en) ===
                cmd_help:       `Available commands:\n  whoami     - Learn about me\n  skills     - View my technical skills\n  contact    - Get my contact information\n  experience - View my work experience\n  education  - See my educational background\n  clear      - Clear the terminal\n  exit       - Close terminal\n  Who knows what else you can do!`,
                cmd_whoami:     `<img src="images/about1.jpg" style="max-width:700px;width:100%;border-radius:8px;display:block;margin:20px auto;object-fit:cover;">\n\nTayfun Akincir - XR Software Developer\n\nHi, I'm Tayfun - a software developer based in Germany with 5 years of experience in innovative projects. I specialise in C# programming, particularly in Unity, Virtual Reality and networked multiplayer development.\n\nI'm passionate about creating immersive experiences and solving complex technical challenges in VR/AR and mobile applications.`,
                cmd_skills:     `Technical Skills:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n<b>Languages:</b>     C#, C++, Python, JavaScript, Dart \n\n<b>Engines:</b>       Unity3D, Unreal Engine \n\n<b>VR/AR:</b>         SteamVR, XR Toolkit, HurricaneVR \n\n<b>Mobile:</b>        Flutter (actively learning) \n\n<b>Networking:</b>    Photon Fusion, Netcode for GameObjects \n\n<b>Tools:</b>         Git, Visual Studio, Blender, Rider \n\n<b>Frameworks:</b>    VRIK, ProBuilder, Antilatency \n\n<b>Platforms:</b>     Windows, VR Headsets (Meta, Vive, Pico)`,
                cmd_contact:    `Contact Information:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📧 Email:    <a href="mailto:tayfunakincir@gmail.com" class="icon classic fa-envelope"></a>\n💼 LinkedIn: <a href="https://www.linkedin.com/in/tayfun-akincir/" class="icon brands fa-linkedin"></a>\n📍 Location: Ludwigshafen, Germany\n\nFeel free to reach out for collaboration opportunities or job offers!`,
                cmd_experience: `Work Experience:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFansea GmbH (2025 - Present)\n→ XR Software Developer\n→ VR application development, multiplayer integration\n\nLitexa GmbH (2023-2024)\n→ XR Software Developer\n→ VR application development, multiplayer integration\n\nUniversitätsklinikum Heidelberg (2022)\n→ VR Developer (Bachelor Thesis)\n→ Medical simulation development\n\nEinfach Genial aGmbH (2021)\n→ VR Developer\n→ Commercial VR training applications`,
                cmd_education:  `Education:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎓 Bachelor of Science in Computer Science\n   SRH Hochschule Heidelberg (2019-2022)\n\n   Focus: Virtual Reality, Game Development\n   Thesis: "VR-Triage Prototype for Emergency Medical Care"`,
                cmd_hire:       'Permission granted 🚀 - you can now hire me!',
                cmd_coffee:     '☕ Brewing… done.',
                cmd_bossfight:  `Tackling university as a career changer during Covid and endless online lectures was my personal bossfight. It wasn't easy, but it taught me how to throw myself into new problems and adapt quickly, learning to work efficiently in completely new environments.`,
                cmd_exit:       `Nice try! 😄\nThis is a web terminal - there's no escape!\nTry 'clear' instead to clean up the screen.`,
            },
            de: {
                page_title:           'Tayfun Akincir | XR Software Entwickler',
                header_subtitle:      'XR Software Entwickler<br />Unity, Unreal Engine, C#, C++, Python',
                nav_work:             'Projekte',
                nav_demo:             'Demo',
                nav_about:            'Über mich',
                lang_toggle: '<img src="https://flagcdn.com/24x18/de.png" alt="DE" width="24" height="18"><span id="lang-toggle-text">Switch language?</span>',
                work_heading:         'Meine Projekte',
                filter_label:         'Filtern nach Typ',
                filter_all:           'Alle',
                about_heading:        'Über mich',
                terminal_title:       'Eingabeaufforderung',
                terminal_welcome:     "Willkommen in meinem interaktiven Portfolio-Terminal!<br>Tippe 'help' für verfügbare Befehle, klicke auf die Buttons unten oder probiere Befehle selbst aus! Vielleicht findest du interessante Infos!<br>",
                terminal_placeholder: 'Befehl eingeben...',

                // project card summaries
                sum_project13:  'VR-Produktkonfigurator mit Multiplayer für Goldbeck',
                sum_project12:  'VR-Sportspiel, erschienen für Meta Quest &amp; Pico',
                sum_project1:   'Prototyp für Netzwerk-Replikation in C++',
                sum_project2:   'VR-Anwendung zum gemeinsamen Einrichten von Räumen',
                sum_project3:   'Showroom mit Body-Tracking und Multiplayer',
                sum_project4:   'Dynamische Mesh-Generierung für einen VR-Hausplaner',
                sum_project5:   'VR-Simulation für die Notfall-Triage (Bachelorarbeit)',
                sum_project6:   'Interaktives Serious Game rund um Paläontologie',
                sum_project7:   'Katalog mit über 200 Designmustern für VR, AR und MR',
                sum_project8:   'Interaktiver Einblick in den Arbeitsalltag bei Rossmann',
                sum_project9:   'Interaktiver Einblick in den Arbeitsalltag bei KIND',
                sum_project10:  'Humorvolle VR-Kochsimulation für Studenten',
                sum_project11:  'Uni-Projekt im Stil des Arcade-Klassikers „Gauntlet“',

                // project card titles
                title_project13: 'GBCity Experience',
                title_project12: 'Goal King',
                title_project1:  'Arcane Arsenal',
                title_project2:  'VR House Designer',
                title_project3:  'Antilatency Showroom',
                title_project4:  'Prozedurale Mesh-Generierung',
                title_project5:  'VR-Triage-Prototyp',
                title_project6:  'VRex: Virtuelle Paläontologie',
                title_project7:  'Paper zu UI-Designmustern',
                title_project8:  'Rossmann VR',
                title_project9:  'KIND VR',
                title_project10: 'University Recipes',
                title_project11: 'Blade Gunner',

                // project card tag chips
                tag_multiplayer:  'Multiplayer',
                tag_unity:        'Unity',
                tag_commercial:   'Kommerziell',
                tag_blueprints:   'Blueprints',
                tag_vr:           'VR',
                tag_collaboration:'Kollaboration',
                tag_bodytracking: 'Body-Tracking',
                tag_procedural:   'Prozedural',
                tag_meshapi:      'Mesh-API',
                tag_medical:      'Medizin',
                tag_thesis:       'Bachelorarbeit',
                tag_educational:  'Bildung',
                tag_seriousgame:  'Serious Game',
                tag_research:     'Forschung',
                tag_academic:     'Wissenschaft',
                tag_training:     'Training',
                tag_game:         'Spiel',
                tag_simulation:   'Simulation',
                tag_cpp:          'C++',

                // footer
                footer_design:    'Design: Basierend auf',
                footer_bg:        'Hintergrund:',
                footer_impressum: 'Impressum',
                footer_privacy:   'Datenschutzerklärung',

                // contact article
                contact_heading: 'Kontakt',
                contact_name:    'Name',
                contact_email:   'E-Mail',
                contact_message: 'Nachricht',
                contact_send:    'Nachricht senden',
                contact_reset:   'Zurücksetzen',

                // modal link labels
                link_video:    'Projektvideo:',
                link_click:    'Hier klicken!',
                link_thesis:   'Link zur Bachelorarbeit:',
                link_paper:    'Link zum Paper:',
                link_download: 'Download / Spielen:',

                // terminal misc
                terminal_cmd_prefix: 'Befehl',
                cmd_not_found:    "Befehl nicht gefunden: {cmd}<br>Tippe 'help' für verfügbare Befehle.",
                secret_prefix:    'Geheimknopf entdeckt!',
                secret_msg:       'Ah, du hast den Geheimknopf gefunden! Hier sind die versteckten Befehle, die du nutzen kannst: hire, coffee, quote, bossfight.',

                // === TERMINAL COMMANDS (de) ===
                cmd_help:       `Verfügbare Befehle:\n  whoami     - Mehr über mich\n  skills     - Technische Fähigkeiten\n  contact    - Kontaktinformationen\n  experience - Berufserfahrung\n  education  - Ausbildung\n  clear      - Terminal leeren\n  exit       - Terminal schließen\n  Wer weiß, was man sonst noch alles tun kann!`,
                cmd_whoami:     `<img src="images/about1.jpg" style="max-width:700px;width:100%;border-radius:8px;display:block;margin:20px auto;object-fit:cover;">\n\nTayfun Akincir - XR Software Entwickler\n\nHi, ich bin Tayfun - ein Softwareentwickler aus Deutschland mit 5 Jahren Erfahrung in innovativen Projekten. Ich bin spezialisiert auf C#-Programmierung, insbesondere in Unity, Virtual Reality und vernetzter Multiplayer-Entwicklung.\n\nMit Leidenschaft schaffe ich immersive Erlebnisse und löse komplexe technische Herausforderungen in VR/AR und mobilen Anwendungen.`,
                cmd_skills:     `Technische Skills:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n<b>Sprachen:</b>      C#, C++, Python, JavaScript, Dart \n\n<b>Engines:</b>       Unity3D, Unreal Engine \n\n<b>VR/AR:</b>         SteamVR, XR Toolkit, HurricaneVR \n\n<b>Mobile:</b>        Flutter (lerne ich gerade) \n\n<b>Netzwerk:</b>      Photon Fusion, Netcode for GameObjects \n\n<b>Tools:</b>         Git, Visual Studio, Blender, Rider \n\n<b>Frameworks:</b>    VRIK, ProBuilder, Antilatency \n\n<b>Plattformen:</b>   Windows, VR-Headsets (Meta, Vive, Pico)`,
                cmd_contact:    `Kontaktinformationen:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📧 E-Mail:    <a href="mailto:tayfunakincir@gmail.com" class="icon classic fa-envelope"></a>\n💼 LinkedIn: <a href="https://www.linkedin.com/in/tayfun-akincir/" class="icon brands fa-linkedin"></a>\n📍 Standort: Ludwigshafen, Deutschland\n\nMelde dich gerne – für eine Zusammenarbeit oder für Jobangebote!`,
                cmd_experience: `Berufserfahrung:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nFansea GmbH (2025 - Aktuell)\n→ XR Software Entwickler\n→ VR-Anwendungsentwicklung, Multiplayer-Integration\n\nLitexa GmbH (2023-2024)\n→ XR Software Entwickler\n→ VR-Anwendungsentwicklung, Multiplayer-Integration\n\nUniversitätsklinikum Heidelberg (2022)\n→ VR Entwickler (Bachelorarbeit)\n→ Medizinische Simulationsentwicklung\n\nEinfach Genial aGmbH (2021)\n→ VR Entwickler\n→ Kommerzielle VR-Trainingsanwendungen`,
                cmd_education:  `Ausbildung:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎓 Bachelor of Science in Informatik\n   SRH Hochschule Heidelberg (2019-2022)\n\n   Schwerpunkt: Virtual Reality, Game Development\n   Abschlussarbeit: „VR-Triage-Prototyp für die Notfallmedizin“`,
                cmd_hire:       'Zugriff gewährt! 🚀 – Du kannst mich jetzt einstellen!',
                cmd_coffee:     '☕ Wird gebrüht… fertig.',
                cmd_bossfight:  `Als Quereinsteiger während Covid zu studieren, mit endlosen Online-Vorlesungen – das war mein persönlicher Bossfight. Es war nicht einfach, aber es hat mich gelehrt, mich in neue Probleme hineinzuwerfen, mich schnell anzupassen und in völlig neuen Umgebungen effizient zu arbeiten.`,
                cmd_exit:       `Netter Versuch! 😄\nDas ist ein Web-Terminal – kein Entkommen!\nVersuch 'clear', um den Bildschirm zu leeren.`,
            }
        },

        // ── project detail modal data ─────────────────────────────
        projectDetails: {
            en: {
                project13: {
                    title: "GBCity Experience - 2025",
                    description: "Multiplayer VR product configurator developed for Goldbeck, allowing multiple users to collaboratively explore and customise Goldbeck's modular building solutions in real time. Implemented multiplayer synchronisation using Unity Netcode for GameObjects. Features an Operator-User system, where an operator monitors and controls the users' VR experience via a Windows tablet.",
                    image: "images/work13.jpg",
                    details: ["<b>Organisation:</b> Fansea GmbH","<b>Tech Stack:</b> Unity, C#, Netcode for Gameobjects","<b>My Role:</b> Multiplayer integration, VR interaction, feature integration","<b>Team Size:</b> 6","<b>Development Time:</b> 1 year"]
                },
                project12: {
                    title: "Goal King - 2025",
                    description: "Commercially released VR title available on Meta Quest and Pico stores. Responsible for converting the existing Unreal Engine codebase to Unity, implementing VR interaction systems, and ongoing feature integration as part of a 3-person team at Fansea.",
                    image: "images/work12.jpg",
                    details: ["<b>Organisation:</b> Fansea GmbH","<b>Tech Stack:</b> Unity, C#","<b>My Role:</b> Unreal → Unity conversion, VR interaction, feature integration","<b>Team Size:</b> 3","<b>Development Time:</b> Ongoing"],
                    metaLink: "https://www.meta.com/de-de/experiences/goal-king/5211598935630591/",
                    picoLink: "https://store-global.picoxr.com/global/detail/1/7480434548917010437"
                },
                project1: {
                    title: "Arcane Arsenal - 2024",
                    description: "Unreal Engine multiplayer prototype implementing C++ network replication, RPCs, and Blueprint performance benchmarking.",
                    image: "images/work1.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech Stack:</b> Unreal Engine, C++, Blueprints","<b>Team Size:</b> Solo","<b>Development Time:</b> 1 month"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EY7gbNFVTrNIhlAey146DDEBfMN-eoCTO1k5UKJJCpKDZg?e=u0uQU5"
                },
                project2: {
                    title: "VR House Designer - 2024",
                    description: "Collaborative VR application allowing multiple users to design and furnish rooms in real time. Implemented multiplayer synchronisation via Photon Fusion and VR interaction systems using HurricaneVR.",
                    image: "images/work2.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech Stack:</b> Unity3D, C#, HurricaneVR, Photon Fusion, VRIK","<b>My Role:</b> Multiplayer integration, VR interaction, Programming Lead","<b>Team Size:</b> 3","<b>Development Time:</b> 3 months"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EY4GiQKe53hCsaD9hPWqS3MBCSCAkW6I1vC4jNSsQ1vnjg?e=QvDB4A"
                },
                project3: {
                    title: "Antilatency Showroom - 2023/2024",
                    description: "Commercial showroom application demonstrating full-body tracking via the Antilatency SDK and VRIK, with multiplayer support for simultaneous multi-user tracking sessions.",
                    image: "images/work3.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech Stack:</b> Unity3D, C#, HurricaneVR, Photon Fusion, VRIK, Antilatency SDK","<b>My Role:</b> Multiplayer integration, Body tracking integration, VR interaction, Programming Lead","<b>Team Size:</b> 3","<b>Development Time:</b> 1 year"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EZIeY6WflpBGl0gnzr3bb0IBJ2TlPem4K-AtoaiFaqGo0Q?e=WHsjNw"
                },
                project4: {
                    title: "Procedural Mesh Generation - 2023",
                    description: "Runtime procedural mesh generation system for a VR house editor, utilising Unity's Simple & Advanced Mesh APIs and the ProBuilder API to dynamically build geometry based on user input.",
                    image: "images/work4.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech Stack:</b> Unity3D, C#, Simple & Advanced Mesh API, ProBuilder API","<b>Team Size:</b> Solo","<b>Development Time:</b> 1 month"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EbXi_2ua2ktJrnL6PFaBZFcBE-xvH2_E6IKbyjMCm1yFCg?e=RorroL"
                },
                project5: {
                    title: "VR-Triage Prototype - 2022",
                    description: "VR training simulation for emergency room triage procedures, developed as a solo bachelor thesis project in collaboration with Universitätsklinikum Heidelberg.",
                    image: "images/work5.jpg",
                    details: ["<b>Organisation:</b> Universitätsklinikum Heidelberg","<b>Tech Stack:</b> Unity3D, C#, SteamVR","<b>Team Size:</b> Solo","<b>Development Time:</b> 4 months"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/ES7_bkB_8mZLlIdyDlcUWtwBAd2W3-RXWXnCAb0dsqchEQ?e=gft78b",
                    thesis: "https://www.dropbox.com/s/3c88v03o6eyj2if/BA_Thesis_TAYFUN_AKINCIR.pdf?dl=0"
                },
                project6: {
                    title: "VRex: Virtual Paleontology - 2022",
                    description: "Educational serious game simulating paleontological fieldwork, developed in a team of 7. Contributed to VR interaction design and core gameplay systems.",
                    image: "images/work6.jpg",
                    details: ["<b>Organisation:</b> SRH Hochschule Heidelberg","<b>Tech Stack:</b> Unity3D, C#, SteamVR","<b>My Role:</b> VR interaction, feature integration, Programming Lead","<b>Team Size:</b> 7","<b>Development Time:</b> 4 months"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EVhWCvYvmDpEuTIhvI14m2YB4_0f7e1JrEp5X_cUnThhZg?e=Dzw25d"
                },
                project7: {
                    title: "UI & Interaction Design Patterns for VR, AR, and MR - 2022",
                    description: "Published academic paper cataloguing 200+ UI/UX design patterns for VR, AR, and MR applications. Presented at MuC 2022 (Mensch und Computer).",
                    image: "images/work11.jpg",
                    details: ["<b>DOI:</b> 10.18420/muc2022-mci-ws06-419","<b>Published:</b> September 2022","<b>Authorship:</b> 2nd author","<b>Note:</b> Based on original research also covering UX norms and guidelines."],
                    paper: "https://www.researchgate.net/publication/363263265_An_Overview_of_User_Interface_and_Interaction_Design_Patterns_for_VR_AR_and_MR_Applications"
                },
                project8: {
                    title: "Rossmann VR - 2021",
                    description: "Commercial VR experience showcasing workplace scenarios at Rossmann, designed for recruitment and employer branding. Delivered within 1 month as a 2-person team.",
                    image: "images/work7.jpg",
                    details: ["<b>Client:</b> Rossmann (via Einfach Genial aGmbH)","<b>Tech Stack:</b> Unity3D, C#, SteamVR","<b>My Role:</b> VR interaction, feature integration","<b>Team Size:</b> 2","<b>Development Time:</b> 1 month"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EdwzeGHspGFCoXQwr5QTsecBsxEis7uhuJij9iTroG_YPA?e=qcEDqZ"
                },
                project9: {
                    title: "KIND VR - 2021",
                    description: "Commercial VR onboarding experience for hearing care specialist KIND, built back-to-back with the Rossmann project — demonstrating efficient reuse of VR systems across clients.",
                    image: "images/work8.jpg",
                    details: ["<b>Client:</b> KIND (via Einfach Genial aGmbH)","<b>Tech Stack:</b> Unity3D, C#, SteamVR","<b>My Role:</b> VR interaction, feature integration","<b>Team Size:</b> 2","<b>Development Time:</b> 1 month"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EVeZrDTDReROlVZrzcXlATAB6y1M0CKlOqARlS_FV774aA?e=QbRRbQ"
                },
                project10: {
                    title: "University Recipes - 2020/2021",
                    description: "Lighthearted VR cooking simulation built with a team of 6, exploring XR Interaction Toolkit mechanics and physics-based object interaction.",
                    image: "images/work9.jpg",
                    details: ["<b>Organisation:</b> SRH Hochschule Heidelberg","<b>Tech Stack:</b> Unity3D, C#, XR Interaction Toolkit","<b>My Role:</b> VR interaction, feature integration, Programming Lead","<b>Team Size:</b> 6","<b>Development Time:</b> 3 months"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EcplHZ343z9DuLbqCH-y5UABuwYG1103MmpEcTtLmv7sbA?e=g7ZPKq"
                },
                project11: {
                    title: "Blade Gunner - 2020",
                    description: "Top-down action game inspired by the arcade classic Gauntlet, developed in C++ with Raylib as a 5-person university project.",
                    image: "images/work10.jpg",
                    details: ["<b>Organisation:</b> SRH Hochschule Heidelberg","<b>Tech Stack:</b> C++, Raylib","<b>My Role:</b> Feature integration, enemy AI","<b>Team Size:</b> 5","<b>Development Time:</b> 3 months"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EUcytEcf-3lNqLJtwD7LOuQB9zciP9JLLxei_UMaSUGuzQ?e=kZuT6K"
                }
            },
            de: {
                project13: {
                    title: "GBCity Experience - 2025",
                    description: "VR-Produktkonfigurator für Goldbeck, in dem mehrere Nutzer die modularen Gebäudelösungen gemeinsam und in Echtzeit erkunden und konfigurieren können. Die Multiplayer-Synchronisation habe ich mit Unity Netcode for GameObjects umgesetzt. Dazu kommt ein Operator-User-System: Ein Operator begleitet die VR-Session der Nutzer über ein Windows-Tablet und steuert sie.",
                    image: "images/work13.jpg",
                    details: ["<b>Organisation:</b> Fansea GmbH","<b>Tech-Stack:</b> Unity, C#, Netcode for Gameobjects","<b>Meine Rolle:</b> Multiplayer-Integration, VR-Interaktion, Feature-Integration","<b>Teamgröße:</b> 6","<b>Entwicklungszeit:</b> 1 Jahr"]
                },
                project12: {
                    title: "Goal King - 2025",
                    description: "Kommerziell veröffentlichtes VR-Spiel, erhältlich im Meta Quest Store und im Pico Store. Ich habe die bestehende Unreal-Engine-Codebasis auf Unity portiert, die VR-Interaktion umgesetzt und entwickle in einem dreiköpfigen Team bei Fansea laufend neue Features.",
                    image: "images/work12.jpg",
                    details: ["<b>Organisation:</b> Fansea GmbH","<b>Tech-Stack:</b> Unity, C#","<b>Meine Rolle:</b> Portierung von Unreal auf Unity, VR-Interaktion, Feature-Integration","<b>Teamgröße:</b> 3","<b>Entwicklungszeit:</b> Laufend"],
                    metaLink: "https://www.meta.com/de-de/experiences/goal-king/5211598935630591/",
                    picoLink: "https://store-global.picoxr.com/global/detail/1/7480434548917010437"
                },
                project1: {
                    title: "Arcane Arsenal - 2024",
                    description: "Multiplayer-Prototyp in der Unreal Engine: Netzwerk-Replikation und RPCs in C++ umgesetzt, dazu Performance-Vergleiche zwischen C++ und Blueprints.",
                    image: "images/work1.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech-Stack:</b> Unreal Engine, C++, Blueprints","<b>Teamgröße:</b> Einzelprojekt","<b>Entwicklungszeit:</b> 1 Monat"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EY7gbNFVTrNIhlAey146DDEBfMN-eoCTO1k5UKJJCpKDZg?e=u0uQU5"
                },
                project2: {
                    title: "VR House Designer - 2024",
                    description: "VR-Anwendung, in der mehrere Nutzer Räume gemeinsam und in Echtzeit gestalten und einrichten. Die Multiplayer-Synchronisation lief über Photon Fusion, die VR-Interaktion über HurricaneVR.",
                    image: "images/work2.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech-Stack:</b> Unity3D, C#, HurricaneVR, Photon Fusion, VRIK","<b>Meine Rolle:</b> Multiplayer-Integration, VR-Interaktion, Programming Lead","<b>Teamgröße:</b> 3","<b>Entwicklungszeit:</b> 3 Monate"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EY4GiQKe53hCsaD9hPWqS3MBCSCAkW6I1vC4jNSsQ1vnjg?e=QvDB4A"
                },
                project3: {
                    title: "Antilatency Showroom - 2023/2024",
                    description: "Kommerzielle Showroom-Anwendung, die Full-Body-Tracking über das Antilatency SDK und VRIK zeigt – inklusive Multiplayer, sodass mehrere Nutzer gleichzeitig getrackt werden können.",
                    image: "images/work3.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech-Stack:</b> Unity3D, C#, HurricaneVR, Photon Fusion, VRIK, Antilatency SDK","<b>Meine Rolle:</b> Multiplayer-Integration, Body-Tracking-Integration, VR-Interaktion, Programming Lead","<b>Teamgröße:</b> 3","<b>Entwicklungszeit:</b> 1 Jahr"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EZIeY6WflpBGl0gnzr3bb0IBJ2TlPem4K-AtoaiFaqGo0Q?e=WHsjNw"
                },
                project4: {
                    title: "Prozedurale Mesh-Generierung - 2023",
                    description: "System, das Meshes zur Laufzeit prozedural erzeugt – für einen VR-Hausplaner. Es nutzt die Simple & Advanced Mesh APIs von Unity sowie die ProBuilder API, um Geometrie dynamisch aus den Eingaben der Nutzer aufzubauen.",
                    image: "images/work4.jpg",
                    details: ["<b>Organisation:</b> Litexa GmbH","<b>Tech-Stack:</b> Unity3D, C#, Simple & Advanced Mesh API, ProBuilder API","<b>Teamgröße:</b> Einzelprojekt","<b>Entwicklungszeit:</b> 1 Monat"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EbXi_2ua2ktJrnL6PFaBZFcBE-xvH2_E6IKbyjMCm1yFCg?e=RorroL"
                },
                project5: {
                    title: "VR-Triage-Prototyp - 2022",
                    description: "VR-Trainingssimulation für die Triage in der Notaufnahme, die ich allein im Rahmen meiner Bachelorarbeit in Zusammenarbeit mit dem Universitätsklinikum Heidelberg entwickelt habe.",
                    image: "images/work5.jpg",
                    details: ["<b>Organisation:</b> Universitätsklinikum Heidelberg","<b>Tech-Stack:</b> Unity3D, C#, SteamVR","<b>Teamgröße:</b> Einzelprojekt","<b>Entwicklungszeit:</b> 4 Monate"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/ES7_bkB_8mZLlIdyDlcUWtwBAd2W3-RXWXnCAb0dsqchEQ?e=gft78b",
                    thesis: "https://www.dropbox.com/s/3c88v03o6eyj2if/BA_Thesis_TAYFUN_AKINCIR.pdf?dl=0"
                },
                project6: {
                    title: "VRex: Virtuelle Paläontologie - 2022",
                    description: "Serious Game, das paläontologische Feldarbeit simuliert, entwickelt in einem siebenköpfigen Team. Ich habe am VR-Interaktionsdesign und an zentralen Gameplay-Systemen mitgearbeitet.",
                    image: "images/work6.jpg",
                    details: ["<b>Organisation:</b> SRH Hochschule Heidelberg","<b>Tech-Stack:</b> Unity3D, C#, SteamVR","<b>Meine Rolle:</b> VR-Interaktion, Feature-Integration, Programming Lead","<b>Teamgröße:</b> 7","<b>Entwicklungszeit:</b> 4 Monate"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EVhWCvYvmDpEuTIhvI14m2YB4_0f7e1JrEp5X_cUnThhZg?e=Dzw25d"
                },
                project7: {
                    title: "UI & Interaktions-Designmuster für VR, AR und MR - 2022",
                    description: "Veröffentlichtes wissenschaftliches Paper mit einem Katalog von über 200 UI/UX-Designmustern für VR-, AR- und MR-Anwendungen. Vorgestellt auf der MuC 2022 (Mensch und Computer).",
                    image: "images/work11.jpg",
                    details: ["<b>DOI:</b> 10.18420/muc2022-mci-ws06-419","<b>Veröffentlicht:</b> September 2022","<b>Autorenschaft:</b> Zweitautor","<b>Hinweis:</b> Basiert auf Originalforschung, die auch UX-Normen und Richtlinien abdeckt."],
                    paper: "https://www.researchgate.net/publication/363263265_An_Overview_of_User_Interface_and_Interaction_Design_Patterns_for_VR_AR_and_MR_Applications"
                },
                project8: {
                    title: "Rossmann VR - 2021",
                    description: "Kommerzielle VR-Experience, die Arbeitsplätze bei Rossmann erlebbar macht – gedacht für Recruiting und Employer Branding. In einem Monat mit einem zweiköpfigen Team umgesetzt.",
                    image: "images/work7.jpg",
                    details: ["<b>Kunde:</b> Rossmann (über Einfach Genial aGmbH)","<b>Tech-Stack:</b> Unity3D, C#, SteamVR","<b>Meine Rolle:</b> VR-Interaktion, Feature-Integration","<b>Teamgröße:</b> 2","<b>Entwicklungszeit:</b> 1 Monat"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EdwzeGHspGFCoXQwr5QTsecBsxEis7uhuJij9iTroG_YPA?e=qcEDqZ"
                },
                project9: {
                    title: "KIND VR - 2021",
                    description: "Kommerzielle VR-Experience zum Onboarding beim Hörakustiker KIND, direkt im Anschluss an das Rossmann-Projekt entstanden. Dadurch konnten wir große Teile der VR-Systeme wiederverwenden.",
                    image: "images/work8.jpg",
                    details: ["<b>Kunde:</b> KIND (über Einfach Genial aGmbH)","<b>Tech-Stack:</b> Unity3D, C#, SteamVR","<b>Meine Rolle:</b> VR-Interaktion, Feature-Integration","<b>Teamgröße:</b> 2","<b>Entwicklungszeit:</b> 1 Monat"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EVeZrDTDReROlVZrzcXlATAB6y1M0CKlOqARlS_FV774aA?e=QbRRbQ"
                },
                project10: {
                    title: "University Recipes - 2020/2021",
                    description: "Humorvolle VR-Kochsimulation, entwickelt in einem sechsköpfigen Team. Im Fokus standen die Mechaniken des XR Interaction Toolkits und physikbasierte Objektinteraktion.",
                    image: "images/work9.jpg",
                    details: ["<b>Organisation:</b> SRH Hochschule Heidelberg","<b>Tech-Stack:</b> Unity3D, C#, XR Interaction Toolkit","<b>Meine Rolle:</b> VR-Interaktion, Feature-Integration, Programming Lead","<b>Teamgröße:</b> 6","<b>Entwicklungszeit:</b> 3 Monate"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EcplHZ343z9DuLbqCH-y5UABuwYG1103MmpEcTtLmv7sbA?e=g7ZPKq"
                },
                project11: {
                    title: "Blade Gunner - 2020",
                    description: "Top-Down-Actionspiel im Stil des Arcade-Klassikers Gauntlet, entwickelt in C++ mit Raylib als Uni-Projekt in einem fünfköpfigen Team.",
                    image: "images/work10.jpg",
                    details: ["<b>Organisation:</b> SRH Hochschule Heidelberg","<b>Tech-Stack:</b> C++, Raylib","<b>Meine Rolle:</b> Feature-Integration, Gegner-KI","<b>Teamgröße:</b> 5","<b>Entwicklungszeit:</b> 3 Monate"],
                    video: "https://1drv.ms/v/c/cdbca53e5a3fb05c/EUcytEcf-3lNqLJtwD7LOuQB9zciP9JLLxei_UMaSUGuzQ?e=kZuT6K"
                }
            }  // end de
        }  // end projectDetails

    };  // end window.i18n

    // ── apply language to DOM ────────────────────────────────────
    function applyLanguage(lang) {
        window.currentLang = lang;
        localStorage.setItem('lang', lang);
        const t = window.i18n.static[lang];

        document.documentElement.lang = lang;
        if (t.page_title) document.title = t.page_title;

        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) el.placeholder = t[key];
        });
        document.querySelectorAll('[data-i18n-value]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-value');
            if (t[key] !== undefined) el.value = t[key];
        });
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.innerHTML = t.lang_toggle;

        // Re-render existing terminal outputs
        document.querySelectorAll('[data-cmd]').forEach(function(el) {
            const cmd = el.getAttribute('data-cmd');
            if (typeof getCommands === 'function') {
                const out = getCommands()[cmd];
                if (out && out !== 'CLEAR_TERMINAL' && out !== 'ANIMATE_EGG') {
                    el.innerHTML = out.replace(/\n/g, '<br>');
                }
            }
        });

        // Re-render the ">Command: [x]" echo lines
        document.querySelectorAll('[data-cmdline]').forEach(function(el) {
            const cmd = el.getAttribute('data-cmdline');
            el.innerHTML = '<span class="command-prefix">&gt;' + t.terminal_cmd_prefix + ': [' + cmd + ']</span>';
        });

        // Re-render "command not found" errors
        document.querySelectorAll('[data-notfound]').forEach(function(el) {
            el.innerHTML = t.cmd_not_found.replace('{cmd}', el.getAttribute('data-notfound'));
        });

        // Re-render the secret-button headline
        document.querySelectorAll('[data-secretline]').forEach(function(el) {
            el.innerHTML = '<span class="command-prefix">&gt;' + t.secret_prefix + '</span>';
        });

        // Re-render open modal if any
        if (window.currentOpenProject && typeof showProjectDetails === 'function') {
            showProjectDetails(window.currentOpenProject);
        }
    }
    window.applyLanguage = applyLanguage;

    document.addEventListener('DOMContentLoaded', function () {
        applyLanguage(window.currentLang);
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                applyLanguage(window.currentLang === 'en' ? 'de' : 'en');
            });
        }
    });
})();
