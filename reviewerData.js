window.reviewerData = {
  appName: "Learning OS Reviewer",
  version: "3.0",
  subjects: [
    {
      id: "subject_ict_computing",
      name: "Introduction to Information and Communications Technology & Computer Systems",
      description: "Comprehensive review database covering ICT evolution, computer uses, characteristics, hardware components, software types, and Excel functions.",
      icon: "bi-cpu",
      color: "#0d6efd",
      tags: ["ICT", "Hardware", "Software", "Excel", "Midterm"],
      lessons: [
        {
          id: "lesson_ict_evolution",
          title: "Module 1: Evolution of Information and Communications Technology",
          description: "Covers the four main periods of ICT history: premechanical, mechanical, electromechanical, and electronic, alongside the World Wide Web and social media.",
          difficulty: "easy",
          estimatedTime: "25 mins",
          tags: ["History", "ICT", "Premechanical", "Mechanical", "Electromechanical", "Electronic", "WWW"],
          learningObjectives: [
            "Identify the four main historical periods of ICT.",
            "Explain key inventions from abacus to ENIAC.",
            "Compare Web 1.0, Web 2.0, and Web 3.0."
          ],
          summary: "ICT evolved through four eras: premechanical, mechanical, electromechanical, and electronic, culminating in the World Wide Web and social media platforms.",
          content: [
            {
              type: "heading",
              text: "Definition of ICT"
            },
            {
              type: "paragraph",
              text: "Information and Communications Technology (ICT) refers to technologies, both hardware and software, through which humans are able to communicate with one another. It is any form of technology that enables you to communicate."
            },
            {
              type: "heading",
              text: "Evolution of ICT: Four Main Periods"
            },
            {
              type: "paragraph",
              text: "The history of ICT is divided into four main periods: the premechanical period, mechanical period, electromechanical period, and electronic period."
            },
            {
              type: "definition",
              title: "The Premechanical Period",
              text: "Traced back thousands of years ago, around 3,000 BCE to 1,450 CE. Humans started communicating by writing symbols as substitutes, realizing stone tablets were too heavy and bulky. The papyrus plant was used to produce paper, revolutionizing information storage; libraries were the first data centers in history. The abacus was introduced in the 2nd Century BCE by Romans (created in China), serving as the first counting device and first machine to process information."
            },
            {
              type: "definition",
              title: "The Mechanical Period",
              text: "Spanned from 1450 to 1840, acting as a bridge between the premechanical and modern periods. Concentrated on machines enhancing calculation speed. Key inventions include the Pascaline (mechanical calculator by Blaise Pascal and Wilhelm Schickard) and the Analytical Engine invented by Charles Babbage in 1837, earning him the title 'Father of Computers'. It featured an arithmetic logic unit (ALU), control flow (conditional branching and loops), and integrated memory, serving as the blueprint for 20th-century computers."
            },
            {
              type: "definition",
              title: "The Electromechanical Period",
              text: "Spanned from 1840 to 1940, ushering in modern telecommunications. The telegraph (first electrical communication device using electric current over media, invented in 1837 by William Cooke and Sir Charles Wheatstone) and Morse Code (invented in 1844 by Samuel Morse) revolutionized messaging. Alexander Graham Bell patented the telephone in 1876, converting sound to electricity over copper wires. Alan Turing and Gordon Welchman invented the Bombe in 1939 to decipher German Enigma codes during WWII."
            },
            {
              type: "definition",
              title: "The Electronic Period",
              text: "Began in the 1940s and continues to the present, focusing on solid-state and electronic devices across four main events: the vacuum tubes period, transistors period, integrated circuits period, and computer processors period. ENIAC (Electronic Numerical Integrator and Computer) was the first electronic general-purpose computer (occupying 167 square meters). The transistor was invented in 1947 as a lightweight, faster alternative to vacuum tubes. Integrated circuits (ICs) group multiple transistors into a single package. Commercial personal computers emerged with the Olivetti Programma 101 (1965) and IBM 5150 (August 1981, led by Don Estridge)."
            },
            {
              type: "heading",
              text: "The World Wide Web and Social Media"
            },
            {
              type: "paragraph",
              text: "The World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989 to access hypertext documents and files over the internet. Web 1.0 is the read-only web; Web 2.0 is the read-and-write web enabling user interaction and social media; and Web 3.0 is the semantic executing web for smarter, faster searching. Social media leverages Web 2.0 to connect users in virtual communities, where virality measures the rate of sharing content."
            }
          ],
          flashcards: [
            { front: "What is ICT?", back: "Technologies (hardware and software) that enable humans to communicate with one another." },
            { front: "What are the four main periods of ICT history?", back: "Premechanical, mechanical, electromechanical, and electronic periods." },
            { front: "What was the first counting device and data processing tool?", back: "The Abacus (introduced in the 2nd Century BCE)." },
            { front: "Who is known as the 'Father of the Computers'?", back: "Charles Babbage, inventor of the Analytical Engine (1837)." },
            { front: "What was the Pascaline?", back: "A mechanical calculator invented by Blaise Pascal and Wilhelm Schickard." },
            { front: "What was the first electrical communications device?", back: "The Telegraph, invented in 1837 by William Cooke and Sir Charles Wheatstone." },
            { front: "Who invented the telephone and when?", back: "Alexander Graham Bell in 1876." },
            { front: "What was the ENIAC?", back: "Electronic Numerical Integrator and Computer; the first electronic general-purpose computer occupying 167 square meters." },
            { front: "When was the transistor invented?", back: "1947; it replaced bulky vacuum tubes." },
            { front: "What is an Integrated Circuit (IC)?", back: "A device composed of a group of transistors and circuit elements compressed into a single package." },
            { front: "What was the first commercial personal computer?", back: "Olivetti Programma 101, released in 1965." },
            { front: "When was the IBM 5150 introduced?", back: "August 1981, developed by the IBM Entry Systems Division team led by Don Estridge." },
            { front: "Who proposed the World Wide Web (WWW) and when?", back: "Tim Berners-Lee in 1989." },
            { front: "What is the difference between Web 1.0, 2.0, and 3.0?", back: "Web 1.0 is read-only; Web 2.0 is read-and-write (interactive/social media); Web 3.0 is semantic executing for smarter searching." },
            { front: "What is virality in social media?", back: "The rate of reposting or sharing of photos, information, or ideas published on a profile page." }
          ],
          questions: [
            {
              id: "q_ict_1",
              type: "identification",
              question: "What historical period of ICT spans from approximately 3,000 BCE to 1,450 CE and utilized stone tablets, papyrus, and the abacus?",
              answer: "Premechanical period",
              explanation: "The premechanical period represents early human communication using symbols, paper development from papyrus, and manual counting devices like the abacus.",
              difficulty: "easy",
              tags: ["History", "Premechanical"]
            },
            {
              id: "q_ict_2",
              type: "identification",
              question: "Who is recognized as the 'Father of the Computers' for inventing the Analytical Engine in 1837?",
              answer: "Charles Babbage",
              explanation: "Charles Babbage invented the Analytical Engine, which contained an ALU, control flow, and integrated memory serving as a blueprint for modern computers.",
              difficulty: "easy",
              tags: ["History", "Mechanical"]
            },
            {
              id: "q_ict_3",
              type: "multiple_choice",
              question: "Which device is considered the first electronic, general-purpose computer, occupying 167 square meters?",
              choices: ["Analytical Engine", "ENIAC", "IBM 5150", "Pascaline"],
              answer: 1,
              explanation: "ENIAC (Electronic Numerical Integrator and Computer) marked a revolutionary period in computing during the electronic era.",
              difficulty: "medium",
              tags: ["History", "Electronic"]
            },
            {
              id: "q_ict_4",
              type: "true_false",
              question: "The telegraph was invented in 1837 by William Cooke and Sir Charles Wheatstone.",
              choices: ["True", "False"],
              answer: 0,
              explanation: "The statement is true; the first working telegraph model used five magnetic needles pointing to letters and numbers.",
              difficulty: "easy",
              tags: ["History", "Electromechanical"]
            },
            {
              id: "q_ict_5",
              type: "identification",
              question: "What web version is known as the read-and-write web that introduced user interaction and social networking?",
              answer: "Web 2.0",
              explanation: "Web 2.0 enabled users to interact with web pages, email websites, and participate in social media communities.",
              difficulty: "easy",
              tags: ["WWW", "Web 2.0"]
            }
          ]
        },
        {
          id: "lesson_computer_uses_characteristics",
          title: "Module 2: Computer Uses, Functions, Characteristics & Applications",
          description: "Covers computer functions (Input, Process, Output, Storage), operational characteristics (speed, memory, diligence, accuracy), real-world field applications, and future vision.",
          difficulty: "medium",
          estimatedTime: "30 mins",
          tags: ["Characteristics", "Functions", "Applications", "Hardware"],
          learningObjectives: [
            "List the four core functions of a computer.",
            "Describe the operational characteristics of computers.",
            "Identify applications of computers across various industries."
          ],
          summary: "Computers execute input, processing, output, and storage with extreme speed and diligence, impacting fields from medicine to engineering.",
          content: [
            {
              type: "heading",
              text: "Uses of Computers"
            },
            {
              type: "paragraph",
              text: "Computers are utilized across multiple domains including research and information retrieval, communication, entertainment, business operations (records management, word processing, report generation), and daily productivity."
            },
            {
              type: "heading",
              text: "Four Computer Functions"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Input: Accepts words, symbols, numbers, sounds, pictures, and program instructions.",
                "Process: Programs calculate, sort, and modify data using the microprocessor or CPU.",
                "Output: Produces results of processing such as reports, graphs, documents, and pictures via a printer or monitor.",
                "Store: Memory acts as a temporary holding area (RAM), while storage provides permanent retention (disks)."
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
                "Speed: Capable of performing billions of operations per second (e.g., historical CM-5 performed 131 billion operations per second).",
                "Memory: Unlike humans who forget information over time, a computer stores and recalls every piece of data unless instructed otherwise.",
                "Diligence: Free from tiredness, lack of concentration, or fatigue.",
                "Accuracy: Errors in computers are almost always due to human weakness (imprecise programmer thinking or incorrect data input) rather than technological failure."
              ]
            },
            {
              type: "heading",
              text: "Applications in Different Fields"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Engineering & Architecture: Used for 3D modeling, structural exterior experiments, and virtual walk-throughs with high accuracy.",
                "Education: Enhances student learning with modern teaching tools and interactive software.",
                "Government: Weather forecasting, park management, tax collection, immigrant processing, and Social Security checks.",
                "The Home: Personal budgeting, document writing, presentations, and global connectivity.",
                "Health & Medicine: Monitoring critically ill patients in Intensive Care Units (ICUs) and generating cross-sectional body scans.",
                "Manufacturing Industries: Handling dangerous tasks like deep underground mining or explosive disarmament.",
                "Scientific Research: Driving major advancements in science and complex simulations.",
                "Paperwork Reduction: Streamlining paper-heavy industries for faster, more effective record management."
              ]
            },
            {
              type: "quote",
              text: "In the coming years, the conference table will be a computer, the whiteboard will be a computer. — Microsoft Chairman Bill Gates"
            }
          ],
          flashcards: [
            { front: "What are the four primary functions of a computer?", back: "Input, Process, Output, and Store." },
            { front: "What is the difference between memory and storage in computer functions?", back: "Memory (RAM) is a temporary holding area, while Storage (disks) is permanent." },
            { front: "Why do computer errors occur according to computer characteristics?", back: "Errors are mainly due to human weakness (imprecise thinking by programmers or incorrect data), not technological failure." },
            { front: "What is computer diligence?", back: "The ability to work continuously without tiredness, fatigue, or loss of concentration." },
            { front: "How are computers used in manufacturing?", back: "They perform unpleasant or dangerous tasks, such as underground work or handling explosive devices." },
            { front: "What was Microsoft Chairman Bill Gates' future vision?", back: "'In the coming years, the conference table will be a computer, the whiteboard will be a computer.'" }
          ],
          questions: [
            {
              id: "q_comp_1",
              type: "multiple_choice",
              question: "Which computer function is responsible for accepting words, numbers, sounds, and program instructions?",
              choices: ["Output", "Process", "Input", "Store"],
              answer: 2,
              explanation: "Input devices and functions are responsible for gathering raw data and instructions from the user.",
              difficulty: "easy",
              tags: ["Functions", "Input"]
            },
            {
              id: "q_comp_2",
              type: "true_false",
              question: "Computer errors are primarily caused by hardware failure and equipment defects rather than human error.",
              choices: ["True", "False"],
              answer: 1,
              explanation: "False. Errors in computers are mainly due to human weakness, such as imprecise programming or incorrect input data.",
              difficulty: "easy",
              tags: ["Characteristics", "Accuracy"]
            }
          ]
        },
        {
          id: "lesson_computer_hardware",
          title: "Module 3: The Basics of Computer Hardware (Input, System Unit, Output, Storage, Communication)",
          description: "Comprehensive review of hardware components including input devices, system unit external/internal parts, motherboard sockets, slots, chipsets, output devices, print devices, storage types, and communication devices.",
          difficulty: "hard",
          estimatedTime: "45 mins",
          tags: ["Hardware", "Motherboard", "CPU", "Storage", "Peripherals", "Ports"],
          learningObjectives: [
            "Identify input, output, and storage device classifications.",
            "Differentiate internal motherboard components, chipsets, slots, and sockets.",
            "Distinguish print device specifications including printer types, pin counts, and paper column widths."
          ],
          summary: "Computer hardware consists of input devices, the system unit (CPU, motherboard, RAM, BIOS), output devices (monitors, print devices, plotters), storage (magnetic, optical, solid-state), and communication devices (NICs and modems).",
          content: [
            {
              type: "heading",
              text: "1. Input Devices"
            },
            {
              type: "paragraph",
              text: "Devices that accept input (data and instructions) from the user or another computer system."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Keyboard: Typewriter-like layout with special buttons. Keypads include Alphanumeric, Numeric (0-9, arithmetic keys +,-,*,/, used for cursor movement, editing, calculating), Cursor Keys (arrow keys, Page Up/Down, Home, End, Insert, Delete, Print Screen, Scroll Lock, Pause/Break), Function Keys (F1-F12), and Special Keys (Escape key on upper-left to exit programs quickly; Caps Lock for uppercase letters; Shift for uppercase/symbol combinations; Ctrl & Alt as combination keys; Enter to execute commands; Backspace to erase characters to the left). Status Lights indicate Num Lock, Caps Lock, or Scroll Lock status.",
                "Mouse: Box-like pointing device with wired/wireless connection. Functions include Pointing, Clicking, Double Clicking, Dragging, and Right Clicking.",
                "Trackball: Stationary pointing device with an exposed ball rotated by thumb, fingers, or palm; requires minimal desk space.",
                "Light Pen: Light-sensitive detector used to point directly at display screens.",
                "Touch Screen: Display screen covered with a transparent touch-sensitive panel for direct finger/object interaction.",
                "Touch Tablet: Flat surface used by designers, engineers, and artists for sketching and drawing.",
                "Barcode Reader: Uses light rays to read product codes for inventory monitoring.",
                "Wand Reader: Uses laser beams to read special numbers, letters, or symbols (e.g., supermarket barcode scanners).",
                "Scanner: Reads text or illustrations on paper and translates them into digital form.",
                "Digital Camera: Captures real-world image snapshots and stores bit patterns digitally.",
                "Audio Digitizer: Contains circuitry to digitize sound from microphones into computer memory.",
                "Sensing Devices: Monitors temperature, pressure, and humidity for scientific research, weather forecasting, robotics, and medical monitoring (e.g., Blood Pressure monitors)."
              ]
            },
            {
              type: "heading",
              text: "2. The System Unit & Internal Architecture"
            },
            {
              type: "paragraph",
              text: "The electronic circuitry housed within the computer enclosure where processing takes place."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "External Parts: Power Switch (turns PC on/off with LED indicator), Reset Switch (restarts system when frozen), Casing (protective shell), Ports (rear holes for data transfer).",
                "Microprocessor / CPU: The brain/heart of the computer executing instructions. Main parts: Arithmetic Logic Unit (ALU) performs arithmetic (add, subtract, multiply, divide) and logic/comparison operations; Control Unit (CU) directs operations, fetching, decoding, executing, and storing instructions; Registers provide temporary data-holding places.",
                "Motherboard (System Board): Main circuit board holding the CPU, memory, chipsets, and expansion slots.",
                "System Board Components: Memory Slots (sockets holding RAM modules); Chipsets (integrated circuits designed to work together); Cache Memory (high-speed temporary buffer storage smaller than main storage); Jumpers (prongs serving as electrical contact points); Processor Socket (bracket holding the CPU); BIOS Chip (Basic Input/Output System; interface between hardware and OS, controls hardware settings and boot-up); CMOS Chip (Complementary Metal Oxide Semiconductor; holds real-time clock date/time and BIOS settings, powered by built-in battery when PC is off).",
                "Other Internal Parts: Hard Disk, Power Supply, Fan (cooling), Speaker (system beep codes), and Memory."
              ]
            },
            {
              type: "heading",
              text: "3. Output Devices"
            },
            {
              type: "paragraph",
              text: "Devices translating processed information into human-readable forms."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Monitor: Resembles a television screen. Main classes: CRT (Cathode Ray Tube; uses pixels, high power, large size) and Flat-Panel Display Monitor (reduced volume and weight). Flat-panel categories: Emissive Displays (convert electrical energy to light, e.g., Plasma, LED) and Non-Emissive Displays (use optical effects, e.g., LCD). Monitor color types: Monochrome (two colors: black/white, green/black, amber/black), Gray-Scale (shades of gray), Color / RGB (Red, Green, Blue signals).",
                "Print Device: Produces printed output on paper (technically distinct from the 'printer' driver software). Kinds of printers: Dot-matrix Printer (uses pinpoint-sized pins/hammers; classified by width as 80 Column Paper or 132 Column Paper, and by speed/pins as 9 Pin Serial Printer or 24 Pin Parallel Printer [faster due to more pins]); Ink-jet Printer (sprays ink directly onto paper); Laser Printer (uses laser beams and rotating drums with electrostatic charges, working like a photocopier for high-quality output).",
                "Speaker: Changes electrical signals into audible human sound.",
                "Plotter: Used in engineering and scientific applications to produce scaled drawings.",
                "Synthesizers: Generates sound electronically for music and noise production."
              ]
            },
            {
              type: "heading",
              text: "4. Storage Devices"
            },
            {
              type: "paragraph",
              text: "Keeps data, instructions, and information for orderly retrieval. Functions include Reading (transferring from storage to memory) and Writing (transferring from memory to storage)."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Primary Storage (Main Storage): Temporary area. Includes ROM (Read Only Memory; permanent memory with basic boot instructions) and RAM (Random Access Memory; temporary memory erased when power turns off). RAM/ROM hierarchy includes DRAM, SRAM, NVRAM, Flash, EEPROM, EPROM, PROM, and Masked ROM.",
                "Four Main Types of Secondary Storage: Magnetic Storage (uses magnetized particles on oxide surfaces; examples include Floppy Disk Drives [3.5\" diskettes], Hard Disk Drives [HDD; internal and external], Zip Disk Drives [high-capacity backup], and Tape Drives [tape cartridges for enterprise backup]); Optical Storage (uses laser pits on transparent surfaces; examples include CD-ROM and DVD-ROM drives); Magneto-Optical (combines optical reading with rewrite capabilities; examples include CD-R and CD-RW drives); Solid-state Electronic (uses non-volatile memory arrays; examples include Memory Cards, Compact Flash, Smart Media, and Memory Sticks)."
              ]
            },
            {
              type: "heading",
              text: "5. Communication Devices"
            },
            {
              type: "paragraph",
              text: "Media and devices used to manage communication between two devices according to common protocols."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Network Interface Card (NIC): Expansion board physically connecting a computer to a network.",
                "Modem (Modulator/Demodulator): Lets computers exchange information through telephone lines. Kinds: Internal Modem (add-in card inserted into an ISA/PCI slot) and External Modem (stand-alone unit connected via a serial/USB port)."
              ]
            }
          ],
          flashcards: [
            { front: "What is the function of the Arithmetic Logic Unit (ALU)?", back: "Carries out arithmetic operations (+, -, *, /) and logic/comparison operations." },
            { front: "What is the role of the Control Unit (CU)?", back: "Directs entire CPU operations, responsible for fetching, decoding, executing, and storing instructions." },
            { front: "What does BIOS stand for and what does it do?", back: "Basic Input/Output System; acts as an interface between hardware and OS, manages boot-up and hardware settings." },
            { front: "What does CMOS stand for and how is it powered?", back: "Complementary Metal Oxide Semiconductor; holds real-time clock and BIOS settings, powered by a built-in battery when the PC is off." },
            { front: "What is cache memory?", back: "A high-speed buffer storage smaller than main memory that temporarily holds instructions likely to be used next by the CPU." },
            { front: "What is the difference between a 9-pin serial printer and a 24-pin parallel printer?", back: "A 24-pin printer is faster because more pins transfer data more rapidly than a 9-pin printer." },
            { front: "What is the difference between 80-column and 132-column printers?", back: "80-column accommodates 8.5-inch paper widths, while 132-column accommodates 8.5-inch or wider continuous paper." },
            { front: "What is RAM vs ROM?", back: "RAM is temporary/volatile memory lost when power turns off; ROM is permanent memory containing essential boot instructions." },
            { front: "What are the four main types of storage devices?", back: "Magnetic, Optical, Magneto-Optical, and Solid-state Electronic." },
            { front: "What is a Modem?", back: "Modulator/Demodulator; a device enabling computers to exchange information over telephone lines." }
          ],
          questions: [
            {
              id: "q_hw_1",
              type: "identification",
              question: "What internal CPU component performs arithmetic calculations such as addition and logical comparisons?",
              answer: "Arithmetic Logic Unit",
              explanation: "The Arithmetic Logic Unit (ALU) is the CPU subcomponent dedicated to math and logic operations.",
              difficulty: "easy",
              tags: ["CPU", "ALU"]
            },
            {
              id: "q_hw_2",
              type: "multiple_choice",
              question: "Which motherboard chip holds the real-time clock and system BIOS configuration settings while the computer is turned off?",
              choices: ["BIOS chip", "CMOS chip", "Cache memory", "ALU"],
              answer: 1,
              explanation: "The CMOS chip stores system settings and the clock, sustained by a motherboard battery.",
              difficulty: "medium",
              tags: ["Motherboard", "CMOS"]
            },
            {
              id: "q_hw_3",
              type: "true_false",
              question: "A 24-pin parallel dot-matrix printer is faster than a 9-pin serial dot-matrix printer because using more pins speeds up data transfer.",
              choices: ["True", "False"],
              answer: 0,
              explanation: "True. The more pins used in dot-matrix transfer, the faster data travels to the print mechanism.",
              difficulty: "medium",
              tags: ["Printers", "Hardware"]
            },
            {
              id: "q_hw_4",
              type: "identification",
              question: "What storage memory type loses all stored information and instructions when the computer is turned off?",
              answer: "Random Access Memory",
              explanation: "RAM is volatile memory acting as a temporary holding area during active operation.",
              difficulty: "easy",
              tags: ["Storage", "RAM"]
            }
          ]
        },
        {
          id: "lesson_software_excel",
          title: "Module 4: Computer Software Classifications & Excel Formula Functions",
          description: "Covers software definitions (system vs application software), software categories (freeware, shareware, beta, open-source), and exact Excel math/string formula syntax rules.",
          difficulty: "medium",
          estimatedTime: "30 mins",
          tags: ["Software", "Excel", "Formulas", "Spreadsheet"],
          learningObjectives: [
            "Differentiate system software and application software.",
            "Distinguish freeware, shareware, beta versions, and open-source software.",
            "Apply correct syntax for Excel math functions (SUM, PRODUCT, QUOTIENT, MOD, MIN, MAX) and string logic."
          ],
          summary: "Software consists of tangible/intangible instructions divided into system and application types. Excel functions enable powerful mathematical and string calculations using commas and colons.",
          content: [
            {
              type: "heading",
              text: "Software Overview"
            },
            {
              type: "paragraph",
              text: "Software is a set of instructions that tells the computer what to do for specific tasks. It comprises two main types: Application Software and System Software."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Productivity Software: Word processing (MS Word, Google Docs), Excel spreadsheets (MS Excel), Presentation software (MS PowerPoint, Google Slides).",
                "Multimedia Software: Video editing software, Image editing software (Photoshop, Canva), Sound editing software (Audacity).",
                "Other Software: Web page software, Entertainment software, Personal software (compiling personal data)."
              ]
            },
            {
              type: "heading",
              text: "Types of Software Distribution & Development"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Freeware: Software free to use (e.g., Facebook, Instagram).",
                "Shareware: Software that can be used for a limited time before purchase (e.g., Canva trials).",
                "Beta Version: Software still under development and testing (e.g., Wild Rift deployment).",
                "Open Source: Software that can be freely downloaded, modified, and used on the internet."
              ]
            },
            {
              type: "heading",
              text: "Basic Excel Functions & Formula Rules"
            },
            {
              type: "paragraph",
              text: "Excel functions require specific syntax, separators, and rules for cell references."
            },
            {
              type: "formula",
              text: "=SUM(number1, number2, ...)"
            },
            {
              type: "paragraph",
              text: "Description: Adds values or specified cells. Example: =SUM(A1,A2) or range =SUM(A1:A5). Separators: Comma (,) for individual cells (long cut); colon (:) for continuous range shortcuts."
            },
            {
              type: "formula",
              text: "=PRODUCT(number1, number2, ...)"
            },
            {
              type: "paragraph",
              text: "Description: Multiplies values of specified cells. Example: =PRODUCT(B1,B2). Uses comma (,) or colon (:)."
            },
            {
              type: "formula",
              text: "=QUOTIENT(number1, number2)"
            },
            {
              type: "paragraph",
              text: "Description: Returns the integer portion of a division. Only two cell values can be used. Example: =QUOTIENT(A1,A2). Only comma (,) separator allowed."
            },
            {
              type: "formula",
              text: "=MOD(number1, number2)"
            },
            {
              type: "paragraph",
              text: "Description: Returns the remainder after a number is divided by a divisor. Only two cell values can be used. Example: =MOD(B1,B2). Only comma (,) separator allowed."
            },
            {
              type: "formula",
              text: "=MIN(number1, number2, ...)"
            },
            {
              type: "paragraph",
              text: "Description: Returns the smallest number in a set of values, ignoring logical values and text. Example: =MIN(B1,B2) or =MIN(A1:A10)."
            },
            {
              type: "formula",
              text: "=MAX(number1, number2, ...)"
            },
            {
              type: "paragraph",
              text: "Description: Returns the largest number in a set of values, ignoring logical values and text. Example: =MAX(A1:A2)."
            }
          ],
          flashcards: [
            { front: "What is Freeware?", back: "Software that is completely free to use (e.g., Facebook, Instagram)." },
            { front: "What is Shareware?", back: "Software that you can use for a limited trial time before payment is required." },
            { front: "What is a Beta Version?", back: "Software that is still under active development and testing." },
            { front: "What is Open Source software?", back: "Software whose source code can be downloaded, used, and modified on the internet." },
            { front: "What is the syntax for SUM in Excel?", back: "=SUM(number1, number2, ...) using comma (,) for individual cells or colon (:) for ranges." },
            { front: "What separator is strictly required for QUOTIENT and MOD?", back: "Only comma (,) can be used because they accept exactly two cell arguments." },
            { front: "What does QUOTIENT return?", back: "Returns only the integer portion of a division." },
            { front: "What does MOD return?", back: "Returns the remainder after a number is divided by a divisor." },
            { front: "How does MIN treat text and logical values?", back: "MIN ignores logical values and text in a set of values." }
          ],
          questions: [
            {
              id: "q_sw_1",
              type: "identification",
              question: "What term describes software that is provided free of charge for users to utilize, such as Facebook or Instagram?",
              answer: "Freeware",
              explanation: "Freeware refers to fully functional software applications made available to users at no cost.",
              difficulty: "easy",
              tags: ["Software", "Freeware"]
            },
            {
              id: "q_sw_2",
              type: "multiple_choice",
              question: "Which Excel function returns only the integer portion of a division operation between two cells?",
              choices: ["MOD", "PRODUCT", "QUOTIENT", "SUM"],
              answer: 2,
              explanation: "QUOTIENT calculates division and returns the integer portion, accepting strictly two arguments separated by a comma.",
              difficulty: "medium",
              tags: ["Excel", "QUOTIENT"]
            },
            {
              id: "q_sw_3",
              type: "true_false",
              question: "You can use a colon (:) separator inside the QUOTIENT function to divide a range of cells like QUOTIENT(A1:A5).",
              choices: ["True", "False"],
              answer: 1,
              explanation: "False. QUOTIENT only accepts two individual cell values separated by a comma (,), not a range colon (:).",
              difficulty: "hard",
              tags: ["Excel", "Syntax"]
            }
          ]
        }
      ]
    }
  ]
};