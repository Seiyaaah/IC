window.reviewerData = {
  appName: "Learning OS Reviewer",
  version: "4.0",
  subjects: [
    {
      id: "subject_ict",
      name: "Information and Communications Technology",
      description: "Comprehensive review covering computer hardware, software and Excel functions, computer characteristics and applications, and the historical evolution of ICT and the World Wide Web.",
      icon: "cpu",
      color: "#3b82f6",
      tags: ["ICT", "Computer Science", "Hardware", "Software", "History"],
      lessons: [
        {
          id: "lesson_computer_hardware",
          title: "The Basics of Computer Hardware",
          description: "Detailed study of input devices, system units, processing components, output devices, storage devices, and communication devices.",
          difficulty: "medium",
          estimatedTime: "45 mins",
          tags: ["hardware", "input", "output", "storage", "CPU"],
          learningObjectives: [
            "Identify and classify computer hardware components.",
            "Understand the function of input, processing, output, and storage devices.",
            "Differentiate between primary and secondary storage."
          ],
          keywords: ["Input Devices", "System Unit", "CPU", "RAM", "ROM", "Output Devices", "Storage"],
          content: [
            {
              type: "heading",
              text: "Computer Hardware Overview"
            },
            {
              type: "paragraph",
              text: "Computer hardware consists of the physical devices that accept input (data and instructions) from the user or another computer system, process them, and present output."
            },
            {
              type: "heading",
              text: "Input Devices"
            },
            {
              type: "paragraph",
              text: "Devices that accept input data and instructions. Key examples include:"
            },
            {
              type: "definition",
              title: "Keyboard",
              text: "Similar to a typewriter but equipped with special buttons or keys that signify commands to enter data."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Alphanumeric Keypad: Keys for typing letters, numbers, and punctuations.",
                "Numeric Keypad: Keys numbered 0 through 9 with mathematical keys (+, -, *, /) used for cursor movement, editing, and calculating.",
                "Cursor Keys: Arrow keys along with Page Up, Page Down, Home, End, Insert, Delete, Print Screen Sys Rq, Scroll Lock, and Pause/Break.",
                "Function Keys: Located at the upper part of the keyboard for special functions across different programs.",
                "Escape Key (Esc): Used to exit programs quickly; located on the upper left.",
                "Caps Lock Key: Displays typed letters in capital letters.",
                "Shift Key: Used in combination to display uppercase letters.",
                "Ctrl & Alt Keys: Combination keys that function when combined with other keys.",
                "Enter Key: Allows the computer to execute given commands.",
                "Backspace Key: Erases the character on the left side of the cursor one by one.",
                "Status Lights: Located at the upper right corner to indicate if Num Lock, Caps Lock, or Scroll Lock is activated."
              ]
            },
            {
              type: "definition",
              title: "Mouse",
              text: "A box-like input device connected via wire or wireless that controls the movement of the cursor or pointer on a display screen."
            },
            {
              type: "definition",
              title: "Light Pen",
              text: "An input device utilizing a light-sensitive detector to select objects on a display screen directly by pointing."
            },
            {
              type: "definition",
              title: "Touch Screen",
              text: "A display screen covered by a touch-sensitive transparent panel allowing data entry by touching locations with a finger or non-transparent object."
            },
            {
              type: "definition",
              title: "Barcode Reader / Wand Reader",
              text: "Uses laser beams or light rays to read product codes, numbers, letters, or symbols for inventory and monitoring."
            },
            {
              type: "definition",
              title: "Scanner",
              text: "Reads text or illustrations printed on paper and translates information into digital form."
            },
            {
              type: "definition",
              title: "Audio Digitizer",
              text: "Contains circuitry to digitize sounds from microphones to be stored in computer memory."
            },
            {
              type: "heading",
              text: "The System Unit"
            },
            {
              type: "definition",
              title: "System Unit",
              text: "The electronic circuitry housed within the computer where processing happens, protected by a casing."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Casing: The shell or cover protecting internal parts.",
                "LED (Light Emitting Diode): Indicator lights in front of the System Unit.",
                "Ports: Holes at the back of the System Unit that allow the transfer of data."
              ]
            },
            {
              type: "heading",
              text: "Internal Parts of the System Unit"
            },
            {
              type: "definition",
              title: "Microprocessor or Central Processing Unit (CPU)",
              text: "The heart or brain of the computer that carries out and performs most instructions from the user or software."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Arithmetic Logic Unit (ALU): Carries out arithmetic operations (addition, subtraction, multiplication, division) and logical/comparison operations.",
                "Control Unit (CU): Directs entire operations, responsible for fetching, decoding, executing, and storing information/instructions.",
                "Registers: Small sets of data-holding storage places inside the microprocessor for passing data between instructions."
              ]
            },
            {
              type: "definition",
              title: "Motherboard (System Board)",
              text: "The main circuit board containing the central processing unit, memory, chipsets, cache memory, jumpers, and processor sockets."
            },
            {
              type: "paragraph",
              text: "Other internal components include Expansion Cards (Sound Card, Video Card, Game Card, Memory Card), Hard Disk, Power Supply, Fan, and Speaker."
            },
            {
              type: "heading",
              text: "Output Devices"
            },
            {
              type: "paragraph",
              text: "Devices that translate processed information from the CPU into human-readable forms."
            },
            {
              type: "definition",
              title: "Monitor",
              text: "A television-like screen displaying computer activities."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "CRT (Cathode Ray Tube): Uses pixels; high resolution but large size and high power consumption.",
                "Flat-Panel Display Monitor: Reduced volume, weight, and power requirements.",
                "Emissive Displays: Convert electrical energy into light (e.g., Plasma, LED).",
                "Non-Emissive Displays: Use optical effects to convert external light into graphics (e.g., LCD)."
              ]
            },
            {
              type: "heading",
              text: "Printers"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Ink-jet Printer: Sprays ink directly onto paper.",
                "Laser Printer: Uses a laser beam and rotating drum like a photocopy machine for high-quality output.",
                "80 Column Paper Printer: Accommodates paper with a width of 8.5 inches.",
                "132 Column Paper Printer: Accommodates paper width of 8.5 inches or wider.",
                "9 Pin Serial Printer: Uses 9 pins to transfer data.",
                "24 Pin Parallel Printer: Uses 24 pins for faster data transmission."
              ]
            },
            {
              type: "heading",
              text: "Storage Devices"
            },
            {
              type: "paragraph",
              text: "Devices used to store data, instructions, and information. Functions include Reading (transferring from storage to memory) and Writing (transferring from memory to storage)."
            },
            {
              type: "definition",
              title: "Primary Storage (Main Storage)",
              text: "Temporary area for holding data, instructions, and information."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Read Only Memory (ROM): Permanent memory containing essential operating instructions that cannot be changed.",
                "Random Access Memory (RAM): Temporary memory where data is erased when the computer is turned off."
              ]
            },
            {
              type: "heading",
              text: "Four Main Types of Secondary Storage Devices"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Magnetic Storage: Uses magnetized particles on oxide-based surfaces (e.g., Floppy disk, Hard disk drive, Zip disk drive, Tape drive).",
                "Optical Storage: Uses patterns of pits on a transparent surface (e.g., CD-ROM drive, DVD-ROM drive).",
                "Magneto-Optical: Combines optical reading with rewritable capabilities (e.g., CD-R drive, CD-RW drive).",
                "Solid-state Electronic: Uses non-volatile memory arrays (e.g., Memory Cards, Compact Flash, Smart Media, Memory Stick)."
              ]
            },
            {
              type: "heading",
              text: "Communication Devices"
            },
            {
              type: "definition",
              title: "Network Interface Card (NIC)",
              text: "An expansion board that physically connects a computer to a network and controls information flow."
            },
            {
              type: "definition",
              title: "Modem (Modulator/Demodulator)",
              text: "Lets computers exchange information through telephone lines (Internal or External)."
            }
          ],
          flashcards: [
            {
              id: "fc_hw_001",
              front: "What is the function of the Arithmetic Logic Unit (ALU)?",
              back: "Carries out arithmetic operations (addition, subtraction, multiplication, division) and logic or comparison operations."
            },
            {
              id: "fc_hw_002",
              front: "What does RAM stand for and what is its characteristic?",
              back: "Random Access Memory; it is temporary memory where data is lost when the computer is turned off."
            },
            {
              id: "fc_hw_003",
              front: "What is the main function of the Control Unit (CU)?",
              back: "Directs the entire operation of the CPU, responsible for fetching, decoding, executing, and storing information or instructions."
            },
            {
              id: "fc_hw_004",
              front: "What is ROM?",
              back: "Read Only Memory; permanent memory containing instructions needed for basic operations that cannot be changed."
            },
            {
              id: "fc_hw_005",
              front: "What device reads product codes using laser beams for inventory and monitoring?",
              back: "Barcode Reader / Wand Reader"
            }
          ],
          questions: [
            {
              id: "q_hw_001",
              type: "identification",
              question: "What internal component of the CPU is responsible for carrying out arithmetic and logical operations?",
              answer: "Arithmetic Logic Unit",
              explanation: "The Arithmetic Logic Unit (ALU) performs all mathematical calculations and logical comparisons within the CPU.",
              difficulty: "medium",
              tags: ["hardware", "cpu"]
            },
            {
              id: "q_hw_002",
              type: "true_false",
              question: "Modified True or False: ROM stands for Read Only Memory and its contents are erased when the computer is turned off.",
              choices: [
                "True",
                "False - ROM is permanent and retained when powered off (RAM is temporary)"
              ],
              answer: 1,
              explanation: "ROM is permanent memory (non-volatile), whereas RAM is temporary memory that loses data when powered off.",
              difficulty: "easy",
              tags: ["hardware", "memory"]
            },
            {
              id: "q_hw_003",
              type: "identification",
              question: "What type of printer uses a laser beam to create patterns of electrical charges on a rotating drum, similar to a photocopy machine?",
              answer: "Laser Printer",
              explanation: "Laser printers use laser technology and toner to produce high-quality printouts.",
              difficulty: "medium",
              tags: ["hardware", "output"]
            }
          ]
        },
        {
          id: "lesson_software_excel",
          title: "Software and Basic Excel Functions",
          description: "Study of software types, freeware, shareware, open source, and essential spreadsheet formulas.",
          difficulty: "medium",
          estimatedTime: "40 mins",
          tags: ["software", "excel", "functions"],
          learningObjectives: [
            "Distinguish between application software and system software.",
            "Understand software licensing types (freeware, shareware, open source).",
            "Apply basic Excel functions like SUM, PRODUCT, QUOTIENT, MOD, MIN, and MAX."
          ],
          keywords: ["Software", "Application", "System", "SUM", "PRODUCT", "QUOTIENT", "MOD", "MIN", "MAX"],
          content: [
            {
              type: "heading",
              text: "Introduction to Software"
            },
            {
              type: "paragraph",
              text: "Software is a set of instructions that tells the computer what to do and perform specific tasks. It is intangible."
            },
            {
              type: "heading",
              text: "Types of Software"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "System Software: Operating systems and utility programs.",
                "Application Software: Productivity software (Word processing like MS Word/Google Docs, Spreadsheet like MS Excel, Presentation like MS PowerPoint/Slides), Multimedia (Video editing, Image editing like Photoshop/Canva, Sound editing like Audacity), Web page software, and Entertainment/Personal software."
              ]
            },
            {
              type: "heading",
              text: "Software Classifications by Licensing"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Freeware: Software that is free to use (e.g., Facebook, Instagram).",
                "Shareware: Software that you can use for a limited time only (e.g., trial versions).",
                "Beta version: Software that is still under development and testing.",
                "Open Source: Software that can be freely used, modified, and downloaded on the internet."
              ]
            },
            {
              type: "heading",
              text: "Basic Excel Functions and Formulas"
            },
            {
              type: "definition",
              title: "SUM()",
              text: "Adds values or specified cells. Syntax: =SUM(number1, number2, ...). You can use comma (,) for longcut or colon (:) for shortcut range."
            },
            {
              type: "definition",
              title: "PRODUCT()",
              text: "Multiplies values of specified cells. Syntax: =PRODUCT(number1, number2, ...)."
            },
            {
              type: "definition",
              title: "QUOTIENT()",
              text: "Returns the integer portion of a division. Only two cell values can be used, separated by a comma. Syntax: =QUOTIENT(number1, number2)."
            },
            {
              type: "definition",
              title: "MOD()",
              text: "Returns the remainder after a number is divided by a divisor. Only two cell values can be used. Syntax: =MOD(number1, number2)."
            },
            {
              type: "definition",
              title: "MIN()",
              text: "Returns the smallest number in a set of values, ignoring logical values and text. Syntax: =MIN(number1, number2, ...)."
            },
            {
              type: "definition",
              title: "MAX()",
              text: "Returns the largest number in a set of values, ignoring logical values and text. Syntax: =MAX(number1, number2, ...)."
            }
          ],
          flashcards: [
            {
              id: "fc_sw_001",
              front: "What is shareware?",
              back: "Software that you can use for a limited time only before requiring purchase or registration."
            },
            {
              id: "fc_sw_002",
              front: "What does the Excel QUOTIENT function return?",
              back: "Returns the integer portion of a division using only two cell values separated by a comma."
            },
            {
              id: "fc_sw_003",
              front: "What is open source software?",
              back: "Software that can be freely used, downloaded, and modified on the internet."
            },
            {
              id: "fc_sw_004",
              front: "What does the MOD function do in Excel?",
              back: "Returns the remainder after a number is divided by a divisor."
            }
          ],
          questions: [
            {
              id: "q_sw_001",
              type: "identification",
              question: "What type of software is distributed for free use but typically requires payment after a trial period?",
              answer: "Shareware",
              explanation: "Shareware is trial software provided free for evaluation purposes for a limited time.",
              difficulty: "easy",
              tags: ["software", "licensing"]
            },
            {
              id: "q_sw_002",
              type: "true_false",
              question: "Modified True or False: In Excel, the QUOTIENT function allows more than two cell arguments separated by colons.",
              choices: [
                "True",
                "False - QUOTIENT only allows exactly two cell values separated by a comma."
              ],
              answer: 1,
              explanation: "QUOTIENT strictly takes only two cell arguments (numerator and denominator) separated by a comma.",
              difficulty: "medium",
              tags: ["excel", "formulas"]
            }
          ]
        },
        {
          id: "lesson_computer_characteristics_applications",
          title: "Computer Characteristics, Functions & Applications",
          description: "Exploration of computer functions (Input, Process, Output, Store), core characteristics, and applications across various fields.",
          difficulty: "easy",
          estimatedTime: "35 mins",
          tags: ["characteristics", "applications", "functions"],
          learningObjectives: [
            "List and explain the four basic computer functions.",
            "Describe the characteristics of computers (speed, memory, diligence, versatility, accuracy).",
            "Identify real-world applications of computers in different industries."
          ],
          keywords: ["Speed", "Memory", "Diligence", "Versatility", "Accuracy", "Applications"],
          content: [
            {
              type: "heading",
              text: "Computer Functions"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Input: Words, symbols, numbers, sound, pictures, program instructions.",
                "Process: Program calculates, sorts, modifies data using the microprocessor/CPU.",
                "Output: Results of processing (reports, graphs, documents, pictures via printer or monitor).",
                "Store: Memory is a temporary holding area (RAM), while storage is permanent (disk)."
              ]
            },
            {
              type: "heading",
              text: "Characteristics of a Computer"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Speed: Capable of performing billions of operations per second.",
                "Memory: Can store and recall vast amounts of information without forgetting unless asked.",
                "Diligence: Free from tiredness, lack of concentration, and fatigue.",
                "Versatility (Adaptability): Adapts easily to different subjects or occupations; skilled in many tasks.",
                "Accuracy: Free from technological errors; errors are usually due to human/programmer weakness or incorrect data."
              ]
            },
            {
              type: "heading",
              text: "Applications of Computers"
            },
            {
              type: "paragraph",
              text: "Computers impact numerous fields:"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Engineering & Architecture: Used for 3D modeling, visual walkthroughs, and precision designing.",
                "Education: Enhances student learning through modern digital teaching methods.",
                "Government: Weather forecasting, park management, tax collection, and social security processing.",
                "The Home: Personal record keeping, correspondence, budgeting, and global connectivity.",
                "Health and Medicine: Monitoring critically ill patients in ICUs and providing cross-sectional body scans.",
                "Manufacturing Industries: Handling dangerous or unpleasant tasks in extreme environments.",
                "Connectivity: Assisting physically and mentally disabled individuals.",
                "Scientific Research: Propelling research and calculations forward.",
                "Communication & Paperwork: Connecting globally via the World Wide Web and reducing manual paperwork."
              ]
            }
          ],
          flashcards: [
            {
              id: "fc_app_001",
              front: "What is computer diligence?",
              back: "The characteristic of being free from tiredness, lack of concentration, and fatigue."
            },
            {
              id: "fc_app_002",
              front: "Why do errors occur in a computer system according to the text?",
              back: "Mainly due to human weakness, imprecise thinking by the programmer, or incorrect input data."
            }
          ],
          questions: [
            {
              id: "q_app_001",
              type: "identification",
              question: "Which characteristic of a computer refers to its ability to operate continuously without fatigue or loss of concentration?",
              answer: "Diligence",
              explanation: "Diligence is the computer's capacity to perform tasks repeatedly with exactly the same consistency and without tiredness.",
              difficulty: "easy",
              tags: ["characteristics"]
            },
            {
              id: "q_app_002",
              type: "true_false",
              question: "Modified True or False: Computer errors are primarily caused by technological hardware weaknesses rather than human programming errors.",
              choices: [
                "True",
                "False - Errors are mainly due to human weakness, imprecise thinking, or incorrect data."
              ],
              answer: 1,
              explanation: "Computers execute instructions precisely; errors stem from incorrect human programming or faulty input data.",
              difficulty: "easy",
              tags: ["characteristics"]
            }
          ]
        },
        {
          id: "lesson_evolution_ict_www",
          title: "Evolution of ICT and the World Wide Web",
          description: "Tracing the four main historical periods of ICT, key inventions, and the evolution of the World Wide Web from Web 1.0 to Web 3.0.",
          difficulty: "hard",
          estimatedTime: "50 mins",
          tags: ["history", "ict", "www", "web"],
          learningObjectives: [
            "Identify the four main periods in the history of ICT.",
            "Recognize key historical figures and inventions (Abacus, Pascaline, Analytical Engine, Telegraph, Telephone, ENIAC, Transistor).",
            "Trace the evolution of the World Wide Web (Web 1.0, 2.0, 3.0)."
          ],
          keywords: ["Premechanical", "Mechanical", "Electromechanical", "Electronic", "WWW", "Web 1.0", "Web 2.0", "Web 3.0"],
          content: [
            {
              type: "heading",
              text: "Definition of ICT"
            },
            {
              type: "paragraph",
              text: "Information and Communications Technology (ICT) refers to technologies, both hardware and software, that enable humans to communicate with one another."
            },
            {
              type: "heading",
              text: "Four Main Periods in the History of ICT"
            },
            {
              type: "heading",
              text: "1. The Premechanical Period (3,000 BCE to 1,450 CE)"
            },
            {
              type: "paragraph",
              text: "Humans communicated using symbols on stone tablets (heavy and bulky). Later, the papyrus plant revolutionized paper production, and libraries became the first data centers in history."
            },
            {
              type: "definition",
              title: "Abacus",
              text: "The first counting device, created in China and introduced in the 2nd Century BCE by Romans. It was a manual device and the first to process information."
            },
            {
              type: "heading",
              text: "2. The Mechanical Period (1450 - 1840)"
            },
            {
              type: "paragraph",
              text: "Concentrated primarily on developing machines to enhance calculation speed."
            },
            {
              type: "definition",
              title: "Pascaline",
              text: "A mechanical calculator invented by Blaise Pascal and Wilhelm Schickard."
            },
            {
              type: "definition",
              title: "Analytical Engine",
              text: "Invented by Charles Babbage in 1837. Charles Babbage earned the title 'Father of the Computers'. It contained an ALU, control flow with conditional branching and loops, and integrated memory, serving as the blueprint for 20th-century computers."
            },
            {
              type: "heading",
              text: "3. The Electromechanical Period (1840 - 1940)"
            },
            {
              type: "paragraph",
              text: "Ushered in an age of electrical communications."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Telegraph: The first electrical communications device, invented in 1837 by William Cooke and Sir Charles Wheatstone using five magnetic needles.",
                "Morse Code: Invented by Samuel Morse in 1844; a single-circuit telegraph system.",
                "Telephone: Patented in 1876 by Alexander Graham Bell; converts sounds into electricity transmitted over copper wires.",
                "The Bombe: Invented in 1939 by Alan Turing (improved by Gordon Welchman) to decipher German enigma codes during WWII."
              ]
            },
            {
              type: "heading",
              text: "4. The Electronic Period (1940s to Present)"
            },
            {
              type: "paragraph",
              text: "Focuses on solid-state devices and electronics across four sub-periods: vacuum tubes, transistors, integrated circuits, and computer processors."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "ENIAC (Electronic Numerical Integrator and Computer): The first electronic, general-purpose computer occupying 167 square meters.",
                "Transistor: Invented in 1947; lightweight, fast alternative to vacuum tubes and the foundation of modern electronics.",
                "Integrated Circuit (IC): Group of transistors and circuit elements compressed into a single package.",
                "Olivetti Programma 101: Designed by Pier Giorgio Perotto; first commercial personal computer sold in 1965.",
                "IBM 5150: Introduced in August 1981 by the IBM Entry Systems Division led by Don Estridge; set PC platform standards."
              ]
            },
            {
              type: "heading",
              text: "The World Wide Web (WWW)"
            },
            {
              type: "definition",
              title: "World Wide Web",
              text: "Proposed in 1989 by Tim Berners-Lee; a system that enables users to access hypertext documents and files over the internet."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Web 1.0 (Read-only Web): Users access static information or hypertext files.",
                "Web 2.0 (Read-and-write Web): Introduced user interaction, emailing websites, and social networking.",
                "Web 3.0 (Semantic Executing Web): Envisioned as a smarter web enabling faster, wider-range semantic searches."
              ]
            },
            {
              type: "heading",
              text: "Social Media and Virality"
            },
            {
              type: "paragraph",
              text: "Social media applications began with Web 2.0 for virtual community communication. Virality is defined as the rate of reposting or sharing of photos, information, or ideas published on social media profiles."
            }
          ],
          flashcards: [
            {
              id: "fc_hist_001",
              front: "Who is known as the 'Father of the Computers' for inventing the Analytical Engine?",
              back: "Charles Babbage"
            },
            {
              id: "fc_hist_002",
              front: "What was the first commercial personal computer sold in 1965?",
              back: "Olivetti Programma 101"
            },
            {
              id: "fc_hist_003",
              front: "Who proposed the World Wide Web in 1989?",
              back: "Tim Berners-Lee"
            },
            {
              id: "fc_hist_004",
              front: "What did ENIAC stand for?",
              back: "Electronic Numerical Integrator and Computer"
            },
            {
              id: "fc_hist_005",
              front: "What is virality in social media?",
              back: "The rate of reposting or sharing of photos, pieces of information, or ideas published on a social media profile page."
            }
          ],
          questions: [
            {
              id: "q_hist_001",
              type: "identification",
              question: "Who invented the Analytical Engine in 1837, earning him the title 'Father of the Computers'?",
              answer: "Charles Babbage",
              explanation: "Charles Babbage designed the Analytical Engine, whose architecture laid the foundation for modern computers.",
              difficulty: "medium",
              tags: ["history", "inventors"]
            },
            {
              id: "q_hist_002",
              type: "true_false",
              question: "Modified True or False: Web 1.0 is known as the read-and-write web where users actively interact on social networking sites.",
              choices: [
                "True",
                "False - Web 1.0 is the read-only web; Web 2.0 is the read-and-write web."
              ],
              answer: 1,
              explanation: "Web 1.0 was primarily static (read-only), whereas Web 2.0 introduced interactivity and social media.",
              difficulty: "medium",
              tags: ["www", "history"]
            }
          ]
        }
      ]
    }
  ]
};
