window.reviewerData = {
  appName: "Learning OS Reviewer",
  version: "3.2",
  subjects: [
    {
      id: "subject_ict",
      name: "Information and Communications Technology",
      description: "Comprehensive guide covering computer hardware, software, Excel functions, the history and evolution of ICT, computer characteristics, and real-world applications across multiple sources.",
      icon: "cpu",
      color: "blue",
      tags: ["ICT", "Computer Hardware", "Software", "History", "Excel", "Applications"],
      lessons: [
        {
          id: "lesson_computer_hardware",
          title: "The Basics of Computer Hardware",
          description: "An overview of input devices, system units, internal components, output devices, storage devices, and communication devices.",
          difficulty: "medium",
          estimatedTime: "30 mins",
          tags: ["hardware", "input", "output", "storage", "system unit"],
          content: [
            {
              type: "heading",
              text: "Introduction to Computer Hardware"
            },
            {
              type: "paragraph",
              text: "Hardware devices accept input (data and instructions) from the user or from another computer system. They are categorized into input devices, system units, output devices, storage devices, and communication devices."
            },
            {
              type: "definition",
              title: "Input Devices",
              text: "Devices that accept input (data and instructions) from the user or from another computer system."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Keyboard: Similar to a typewriter with special keys to enter data and commands.",
                "Mouse: A box-like input device connected via wire to control cursor movement.",
                "Trackball: An input device featuring a movable ball for pointer control.",
                "Light Pen: Uses a light-sensitive detector to select objects directly on a screen.",
                "Barcode Reader: Uses light rays to read product codes for easy inventory.",
                "Wand Reader: Uses laser beams to read special numbers, letters, or symbols.",
                "Scanner: Reads text or illustrations on paper and translates them into digital form.",
                "Audio Digitizer: Contains circuitry to digitize sounds from microphones into computer memory.",
                "Sensing Devices: Designed to monitor temperature, pressure, and humidity in research and monitoring."
              ]
            },
            {
              type: "heading",
              text: "System Unit and Internal Components"
            },
            {
              type: "paragraph",
              text: "The system unit is the electronic circuitry housed within the computer where processing happens. It includes external parts like power switches, casings, LEDs, and ports, as well as internal components such as the CPU, motherboard, expansion cards, storage drives, and power supply."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Microprocessor or CPU: The heart or brain carrying out user and software instructions.",
                "Arithmetic Logic Unit (ALU): Performs arithmetic (add, subtract, multiply, divide) and logic/comparison operations.",
                "Control Unit (CU): Directs the entire operation of the CPU, handling fetching, decoding, executing, and storing information.",
                "Registers: Small data holding places in the microprocessor for passing data between instructions.",
                "Motherboard: Main circuit board holding the CPU, memory, and communication slots.",
                "BIOS Chip: Acts as an interface between hardware and OS, booting up the machine and handling hardware settings.",
                "CMOS Chip: Holds the real-time clock and BIOS settings, powered by a built-in battery when off."
              ]
            },
            {
              type: "heading",
              text: "Output and Storage Devices"
            },
            {
              type: "paragraph",
              text: "Output devices translate and represent processed information into human-readable forms, such as monitors and printers. Storage devices are categorized into primary storage (RAM and ROM) and secondary storage (magnetic, optical, magneto-optical, and solid-state)."
            }
          ],
          flashcards: [
            {
              id: "fc_hw_001",
              front: "What is the function of the Numeric Keypad on a keyboard?",
              back: "It has keys numbered 0 to 9 and mathematical keys (+, -, *, /) used in three ways: cursor movement, editing, and calculating."
            },
            {
              id: "fc_hw_002",
              front: "What does the Arithmetic Logic Unit (ALU) do?",
              back: "It carries out arithmetic operations (addition, subtraction, multiplication, division) and logic/comparison operations."
            },
            {
              id: "fc_hw_003",
              front: "What is the function of the CMOS chip?",
              back: "It holds the real-time clock (date and time) and BIOS settings, powered by a built-in battery when the computer is off."
            },
            {
              id: "fc_hw_004",
              front: "What is the difference between RAM and ROM?",
              back: "ROM is permanent memory containing essential startup instructions that cannot be changed, whereas RAM is temporary memory erased when the computer is turned off."
            }
          ],
          questions: [
            {
              type: "identification",
              question: "What key is pressed to erase the character on the left side of the cursor one by one?",
              answer: "Backspace Key",
              explanation: "The Backspace Key deletes characters to the left of the current cursor position.",
              difficulty: "easy",
              tags: ["keyboard"]
            },
            {
              type: "identification",
              question: "What device is used in scientific and engineering applications to produce scaled drawings finely and appropriately?",
              answer: "Plotter",
              explanation: "A plotter is an output device specialized for high-precision scaled drawings in engineering and architecture.",
              difficulty: "medium",
              tags: ["output", "hardware"]
            },
            {
              type: "true_false",
              question: "Modified True or False: Reading is the process of transferring items from memory to a storage medium.",
              answer: false,
              explanation: "False. Reading transfers data from a storage medium into memory, whereas writing transfers data from memory to a storage medium.",
              difficulty: "medium",
              tags: ["storage"]
            },
            {
              type: "true_false",
              question: "Modified True or False: The Control Unit is responsible for fetching, decoding, executing, and storing information or instructions within the CPU.",
              answer: true,
              explanation: "True. The Control Unit directs the entire operation of the CPU including fetching and executing instructions.",
              difficulty: "medium",
              tags: ["cpu"]
            },
            {
              type: "identification",
              question: "What hardware component acts as the heart or brain of the computer, carrying out instructions from either the user or software?",
              answer: "Microprocessor or Central Processing Unit",
              explanation: "The CPU or microprocessor processes instructions and manages operations.",
              difficulty: "easy",
              tags: ["cpu"]
            }
          ]
        },
        {
          id: "lesson_software_and_excel",
          title: "Software and Basic Excel Functions",
          description: "Understanding types of software, software classifications, and fundamental Microsoft Excel formulas.",
          difficulty: "medium",
          estimatedTime: "25 mins",
          tags: ["software", "excel", "functions"],
          content: [
            {
              type: "heading",
              text: "Introduction to Software"
            },
            {
              type: "paragraph",
              text: "Software consists of a set of instructions that tells the computer what to do and perform specific tasks. It is classified into system software and application software, with categories like productivity, multimedia, entertainment, and personal use."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Freeware: Software that is free to use indefinitely.",
                "Shareware: Software that you can use for a limited time only before purchasing.",
                "Beta Version: Software that is still under development and testing.",
                "Open Source: Software that can be used and downloaded freely on the internet."
              ]
            },
            {
              type: "heading",
              text: "Basic Excel Functions"
            },
            {
              type: "paragraph",
              text: "Microsoft Excel formulas and functions enable automated mathematical calculations using cell references, commas, and colons."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "SUM(): Adds values or specified cells using commas or colons.",
                "PRODUCT(): Multiplies values of specified cells.",
                "QUOTIENT(): Returns the integer portion of a division using strictly two cell values.",
                "MOD(): Returns the remainder after a number is divided by a divisor using two cell values.",
                "MIN(): Returns the smallest number in a set of values, ignoring text and logical values.",
                "MAX(): Returns the largest number in a set of values, ignoring text and logical values."
              ]
            }
          ],
          flashcards: [
            {
              id: "fc_sw_001",
              front: "What is Shareware?",
              back: "Software that you can use for a limited time only before purchasing or registering."
            },
            {
              id: "fc_sw_002",
              front: "What is a Beta Version?",
              back: "Software that is still currently under development and testing before official release."
            },
            {
              id: "fc_sw_003",
              front: "What are the rules for using QUOTIENT() in Excel?",
              back: "It returns the integer portion of a division and accepts strictly two cell values separated by a comma."
            }
          ],
          questions: [
            {
              type: "true_false",
              question: "Modified True or False: Freeware is software that you can only use for a limited time before payment.",
              answer: false,
              explanation: "False. Freeware is free to use indefinitely, whereas shareware is limited by time or trials.",
              difficulty: "easy",
              tags: ["software"]
            },
            {
              type: "identification",
              question: "What term describes software that is still currently under development, such as a game trial or test release?",
              answer: "Beta Version",
              explanation: "A beta version refers to software in its testing and development stage before final release.",
              difficulty: "easy",
              tags: ["software"]
            },
            {
              type: "identification",
              question: "Which Excel function returns the integer portion of a division using strictly two cell values?",
              answer: "QUOTIENT()",
              explanation: "The QUOTIENT() function returns the integer portion of a division and accepts only two cell values.",
              difficulty: "medium",
              tags: ["excel", "functions"]
            },
            {
              type: "true_false",
              question: "Modified True or False: The MOD() function in Excel returns the remainder after a number is divided by a divisor.",
              answer: true,
              explanation: "True. MOD() returns the mathematical remainder using two cell values.",
              difficulty: "easy",
              tags: ["excel", "functions"]
            }
          ]
        },
        {
          id: "lesson_evolution_of_ict",
          title: "Evolution of ICT and the World Wide Web",
          description: "Exploring the historical periods of ICT from premechanical times to the electronic era, plus the evolution of the Web and Social Media.",
          difficulty: "hard",
          estimatedTime: "35 mins",
          tags: ["history", "ict", "www", "social media"],
          content: [
            {
              type: "heading",
              text: "Definition and Periods of ICT"
            },
            {
              type: "paragraph",
              text: "Information and Communications Technology (ICT) refers to technologies, both hardware and software, through which humans communicate. Its evolution is divided into four main historical periods: Premechanical, Mechanical, Electromechanical, and Electronic."
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Premechanical Period (3,000 BCE to 1,450 CE): Introduction of papyrus, libraries as data centers, and the Abacus.",
                "Mechanical Period (1450 to 1840): Focus on calculating machines such as Pascaline and Charles Babbage's Analytical Engine.",
                "Electromechanical Period (1840 to 1940): Invention of the telegraph, Morse code, telephone, and Alan Turing's Bombe.",
                "Electronic Period (1940s to Present): Advent of ENIAC, transistors, integrated circuits, and personal computers."
              ]
            },
            {
              type: "heading",
              text: "World Wide Web and Social Media"
            },
            {
              type: "paragraph",
              text: "Proposed by Tim Berners-Lee in 1989, the World Wide Web evolved from Web 1.0 (read-only) to Web 2.0 (read-and-write with social media and user interaction) and Web 3.0 (semantic/executing web). Social media introduced concepts like virality, measuring how quickly content spreads."
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
              front: "What was ENIAC?",
              back: "Electronic Numerical Integrator and Computer; the first electronic and general-purpose computer that occupied 167 square meters."
            },
            {
              id: "fc_hist_003",
              front: "What is the difference between Web 1.0 and Web 2.0?",
              back: "Web 1.0 is the read-only web, whereas Web 2.0 is the read-and-write web that introduced user interaction and social networking."
            }
          ],
          questions: [
            {
              type: "identification",
              question: "What term is defined as the rate of reposting or sharing of photos, pieces of information, or ideas published on a social media profile page?",
              answer: "Virality",
              explanation: "Virality measures how quickly content spreads across social media networks through sharing and reposting.",
              difficulty: "medium",
              tags: ["social media"]
            },
            {
              type: "true_false",
              question: "Modified True or False: ENIAC was the first electronic and general-purpose computer that occupied 167 square meters.",
              answer: true,
              explanation: "True. ENIAC occupied 167 square meters and marked a milestone in the electronic period.",
              difficulty: "easy",
              tags: ["history", "electronic"]
            },
            {
              type: "identification",
              question: "Which machine was invented by Alan Turing and Gordon Welchman to decipher encrypted German codes during World War II?",
              answer: "The Bombe",
              explanation: "The Bombe was an electromechanical device created during WWII to break Enigma-encrypted messages.",
              difficulty: "hard",
              tags: ["history", "electromechanical"]
            },
            {
              type: "true_false",
              question: "Modified True or False: Web 1.0 is known as the read-and-write web that introduced user interaction and social networking.",
              answer: false,
              explanation: "False. Web 1.0 is the read-only web, whereas Web 2.0 is the read-and-write web that introduced user interaction.",
              difficulty: "medium",
              tags: ["www", "history"]
            }
          ]
        },
        {
          id: "lesson_computer_characteristics_and_applications",
          title: "Computer Characteristics, Functions, and Real-World Applications",
          description: "Examining core computer functions (Input, Process, Output, Store), unique characteristics like speed and diligence, and domain-specific applications.",
          difficulty: "medium",
          estimatedTime: "25 mins",
          tags: ["characteristics", "functions", "applications", "computer science"],
          content: [
            {
              type: "heading",
              text: "Core Computer Functions"
            },
            {
              type: "paragraph",
              text: "Computers execute four fundamental operations: Input (accepting words, symbols, numbers, sound, or pictures), Process (calculating, sorting, or modifying data via CPU), Output (delivering results like reports or graphs via printer/monitor), and Storage (holding temporary data in RAM or permanent data on disk)."
            },
            {
              type: "heading",
              text: "Characteristics of a Computer"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Speed: Capable of executing billions of operations per second far exceeding human capability.",
                "Memory: Can store and recall vast amounts of information without forgetting unless instructed.",
                "Diligence: Free from tiredness, lack of concentration, and fatigue during long tasks.",
                "Versatility: Adaptable to easily handle diverse subjects, occupations, and processing tasks.",
                "Accuracy: Operates with extreme precision; errors are typically due to human programmer weakness or incorrect data."
              ]
            },
            {
              type: "heading",
              text: "Real-World Applications"
            },
            {
              type: "paragraph",
              text: "Computers impact numerous fields including Government (weather forecasting, tax collection), Home (personal budgeting, communication), Health and Medicine (monitoring ICU patients), Manufacturing Industries (handling dangerous tasks), Connectivity (assisting disabled users), and Scientific Research."
            }
          ],
          flashcards: [
            {
              id: "fc_app_001",
              front: "What are the four core functions of a computer?",
              back: "Input, Process, Output, and Store."
            },
            {
              id: "fc_app_002",
              front: "Why do errors occur in computer processing according to computer characteristics?",
              back: "Errors are mainly due to human weakness (imprecise thinking by the programmer or incorrect data) rather than technological failure."
            }
          ],
          questions: [
            {
              type: "true_false",
              question: "Modified True or False: Computer errors are primarily caused by hardware failure rather than human or programmer weakness.",
              answer: false,
              explanation: "False. Errors in a computer are mainly due to human weakness, such as imprecise thinking by the programmer or incorrect input data.",
              difficulty: "easy",
              tags: ["characteristics"]
            },
            {
              type: "identification",
              question: "What computer characteristic describes its freedom from tiredness, lack of concentration, and fatigue?",
              answer: "Diligence",
              explanation: "Diligence means a computer can perform repetitive tasks continuously without getting tired or losing concentration.",
              difficulty: "medium",
              tags: ["characteristics"]
            }
          ]
        }
      ]
    }
  ]
};
