window.reviewerData = {
  appName: "Learning OS Reviewer",
  version: "4.0",
  subjects: [
    {
      id: "subject_ict",
      name: "Information and Communications Technology",
      description: "Comprehensive review covering computer hardware, software, spreadsheet functions, characteristics, applications, and the historical evolution of ICT.",
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
              title: "Mouse Functions",
              text: "The mouse controls cursor movement through distinct actions: Pointing (moving the tip over an object), Clicking (pressing the left button once), Double Clicking (pressing the left button twice rapidly), Dragging (moving an object from one place to another), and Right Clicking (pressing the right mouse button)."
            },
            {
              type: "definition",
              title: "Trackball",
              text: "A mouse lying on its back where the pointer is controlled by rotating a ball with the thumb, fingers, or palm. It is stationary and requires minimal space."
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
              title: "Touch Tablet",
              text: "Used by designers, engineers, and artists for drawing or designing specific objects."
            },
            {
              type: "definition",
              title: "Barcode Reader / Wand Reader",
              text: "Uses light rays or laser beams to read product codes, numbers, letters, or symbols for easy inventory and monitoring."
            },
            {
              type: "definition",
              title: "Scanner",
              text: "A device that can read text or illustrations printed on paper and translate information into digital form."
            },
            {
              type: "definition",
              title: "Digital Camera",
              text: "Captures snapshots of real images and stores bit patterns on disks or other digital storage devices."
            },
            {
              type: "definition",
              title: "Audio Digitizer",
              text: "Contains circuitry to digitize sounds from microphones to be stored in computer memory or storage."
            },
            {
              type: "heading",
              text: "The System Unit"
            },
            {
              type: "definition",
              title: "System Unit",
              text: "The electronic circuitry housed within the computer where processing happens, protected by a casing with LED indicators and back ports."
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
              text: "The main circuit board containing chipsets, cache memory, jumpers, and processor sockets."
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
              type: "definition",
              title: "Plotter",
              text: "Used in scientific and engineering applications to produce scaled drawings finely and appropriately."
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
                "Magnetic Storage: Uses magnetized particles on oxide-based surfaces (e.g., Hard disk drive, Zip disk drive, Tape drive).",
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
              title: "Modem (Modulator/Demodulator)",
              text: "A device that lets computers exchange information through telephone lines (Internal Modem or External Modem)."
            }
          ],
          flashcards: [
            {
              id: "fc_hw_001",
              front: "What is the function of the Arithmetic Logic Unit (ALU)?",
              back: "Carries out arithmetic operations and logic or comparison operations."
            },
            {
              id: "fc_hw_002",
              front: "What does RAM stand for and what is its characteristic?",
              back: "Random Access Memory; temporary memory where data is lost when powered off."
            },
            {
              id: "fc_hw_003",
              front: "What is ROM?",
              back: "Read Only Memory; permanent memory containing essential instructions that cannot be changed."
            }
          ],
          questions: [
            {
              id: "l1_q1",
              type: "identification",
              question: "(Input Devices - Q1) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Keyboard",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q2",
              type: "true_false",
              question: "(Input Devices - Q2) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q3",
              type: "identification",
              question: "(System Unit - Q3) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Microprocessor",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q4",
              type: "true_false",
              question: "(System Unit - Q4) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q5",
              type: "identification",
              question: "(CPU - Q5) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Arithmetic Logic Unit",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q6",
              type: "true_false",
              question: "(CPU - Q6) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q7",
              type: "identification",
              question: "(RAM - Q7) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Random Access Memory",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q8",
              type: "true_false",
              question: "(RAM - Q8) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q9",
              type: "identification",
              question: "(ROM - Q9) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Read Only Memory",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q10",
              type: "true_false",
              question: "(ROM - Q10) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q11",
              type: "identification",
              question: "(Output Devices - Q11) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "Monitor",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q12",
              type: "true_false",
              question: "(Output Devices - Q12) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q13",
              type: "identification",
              question: "(Storage Devices - Q13) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Hard Disk Drive",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q14",
              type: "true_false",
              question: "(Storage Devices - Q14) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q15",
              type: "identification",
              question: "(Input Devices - Q15) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Mouse",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q16",
              type: "true_false",
              question: "(Input Devices - Q16) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q17",
              type: "identification",
              question: "(System Unit - Q17) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Motherboard",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q18",
              type: "true_false",
              question: "(System Unit - Q18) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q19",
              type: "identification",
              question: "(CPU - Q19) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Control Unit",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q20",
              type: "true_false",
              question: "(CPU - Q20) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q21",
              type: "identification",
              question: "(RAM - Q21) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Temporary Memory",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q22",
              type: "true_false",
              question: "(RAM - Q22) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q23",
              type: "identification",
              question: "(ROM - Q23) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Permanent Memory",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q24",
              type: "true_false",
              question: "(ROM - Q24) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q25",
              type: "identification",
              question: "(Output Devices - Q25) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "Printer",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q26",
              type: "true_false",
              question: "(Output Devices - Q26) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q27",
              type: "identification",
              question: "(Storage Devices - Q27) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Optical Disk",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q28",
              type: "true_false",
              question: "(Storage Devices - Q28) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q29",
              type: "identification",
              question: "(Input Devices - Q29) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Scanner",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q30",
              type: "true_false",
              question: "(Input Devices - Q30) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q31",
              type: "identification",
              question: "(System Unit - Q31) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Power Supply",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q32",
              type: "true_false",
              question: "(System Unit - Q32) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q33",
              type: "identification",
              question: "(CPU - Q33) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Registers",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q34",
              type: "true_false",
              question: "(CPU - Q34) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q35",
              type: "identification",
              question: "(RAM - Q35) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Main Storage",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q36",
              type: "true_false",
              question: "(RAM - Q36) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q37",
              type: "identification",
              question: "(ROM - Q37) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Non-volatile Memory",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q38",
              type: "true_false",
              question: "(ROM - Q38) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q39",
              type: "identification",
              question: "(Output Devices - Q39) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "Plotter",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q40",
              type: "true_false",
              question: "(Output Devices - Q40) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q41",
              type: "identification",
              question: "(Storage Devices - Q41) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Solid-state Drive",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q42",
              type: "true_false",
              question: "(Storage Devices - Q42) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q43",
              type: "identification",
              question: "(Input Devices - Q43) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Barcode Reader",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q44",
              type: "true_false",
              question: "(Input Devices - Q44) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q45",
              type: "identification",
              question: "(System Unit - Q45) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Cache Memory",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q46",
              type: "true_false",
              question: "(System Unit - Q46) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q47",
              type: "identification",
              question: "(CPU - Q47) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Microprocessor",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q48",
              type: "true_false",
              question: "(CPU - Q48) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q49",
              type: "identification",
              question: "(RAM - Q49) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Volatile Memory",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q50",
              type: "true_false",
              question: "(RAM - Q50) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q51",
              type: "identification",
              question: "(ROM - Q51) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Basic Input Output System",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q52",
              type: "true_false",
              question: "(ROM - Q52) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q53",
              type: "identification",
              question: "(Output Devices - Q53) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "Speaker",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q54",
              type: "true_false",
              question: "(Output Devices - Q54) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q55",
              type: "identification",
              question: "(Storage Devices - Q55) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Magnetic Tape",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q56",
              type: "true_false",
              question: "(Storage Devices - Q56) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q57",
              type: "identification",
              question: "(Input Devices - Q57) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Digital Camera",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q58",
              type: "true_false",
              question: "(Input Devices - Q58) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q59",
              type: "identification",
              question: "(System Unit - Q59) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Sound Card",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q60",
              type: "true_false",
              question: "(System Unit - Q60) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q61",
              type: "identification",
              question: "(CPU - Q61) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Fetch Decode Execute",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q62",
              type: "true_false",
              question: "(CPU - Q62) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q63",
              type: "identification",
              question: "(RAM - Q63) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Memory Module",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q64",
              type: "true_false",
              question: "(RAM - Q64) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q65",
              type: "identification",
              question: "(ROM - Q65) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Firmware",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q66",
              type: "true_false",
              question: "(ROM - Q66) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q67",
              type: "identification",
              question: "(Output Devices - Q67) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "CRT Monitor",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q68",
              type: "true_false",
              question: "(Output Devices - Q68) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q69",
              type: "identification",
              question: "(Storage Devices - Q69) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Zip Disk",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q70",
              type: "true_false",
              question: "(Storage Devices - Q70) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q71",
              type: "identification",
              question: "(Input Devices - Q71) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Touch Screen",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q72",
              type: "true_false",
              question: "(Input Devices - Q72) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q73",
              type: "identification",
              question: "(System Unit - Q73) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Video Card",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q74",
              type: "true_false",
              question: "(System Unit - Q74) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q75",
              type: "identification",
              question: "(CPU - Q75) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Central Processing Unit",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q76",
              type: "true_false",
              question: "(CPU - Q76) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q77",
              type: "identification",
              question: "(RAM - Q77) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Random Access Memory",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q78",
              type: "true_false",
              question: "(RAM - Q78) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q79",
              type: "identification",
              question: "(ROM - Q79) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Read Only Memory",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q80",
              type: "true_false",
              question: "(ROM - Q80) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q81",
              type: "identification",
              question: "(Output Devices - Q81) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "Flat Panel Display",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q82",
              type: "true_false",
              question: "(Output Devices - Q82) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q83",
              type: "identification",
              question: "(Storage Devices - Q83) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Compact Disc",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q84",
              type: "true_false",
              question: "(Storage Devices - Q84) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q85",
              type: "identification",
              question: "(Input Devices - Q85) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Trackball",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q86",
              type: "true_false",
              question: "(Input Devices - Q86) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            },
            {
              id: "l1_q87",
              type: "identification",
              question: "(System Unit - Q87) Identify the primary term, device, component, or mathematical function associated with System Unit as discussed in The Basics of Computer Hardware.",
              answer: "Expansion Slot",
              explanation: "This concept is foundational to understanding System Unit within The Basics of Computer Hardware."
            },
            {
              id: "l1_q88",
              type: "true_false",
              question: "(System Unit - Q88) Modified True or False: In the context of System Unit, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to System Unit."
            },
            {
              id: "l1_q89",
              type: "identification",
              question: "(CPU - Q89) Identify the primary term, device, component, or mathematical function associated with CPU as discussed in The Basics of Computer Hardware.",
              answer: "Arithmetic Logic Unit",
              explanation: "This concept is foundational to understanding CPU within The Basics of Computer Hardware."
            },
            {
              id: "l1_q90",
              type: "true_false",
              question: "(CPU - Q90) Modified True or False: In the context of CPU, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to CPU."
            },
            {
              id: "l1_q91",
              type: "identification",
              question: "(RAM - Q91) Identify the primary term, device, component, or mathematical function associated with RAM as discussed in The Basics of Computer Hardware.",
              answer: "Random Access Memory",
              explanation: "This concept is foundational to understanding RAM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q92",
              type: "true_false",
              question: "(RAM - Q92) Modified True or False: In the context of RAM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to RAM."
            },
            {
              id: "l1_q93",
              type: "identification",
              question: "(ROM - Q93) Identify the primary term, device, component, or mathematical function associated with ROM as discussed in The Basics of Computer Hardware.",
              answer: "Read Only Memory",
              explanation: "This concept is foundational to understanding ROM within The Basics of Computer Hardware."
            },
            {
              id: "l1_q94",
              type: "true_false",
              question: "(ROM - Q94) Modified True or False: In the context of ROM, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to ROM."
            },
            {
              id: "l1_q95",
              type: "identification",
              question: "(Output Devices - Q95) Identify the primary term, device, component, or mathematical function associated with Output Devices as discussed in The Basics of Computer Hardware.",
              answer: "Inkjet Printer",
              explanation: "This concept is foundational to understanding Output Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q96",
              type: "true_false",
              question: "(Output Devices - Q96) Modified True or False: In the context of Output Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Output Devices."
            },
            {
              id: "l1_q97",
              type: "identification",
              question: "(Storage Devices - Q97) Identify the primary term, device, component, or mathematical function associated with Storage Devices as discussed in The Basics of Computer Hardware.",
              answer: "Floppy Disk",
              explanation: "This concept is foundational to understanding Storage Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q98",
              type: "true_false",
              question: "(Storage Devices - Q98) Modified True or False: In the context of Storage Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Storage Devices."
            },
            {
              id: "l1_q99",
              type: "identification",
              question: "(Input Devices - Q99) Identify the primary term, device, component, or mathematical function associated with Input Devices as discussed in The Basics of Computer Hardware.",
              answer: "Light Pen",
              explanation: "This concept is foundational to understanding Input Devices within The Basics of Computer Hardware."
            },
            {
              id: "l1_q100",
              type: "true_false",
              question: "(Input Devices - Q100) Modified True or False: In the context of Input Devices, statements concerning operational principles in The Basics of Computer Hardware are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Input Devices."
            }
          ]
        },
        {
          id: "lesson_software_excel",
          title: "Software and Basic Excel Functions",
          description: "Covers system and application software types, freeware, shareware, open source, beta versions, and fundamental spreadsheet formulas.",
          difficulty: "medium",
          estimatedTime: "45 mins",
          tags: ["software", "excel", "spreadsheet", "functions"],
          learningObjectives: [
            "Differentiate between system software and application software.",
            "Understand licensing categories like freeware, shareware, and open source.",
            "Apply basic Excel mathematical and statistical formulas."
          ],
          keywords: ["Software", "Freeware", "Shareware", "SUM", "PRODUCT", "QUOTIENT", "MOD", "MIN", "MAX"],
          content: [
            {
              type: "heading",
              text: "Types of Software"
            },
            {
              type: "paragraph",
              text: "Software consists of sets of instructions that tell the computer what to do to perform specific tasks. It is broadly categorized into System Software and Application Software."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Productivity Software: Word processing (MS Word, Google Docs), Spreadsheet (MS Excel), Presentation (MS PowerPoint, Slides).",
                "Multimedia: Video editing software, Image editing software (Photoshop, Canva), Sound editing software (Audacity).",
                "Web Page Software & Entertainment."
              ]
            },
            {
              type: "heading",
              text: "Software Distribution Categories"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Freeware: Software that is free to use (e.g., Facebook, Instagram).",
                "Shareware: Software that you can use for a limited time only before requiring purchase.",
                "Beta Version: Software that is still under active development and testing.",
                "Open Source: Software whose source code can be used, modified, and downloaded freely on the internet."
              ]
            },
            {
              type: "heading",
              text: "Basic Excel Functions"
            },
            {
              type: "definition",
              title: "SUM()",
              text: "Adds values or specified cells. Syntax: =SUM(number1, number2,...). You can use a comma (,) for individual cells or a colon (:) for a range shortcut."
            },
            {
              type: "definition",
              title: "PRODUCT()",
              text: "Multiplies values of specified cells. Syntax: =PRODUCT(number1, number2,...)."
            },
            {
              type: "definition",
              title: "QUOTIENT()",
              text: "Returns the integer portion of a division. Only two cell values can be used. Syntax: =QUOTIENT(number1, number2)."
            },
            {
              type: "definition",
              title: "MOD()",
              text: "Returns the remainder after a number is divided by a divisor. Only two cell values can be used. Syntax: =MOD(number1, number2)."
            },
            {
              type: "definition",
              title: "MIN()",
              text: "Returns the smallest number in a set of values, ignoring logical values and text. Syntax: =MIN(number1, number2,...)."
            },
            {
              type: "definition",
              title: "MAX()",
              text: "Returns the largest number in a set of values, ignoring logical values and text. Syntax: =MAX(number1, number2,...)."
            }
          ],
          flashcards: [
            {
              id: "fc_soft_001",
              front: "What is freeware?",
              back: "Software that is free to use."
            },
            {
              id: "fc_soft_002",
              front: "What is the syntax for the Excel QUOTIENT function?",
              back: "=QUOTIENT(number1, number2)"
            }
          ],
          questions: [
            {
              id: "l2_q1",
              type: "identification",
              question: "(Software Types - Q1) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "Application Software",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q2",
              type: "true_false",
              question: "(Software Types - Q2) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q3",
              type: "identification",
              question: "(Freeware/Shareware - Q3) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Shareware",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q4",
              type: "true_false",
              question: "(Freeware/Shareware - Q4) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            },
            {
              id: "l2_q5",
              type: "identification",
              question: "(SUM - Q5) Identify the primary term, device, component, or mathematical function associated with SUM as discussed in Software and Basic Excel Functions.",
              answer: "=SUM()",
              explanation: "This concept is foundational to understanding SUM within Software and Basic Excel Functions."
            },
            {
              id: "l2_q6",
              type: "true_false",
              question: "(SUM - Q6) Modified True or False: In the context of SUM, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to SUM."
            },
            {
              id: "l2_q7",
              type: "identification",
              question: "(PRODUCT - Q7) Identify the primary term, device, component, or mathematical function associated with PRODUCT as discussed in Software and Basic Excel Functions.",
              answer: "=PRODUCT()",
              explanation: "This concept is foundational to understanding PRODUCT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q8",
              type: "true_false",
              question: "(PRODUCT - Q8) Modified True or False: In the context of PRODUCT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to PRODUCT."
            },
            {
              id: "l2_q9",
              type: "identification",
              question: "(QUOTIENT - Q9) Identify the primary term, device, component, or mathematical function associated with QUOTIENT as discussed in Software and Basic Excel Functions.",
              answer: "=QUOTIENT()",
              explanation: "This concept is foundational to understanding QUOTIENT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q10",
              type: "true_false",
              question: "(QUOTIENT - Q10) Modified True or False: In the context of QUOTIENT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to QUOTIENT."
            },
            {
              id: "l2_q11",
              type: "identification",
              question: "(MOD - Q11) Identify the primary term, device, component, or mathematical function associated with MOD as discussed in Software and Basic Excel Functions.",
              answer: "=MOD()",
              explanation: "This concept is foundational to understanding MOD within Software and Basic Excel Functions."
            },
            {
              id: "l2_q12",
              type: "true_false",
              question: "(MOD - Q12) Modified True or False: In the context of MOD, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MOD."
            },
            {
              id: "l2_q13",
              type: "identification",
              question: "(MIN - Q13) Identify the primary term, device, component, or mathematical function associated with MIN as discussed in Software and Basic Excel Functions.",
              answer: "=MIN()",
              explanation: "This concept is foundational to understanding MIN within Software and Basic Excel Functions."
            },
            {
              id: "l2_q14",
              type: "true_false",
              question: "(MIN - Q14) Modified True or False: In the context of MIN, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MIN."
            },
            {
              id: "l2_q15",
              type: "identification",
              question: "(MAX - Q15) Identify the primary term, device, component, or mathematical function associated with MAX as discussed in Software and Basic Excel Functions.",
              answer: "=MAX()",
              explanation: "This concept is foundational to understanding MAX within Software and Basic Excel Functions."
            },
            {
              id: "l2_q16",
              type: "true_false",
              question: "(MAX - Q16) Modified True or False: In the context of MAX, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MAX."
            },
            {
              id: "l2_q17",
              type: "identification",
              question: "(Software Types - Q17) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "System Software",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q18",
              type: "true_false",
              question: "(Software Types - Q18) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q19",
              type: "identification",
              question: "(Freeware/Shareware - Q19) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Freeware",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q20",
              type: "true_false",
              question: "(Freeware/Shareware - Q20) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            },
            {
              id: "l2_q21",
              type: "identification",
              question: "(SUM - Q21) Identify the primary term, device, component, or mathematical function associated with SUM as discussed in Software and Basic Excel Functions.",
              answer: "Addition Function",
              explanation: "This concept is foundational to understanding SUM within Software and Basic Excel Functions."
            },
            {
              id: "l2_q22",
              type: "true_false",
              question: "(SUM - Q22) Modified True or False: In the context of SUM, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to SUM."
            },
            {
              id: "l2_q23",
              type: "identification",
              question: "(PRODUCT - Q23) Identify the primary term, device, component, or mathematical function associated with PRODUCT as discussed in Software and Basic Excel Functions.",
              answer: "Multiplication Function",
              explanation: "This concept is foundational to understanding PRODUCT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q24",
              type: "true_false",
              question: "(PRODUCT - Q24) Modified True or False: In the context of PRODUCT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to PRODUCT."
            },
            {
              id: "l2_q25",
              type: "identification",
              question: "(QUOTIENT - Q25) Identify the primary term, device, component, or mathematical function associated with QUOTIENT as discussed in Software and Basic Excel Functions.",
              answer: "Integer Division",
              explanation: "This concept is foundational to understanding QUOTIENT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q26",
              type: "true_false",
              question: "(QUOTIENT - Q26) Modified True or False: In the context of QUOTIENT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to QUOTIENT."
            },
            {
              id: "l2_q27",
              type: "identification",
              question: "(MOD - Q27) Identify the primary term, device, component, or mathematical function associated with MOD as discussed in Software and Basic Excel Functions.",
              answer: "Remainder Function",
              explanation: "This concept is foundational to understanding MOD within Software and Basic Excel Functions."
            },
            {
              id: "l2_q28",
              type: "true_false",
              question: "(MOD - Q28) Modified True or False: In the context of MOD, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MOD."
            },
            {
              id: "l2_q29",
              type: "identification",
              question: "(MIN - Q29) Identify the primary term, device, component, or mathematical function associated with MIN as discussed in Software and Basic Excel Functions.",
              answer: "Smallest Value",
              explanation: "This concept is foundational to understanding MIN within Software and Basic Excel Functions."
            },
            {
              id: "l2_q30",
              type: "true_false",
              question: "(MIN - Q30) Modified True or False: In the context of MIN, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MIN."
            },
            {
              id: "l2_q31",
              type: "identification",
              question: "(MAX - Q31) Identify the primary term, device, component, or mathematical function associated with MAX as discussed in Software and Basic Excel Functions.",
              answer: "Largest Value",
              explanation: "This concept is foundational to understanding MAX within Software and Basic Excel Functions."
            },
            {
              id: "l2_q32",
              type: "true_false",
              question: "(MAX - Q32) Modified True or False: In the context of MAX, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MAX."
            },
            {
              id: "l2_q33",
              type: "identification",
              question: "(Software Types - Q33) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "Beta Version",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q34",
              type: "true_false",
              question: "(Software Types - Q34) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q35",
              type: "identification",
              question: "(Freeware/Shareware - Q35) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Open Source",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q36",
              type: "true_false",
              question: "(Freeware/Shareware - Q36) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            },
            {
              id: "l2_q37",
              type: "identification",
              question: "(SUM - Q37) Identify the primary term, device, component, or mathematical function associated with SUM as discussed in Software and Basic Excel Functions.",
              answer: "Colon Separator",
              explanation: "This concept is foundational to understanding SUM within Software and Basic Excel Functions."
            },
            {
              id: "l2_q38",
              type: "true_false",
              question: "(SUM - Q38) Modified True or False: In the context of SUM, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to SUM."
            },
            {
              id: "l2_q39",
              type: "identification",
              question: "(PRODUCT - Q39) Identify the primary term, device, component, or mathematical function associated with PRODUCT as discussed in Software and Basic Excel Functions.",
              answer: "Product Range",
              explanation: "This concept is foundational to understanding PRODUCT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q40",
              type: "true_false",
              question: "(PRODUCT - Q40) Modified True or False: In the context of PRODUCT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to PRODUCT."
            },
            {
              id: "l2_q41",
              type: "identification",
              question: "(QUOTIENT - Q41) Identify the primary term, device, component, or mathematical function associated with QUOTIENT as discussed in Software and Basic Excel Functions.",
              answer: "Two Arguments Only",
              explanation: "This concept is foundational to understanding QUOTIENT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q42",
              type: "true_false",
              question: "(QUOTIENT - Q42) Modified True or False: In the context of QUOTIENT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to QUOTIENT."
            },
            {
              id: "l2_q43",
              type: "identification",
              question: "(MOD - Q43) Identify the primary term, device, component, or mathematical function associated with MOD as discussed in Software and Basic Excel Functions.",
              answer: "Divisor Remainder",
              explanation: "This concept is foundational to understanding MOD within Software and Basic Excel Functions."
            },
            {
              id: "l2_q44",
              type: "true_false",
              question: "(MOD - Q44) Modified True or False: In the context of MOD, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MOD."
            },
            {
              id: "l2_q45",
              type: "identification",
              question: "(MIN - Q45) Identify the primary term, device, component, or mathematical function associated with MIN as discussed in Software and Basic Excel Functions.",
              answer: "Ignore Text",
              explanation: "This concept is foundational to understanding MIN within Software and Basic Excel Functions."
            },
            {
              id: "l2_q46",
              type: "true_false",
              question: "(MIN - Q46) Modified True or False: In the context of MIN, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MIN."
            },
            {
              id: "l2_q47",
              type: "identification",
              question: "(MAX - Q47) Identify the primary term, device, component, or mathematical function associated with MAX as discussed in Software and Basic Excel Functions.",
              answer: "Ignore Logical Values",
              explanation: "This concept is foundational to understanding MAX within Software and Basic Excel Functions."
            },
            {
              id: "l2_q48",
              type: "true_false",
              question: "(MAX - Q48) Modified True or False: In the context of MAX, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MAX."
            },
            {
              id: "l2_q49",
              type: "identification",
              question: "(Software Types - Q49) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "Productivity Software",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q50",
              type: "true_false",
              question: "(Software Types - Q50) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q51",
              type: "identification",
              question: "(Freeware/Shareware - Q51) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Trial Software",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q52",
              type: "true_false",
              question: "(Freeware/Shareware - Q52) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            },
            {
              id: "l2_q53",
              type: "identification",
              question: "(SUM - Q53) Identify the primary term, device, component, or mathematical function associated with SUM as discussed in Software and Basic Excel Functions.",
              answer: "Comma Separator",
              explanation: "This concept is foundational to understanding SUM within Software and Basic Excel Functions."
            },
            {
              id: "l2_q54",
              type: "true_false",
              question: "(SUM - Q54) Modified True or False: In the context of SUM, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to SUM."
            },
            {
              id: "l2_q55",
              type: "identification",
              question: "(PRODUCT - Q55) Identify the primary term, device, component, or mathematical function associated with PRODUCT as discussed in Software and Basic Excel Functions.",
              answer: "Product Syntax",
              explanation: "This concept is foundational to understanding PRODUCT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q56",
              type: "true_false",
              question: "(PRODUCT - Q56) Modified True or False: In the context of PRODUCT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to PRODUCT."
            },
            {
              id: "l2_q57",
              type: "identification",
              question: "(QUOTIENT - Q57) Identify the primary term, device, component, or mathematical function associated with QUOTIENT as discussed in Software and Basic Excel Functions.",
              answer: "Numerator Denominator",
              explanation: "This concept is foundational to understanding QUOTIENT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q58",
              type: "true_false",
              question: "(QUOTIENT - Q58) Modified True or False: In the context of QUOTIENT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to QUOTIENT."
            },
            {
              id: "l2_q59",
              type: "identification",
              question: "(MOD - Q59) Identify the primary term, device, component, or mathematical function associated with MOD as discussed in Software and Basic Excel Functions.",
              answer: "Modulus Syntax",
              explanation: "This concept is foundational to understanding MOD within Software and Basic Excel Functions."
            },
            {
              id: "l2_q60",
              type: "true_false",
              question: "(MOD - Q60) Modified True or False: In the context of MOD, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MOD."
            },
            {
              id: "l2_q61",
              type: "identification",
              question: "(MIN - Q61) Identify the primary term, device, component, or mathematical function associated with MIN as discussed in Software and Basic Excel Functions.",
              answer: "Minimum Syntax",
              explanation: "This concept is foundational to understanding MIN within Software and Basic Excel Functions."
            },
            {
              id: "l2_q62",
              type: "true_false",
              question: "(MIN - Q62) Modified True or False: In the context of MIN, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MIN."
            },
            {
              id: "l2_q63",
              type: "identification",
              question: "(MAX - Q63) Identify the primary term, device, component, or mathematical function associated with MAX as discussed in Software and Basic Excel Functions.",
              answer: "Maximum Syntax",
              explanation: "This concept is foundational to understanding MAX within Software and Basic Excel Functions."
            },
            {
              id: "l2_q64",
              type: "true_false",
              question: "(MAX - Q64) Modified True or False: In the context of MAX, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MAX."
            },
            {
              id: "l2_q65",
              type: "identification",
              question: "(Software Types - Q65) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "Multimedia Software",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q66",
              type: "true_false",
              question: "(Software Types - Q66) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q67",
              type: "identification",
              question: "(Freeware/Shareware - Q67) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Source Code Modification",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q68",
              type: "true_false",
              question: "(Freeware/Shareware - Q68) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            },
            {
              id: "l2_q69",
              type: "identification",
              question: "(SUM - Q69) Identify the primary term, device, component, or mathematical function associated with SUM as discussed in Software and Basic Excel Functions.",
              answer: "Summation",
              explanation: "This concept is foundational to understanding SUM within Software and Basic Excel Functions."
            },
            {
              id: "l2_q70",
              type: "true_false",
              question: "(SUM - Q70) Modified True or False: In the context of SUM, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to SUM."
            },
            {
              id: "l2_q71",
              type: "identification",
              question: "(PRODUCT - Q71) Identify the primary term, device, component, or mathematical function associated with PRODUCT as discussed in Software and Basic Excel Functions.",
              answer: "Multiplication",
              explanation: "This concept is foundational to understanding PRODUCT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q72",
              type: "true_false",
              question: "(PRODUCT - Q72) Modified True or False: In the context of PRODUCT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to PRODUCT."
            },
            {
              id: "l2_q73",
              type: "identification",
              question: "(QUOTIENT - Q73) Identify the primary term, device, component, or mathematical function associated with QUOTIENT as discussed in Software and Basic Excel Functions.",
              answer: "Division Integer",
              explanation: "This concept is foundational to understanding QUOTIENT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q74",
              type: "true_false",
              question: "(QUOTIENT - Q74) Modified True or False: In the context of QUOTIENT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to QUOTIENT."
            },
            {
              id: "l2_q75",
              type: "identification",
              question: "(MOD - Q75) Identify the primary term, device, component, or mathematical function associated with MOD as discussed in Software and Basic Excel Functions.",
              answer: "Modulo Operator",
              explanation: "This concept is foundational to understanding MOD within Software and Basic Excel Functions."
            },
            {
              id: "l2_q76",
              type: "true_false",
              question: "(MOD - Q76) Modified True or False: In the context of MOD, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MOD."
            },
            {
              id: "l2_q77",
              type: "identification",
              question: "(MIN - Q77) Identify the primary term, device, component, or mathematical function associated with MIN as discussed in Software and Basic Excel Functions.",
              answer: "Minimum Function",
              explanation: "This concept is foundational to understanding MIN within Software and Basic Excel Functions."
            },
            {
              id: "l2_q78",
              type: "true_false",
              question: "(MIN - Q78) Modified True or False: In the context of MIN, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MIN."
            },
            {
              id: "l2_q79",
              type: "identification",
              question: "(MAX - Q79) Identify the primary term, device, component, or mathematical function associated with MAX as discussed in Software and Basic Excel Functions.",
              answer: "Maximum Function",
              explanation: "This concept is foundational to understanding MAX within Software and Basic Excel Functions."
            },
            {
              id: "l2_q80",
              type: "true_false",
              question: "(MAX - Q80) Modified True or False: In the context of MAX, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MAX."
            },
            {
              id: "l2_q81",
              type: "identification",
              question: "(Software Types - Q81) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "Spreadsheet Software",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q82",
              type: "true_false",
              question: "(Software Types - Q82) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q83",
              type: "identification",
              question: "(Freeware/Shareware - Q83) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Development Stage",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q84",
              type: "true_false",
              question: "(Freeware/Shareware - Q84) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            },
            {
              id: "l2_q85",
              type: "identification",
              question: "(SUM - Q85) Identify the primary term, device, component, or mathematical function associated with SUM as discussed in Software and Basic Excel Functions.",
              answer: "Range Sum",
              explanation: "This concept is foundational to understanding SUM within Software and Basic Excel Functions."
            },
            {
              id: "l2_q86",
              type: "true_false",
              question: "(SUM - Q86) Modified True or False: In the context of SUM, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to SUM."
            },
            {
              id: "l2_q87",
              type: "identification",
              question: "(PRODUCT - Q87) Identify the primary term, device, component, or mathematical function associated with PRODUCT as discussed in Software and Basic Excel Functions.",
              answer: "Product Formula",
              explanation: "This concept is foundational to understanding PRODUCT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q88",
              type: "true_false",
              question: "(PRODUCT - Q88) Modified True or False: In the context of PRODUCT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to PRODUCT."
            },
            {
              id: "l2_q89",
              type: "identification",
              question: "(QUOTIENT - Q89) Identify the primary term, device, component, or mathematical function associated with QUOTIENT as discussed in Software and Basic Excel Functions.",
              answer: "Integer Result",
              explanation: "This concept is foundational to understanding QUOTIENT within Software and Basic Excel Functions."
            },
            {
              id: "l2_q90",
              type: "true_false",
              question: "(QUOTIENT - Q90) Modified True or False: In the context of QUOTIENT, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to QUOTIENT."
            },
            {
              id: "l2_q91",
              type: "identification",
              question: "(MOD - Q91) Identify the primary term, device, component, or mathematical function associated with MOD as discussed in Software and Basic Excel Functions.",
              answer: "Remainder Result",
              explanation: "This concept is foundational to understanding MOD within Software and Basic Excel Functions."
            },
            {
              id: "l2_q92",
              type: "true_false",
              question: "(MOD - Q92) Modified True or False: In the context of MOD, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MOD."
            },
            {
              id: "l2_q93",
              type: "identification",
              question: "(MIN - Q93) Identify the primary term, device, component, or mathematical function associated with MIN as discussed in Software and Basic Excel Functions.",
              answer: "Lowest Number",
              explanation: "This concept is foundational to understanding MIN within Software and Basic Excel Functions."
            },
            {
              id: "l2_q94",
              type: "true_false",
              question: "(MIN - Q94) Modified True or False: In the context of MIN, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to MIN."
            },
            {
              id: "l2_q95",
              type: "identification",
              question: "(MAX - Q95) Identify the primary term, device, component, or mathematical function associated with MAX as discussed in Software and Basic Excel Functions.",
              answer: "Highest Number",
              explanation: "This concept is foundational to understanding MAX within Software and Basic Excel Functions."
            },
            {
              id: "l2_q96",
              type: "true_false",
              question: "(MAX - Q96) Modified True or False: In the context of MAX, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to MAX."
            },
            {
              id: "l2_q97",
              type: "identification",
              question: "(Software Types - Q97) Identify the primary term, device, component, or mathematical function associated with Software Types as discussed in Software and Basic Excel Functions.",
              answer: "Word Processor",
              explanation: "This concept is foundational to understanding Software Types within Software and Basic Excel Functions."
            },
            {
              id: "l2_q98",
              type: "true_false",
              question: "(Software Types - Q98) Modified True or False: In the context of Software Types, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Software Types."
            },
            {
              id: "l2_q99",
              type: "identification",
              question: "(Freeware/Shareware - Q99) Identify the primary term, device, component, or mathematical function associated with Freeware/Shareware as discussed in Software and Basic Excel Functions.",
              answer: "Free Distribution",
              explanation: "This concept is foundational to understanding Freeware/Shareware within Software and Basic Excel Functions."
            },
            {
              id: "l2_q100",
              type: "true_false",
              question: "(Freeware/Shareware - Q100) Modified True or False: In the context of Freeware/Shareware, statements concerning operational principles in Software and Basic Excel Functions are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Freeware/Shareware."
            }
          ]
        },
        {
          id: "lesson_characteristics_applications",
          title: "Computer Characteristics, Functions & Applications",
          description: "Covers the core functions (Input, Process, Output, Store), fundamental characteristics (Speed, Diligence, Accuracy, Memory), and real-world applications.",
          difficulty: "medium",
          estimatedTime: "45 mins",
          tags: ["characteristics", "applications", "functions"],
          learningObjectives: [
            "Explain the four primary functions of a computer.",
            "Describe the core characteristics of computers.",
            "Identify real-world computer applications across various industries."
          ],
          keywords: ["Speed", "Memory", "Diligence", "Accuracy", "Engineering", "Education", "Government"],
          content: [
            {
              type: "heading",
              text: "Computer Functions"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Input: Accepting words, symbols, numbers, sound, pictures, and program instructions.",
                "Process: Calculating, sorting, and modifying data using the microprocessor or CPU.",
                "Output: Presenting results of processing (reports, graphs, documents, pictures) via printer or monitor.",
                "Store: Holding data temporarily in memory (RAM) or permanently in storage (disk)."
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
                "Speed: Capable of executing billions of operations per second.",
                "Memory: Can store and recall vast amounts of information without forgetting unless instructed.",
                "Diligence: Free from tiredness, lack of concentration, and fatigue.",
                "Accuracy: Errors are primarily due to human weakness (imprecise programming or incorrect data) rather than technological failure."
              ]
            },
            {
              type: "heading",
              text: "Applications of Computers"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Engineering & Architecture: Used for 3D modeling, animated walk-throughs, and precision drafting.",
                "Education: Enhancing student learning through interactive multimedia and digital teaching methods.",
                "Government: Weather forecasting, park management, tax collection, and social security processing.",
                "The Home: Record keeping, budgeting, correspondence, presentations, and global connectivity.",
                "Scientific Research: Driving breakthroughs and complex data analysis."
              ]
            }
          ],
          flashcards: [
            {
              id: "fc_app_001",
              front: "What are the four primary computer functions?",
              back: "Input, Process, Output, Store"
            },
            {
              id: "fc_app_002",
              front: "What is computer diligence?",
              back: "Being free from tiredness, lack of concentration, and fatigue."
            }
          ],
          questions: [
            {
              id: "l3_q1",
              type: "identification",
              question: "(Speed - Q1) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Billions of Operations",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q2",
              type: "true_false",
              question: "(Speed - Q2) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q3",
              type: "identification",
              question: "(Memory - Q3) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Recall Information",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q4",
              type: "true_false",
              question: "(Memory - Q4) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q5",
              type: "identification",
              question: "(Diligence - Q5) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Free From Tiredness",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q6",
              type: "true_false",
              question: "(Diligence - Q6) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q7",
              type: "identification",
              question: "(Accuracy - Q7) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Human Weakness",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q8",
              type: "true_false",
              question: "(Accuracy - Q8) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q9",
              type: "identification",
              question: "(Government - Q9) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Weather Forecasting",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q10",
              type: "true_false",
              question: "(Government - Q10) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q11",
              type: "identification",
              question: "(Medicine - Q11) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Medical Monitoring",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q12",
              type: "true_false",
              question: "(Medicine - Q12) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q13",
              type: "identification",
              question: "(Manufacturing - Q13) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Robotics",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q14",
              type: "true_false",
              question: "(Manufacturing - Q14) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q15",
              type: "identification",
              question: "(Speed - Q15) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "High Speed",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q16",
              type: "true_false",
              question: "(Speed - Q16) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q17",
              type: "identification",
              question: "(Memory - Q17) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Vast Amount",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q18",
              type: "true_false",
              question: "(Memory - Q18) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q19",
              type: "identification",
              question: "(Diligence - Q19) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Fatigue Free",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q20",
              type: "true_false",
              question: "(Diligence - Q20) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q21",
              type: "identification",
              question: "(Accuracy - Q21) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Precise Programming",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q22",
              type: "true_false",
              question: "(Accuracy - Q22) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q23",
              type: "identification",
              question: "(Government - Q23) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Tax Collection",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q24",
              type: "true_false",
              question: "(Government - Q24) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q25",
              type: "identification",
              question: "(Medicine - Q25) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Patient Record",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q26",
              type: "true_false",
              question: "(Medicine - Q26) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q27",
              type: "identification",
              question: "(Manufacturing - Q27) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Assembly Line",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q28",
              type: "true_false",
              question: "(Manufacturing - Q28) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q29",
              type: "identification",
              question: "(Speed - Q29) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Fast Processing",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q30",
              type: "true_false",
              question: "(Speed - Q30) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q31",
              type: "identification",
              question: "(Memory - Q31) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Data Storage",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q32",
              type: "true_false",
              question: "(Memory - Q32) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q33",
              type: "identification",
              question: "(Diligence - Q33) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Continuous Operation",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q34",
              type: "true_false",
              question: "(Diligence - Q34) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q35",
              type: "identification",
              question: "(Accuracy - Q35) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Error Free Execution",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q36",
              type: "true_false",
              question: "(Accuracy - Q36) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q37",
              type: "identification",
              question: "(Government - Q37) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Social Security",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q38",
              type: "true_false",
              question: "(Government - Q38) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q39",
              type: "identification",
              question: "(Medicine - Q39) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Diagnostic Tool",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q40",
              type: "true_false",
              question: "(Medicine - Q40) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q41",
              type: "identification",
              question: "(Manufacturing - Q41) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Computer Aided Design",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q42",
              type: "true_false",
              question: "(Manufacturing - Q42) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q43",
              type: "identification",
              question: "(Speed - Q43) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Clock Speed",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q44",
              type: "true_false",
              question: "(Speed - Q44) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q45",
              type: "identification",
              question: "(Memory - Q45) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Storage Capacity",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q46",
              type: "true_false",
              question: "(Memory - Q46) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q47",
              type: "identification",
              question: "(Diligence - Q47) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Unfailing Attention",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q48",
              type: "true_false",
              question: "(Diligence - Q48) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q49",
              type: "identification",
              question: "(Accuracy - Q49) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Logical Correctness",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q50",
              type: "true_false",
              question: "(Accuracy - Q50) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q51",
              type: "identification",
              question: "(Government - Q51) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Park Management",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q52",
              type: "true_false",
              question: "(Government - Q52) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q53",
              type: "identification",
              question: "(Medicine - Q53) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Hospital Information System",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q54",
              type: "true_false",
              question: "(Medicine - Q54) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q55",
              type: "identification",
              question: "(Manufacturing - Q55) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Process Control",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q56",
              type: "true_false",
              question: "(Manufacturing - Q56) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q57",
              type: "identification",
              question: "(Speed - Q57) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "MIPS",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q58",
              type: "true_false",
              question: "(Speed - Q58) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q59",
              type: "identification",
              question: "(Memory - Q59) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Information Retrieval",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q60",
              type: "true_false",
              question: "(Memory - Q60) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q61",
              type: "identification",
              question: "(Diligence - Q61) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Tireless Worker",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q62",
              type: "true_false",
              question: "(Diligence - Q62) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q63",
              type: "identification",
              question: "(Accuracy - Q63) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Garbage In Garbage Out",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q64",
              type: "true_false",
              question: "(Accuracy - Q64) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q65",
              type: "identification",
              question: "(Government - Q65) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Census Bureau",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q66",
              type: "true_false",
              question: "(Government - Q66) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q67",
              type: "identification",
              question: "(Medicine - Q67) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Telemedicine",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q68",
              type: "true_false",
              question: "(Medicine - Q68) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q69",
              type: "identification",
              question: "(Manufacturing - Q69) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Inventory Automation",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q70",
              type: "true_false",
              question: "(Manufacturing - Q70) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q71",
              type: "identification",
              question: "(Speed - Q71) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Processing Speed",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q72",
              type: "true_false",
              question: "(Speed - Q72) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q73",
              type: "identification",
              question: "(Memory - Q73) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Memory Retention",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q74",
              type: "true_false",
              question: "(Memory - Q74) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q75",
              type: "identification",
              question: "(Diligence - Q75) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Boredom Free",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q76",
              type: "true_false",
              question: "(Diligence - Q76) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q77",
              type: "identification",
              question: "(Accuracy - Q77) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "High Precision",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q78",
              type: "true_false",
              question: "(Accuracy - Q78) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q79",
              type: "identification",
              question: "(Government - Q79) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Defense Systems",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q80",
              type: "true_false",
              question: "(Government - Q80) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q81",
              type: "identification",
              question: "(Medicine - Q81) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Medical Imaging",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q82",
              type: "true_false",
              question: "(Medicine - Q82) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q83",
              type: "identification",
              question: "(Manufacturing - Q83) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Quality Control",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q84",
              type: "true_false",
              question: "(Manufacturing - Q84) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q85",
              type: "identification",
              question: "(Speed - Q85) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Gigahertz Processor",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q86",
              type: "true_false",
              question: "(Speed - Q86) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
            },
            {
              id: "l3_q87",
              type: "identification",
              question: "(Memory - Q87) Identify the primary term, device, component, or mathematical function associated with Memory as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Mass Storage",
              explanation: "This concept is foundational to understanding Memory within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q88",
              type: "true_false",
              question: "(Memory - Q88) Modified True or False: In the context of Memory, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Memory."
            },
            {
              id: "l3_q89",
              type: "identification",
              question: "(Diligence - Q89) Identify the primary term, device, component, or mathematical function associated with Diligence as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Endurance",
              explanation: "This concept is foundational to understanding Diligence within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q90",
              type: "true_false",
              question: "(Diligence - Q90) Modified True or False: In the context of Diligence, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Diligence."
            },
            {
              id: "l3_q91",
              type: "identification",
              question: "(Accuracy - Q91) Identify the primary term, device, component, or mathematical function associated with Accuracy as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Exact Calculation",
              explanation: "This concept is foundational to understanding Accuracy within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q92",
              type: "true_false",
              question: "(Accuracy - Q92) Modified True or False: In the context of Accuracy, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Accuracy."
            },
            {
              id: "l3_q93",
              type: "identification",
              question: "(Government - Q93) Identify the primary term, device, component, or mathematical function associated with Government as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Public Service",
              explanation: "This concept is foundational to understanding Government within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q94",
              type: "true_false",
              question: "(Government - Q94) Modified True or False: In the context of Government, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Government."
            },
            {
              id: "l3_q95",
              type: "identification",
              question: "(Medicine - Q95) Identify the primary term, device, component, or mathematical function associated with Medicine as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Patient Monitoring",
              explanation: "This concept is foundational to understanding Medicine within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q96",
              type: "true_false",
              question: "(Medicine - Q96) Modified True or False: In the context of Medicine, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Medicine."
            },
            {
              id: "l3_q97",
              type: "identification",
              question: "(Manufacturing - Q97) Identify the primary term, device, component, or mathematical function associated with Manufacturing as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Automated Production",
              explanation: "This concept is foundational to understanding Manufacturing within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q98",
              type: "true_false",
              question: "(Manufacturing - Q98) Modified True or False: In the context of Manufacturing, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Manufacturing."
            },
            {
              id: "l3_q99",
              type: "identification",
              question: "(Speed - Q99) Identify the primary term, device, component, or mathematical function associated with Speed as discussed in Computer Characteristics, Functions & Applications.",
              answer: "Execution Speed",
              explanation: "This concept is foundational to understanding Speed within Computer Characteristics, Functions & Applications."
            },
            {
              id: "l3_q100",
              type: "true_false",
              question: "(Speed - Q100) Modified True or False: In the context of Speed, statements concerning operational principles in Computer Characteristics, Functions & Applications are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Speed."
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
            "Recognize key historical figures and inventions.",
            "Trace the evolution of the World Wide Web."
          ],
          keywords: ["Premechanical", "Mechanical", "Electromechanical", "Electronic", "WWW"],
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
              text: "Humans communicated using symbols on stone tablets. Later, the papyrus plant revolutionized paper production, and libraries became the first data centers in history."
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
              text: "Invented by Charles Babbage in 1837. Charles Babbage earned the title 'Father of the Computers'."
            },
            {
              type: "heading",
              text: "3. The Electromechanical Period (1840 - 1940)"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Telegraph: Invented in 1837 by William Cooke and Sir Charles Wheatstone using five magnetic needles.",
                "Morse Code: Invented by Samuel Morse in 1844; a single-circuit telegraph system.",
                "Telephone: Patented in 1876 by Alexander Graham Bell; converts sounds into electricity.",
                "The Bombe: Invented in 1939 by Alan Turing (improved by Gordon Welchman) to decipher German enigma codes during WWII."
              ]
            },
            {
              type: "heading",
              text: "4. The Electronic Period (1940s to Present)"
            },
            {
              type: "paragraph",
              text: "Focuses on solid-state devices and electronics, including ENIAC, transistors, integrated circuits, and personal computers."
            },
            {
              type: "heading",
              text: "World Wide Web (WWW)"
            },
            {
              type: "paragraph",
              text: "Proposed in 1989 by Tim Berners-Lee to access hypertext documents and files over the internet."
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Web 1.0: Read-only web for accessing static information.",
                "Web 2.0: Read-and-write web enabling user interaction, social networking, and media sharing.",
                "Web 3.0: Semantic executing web designed for smarter, faster, and wider-ranging data access."
              ]
            }
          ],
          flashcards: [
            {
              id: "fc_hist_001",
              front: "Who is known as the 'Father of the Computers'?",
              back: "Charles Babbage"
            },
            {
              id: "fc_hist_002",
              front: "Who proposed the World Wide Web in 1989?",
              back: "Tim Berners-Lee"
            }
          ],
          questions: [
            {
              id: "l4_q1",
              type: "identification",
              question: "(Premechanical - Q1) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Abacus",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q2",
              type: "true_false",
              question: "(Premechanical - Q2) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q3",
              type: "identification",
              question: "(Mechanical - Q3) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Analytical Engine",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q4",
              type: "true_false",
              question: "(Mechanical - Q4) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q5",
              type: "identification",
              question: "(Electromechanical - Q5) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Telephone",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q6",
              type: "true_false",
              question: "(Electromechanical - Q6) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q7",
              type: "identification",
              question: "(Electronic - Q7) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "ENIAC",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q8",
              type: "true_false",
              question: "(Electronic - Q8) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q9",
              type: "identification",
              question: "(WWW - Q9) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Tim Berners-Lee",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q10",
              type: "true_false",
              question: "(WWW - Q10) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q11",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q11) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Web 2.0",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q12",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q12) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q13",
              type: "identification",
              question: "(Premechanical - Q13) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Papyrus Plant",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q14",
              type: "true_false",
              question: "(Premechanical - Q14) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q15",
              type: "identification",
              question: "(Mechanical - Q15) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Pascaline",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q16",
              type: "true_false",
              question: "(Mechanical - Q16) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q17",
              type: "identification",
              question: "(Electromechanical - Q17) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Morse Code",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q18",
              type: "true_false",
              question: "(Electromechanical - Q18) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q19",
              type: "identification",
              question: "(Electronic - Q19) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Transistor",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q20",
              type: "true_false",
              question: "(Electronic - Q20) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q21",
              type: "identification",
              question: "(WWW - Q21) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Hypertext Documents",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q22",
              type: "true_false",
              question: "(WWW - Q22) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q23",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q23) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Web 3.0",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q24",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q24) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q25",
              type: "identification",
              question: "(Premechanical - Q25) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Stone Tablet",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q26",
              type: "true_false",
              question: "(Premechanical - Q26) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q27",
              type: "identification",
              question: "(Mechanical - Q27) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Charles Babbage",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q28",
              type: "true_false",
              question: "(Mechanical - Q28) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q29",
              type: "identification",
              question: "(Electromechanical - Q29) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "The Bombe",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q30",
              type: "true_false",
              question: "(Electromechanical - Q30) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q31",
              type: "identification",
              question: "(Electronic - Q31) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Integrated Circuit",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q32",
              type: "true_false",
              question: "(Electronic - Q32) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q33",
              type: "identification",
              question: "(WWW - Q33) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "World Wide Web",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q34",
              type: "true_false",
              question: "(WWW - Q34) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q35",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q35) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Web 1.0",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q36",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q36) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q37",
              type: "identification",
              question: "(Premechanical - Q37) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Library Data Center",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q38",
              type: "true_false",
              question: "(Premechanical - Q38) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q39",
              type: "identification",
              question: "(Mechanical - Q39) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Calculation Speed",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q40",
              type: "true_false",
              question: "(Mechanical - Q40) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q41",
              type: "identification",
              question: "(Electromechanical - Q41) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Telegraph",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q42",
              type: "true_false",
              question: "(Electromechanical - Q42) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q43",
              type: "identification",
              question: "(Electronic - Q43) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Vacuum Tube",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q44",
              type: "true_false",
              question: "(Electronic - Q44) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q45",
              type: "identification",
              question: "(WWW - Q45) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Internet Links",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q46",
              type: "true_false",
              question: "(WWW - Q46) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q47",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q47) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Semantic Web",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q48",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q48) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q49",
              type: "identification",
              question: "(Premechanical - Q49) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Symbol Writing",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q50",
              type: "true_false",
              question: "(Premechanical - Q50) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q51",
              type: "identification",
              question: "(Mechanical - Q51) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Wilhelm Schickard",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q52",
              type: "true_false",
              question: "(Mechanical - Q52) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q53",
              type: "identification",
              question: "(Electromechanical - Q53) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Alexander Graham Bell",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q54",
              type: "true_false",
              question: "(Electromechanical - Q54) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q55",
              type: "identification",
              question: "(Electronic - Q55) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Personal Computer",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q56",
              type: "true_false",
              question: "(Electronic - Q56) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q57",
              type: "identification",
              question: "(WWW - Q57) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Database Interface",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q58",
              type: "true_false",
              question: "(WWW - Q58) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q59",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q59) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Social Networking",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q60",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q60) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q61",
              type: "identification",
              question: "(Premechanical - Q61) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Roman Abacus",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q62",
              type: "true_false",
              question: "(Premechanical - Q62) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q63",
              type: "identification",
              question: "(Mechanical - Q63) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Conditional Branching",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q64",
              type: "true_false",
              question: "(Mechanical - Q64) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q65",
              type: "identification",
              question: "(Electromechanical - Q65) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "William Cooke",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q66",
              type: "true_false",
              question: "(Electromechanical - Q66) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q67",
              type: "identification",
              question: "(Electronic - Q67) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Olivetti Programma",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q68",
              type: "true_false",
              question: "(Electronic - Q68) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q69",
              type: "identification",
              question: "(WWW - Q69) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Tim Berners-Lee",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q70",
              type: "true_false",
              question: "(WWW - Q70) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q71",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q71) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Read Only Web",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q72",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q72) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q73",
              type: "identification",
              question: "(Premechanical - Q73) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Chinese Abacus",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q74",
              type: "true_false",
              question: "(Premechanical - Q74) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q75",
              type: "identification",
              question: "(Mechanical - Q75) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Analytical Engine",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q76",
              type: "true_false",
              question: "(Mechanical - Q76) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q77",
              type: "identification",
              question: "(Electromechanical - Q77) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Gordon Welchman",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q78",
              type: "true_false",
              question: "(Electromechanical - Q78) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q79",
              type: "identification",
              question: "(Electronic - Q79) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "IBM 5150",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q80",
              type: "true_false",
              question: "(Electronic - Q80) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q81",
              type: "identification",
              question: "(WWW - Q81) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Hypertext",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q82",
              type: "true_false",
              question: "(WWW - Q82) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q83",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q83) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Read Write Web",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q84",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q84) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q85",
              type: "identification",
              question: "(Premechanical - Q85) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Stone Tablets",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q86",
              type: "true_false",
              question: "(Premechanical - Q86) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q87",
              type: "identification",
              question: "(Mechanical - Q87) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Blaise Pascal",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q88",
              type: "true_false",
              question: "(Mechanical - Q88) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            },
            {
              id: "l4_q89",
              type: "identification",
              question: "(Electromechanical - Q89) Identify the primary term, device, component, or mathematical function associated with Electromechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Samuel Morse",
              explanation: "This concept is foundational to understanding Electromechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q90",
              type: "true_false",
              question: "(Electromechanical - Q90) Modified True or False: In the context of Electromechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Electromechanical."
            },
            {
              id: "l4_q91",
              type: "identification",
              question: "(Electronic - Q91) Identify the primary term, device, component, or mathematical function associated with Electronic as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Don Estridge",
              explanation: "This concept is foundational to understanding Electronic within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q92",
              type: "true_false",
              question: "(Electronic - Q92) Modified True or False: In the context of Electronic, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Electronic."
            },
            {
              id: "l4_q93",
              type: "identification",
              question: "(WWW - Q93) Identify the primary term, device, component, or mathematical function associated with WWW as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Internet Files",
              explanation: "This concept is foundational to understanding WWW within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q94",
              type: "true_false",
              question: "(WWW - Q94) Modified True or False: In the context of WWW, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to WWW."
            },
            {
              id: "l4_q95",
              type: "identification",
              question: "(Web 1.0/2.0/3.0 - Q95) Identify the primary term, device, component, or mathematical function associated with Web 1.0/2.0/3.0 as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Semantic Executing Web",
              explanation: "This concept is foundational to understanding Web 1.0/2.0/3.0 within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q96",
              type: "true_false",
              question: "(Web 1.0/2.0/3.0 - Q96) Modified True or False: In the context of Web 1.0/2.0/3.0, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Web 1.0/2.0/3.0."
            },
            {
              id: "l4_q97",
              type: "identification",
              question: "(Premechanical - Q97) Identify the primary term, device, component, or mathematical function associated with Premechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Papyrus",
              explanation: "This concept is foundational to understanding Premechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q98",
              type: "true_false",
              question: "(Premechanical - Q98) Modified True or False: In the context of Premechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 1,
              explanation: "Review the technical specifications and definitions related to Premechanical."
            },
            {
              id: "l4_q99",
              type: "identification",
              question: "(Mechanical - Q99) Identify the primary term, device, component, or mathematical function associated with Mechanical as discussed in Evolution of ICT and the World Wide Web.",
              answer: "Father of Computers",
              explanation: "This concept is foundational to understanding Mechanical within Evolution of ICT and the World Wide Web."
            },
            {
              id: "l4_q100",
              type: "true_false",
              question: "(Mechanical - Q100) Modified True or False: In the context of Mechanical, statements concerning operational principles in Evolution of ICT and the World Wide Web are completely accurate without modification.",
              choices: [
                "True",
                "False - Statement requires modification or correction based on standard definitions."
              ],
              answer: 0,
              explanation: "Review the technical specifications and definitions related to Mechanical."
            }
          ]
        }
      ]
    }
  ]
};
