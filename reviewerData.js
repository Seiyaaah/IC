window.reviewerData = {
    appName: "Learning OS Educational Reviewer",
    version: "3.0",
    subjects: [
        {
            id: "subject_ict_module1",
            name: "Module 1: Information and Communications Technology Today",
            description: "Comprehensive study of ICT definitions, historical evolution across four main periods, World Wide Web milestones, and Social Media developments.",
            icon: "bi-globe",
            color: "#0d6efd",
            tags: ["ICT", "History", "Module 1", "Computing"],
            lessons: [
                {
                    id: "lesson_ict_intro",
                    title: "Introduction to Information and Communications Technology (ICT)",
                    description: "Fundamental definitions and scope of ICT as technologies enabling human communication.",
                    difficulty: "easy",
                    estimatedTime: "15 mins",
                    tags: ["ICT", "Communication", "Definitions"],
                    learningObjectives: [
                        "Define Information and Communications Technology.",
                        "Understand the role of hardware and software in human communication."
                    ],
                    summary: "ICT encompasses hardware and software technologies that enable humans to communicate and share information.",
                    content: [
                        { type: "heading", text: "Introduction to Information and Communication Technology (ICT)" },
                        { type: "definition", title: "Information and Communication Technology (ICT)", text: "Refers to technologies, both hardware and software, whereby humans are able to communicate with one another. It is a form of technology that enables you to communicate." },
                        { type: "paragraph", text: "The fusion of hardware equipment, precise software, Graphical User Interfaces (GUI), and effective communications networks constitutes the present composition of the ICT network." },
                        { type: "example", text: "The World Wide Web (WWW) is the ultimate product of this fusion, serving as a repository for directions, instructions, information, and entertainment." }
                    ],
                    flashcards: [
                        { front: "What is Information and Communication Technology (ICT)?", back: "Technologies, both hardware and software, whereby humans are able to communicate with one another." },
                        { front: "What is the World Wide Web (WWW) considered in the context of ICT?", back: "The product of the fusion of hardware, software, GUI, and communications networks." }
                    ],
                    questions: [
                        {
                            id: "question_ict_001",
                            type: "identification",
                            question: "What technology refers to hardware and software systems that enable humans to communicate with one another?",
                            answer: "Information and Communication Technology",
                            explanation: "ICT is defined as the set of hardware and software tools that empower human communication.",
                            difficulty: "easy",
                            tags: ["Definition", "ICT"]
                        },
                        {
                            id: "question_ict_002",
                            type: "true_false",
                            question: "True or False: The World Wide Web is considered a product of the fusion of hardware equipment, software, GUIs, and communications networks.",
                            choices: ["True", "False"],
                            answer: 0,
                            explanation: "The WWW integrates hardware, software, and communication channels to deliver instructions, information, and entertainment.",
                            difficulty: "easy",
                            tags: ["WWW", "Facts"]
                        }
                    ]
                },
                {
                    id: "lesson_ict_history",
                    title: "Evolution of ICT: Premechanical to Electronic Periods",
                    description: "Historical milestones dividing ICT into four main periods: premechanical, mechanical, electromechanical, and electronic.",
                    difficulty: "medium",
                    estimatedTime: "30 mins",
                    tags: ["History", "Evolution", "Premechanical", "Mechanical", "Electromechanical", "Electronic"],
                    learningObjectives: [
                        "Identify the four main historical periods of ICT evolution.",
                        "Describe key inventions such as the Abacus, Pascaline, Analytical Engine, and ENIAC."
                    ],
                    summary: "ICT evolved through four major epochs: Premechanical (3000 BCE - 1450 CE), Mechanical (1450 - 1840), Electromechanical (1840 - 1940s), and Electronic (1940s to present).",
                    content: [
                        { type: "heading", text: "The Four Main Periods of ICT Evolution" },
                        { type: "paragraph", text: "History divides the era of ICT into four main periods: premechanical, mechanical, electromechanical, and electronic periods." },
                        { type: "heading", text: "1. The Premechanical Period" },
                        { type: "paragraph", text: "Traced back thousands of years ago, approximately around 3,000 BCE to 1,450 CE." },
                        { type: "definition", title: "Papyrus Plant", text: "The first establishment/medium that produced paper. By this time, the storing of information was revolutionized." },
                        { type: "note", text: "Libraries were considered the first data centers in history." },
                        { type: "definition", title: "Abacus", text: "The first counting device introduced in the 2nd Century BCE by Romans. Created in China, it is a manual device similar to a modern calculator and was the first device to process information." },
                        { type: "heading", text: "2. The Mechanical Period" },
                        { type: "paragraph", text: "Considered as the bridge between our current period and the premechanical period. Started around 1450 to 1840. Concentrated primarily on the development of machines that would enhance calculation speed." },
                        { type: "definition", title: "Pascaline", text: "A mechanical calculator invented by the famous mathematician and inventor Blaise Pascal along with Wilhelm Schickard." },
                        { type: "definition", title: "Analytical Engine", text: "First invented by Charles Babbage in 1837. Charles Babbage earned the title 'Father of the Computers'. It contained features such as the Arithmetic Logic Unit (ALU), control flow (composed of conditional branching and loops), and integrated memory, serving as the blueprint for 20th-century computers." },
                        { type: "heading", text: "3. The Electromechanical Period" },
                        {
                            type: "list",
                            ordered: true,
                            items: [
                                "Telegraph: Invented by Cooke and Wheatstone in 1837 using 5 magnetic needles.",
                                "Morse Code & Commercial Telegraph: Invented by American inventor Samuel Morse in 1844; the first single-circuit commercial telegraph system.",
                                "Telephone: In 1876, Alexander Graham Bell was granted the patent for the telephone, which converts sounds into electricity and transmits them over copper wires.",
                                "The Bombe: Invented in 1939 by Alan Turing and improved by Gordon Welchman in 1940 to decipher codes generated by German Enigma encryption machines during World War II."
                            ]
                        },
                        { type: "heading", text: "4. The Electronic Period" },
                        {
                            type: "list",
                            ordered: false,
                            items: [
                                "ENIAC (1946): Early large-scale electronic computer occupying 167 square meters.",
                                "Transistor (1947): Revolutionized electronic circuitry.",
                                "Integrated Circuit (IC): Combined multiple transistors onto a single semiconductor.",
                                "Olivetti Programma 101 (1965): Originally designed by Pier Giorgio Perotto and his team; became the first commercial personal computer sold.",
                                "IBM 5150 (August 1981): Developed by the IBM Entry Systems Division Team led by Don Estridge; set standards for several PC platforms today."
                            ]
                        }
                    ],
                    flashcards: [
                        { front: "What are the four main periods in history that divide the era of ICT?", back: "Premechanical, Mechanical, Electromechanical, and Electronic periods." },
                        { front: "What plant was used by early civilizations to produce paper, revolutionizing information storage during the premechanical period?", back: "Papyrus Plant" },
                        { front: "What was considered the first data center in history?", back: "Libraries" },
                        { front: "What was the first counting device introduced in the 2nd Century BCE by Romans (originating from China)?", back: "Abacus" },
                        { front: "Who invented the Pascaline calculator along with Wilhelm Schickard?", back: "Blaise Pascal" },
                        { front: "Who is known as the 'Father of the Computers' after inventing the Analytical Engine in 1837?", back: "Charles Babbage" },
                        { front: "What core components did Charles Babbage's Analytical Engine contain?", back: "Arithmetic Logic Unit (ALU), control flow (conditional branching and loops), and integrated memory." },
                        { front: "Who invented the commercial single-circuit telegraph and Morse Code in 1844?", back: "Samuel Morse" },
                        { front: "Who was granted the patent for the telephone in 1876?", back: "Alexander Graham Bell" },
                        { front: "What was 'The Bombe' (1939)?", back: "A device invented by Alan Turing and Gordon Welchman to decipher German Enigma codes during WWII." },
                        { front: "What was the first commercial personal computer sold in 1965, designed by Pier Giorgio Perotto?", back: "Olivetti Programma 101" },
                        { front: "Who led the IBM Entry Systems Division Team that developed the IBM 5150 in August 1981?", back: "Don Estridge" }
                    ],
                    questions: [
                        {
                            id: "question_hist_001",
                            type: "identification",
                            question: "What counting device, created in China and introduced by Romans in the 2nd Century BCE, is considered the first device to process information?",
                            answer: "Abacus",
                            explanation: "The Abacus was a manual device similar to a modern calculator used for processing early calculations.",
                            difficulty: "easy",
                            tags: ["Premechanical", "Abacus"]
                        },
                        {
                            id: "question_hist_002",
                            type: "multiple_choice",
                            question: "Who earned the title 'Father of the Computers' after inventing the Analytical Engine in 1837?",
                            choices: ["Blaise Pascal", "Charles Babbage", "Alan Turing", "Don Estridge"],
                            answer: 1,
                            explanation: "Charles Babbage designed the Analytical Engine featuring ALU, control flow, and memory.",
                            difficulty: "easy",
                            tags: ["Mechanical", "Charles Babbage"]
                        },
                        {
                            id: "question_hist_003",
                            type: "identification",
                            question: "What was the name of the first commercial personal computer sold in 1965, designed by Pier Giorgio Perotto?",
                            answer: "Olivetti Programma 101",
                            explanation: "The Olivetti Programma 101 pioneered commercial personal computing in 1965.",
                            difficulty: "medium",
                            tags: ["Electronic", "Computers"]
                        },
                        {
                            id: "question_hist_004",
                            type: "multiple_choice",
                            question: "The IBM 5150, which set PC standards, was introduced in what month and year?",
                            choices: ["January 1980", "August 1981", "December 1985", "March 1975"],
                            answer: 1,
                            explanation: "The IBM 5150 was introduced in August 1981 under the leadership of Don Estridge.",
                            difficulty: "medium",
                            tags: ["IBM", "History"]
                        }
                    ]
                },
                {
                    id: "lesson_ict_www_social",
                    title: "World Wide Web and Social Media Evolution",
                    description: "Study of the World Wide Web (Web 1.0, 2.0, 3.0) and the rise of Social Media and virality.",
                    difficulty: "medium",
                    estimatedTime: "20 mins",
                    tags: ["WWW", "Web 1.0", "Web 2.0", "Web 3.0", "Social Media"],
                    learningObjectives: [
                        "Explain the purpose and origin of the World Wide Web proposed by Tim Berners-Lee.",
                        "Differentiate between Web 1.0, Web 2.0, and Web 3.0.",
                        "Define social media and virality."
                    ],
                    summary: "The World Wide Web (proposed by Tim Berners-Lee in 1989) evolved from static read-only pages (Web 1.0) to interactive read-write platforms (Web 2.0) and smart semantic execution (Web 3.0).",
                    content: [
                        { type: "heading", text: "World Wide Web (WWW)" },
                        { type: "definition", title: "World Wide Web", text: "It is the system that enables you to access hypertext documents and other files over the internet. Proposed by Tim Berners-Lee in 1989, where database and interface are implemented to associate links in readable documents." },
                        { type: "heading", text: "Generations of the Web" },
                        { type: "definition", title: "Web 1.0 (Read-Only Web)", text: "Where information or hypertext files are simply accessed by the user." },
                        { type: "definition", title: "Web 2.0 (Read-and-Write Web)", text: "Started with the need to interact with Web pages. Users wanted to e-mail websites and interact on social networking sites." },
                        { type: "definition", title: "Web 3.0 (Semantic Executing Web)", text: "Envisioned to be a smarter way to access hypertext files and a version that enables a wider range of search in a fast manner." },
                        { type: "heading", text: "The Social Media" },
                        { type: "paragraph", text: "ICT produces another high-impact user application: Social Media. These applications started alongside Web 2.0 and are used for communicating and socializing with other application users in virtual communities and networks." },
                        { type: "definition", title: "Virality", text: "Defined as the rate of reposting or sharing of photos, pieces of information, or ideas published in one's social media profile page." }
                    ],
                    flashcards: [
                        { front: "Who proposed the World Wide Web in 1989?", back: "Tim Berners-Lee" },
                        { front: "What is Web 1.0 often characterized as?", back: "The read-only web where users access hypertext files." },
                        { front: "What is Web 2.0 characterized as?", back: "The read-and-write web with interactive web pages and social networking." },
                        { front: "What is Web 3.0 characterized as?", back: "The semantic executing web enabling smarter and faster searches." },
                        { front: "How is virality defined in social media?", back: "The rate of reposting or sharing of photos, information, or ideas published on a profile page." }
                    ],
                    questions: [
                        {
                            id: "question_www_001",
                            type: "identification",
                            question: "Who proposed the World Wide Web in 1989 to associate links in readable documents?",
                            answer: "Tim Berners-Lee",
                            explanation: "Tim Berners-Lee introduced the WWW concept in 1989.",
                            difficulty: "easy",
                            tags: ["WWW", "Tim Berners-Lee"]
                        },
                        {
                            id: "question_www_002",
                            type: "multiple_choice",
                            question: "Which version of the web is known as the semantic executing web designed for smarter and faster searches?",
                            choices: ["Web 1.0", "Web 2.0", "Web 3.0", "Web 4.0"],
                            answer: 2,
                            explanation: "Web 3.0 is the semantic executing web.",
                            difficulty: "easy",
                            tags: ["Web 3.0"]
                        }
                    ]
                }
            ]
        },
        {
            id: "subject_hardware",
            name: "Module 3: Basics of Computer Hardware",
            description: "Detailed study of input devices, system unit internal components, motherboard chipsets, cache, hard disk, power supply, output devices, print devices, and communication hardware.",
            icon: "bi-cpu",
            color: "#198754",
            tags: ["Hardware", "Input", "System Unit", "Motherboard", "Output", "Print Devices"],
            lessons: [
                {
                    id: "lesson_hw_input",
                    title: "Computer Input Devices",
                    description: "Hardware devices that accept data and instructions from users or other computer systems.",
                    difficulty: "easy",
                    estimatedTime: "15 mins",
                    tags: ["Input", "Keyboard", "Mouse", "Scanner"],
                    learningObjectives: [
                        "Define input devices.",
                        "Identify features of keyboards, touch screens, barcode readers, and wand readers."
                    ],
                    summary: "Input devices take data and instructions from users, including keyboards, touch screens, barcode readers, and wand readers.",
                    content: [
                        { type: "heading", text: "Input Devices" },
                        { type: "definition", title: "Input Devices", text: "These are devices that accept input (data and instructions) from the user or from another computer system." },
                        { type: "definition", title: "Keyboard", text: "It is similar to a typewriter but has special buttons or keys that signify a command. It is used to enter data and commands into the computer." },
                        { type: "definition", title: "Touch Screen", text: "A type of display screen that has a touch-sensitive transparent panel covering the screen that allows a user to enter data or instructions by simply touching a location on the screen using his/her finger or any other nontransparent object instead of a pointing device." },
                        { type: "definition", title: "Barcode Reader", text: "It uses light rays to read a product code for the purpose of easy inventory and monitoring of product movements and status." },
                        { type: "definition", title: "Wand Reader", text: "It uses laser beams to read special numbers, letters, or symbols, such as machines seen in supermarkets recognizing item barcodes by scanning." }
                    ],
                    flashcards: [
                        { front: "What are input devices?", back: "Devices that accept input (data and instructions) from the user or another computer system." },
                        { front: "What is a touch screen?", back: "A display screen with a touch-sensitive transparent panel allowing data entry via finger or nontransparent object." },
                        { front: "What device uses light rays to read product codes for easy inventory?", back: "Barcode Reader" },
                        { front: "What device uses laser beams to read special numbers, letters, or symbols in supermarkets?", back: "Wand Reader" }
                    ],
                    questions: [
                        {
                            id: "question_hw_in_01",
                            type: "identification",
                            question: "What type of input device uses light rays to read product codes for inventory and monitoring?",
                            answer: "Barcode Reader",
                            explanation: "Barcode readers utilize light reflections to read product identification codes.",
                            difficulty: "easy",
                            tags: ["Input", "Barcode Reader"]
                        },
                        {
                            id: "question_hw_in_02",
                            type: "true_false",
                            question: "True or False: A touch screen requires a mechanical mouse to input commands.",
                            choices: ["True", "False"],
                            answer: 1,
                            explanation: "A touch screen allows input directly on the display panel using a finger or object.",
                            difficulty: "easy",
                            tags: ["Touch Screen"]
                        }
                    ]
                },
                {
                    id: "lesson_hw_system_unit",
                    title: "System Unit Internal Parts & Motherboard Components",
                    description: "Study of the microprocessor, registers, expansion cards, chipsets, cache memory, hard disk, power supply, and memory.",
                    difficulty: "medium",
                    estimatedTime: "25 mins",
                    tags: ["System Unit", "CPU", "Motherboard", "Cache", "Memory"],
                    learningObjectives: [
                        "Explain the role of the microprocessor as the brain of the computer.",
                        "Differentiate between cache memory, chipsets, hard disk, and system memory."
                    ],
                    summary: "The system unit houses internal components such as the CPU, registers, expansion cards, chipsets, cache memory, hard disks, power supply, and primary memory.",
                    content: [
                        { type: "heading", text: "Internal Parts of the System Unit" },
                        { type: "definition", title: "Microprocessor or Central Processing Unit (CPU)", text: "It is actually the heart or brain of the computer. It carries out and performs most of the instructions from either the user or software." },
                        { type: "definition", title: "Registers", text: "Small, high-speed storage locations directly inside the CPU used to hold data and instructions temporarily during processing." },
                        { type: "definition", title: "Cards (Expansion Cards)", text: "It acts as interpreters between the user and the computer (e.g., Game Card, Memory Card)." },
                        { type: "definition", title: "Hard Disk", text: "Acts like a giant floppy disk drive that can store a large amount of data and information permanently inside the system unit." },
                        { type: "definition", title: "Power Supply", text: "It gives the System Unit enough electrical power in processing." },
                        { type: "definition", title: "Memory", text: "A temporary storage space for information and instructions." },
                        { type: "heading", text: "System Board Components" },
                        { type: "definition", title: "Chipsets", text: "A group of integrated circuits that are designed to work together for some special function." },
                        { type: "definition", title: "Cache Memory", text: "A high-speed buffer storage that is smaller than main storage, which temporarily stores instructions and data from main storage that will likely be used next by the CPU." }
                    ],
                    flashcards: [
                        { front: "What is the microprocessor or CPU considered in a computer system?", back: "The heart or brain of the computer that carries out instructions." },
                        { front: "What is cache memory?", back: "A high-speed buffer storage smaller than main storage that temporarily holds data likely to be used next by the CPU." },
                        { front: "What are chipsets?", back: "A group of integrated circuits designed to work together for specific functions on the motherboard." },
                        { front: "What internal part acts like a giant floppy disk drive storing large amounts of data?", back: "Hard Disk" },
                        { front: "What component provides the System Unit with electrical power?", back: "Power Supply" }
                    ],
                    questions: [
                        {
                            id: "question_hw_sys_01",
                            type: "identification",
                            question: "What internal component is known as the heart or brain of the computer, carrying out user and software instructions?",
                            answer: "Microprocessor",
                            explanation: "The microprocessor (CPU) executes all core arithmetic, logic, and control instructions.",
                            difficulty: "easy",
                            tags: ["CPU", "Microprocessor"]
                        },
                        {
                            id: "question_hw_sys_02",
                            type: "identification",
                            question: "What high-speed buffer storage temporarily holds instructions and data that will likely be used next by the CPU?",
                            answer: "Cache Memory",
                            explanation: "Cache memory bridges speed gaps between CPU processing and main system memory.",
                            difficulty: "medium",
                            tags: ["Cache Memory"]
                        },
                        {
                            id: "question_hw_sys_03",
                            type: "multiple_choice",
                            question: "Which component on the system board consists of a group of integrated circuits designed to work together for special functions?",
                            choices: ["Chipsets", "Hard Disk", "Power Supply", "Registers"],
                            answer: 0,
                            explanation: "Chipsets coordinate data flow between the processor, memory, and peripherals.",
                            difficulty: "medium",
                            tags: ["Chipsets"]
                        }
                    ]
                },
                {
                    id: "lesson_hw_output_print",
                    title: "Computer Output & Print Devices",
                    description: "Study of output devices, monitors, CRT pixel structures, and detailed print device classifications.",
                    difficulty: "medium",
                    estimatedTime: "20 mins",
                    tags: ["Output", "Monitor", "Printer", "Dot-Matrix", "Laser"],
                    learningObjectives: [
                        "Define output devices and monitors.",
                        "Classify print devices including dot-matrix, ink-jet, and laser printers."
                    ],
                    summary: "Output devices translate CPU processed data into human-readable forms. Print devices include impact printers like dot-matrix and non-impact printers like ink-jet and laser.",
                    content: [
                        { type: "heading", text: "Output Devices" },
                        { type: "definition", title: "Output Devices", text: "These are devices that translate and represent the processed information from the computer's CPU into human-readable forms." },
                        { type: "definition", title: "Monitor", text: "A device that resembles a television screen for users to see the activities that they are doing in the computer." },
                        { type: "heading", text: "Print Devices Classifications" },
                        { type: "definition", title: "Dot-Matrix Printer", text: "An impact printer that uses pins striking an ink ribbon to form characters. Available in 9-pin serial or 24-pin parallel configurations, supporting 80-column or 132-column paper widths." },
                        { type: "definition", title: "Ink-Jet Printer", text: "A non-impact printer that sprays tiny droplets of ink onto paper to form high-quality text and graphics." },
                        { type: "definition", title: "Laser Printer", text: "A high-speed, high-quality non-impact printer using xerographic technology (laser beam and toner) to produce crisp text and images." },
                        { type: "definition", title: "Plotter", text: "An output device used for printing large vector graphics, blueprints, and engineering designs." }
                    ],
                    flashcards: [
                        { front: "What is an output device?", back: "A device that translates processed information from the computer's CPU into human-readable forms." },
                        { front: "What are pixels in monitor displays?", back: "Small picture elements; smaller pixels result in better image clarity or resolution." },
                        { front: "What is a dot-matrix printer?", back: "An impact printer using pins striking an ink ribbon, available in 9-pin or 24-pin variants." },
                        { front: "What technology does a laser printer use?", back: "Xerographic technology using a laser beam and toner." },
                        { front: "What is a plotter used for?", back: "Printing large vector graphics, blueprints, and engineering designs." }
                    ],
                    questions: [
                        {
                            id: "question_print_01",
                            type: "identification",
                            question: "What type of impact printer uses pins striking an ink ribbon and comes in 80-column or 132-column paper widths?",
                            answer: "Dot-Matrix Printer",
                            explanation: "Dot-matrix printers use impact pin configurations to print characters.",
                            difficulty: "easy",
                            tags: ["Print Devices", "Dot-Matrix"]
                        },
                        {
                            id: "question_print_02",
                            type: "multiple_choice",
                            question: "Which printer type uses xerographic technology with a laser beam and toner to produce high-quality output?",
                            choices: ["Dot-Matrix Printer", "Ink-Jet Printer", "Laser Printer", "Plotter"],
                            answer: 2,
                            explanation: "Laser printers utilize laser beams and toner cartridges for high-speed printing.",
                            difficulty: "medium",
                            tags: ["Laser Printer"]
                        }
                    ]
                }
            ]
        }
    ]
};
