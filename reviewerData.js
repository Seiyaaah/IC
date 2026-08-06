window.reviewerData = {
  appName: "Comprehensive ICT Learning OS",
  version: "4.0",
  subjects: [
    {
      id: "subject_ict_comprehensive",
      name: "Information and Communications Technology",
      description: "Comprehensive review covering computer hardware, software types, basic Excel functions, computer characteristics and applications, and the historical evolution of ICT and the World Wide Web.",
      icon: "cpu",
      color: "blue",
      tags: ["ICT", "Hardware", "Software", "Excel", "History", "Applications"],
      lessons: [
        {
          id: "lesson_computer_hardware",
          title: "The Basics of Computer Hardware",
          description: "Detailed study of input devices, system unit components, output devices, storage devices, and communication devices based on source material.",
          difficulty: "medium",
          estimatedTime: "50 minutes",
          tags: ["Hardware", "Input", "Output", "Storage", "Processing", "Communication"],
          content: [
            {
              type: "heading",
              text: "Input Devices Overview"
            },
            {
              type: "paragraph",
              text: "Devices that accept input (data and instructions) from the user or from another computer system."
            },
            {
              type: "definition",
              title: "Keyboard",
              text: "An input device similar to a typewriter but with special buttons or keys that signify a command, used to enter data and commands into the computer."
            },
            {
              type: "heading",
              text: "Parts of the Keyboard"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Alphanumeric Keypad: Keys similar to a typewriter that allow the user to type letters, numbers, and punctuations.",
                "Numeric Keypad: Set of keys numbered zero to nine (0–9) and mathematical keys (+, -, *, /). Used in three ways: cursor movement, editing, and calculating.",
                "Cursor Keys: Keys with arrows pointing up, down, left, and right, as well as Page Up, Page Down, Home, End, Insert, Delete, Print Screen Sys Rq, Scroll Lock, and Pause or Break.",
                "Function Keys: Found at the upper part of the keyboard; perform special functions on different programs.",
                "Escape Key (Special Key): Used to exit programs quickly; found on the upper left part of the keyboard.",
                "Caps Lock Key (Special Key): Part of the alphanumeric keys; displays all typed letters in capital letters when activated.",
                "Shift Key (Special Key): Produces an uppercase character when pressed simultaneously with a letter key.",
                "Ctrl & Alt Keys (Special Keys): Combination keys that only function when combined with other keys.",
                "Enter Key (Special Key): Executes the commands given to the computer.",
                "Backspace Key (Special Key): Erases the character on the left side of the cursor one by one.",
                "Status Lights: Found at the upper right corner of the keyboard; indicates whether Num Lock, Caps Lock, or Scroll Lock is activated."
              ]
            },
            {
              type: "definition",
              title: "Mouse",
              text: "A box-like input device connected to a long wire that controls the movement of the cursor or pointer on a display screen."
            },
            {
              type: "heading",
              text: "Functions of the Mouse"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Pointing: Moving the tip of the mouse pointer over an object on the screen.",
                "Clicking: Pressing the left mouse button once while the pointer is over an object.",
                "Double Clicking: Pressing the left mouse button twice and fast.",
                "Dragging: Moving an object from one place to another.",
                "Right Clicking: Pressing the right mouse button while the pointer is over an object."
              ]
            },
            {
              type: "definition",
              title: "Trackball",
              text: "A mouse lying on its back where the pointer is moved by rotating a ball with your thumb, fingers, or palm. It is stationary and requires minimal space."
            },
            {
              type: "definition",
              title: "Light Pen",
              text: "An input device that utilizes a light-sensitive detector to select objects on a display screen by directly pointing to them."
            },
            {
              type: "definition",
              title: "Touch Screen",
              text: "A display screen with a touch-sensitive transparent panel covering the screen that allows a user to enter data or instruction by simply touching a location using a finger or any other nontransparent object."
            },
            {
              type: "definition",
              title: "Touch Tablet",
              text: "Used by designers, engineers, and artists for drawing or designing a particular object."
            },
            {
              type: "definition",
              title: "Barcode Reader",
              text: "Uses light rays to read a product code for the purpose of easy inventory and monitoring of product movements and status."
            },
            {
              type: "definition",
              title: "Wand Reader",
              text: "Uses laser beams to read special numbers, letters or symbols such as supermarket barcodes."
            },
            {
              type: "definition",
              title: "Scanner",
              text: "Reads text or illustrations printed on paper and translates information into digital form, capturing photos, art, and text."
            },
            {
              type: "definition",
              title: "Audio Digitizer",
              text: "Contains circuitry to digitize sounds from microphones for storage in computer memory or storage devices."
            },
            {
              type: "paragraph",
              text: "Other input devices include Temperature & Humidity Monitoring Devices, Blood Pressure Monitoring Devices, and Weather Monitoring Devices."
            },
            {
              type: "heading",
              text: "System Unit and Internal Components"
            },
            {
              type: "definition",
              title: "System Unit",
              text: "The electronic circuitry housed within the computer where processing happens."
            },
            {
              type: "heading",
              text: "External Parts of the System Unit"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Power Switch: Switches the computer on and off; located in front of the system unit.",
                "Reset Switch: Restarts the computer without turning it off; used when the system hangs up or crashes.",
                "Casing: The shell or cover that protects internal parts.",
                "LED (Light Emitting Diode): Indicator lights in front of the system unit.",
                "Ports: Holes at the back of the system unit that allow the transfer of data."
              ]
            },
            {
              type: "definition",
              title: "Microprocessor or Central Processing Unit (CPU)",
              text: "The heart or brain of the computer that carries out and performs most instructions from either user or software."
            },
            {
              type: "heading",
              text: "Main Parts of the CPU"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Arithmetic Logic Unit (ALU): Carries out arithmetic operations (addition, subtraction, multiplication, division) and logic or comparison operations. Has direct I/O access to main memory, process controller, and I/O devices.",
                "Control Unit (CU): Directs the entire operation of the CPU; responsible for fetching, decoding, executing, and storing information or instructions.",
                "Registers: Small data holding places within the computer microprocessor that provide a place for passing data from one instruction to the next sequential instruction or to another program."
              ]
            },
            {
              type: "heading",
              text: "Motherboard and System Board Components"
            },
            {
              type: "definition",
              title: "Motherboard",
              text: "The main circuit board that contains the central processing unit, memory, and sometimes printer ports or other devices."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Port: A socket at the back of a computer used to plug in external devices (modem, mouse, scanner, printer).",
                "Memory Slot: A socket on the system board that contains memory modules which hold memory chips.",
                "Chipsets: A group of integrated circuits designed to work together for some special function.",
                "Cache Memory: A high-speed buffer storage smaller than main storage that temporarily stores instructions and data likely to be used next by the CPU.",
                "Jumpers: A pair of prongs that are electrical contact points set into the computer motherboard or an adapter card.",
                "Processor Socket: Holds the main chip of the computer (CPU).",
                "Basic Input/Output System (BIOS) chip: Acts as an interface between the hardware and the operating system; controls hardware settings, system booting, and various system functions.",
                "Complementary Metal Oxide Semiconductor (CMOS) chip: Holds the real-time clock that keeps date and time on your PC, as well as CMOS RAM holding BIOS settings. Powered by a built-in battery when the computer is off."
              ]
            },
            {
              type: "paragraph",
              text: "Other internal parts include Cards (Sound Card, Video Card, Network Card, Game Card, Memory Card), Hard Disk, Power Supply, Fan, Speaker, and Memory."
            },
            {
              type: "heading",
              text: "Output Devices"
            },
            {
              type: "paragraph",
              text: "Devices that translate and represent processed CPU information into human-readable forms."
            },
            {
              type: "definition",
              title: "Monitor",
              text: "A television-like screen allowing users to view activities."
            },
            {
              type: "heading",
              text: "Main Classes of Monitor"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Cathode Ray Tube (CRT) Monitor: Made up of small picture elements called pixels. Smaller pixels provide better image clarity or resolution. Disadvantage: large size and high power consumption.",
                "Flat-Panel Display Monitor: Video devices with reduced volume, weight, and power requirements compared to CRT.",
                "Emissive Displays: Convert electrical energy into light (e.g., plasma panel, LED).",
                "Non-Emissive Displays: Use optical effects to convert sunlight or ambient light into graphics patterns (e.g., LCD)."
              ]
            },
            {
              type: "heading",
              text: "Types of Monitor According to Color"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Monochrome: Displays two colors (background and foreground) such as black and white, green and black, or amber and black.",
                "Gray-Scale: Special monochrome monitor capable of displaying different shades of gray.",
                "Color (RGB): Accepts three separate signals – red, green, and blue."
              ]
            },
            {
              type: "definition",
              title: "Print Devices and Printers",
              text: "A device that produces printed output on paper. Printer technically refers to the driver that makes the print device work with the operating system."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Dot-matrix Printer: Uses pinpoint-sized hammers to print text and graphics.",
                "Ink-jet Printer: Sprays ink directly onto paper to produce images.",
                "Laser Printer: Uses a laser beam creating patterns of electrical charges on a rotating drum to produce high-quality printouts.",
                "80 Column Paper: Accommodates paper with a width of 8.5 inches.",
                "132 Column Paper: Accommodates paper wider than 8.5 inches.",
                "Colors: Black and White, Colored.",
                "9 Pin Serial Printer: Uses 9 pins to transfer data.",
                "24 Pin Parallel Printer: Uses 24 pins; faster because more pins allow data to travel faster."
              ]
            },
            {
              type: "paragraph",
              text: "Other output devices include Speakers (change electrical signals into audible sound), Plotters (scientific and engineering applications for precise scaled drawings), and Synthesizers (generate sound electronically for music or noise)."
            },
            {
              type: "heading",
              text: "Storage and Communication Devices"
            },
            {
              type: "paragraph",
              text: "Devices holding data, instructions, and information for retrieval. Functions include Reading (transferring data from storage medium into memory) and Writing (transferring data from memory to storage medium)."
            },
            {
              type: "definition",
              title: "Primary Storage (Main Storage)",
              text: "Temporary holding area containing Read Only Memory (ROM) and Random Access Memory (RAM)."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Read Only Memory (ROM): Permanent memory containing essential instructions that cannot be changed.",
                "Random Access Memory (RAM): Temporary memory whose contents are lost and erased when powered off."
              ]
            },
            {
              type: "heading",
              text: "Four Main Types of Storage Devices"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Magnetic: Uses orientation of magnetized particles on an oxide-based surface (Floppy disk drive, Hard disk drive, Zip disk drive, Tape drive).",
                "Optical: Uses patterns of pits on a transparent surface (CD-ROM drive, DVD-ROM drive).",
                "Magneto-Optical: Optical reading combined with rewriting capabilities (CD-R drive, CD-RW drive).",
                "Solid-state Electronic: Uses non-volatile memory arrays (Memory Cards, Compact Flash, Smart Media, Memory Stick)."
              ]
            },
            {
              type: "definition",
              title: "Communication Devices",
              text: "Media used to manage communication between two devices via a common protocol."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Network Interface Card (NIC): Expansion board physically connecting a computer to a network.",
                "Modem (Modulator/Demodulator): Lets computers exchange information through telephone lines.",
                "Internal Modem: Connected to the computer's bus via an add-in card inserted into a free slot.",
                "External Modem: Stand-alone device connected externally."
              ]
            }
          ],
          flashcards: [
            {
              front: "What is the function of the ALU in the CPU?",
              back: "Carries out arithmetic operations (addition, subtraction, multiplication, division) and logic or comparison operations."
            },
            {
              front: "What is Cache Memory?",
              back: "A high-speed buffer storage smaller than main storage that temporarily stores instructions and data likely to be used next by the CPU."
            },
            {
              front: "What is the difference between RAM and ROM?",
              back: "RAM is temporary/volatile memory erased when powered off, while ROM is permanent memory whose instructions cannot be changed."
            },
            {
              front: "What does Modem stand for?",
              back: "Modulator/Demodulator"
            },
            {
              front: "What chip holds the real-time clock and BIOS settings powered by a battery?",
              back: "Complementary Metal Oxide Semiconductor (CMOS) chip"
            }
          ],
          questions: [
            {
              type: "identification",
              question: "What internal CPU component directs the entire operation and is responsible for fetching, decoding, executing, and storing information?",
              answer: "Control Unit",
              explanation: "The Control Unit (CU) directs the operations and instructions flow inside the CPU.",
              difficulty: "medium",
              tags: ["Hardware", "CPU"]
            },
            {
              type: "identification",
              question: "What main circuit board contains the central processing unit, memory chips, and system slots?",
              answer: "Motherboard",
              explanation: "The motherboard is the primary circuit board connecting all internal components.",
              difficulty: "easy",
              tags: ["Hardware", "Motherboard"]
            },
            {
              type: "identification",
              question: "What printer type uses a laser beam and rotating drum similar to a photocopy machine?",
              answer: "Laser printer",
              explanation: "Laser printers create patterns of electrical charges on a rotating drum.",
              difficulty: "easy",
              tags: ["Hardware", "Printers"]
            },
            {
              type: "true_false",
              question: "Modified True or False: The Arithmetic Logic Unit (ALU) directs the entire operation and fetches instructions in the CPU.",
              choices: ["True", "False - Control Unit"],
              answer: 1,
              explanation: "The Control Unit directs operations while the ALU handles mathematical and logical computations.",
              difficulty: "medium",
              tags: ["Hardware", "CPU"]
            },
            {
              type: "true_false",
              question: "Modified True or False: Random Access Memory (RAM) is a permanent memory whose contents are retained even when the computer is turned off.",
              choices: ["True", "False - volatile/temporary memory"],
              answer: 1,
              explanation: "RAM is temporary memory that loses all stored data when powered off.",
              difficulty: "easy",
              tags: ["Hardware", "Storage"]
            }
          ]
        },
        {
          id: "lesson_software_excel",
          title: "Software Types and Basic Excel Functions",
          description: "Study of system and application software, software distribution types, and essential Microsoft Excel formulas based on source material.",
          difficulty: "medium",
          estimatedTime: "40 minutes",
          tags: ["Software", "Excel", "Freeware", "Shareware", "Formulas"],
          content: [
            {
              type: "heading",
              text: "Types of Software"
            },
            {
              type: "paragraph",
              text: "A set of instructions telling the computer what to do and perform specific tasks, comprising tangible and intangible elements."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "System Software: Operating systems and foundational software.",
                "Application Software: Productivity Software (MS Word, Google Docs), Excel Spreadsheets (MS Excel), Presentation Software (MS PowerPoint, Slides), Multimedia (Video editing, Image editing like Photoshop and Canva, Sound editing like Audacity), Web page software, Entertainment, and Personal software that compiles all computer data.",
                "Freeware: Software free to use (e.g., Facebook, Instagram).",
                "Shareware: Software free to use for a limited time only (e.g., Canva trial).",
                "Beta Version: Software still under development and testing (e.g., Wild Rift deployment).",
                "Open Source: Software that can be downloaded and used freely from the internet."
              ]
            },
            {
              type: "heading",
              text: "Basic Excel Functions"
            },
            {
              type: "definition",
              title: "SUM()",
              text: "Adds values or specified cells. Syntax: =SUM(number1, number2, ...). Uses comma (,) for individual cells (long-cut) or colon (:) for a range (shortcut). Example: =SUM(A1,A2)."
            },
            {
              type: "definition",
              title: "PRODUCT()",
              text: "Multiplies values. Syntax: =PRODUCT(number1, number2, ...). Uses comma or colon separators. Example: =PRODUCT(B1,B2)."
            },
            {
              type: "definition",
              title: "QUOTIENT()",
              text: "Returns the integer portion of a division. Only two cell values can be used. Syntax: =QUOTIENT(number1, number2). Only comma (,) can be used as separator. Example: =QUOTIENT(A1,A2)."
            },
            {
              type: "definition",
              title: "MOD()",
              text: "Returns the remainder after division. Only two cell values can be used. Syntax: =MOD(number1, number2). Only comma (,) can be used as separator. Example: =MOD(B1,B2)."
            },
            {
              type: "definition",
              title: "MIN()",
              text: "Returns smallest number in a set, ignoring logical values and text. Syntax: =MIN(number1, number2, ...). Uses comma or colon."
            },
            {
              type: "definition",
              title: "MAX()",
              text: "Returns largest number in a set, ignoring logical values and text. Syntax: =MAX(number1, number2, ...). Uses comma or colon."
            }
          ],
          flashcards: [
            {
              front: "What is Shareware?",
              back: "Software that you can use for a limited time only before requiring purchase."
            },
            {
              front: "What is the syntax for the QUOTIENT function in Excel?",
              back: "=QUOTIENT(number1, number2) using only two cell values separated by a comma."
            },
            {
              front: "What Excel function returns the remainder after division?",
              back: "MOD()"
            }
          ],
          questions: [
            {
              type: "identification",
              question: "What software distribution type refers to applications that are still under development and testing phases?",
              answer: "Beta version",
              explanation: "Beta version software is released for testing prior to official commercial release.",
              difficulty: "easy",
              tags: ["Software", "Types"]
            },
            {
              type: "identification",
              question: "What Excel function returns the integer portion of a division using only two cell arguments?",
              answer: "QUOTIENT",
              explanation: "QUOTIENT calculates integer division and requires exactly two parameters separated by a comma.",
              difficulty: "medium",
              tags: ["Excel", "Functions"]
            },
            {
              type: "true_false",
              question: "Modified True or False: Shareware software is permanently free to use without any time restrictions.",
              choices: ["True", "False - limited time only"],
              answer: 1,
              explanation: "Shareware is trial software permitted for use during a limited evaluation period.",
              difficulty: "easy",
              tags: ["Software", "Types"]
            }
          ]
        },
        {
          id: "lesson_computer_characteristics",
          title: "Computer Characteristics, Uses & Applications",
          description: "Examination of computer functions, core characteristics, and real-world applications across various fields based on source material.",
          difficulty: "medium",
          estimatedTime: "40 minutes",
          tags: ["Characteristics", "Applications", "Functions"],
          content: [
            {
              type: "heading",
              text: "Uses and Functions of Computers"
            },
            {
              type: "paragraph",
              text: "Primary uses include research/information retrieval, communication, entertainment, and business operations (records management, word processing, report generation)."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Input: Words, symbols, numbers, sound, pictures, program instructions.",
                "Process: Program calculates, sorts, modifies data using microprocessor/CPU.",
                "Output: Results (reports, graphs, documents, pictures) via printer or monitor.",
                "Store: Memory temporary holding (RAM); storage permanent (disk)."
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
                "Speed: Operates at extreme speeds (e.g., historical CM-5 in 1993 performed 131 billion operations per second).",
                "Memory: Stores and recalls vast information; forgets or loses information only when asked.",
                "Diligence: Free from tiredness, lack of concentration, and fatigue.",
                "Versatility: Adapts easily to different subjects or occupations; skilled in many objects.",
                "Accuracy: Errors occur due to human weakness (imprecise thinking by programmer or incorrect data) rather than technological failure."
              ]
            },
            {
              type: "heading",
              text: "Applications of Computers in Different Fields"
            },
            {
              type: "paragraph",
              text: "Computers are applied in Engineering & Architecture (animation, visual walk-throughs, accuracy), Education (enhanced learning methods, faster knowledge acquisition), Government (weather forecasting, park/historic site management, immigrant processing, social security checks, tax collection), The Home (records, letters, budgets, presentations, global connectivity), Health and Medicine (intensive care patient monitoring, body cross-sectional views), Manufacturing Industries (handling unpleasant or dangerous jobs), Connectivity & Disability Aid (assisting physically and mentally disabled humans), Scientific Research, Communication on the World Wide Web, and Paperwork Reduction. Future vision noted by Bill Gates: 'In the coming years, the conference table will be a computer, the whiteboard will be a computer.'"
            }
          ],
          flashcards: [
            {
              front: "What causes errors in computer operations?",
              back: "Human weakness, such as imprecise thinking by the programmer or incorrect data input, rather than technological failure."
            },
            {
              front: "What future vision did Microsoft Chairman Bill Gates state regarding computers?",
              back: "'In the coming years, the conference table will be a computer, the whiteboard will be a computer.'"
            }
          ],
          questions: [
            {
              type: "identification",
              question: "What computer characteristic refers to its ability to remain free from tiredness, fatigue, and lack of concentration?",
              answer: "Diligence",
              explanation: "Diligence allows computers to perform repetitive tasks continuously without losing concentration.",
              difficulty: "easy",
              tags: ["Characteristics", "Diligence"]
            },
            {
              type: "true_false",
              question: "Modified True or False: Computer errors are primarily caused by technological hardware defects and spontaneous processor malfunctions.",
              choices: ["True", "False - human weakness"],
              answer: 1,
              explanation: "Computers operate with extreme accuracy; errors stem almost exclusively from human mistakes.",
              difficulty: "medium",
              tags: ["Characteristics", "Accuracy"]
            }
          ]
        },
        {
          id: "lesson_evolution_ict_www",
          title: "Evolution of ICT & World Wide Web",
          description: "Historical periods of ICT, key computing inventions, and the evolution of the World Wide Web from Web 1.0 to Web 3.0 based on source material.",
          difficulty: "medium",
          estimatedTime: "50 minutes",
          tags: ["History", "ICT", "WWW", "Web 2.0"],
          content: [
            {
              type: "heading",
              text: "Information and Communications Technology (ICT)"
            },
            {
              type: "paragraph",
              text: "Refers to technologies, both hardware and software, where humans are able to communicate with one another."
            },
            {
              type: "heading",
              text: "Four Main Periods in ICT History"
            },
            {
              type: "list",
              ordered: true,
              items: [
                "The Premechanical Period (3,000 BCE to 1,450 CE): Written symbols on stone tablets, Papyrus Plant invention revolutionizing information storage, libraries as first data centers, and the Abacus (first counting and information-processing device introduced in 2nd Century BCE by Romans, originating in China).",
                "The Mechanical Period (1450 to 1840): Bridge between premechanical and modern eras focusing on calculation speed. Pascaline calculator (invented by Blaise Pascal and Wilhelm Schickard) and Analytical Engine (invented in 1837 by Charles Babbage, 'Father of the Computers', featuring ALU, control flow, and integrated memory).",
                "The Electromechanical Period (1840 to 1940): Telegraph (1837 by William Cooke and Sir Charles Wheatstone), Morse Code (1844 by Samuel Morse for single-circuit telegraph), Telephone (1876 by Alexander Graham Bell converting sounds into electricity over copper wires), and The Bombe (1939 by Alan Turing, improved by Gordon Welchman in 1940 to decipher German Enigma codes during WWII).",
                "The Electronic Period (1940s to Present): Focused on solid-state and electronic devices. ENIAC (Electronic Numerical Integrator and Computer, first general-purpose computer occupying 167 square meters), Transistor (1947, lightweight vacuum-tube alternative), Integrated Circuit (IC, transistors and circuits compressed into a single package), Olivetti Programma 101 (designed by Pier Giorgio Perotto, first commercial personal computer sold in 1965), and IBM 5150 (introduced in August 1981 by Don Estridge's team)."
              ]
            },
            {
              type: "heading",
              text: "World Wide Web (WWW) and Social Media"
            },
            {
              type: "paragraph",
              text: "System enabling access to hypertext documents and files over the internet, proposed by Tim Berners-Lee in 1989."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Web 1.0 (Read-only Web): Access to static hypertext files.",
                "Web 2.0 (Read-and-write Web): User interaction, email integration, and social networking sites.",
                "Web 3.0 (Semantic Executing Web): Smarter access to hypertext files enabling wide-range fast searches.",
                "Social Media: Applications starting with Web 2.0 used for communicating and socializing in virtual communities.",
                "Virality: Defined as the rate of reposting or sharing of photos, information, or ideas published on social media profile pages."
              ]
            }
          ],
          flashcards: [
            {
              front: "Who is known as the 'Father of the Computers'?",
              back: "Charles Babbage"
            },
            {
              front: "Who proposed the World Wide Web in 1989?",
              back: "Tim Berners-Lee"
            },
            {
              front: "What was the first commercial personal computer sold in 1965?",
              back: "Olivetti Programma 101"
            },
            {
              front: "What is virality in social media?",
              back: "The rate of reposting or sharing of photos, information, or ideas published on social media profile pages."
            }
          ],
          questions: [
            {
              type: "identification",
              question: "Who is recognized as the 'Father of the Computers' after inventing the Analytical Engine in 1837?",
              answer: "Charles Babbage",
              explanation: "Charles Babbage designed the Analytical Engine featuring an ALU, memory, and control flow.",
              difficulty: "easy",
              tags: ["History", "Pioneers"]
            },
            {
              type: "true_false",
              question: "Modified True or False: Charles Babbage invented the Pascaline calculator along with Wilhelm Schickard during the premechanical period.",
              choices: ["True", "False - mechanical period / Pascal invented Pascaline"],
              answer: 1,
              explanation: "Pascaline was invented by Blaise Pascal and Wilhelm Schickard during the Mechanical Period.",
              difficulty: "medium",
              tags: ["History", "Calculators"]
            }
          ]
        }
      ]
    }
  ]
};
