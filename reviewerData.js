window.reviewerData = {
  appName: "Learning OS Reviewer",
  version: "3.2",
  subjects: [
    {
      id: "subject_ict",
      name: "Information and Communications Technology",
      description: "Comprehensive guide covering computer hardware, software, Excel functions, the history and evolution of ICT, computer characteristics, and real-world applications.",
      icon: "cpu",
      color: "blue",
      tags: ["ICT", "Computer Hardware", "Software", "History", "Excel"],
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
              type: "heading",
              text: "Input Devices"
            },
            {
              type: "paragraph",
              text: "Input devices allow users to enter data and commands into the computer."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Keyboard: Similar to a typewriter with special buttons or keys. Parts include Alphanumeric Keypad, Numeric Keypad (numbers 0-9 and mathematical keys +, -, *, / used for cursor movement, editing, and calculating), Special Keys (arrows, Page Up, Page Down, Home, End, Insert, Delete, Print Screen, Scroll Lock, Pause/Break), Enter Key, Backspace Key (erases characters to the left one by one), and Status Lights (upper right corner indicating Num Lock, Caps Lock, or Scroll Lock activation).",
                "Mouse: A box-like input device with a long wire that controls cursor/pointer movement. Functions include Pointing, Clicking, Double Clicking, Dragging, and Right Clicking.",
                "Trackball: A stationary mouse lying on its back where you rotate a ball with your thumb, fingers, or palm.",
                "Light Pen: Utilizes a light-sensitive detector to select objects on a display screen directly.",
                "Touch Screen: A display screen with a touch-sensitive transparent panel covering it.",
                "Touch Tablet: Used by designers, engineers, and artists for drawing or designing.",
                "Barcode Reader: Uses light rays to read product codes for inventory and monitoring.",
                "Wand Reader: Uses laser beams to read special numbers, letters, or symbols.",
                "Scanner: Reads text or illustrations printed on paper and translates them into digital form.",
                "Digital Camera: Captures snapshots of real images and stores bit patterns on digital storage.",
                "Audio Digitizer: Contains circuitry to digitize sounds from microphones into computer memory.",
                "Sensing Devices: Designed specifically to monitor temperature, pressure, and humidity for research, robotics, medical monitoring, and weather forecasting."
              ]
            },
            {
              type: "heading",
              text: "System Unit"
            },
            {
              type: "paragraph",
              text: "The system unit is the electronic circuitry housed within the computer where processing happens."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "External Parts: Power Switch (switches computer on/off), Reset Switch (restarts computer without turning it off when it hangs), Casing (shell/cover protecting internal parts), LED (Light Emitting Diode lights in front), Ports (holes at the back for data transfer).",
                "Internal Parts - CPU: The microprocessor acts as the heart or brain carrying out instructions. Main parts include Arithmetic Logic Unit (ALU - performs arithmetic and logic operations), Control Unit (CU - directs entire operation, fetches, decodes, executes, and stores information), and Registers (small data holding places for passing data).",
                "Internal Parts - Cards & Motherboard: Cards include Sound Card, Video Card, Network Card, Game Card, and Memory Card. The Motherboard is the main circuit board containing CPU, memory, and ports.",
                "System Board Components: Port, Memory Slot, Chipsets, Cache Memory (high-speed buffer storage), Jumpers, Processor Socket, and BIOS (Basic Input/Output System) chip.",
                "Other Internal Parts: Hard Disk, Power Supply, Fan, Speaker, and Memory."
              ]
            },
            {
              type: "heading",
              text: "Output Devices"
            },
            {
              type: "paragraph",
              text: "Output devices translate and represent processed information into human-readable forms."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Monitor: Resembles a television screen. Main classes include CRT (uses small picture elements called pixels; larger size and high power consumption) and Flat-Panel Display Monitor (reduced volume, weight, and power). Types by color include Monochrome, Gray-Scale, and Color (RGB monitor).",
                "Printer (Print Device): Produces printed output on paper. Kinds of print devices include Ink-jet Printer (sprays ink) and Laser Printer (uses laser beam and rotating drum). Types by size include 80 Column Paper printer and 132 Column Paper printer. Types by speed include 9 Pin Serial Printer and 24 Pin Parallel Printer.",
                "Speaker: Changes electrical signals into audible sound.",
                "Plotter: Used in scientific and engineering applications for scaled drawings.",
                "Synthesizers: Designed to generate sounds electronically for music or noise."
              ]
            },
            {
              type: "heading",
              text: "Storage and Communication Devices"
            },
            {
              type: "paragraph",
              text: "Storage devices hold data and information for orderly retrieval. They perform reading and writing functions."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Primary Storage (Main Storage): Temporary area including ROM (Read Only Memory / Permanent Memory) and RAM (Random Access Memory / Temporary Memory).",
                "Four Main Types of Storage: Magnetic (Floppy disk drive, Hard disk drive, Zip disk drive, Tape drive), Optical (CD-ROM drive, DVD-ROM drive), Magneto-Optical (CD-R drive, CD-RW drive), and Solid-state Electronic (Memory Cards, Compact Flash, Smart Media, Memory Stick).",
                "Communication Devices: Devices used to transfer information between functional units via data transmission protocols, such as Network Interface Card (NIC) and Modem (Internal Modem)."
              ]
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
              front: "What are the main parts of the CPU?",
              back: "Arithmetic Logic Unit (ALU), Control Unit (CU), and Registers."
            },
            {
              id: "fc_hw_003",
              front: "What is the difference between RAM and ROM?",
              back: "RAM is temporary/volatile memory that gets erased when the computer turns off, while ROM is permanent memory containing essential instructions that cannot be changed."
            },
            {
              id: "fc_hw_004",
              front: "What does a Scanner do?",
              back: "It reads text or illustrations printed on paper and translates them into a digital form that the computer can use."
            },
            {
              id: "fc_hw_005",
              front: "What is the function of the BIOS chip?",
              back: "It acts as an interface between hardware and the operating system, controls hardware settings, and boots up the machine."
            }
          ],
          questions: [
            {
              type: "multiple_choice",
              question: "Which component of the CPU is responsible for carrying out arithmetic operations such as addition and subtraction?",
              choices: [
                "Control Unit",
                "Arithmetic Logic Unit (ALU)",
                "Registers",
                "BIOS Chip"
              ],
              answer: 1,
              explanation: "The Arithmetic Logic Unit (ALU) carries out arithmetic operations (addition, subtraction, multiplication, division) and logic/comparison operations.",
              difficulty: "easy",
              tags: ["cpu", "hardware"]
            },
            {
              type: "multiple_choice",
              question: "Which type of memory is known as permanent memory because its instructions cannot be changed?",
              choices: [
                "RAM",
                "Cache Memory",
                "ROM",
                "Registers"
              ],
              answer: 2,
              explanation: "ROM (Read Only Memory) contains important instructions that the computer needs for basic operation and cannot be changed or lost upon power off.",
              difficulty: "easy",
              tags: ["memory", "storage"]
            },
            {
              type: "identification",
              question: "What key is pressed to erase the character on the left side of the cursor one by one?",
              answer: "Backspace Key",
              explanation: "The Backspace Key deletes characters to the left of the current cursor position.",
              difficulty: "easy",
              tags: ["keyboard"]
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
              text: "Software consists of a set of instructions that tells the computer what to do and perform specific tasks. It is tangible and intangible (specifically, software is the intangible set of instructions)."
            },
            {
              type: "heading",
              text: "Types of Software"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Application Software: Productivity Software (Word processing like MS Word and Google Docs, Excel spreadsheet software, Presentation software like MS PowerPoint and Slides), Multimedia (Video editing, Image editing like Photoshop and Canva, Sound editing like Audacity), Web page software, Entertainment, and Personal software.",
                "System Software: Manages fundamental computer operations.",
                "Freeware: Software that is free to use (e.g., Facebook, Instagram).",
                "Shareware: Software that you can use for a limited time only (e.g., Canva trials).",
                "Beta Version: Software still under development (e.g., game deployments).",
                "Open Source: Software that can be used and downloaded freely on the internet."
              ]
            },
            {
              type: "heading",
              text: "Basic Excel Functions"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "SUM(): Adds values or specified cells. Syntax: =SUM(number1, number2). Uses comma (,) for shortcuts or colon (:) for ranges.",
                "PRODUCT(): Multiplies values of specified cells. Syntax: =PRODUCT(number1, number2).",
                "QUOTIENT(): Returns the integer portion of a division. Only two cell values can be used. Syntax: =QUOTIENT(number1, number2).",
                "MOD(): Returns the remainder after a number is divided by a divisor. Only two cell values can be used. Syntax: =MOD(number1, number2).",
                "MIN(): Returns the smallest number in a set of values, ignoring logical values and text. Syntax: =MIN(number1, number2).",
                "MAX(): Returns the largest number in a set of values, ignoring logical values and text. Syntax: =MAX(number1, number2)."
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
              front: "What is the syntax for the SUM function in Excel?",
              back: "=SUM(number1, number2) where you can use a comma (,) or colon (:)."
            },
            {
              id: "fc_sw_003",
              front: "How many cell values can be used in the QUOTIENT function?",
              back: "Only two cell values can be used."
            }
          ],
          questions: [
            {
              type: "multiple_choice",
              question: "Which Excel function returns the remainder after a number is divided by a divisor?",
              choices: [
                "QUOTIENT()",
                "MOD()",
                "PRODUCT()",
                "SUM()"
              ],
              answer: 1,
              explanation: "The MOD() function returns the remainder after a number is divided by a divisor using two cell values.",
              difficulty: "easy",
              tags: ["excel", "functions"]
            },
            {
              type: "true_false",
              question: "Freeware is software that you can only use for a limited time before payment.",
              answer: false,
              explanation: "Freeware is free to use indefinitely, whereas shareware is limited by time or trials.",
              difficulty: "easy",
              tags: ["software"]
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
              text: "Definition of ICT"
            },
            {
              type: "paragraph",
              text: "Information and Communications Technology (ICT) refers to technologies, both hardware and software, through which humans are able to communicate with one another."
            },
            {
              type: "heading",
              text: "Four Main Historical Periods of ICT"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "1. The Premechanical Period (3,000 BCE to 1,450 CE): Humans wrote symbols as substitutes. Papyrus plant revolutionized paper storage, making libraries the first data centers. The Abacus was introduced in the 2nd Century BCE by Romans/China as the first counting and information-processing device.",
                "2. The Mechanical Period (1450 - 1840): Concentrated on enhancement of calculation speed. Key inventions include the Pascaline (mechanical calculator by Blaise Pascal and Wilhelm Schickard) and the Analytical Engine (invented by Charles Babbage in 1837, earning him the title 'Father of the Computers' with ALU, control flow, and integrated memory).",
                "3. The Electromechanical Period (1840 - 1940): Ushered in electrical communications. The telegraph (invented in 1837 by William Cooke and Sir Charles Wheatstone) used electric current across five magnetic needles. Samuel Morse invented the single-circuit telegraph and Morse Code in 1844. Alexander Graham Bell patented the telephone in 1876. Alan Turing and Gordon Welchman invented The Bombe in 1939-1940 to decipher encrypted codes during WWII.",
                "4. The Electronic Period (1940s to Present): Focused on solid-state devices. Key milestones include ENIAC (first electronic general purpose computer occupying 167 square meters), the Transistor (invented in 1947, lightweight and fast), the Integrated Circuit (IC - group of transistors compressed in a single package), Olivetti Programma 101 (first commercial personal computer in 1965), and the IBM 5150 (released in August 1981, setting standard PC platforms)."
              ]
            },
            {
              type: "heading",
              text: "World Wide Web and Social Media"
            },
            {
              type: "paragraph",
              text: "The World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989 to access hypertext documents and files over the internet."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Web 1.0 (Read-only Web): Information or hypertext files are accessed by users.",
                "Web 2.0 (Read-and-write Web): Introduced user interaction, emailing websites, and social networking sites.",
                "Web 3.0 (Semantic executing Web): Smarter access to hypertext files with wider and faster search capabilities.",
                "Social Media: Applications starting with Web 2.0 used for communicating and socializing in virtual communities. Virality is defined as the rate of reposting or sharing of photos, information, or ideas."
              ]
            },
            {
              type: "heading",
              text: "Computer Characteristics and Applications"
            },
            {
              type: "paragraph",
              text: "Computers perform four main functions: Input, Process, Output, and Store. Their characteristics include Speed, Memory, Diligence, Versatility, and Accuracy."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Applications include Engineering & Architecture, Education, Government, The Home, Health and Medicine, Manufacturing Industries, Connectivity (assisting disabled individuals), Scientific Research, Communication with the World, and Paperwork reduction."
              ]
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
              front: "What is the difference between Web 1.0, Web 2.0, and Web 3.0?",
              back: "Web 1.0 is read-only, Web 2.0 is read-and-write (interactive/social), and Web 3.0 is the semantic executing web for smarter and faster searches."
            }
          ],
          questions: [
            {
              type: "multiple_choice",
              question: "Who invented the Analytical Engine in 1837, earning the title 'Father of the Computers'?",
              choices: [
                "Blaise Pascal",
                "Charles Babbage",
                "Tim Berners-Lee",
                "Alan Turing"
              ],
              answer: 1,
              explanation: "Charles Babbage invented the Analytical Engine, featuring an ALU, control flow, and integrated memory.",
              difficulty: "easy",
              tags: ["history", "ict"]
            },
            {
              type: "multiple_choice",
              question: "Which web era introduced user interaction, email integration, and social networking?",
              choices: [
                "Web 1.0",
                "Web 2.0",
                "Web 3.0",
                "Web 4.0"
              ],
              answer: 1,
              explanation: "Web 2.0 is the read-and-write web that enabled user interaction and social networking.",
              difficulty: "medium",
              tags: ["www", "history"]
            },
            {
              type: "identification",
              question: "What term is defined as the rate of reposting or sharing of photos, pieces of information, or ideas published on a social media profile page?",
              answer: "Virality",
              explanation: "Virality measures how quickly content spreads across social media networks through sharing and reposting.",
              difficulty: "medium",
              tags: ["social media"]
            }
          ]
        }
      ]
    }
  ]
};
