window.reviewerData = {
  appName: "IT-PSI Presentation Skills Learning OS",
  version: "3.2",
  subjects: [
    {
      id: "subject_it_psi",
      name: "Information Technology Presentation Skills (IT-PSI)",
      description: "Comprehensive educational data covering Study Group 1 (Communication Defined) and Study Group 2 (Effective Communication Skills and the 7 C's).",
      icon: "bi-chat-square-text",
      color: "primary",
      tags: ["IT-PSI", "Communication", "Management", "7Cs"],
      lessons: [
        {
          id: "lesson_sg1_definition",
          title: "SG1: Etymology and Core Definitions of Communication",
          description: "Covers the Latin origins, core concepts, the Golden Rule, and foundational author definitions of communication.",
          difficulty: "easy",
          estimatedTime: "10 mins",
          tags: ["Etymology", "Communis", "Definitions", "T.S. Mathews", "Peter Little"],
          content: [
            {
              type: "heading",
              text: "Etymology & Core Concept of Communication"
            },
            {
              type: "paragraph",
              text: "The word communication has been derived from the Latin word 'communis' that means 'common'. However, communication incorporates, besides commonality, the concepts of transfer, meaning and information."
            },
            {
              type: "definition",
              title: "The Golden Rule of Communication",
              text: "\"You cannot not communicate\" - This statement is quite often misunderstood by many of us. We may be fussy about the grammar of this sentence and that is at the cost of its spirit."
            },
            {
              type: "definition",
              title: "General Definition",
              text: "Communication can be defined as the process through which two or more persons come to exchange ideas and understanding among them."
            },
            {
              type: "heading",
              text: "Core Definitions by Key Authors"
            },
            {
              type: "definition",
              title: "T.S. Mathews",
              text: "\"Communication is something so simple and difficult that we can never put it in simple words.\""
            },
            {
              type: "definition",
              title: "Peter Little",
              text: "“Communication is the process by which information is transmitted between individuals and / or organizations so that an understanding response results.”"
            },
            {
              type: "definition",
              title: "W.H. Newman and C.F. Summer Jr.",
              text: "“Communication is an exchange of facts, ideas, opinions, or emotions by two or more persons.”"
            }
          ],
          flashcards: [
            {
              id: "fc_sg1_001",
              front: "What Latin word is communication derived from, and what does it mean?",
              back: "Derived from 'communis', which means 'common'."
            },
            {
              id: "fc_sg1_002",
              front: "What famous statement about communication is often misunderstood due to grammar?",
              back: "\"You cannot not communicate\""
            },
            {
              id: "fc_sg1_003",
              front: "Who stated: 'Communication is something so simple and difficult that we can never put it in simple words'?",
              back: "T.S. Mathews"
            },
            {
              id: "fc_sg1_004",
              front: "Who defined communication as the process by which information is transmitted so that 'an understanding response results'?",
              back: "Peter Little"
            },
            {
              id: "fc_sg1_005",
              front: "Who defined communication as an 'exchange of facts, ideas, opinions, or emotions by two or more persons'?",
              back: "W.H. Newman and C.F. Summer Jr."
            }
          ],
          questions: [
            {
              id: "q_sg1_001",
              type: "multiple_choice",
              question: "The word communication is derived from which Latin word?",
              choices: [
                "communis",
                "communicare",
                "informatio",
                "societas"
              ],
              answer: 0,
              explanation: "Communication is derived from the Latin word 'communis', meaning 'common'.",
              difficulty: "easy",
              tags: ["Etymology"]
            },
            {
              id: "q_sg1_002",
              type: "multiple_choice",
              question: "Who authored the quote: 'Communication is something so simple and difficult that we can never put it in simple words'?",
              choices: [
                "Peter Little",
                "T.S. Mathews",
                "W.H. Newman",
                "C.F. Summer Jr."
              ],
              answer: 1,
              explanation: "T.S. Mathews provided this specific reflection on the complexity of communication.",
              difficulty: "medium",
              tags: ["Authors"]
            },
            {
              id: "q_sg1_003",
              type: "multiple_choice",
              question: "According to Peter Little, what is the ultimate result of information transmission in communication?",
              choices: [
                "A written document",
                "An understanding response",
                "Increased revenue",
                "Data storage"
              ],
              answer: 1,
              explanation: "Peter Little's definition explicitly ends with 'so that an understanding response results.'",
              difficulty: "medium",
              tags: ["Definitions"]
            }
          ]
        },
        {
          id: "lesson_sg1_aspects_importance",
          title: "SG1: Two Aspects & Importance of Communication in Management",
          description: "Explores transmission vs understanding, communication as the lifeblood of business, and managerial functions.",
          difficulty: "medium",
          estimatedTime: "15 mins",
          tags: ["Transmission", "Management", "Decision Making", "Control"],
          content: [
            {
              type: "heading",
              text: "Two Aspects in Communication"
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Transmission: Something is transmitted (facts, feelings, ideas, etc.), implying there must be a receiver for communication to occur.",
                "Understanding: Sharing of understanding is only possible when the receiver understands the message in the exact same sense intended by the sender."
              ]
            },
            {
              type: "heading",
              text: "Importance of Communication in Management"
            },
            {
              type: "quote",
              text: "\"Communication is as important to the organization as blood is to the body. Good communication is the foundation of sound management.\""
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Basis of decision making: Information needed for decisions is collected entirely through communication.",
                "Cooperation and coordination: Builds mutual trust and confidence between employers and employees.",
                "Effective control: Managers receive performance feedback to correct irregularities in a timely manner.",
                "Basis of motivation: Helps influence subordinates' viewpoints and raise morale.",
                "Establishment of effective leadership: Leadership cannot be imagined without effective communication."
              ]
            }
          ],
          flashcards: [
            {
              id: "fc_sg1_006",
              front: "What are the two crucial aspects required for communication to occur?",
              back: "1. Transmission (of facts, feelings, ideas to a receiver)\n2. Understanding (receiver understands in the sender's intended sense)."
            },
            {
              id: "fc_sg1_007",
              front: "What metaphor describes the importance of communication to an organization?",
              back: "\"Communication is as important to the organization as blood is to the body.\""
            },
            {
              id: "fc_sg1_008",
              front: "How does communication assist managers with control?",
              back: "It provides information about work performance so managers can correct irregularities well in time."
            }
          ],
          questions: [
            {
              id: "q_sg1_004",
              type: "multiple_choice",
              question: "Which managerial function relies on communication to provide feedback on work performance so irregularities can be corrected?",
              choices: [
                "Basis of Motivation",
                "Effective Control",
                "Effective Leadership",
                "Decision Making"
              ],
              answer: 1,
              explanation: "Effective control allows managers to receive performance data and correct irregularities in time.",
              difficulty: "medium",
              tags: ["Management"]
            },
            {
              id: "q_sg1_005",
              type: "true_false",
              question: "True or False: Communication can occur successfully even if the receiver interprets the message in a completely different sense than intended.",
              choices: [
                "True",
                "False"
              ],
              answer: 1,
              explanation: "False. Understanding requires the receiver to understand the message in the exact same sense intended by the sender.",
              difficulty: "easy",
              tags: ["Aspects"]
            }
          ]
        },
        {
          id: "lesson_sg1_channels_categories",
          title: "SG1: Internal, External, and 3 Categories of Communication",
          description: "Covers internal/external channels and the three structural communication categories.",
          difficulty: "medium",
          estimatedTime: "12 mins",
          tags: ["Internal", "External", "Operational", "Personal"],
          content: [
            {
              type: "heading",
              text: "Internal vs. External Communication"
            },
            {
              type: "paragraph",
              text: "Effective internal communication is crucial because businesses have grown in size, activities have become extremely complex, and it promotes understanding and cooperation."
            },
            {
              type: "paragraph",
              text: "External communication includes interaction with government agencies and departments, distributors, retailers, individual customers, and the general public."
            },
            {
              type: "heading",
              text: "3 Categories of Communication"
            },
            {
              type: "definition",
              title: "Internal - Operational Communication",
              text: "It consists of structured communication within the organization that directly relates to achieving the organization's work goals."
            },
            {
              type: "definition",
              title: "External - Operational Communication",
              text: "Part of an organization's structured communication concerned with achieving the organization's work goals that is conducted with people and groups outside the organization."
            },
            {
              type: "definition",
              title: "Personal Communication",
              text: "Personal communication is all the incidental exchange of information and feelings in which human beings engage whenever they come together."
            }
          ],
          flashcards: [
            {
              id: "fc_sg1_009",
              front: "What are the three structural categories of communication in business?",
              back: "1. Internal-Operational Communication\n2. External-Operational Communication\n3. Personal Communication"
            },
            {
              id: "fc_sg1_010",
              front: "How is Personal Communication defined in organizational context?",
              back: "All the incidental exchange of information and feelings in which human beings engage whenever they come together."
            }
          ],
          questions: [
            {
              id: "q_sg1_006",
              type: "multiple_choice",
              question: "Which communication category refers to the incidental exchange of information and feelings between people?",
              choices: [
                "Internal-Operational Communication",
                "External-Operational Communication",
                "Personal Communication",
                "External-Public Communication"
              ],
              answer: 2,
              explanation: "Personal communication is defined as the incidental exchange of information and feelings.",
              difficulty: "easy",
              tags: ["Categories"]
            }
          ]
        },
        {
          id: "lesson_sg2_objectives_7cs",
          title: "SG2: Objectives & The 7 C's of Effective Communication",
          description: "Covers communication objectives and the foundational 7 C's principles for influencing target audiences.",
          difficulty: "medium",
          estimatedTime: "20 mins",
          tags: ["Objectives", "7Cs", "Completeness", "Conciseness", "Consideration", "Concreteness", "Clarity", "Courtesy", "Correctness"],
          content: [
            {
              type: "heading",
              text: "Objectives of Communication"
            },
            {
              type: "paragraph",
              text: "The objective of communication may be defined as the passing of ideas and understanding from the sender to the target with the view to getting the desired behavioral response from the latter."
            },
            {
              type: "note",
              text: "Finding out actual behavioral responses and comparing these with expected ones, however, presents insurmountable difficulties in this continuously ongoing process."
            },
            {
              type: "heading",
              text: "The 7 C's of Effective Communication"
            },
            {
              type: "paragraph",
              text: "The 7 C's of communication are principles explained to effectively communicate so that the targeted group may understand the intended purpose, offering guidelines to influence people with organizational agendas."
            },
            {
              type: "definition",
              title: "1. Completeness",
              text: "Refers to communication between sender and receiver when all relevant information has been sent after analyzing the receiver's mindset, ensuring no necessary information is missed."
            },
            {
              type: "definition",
              title: "2. Conciseness",
              text: "The use of accurate information in short sentences during interaction. Providing concise useful information is regarded as effective with positive audience response."
            },
            {
              type: "definition",
              title: "3. Consideration",
              text: "Refers to communication where the advantage of the receiver is given due attention by respecting their mental perception and awareness, focusing on needs and thoughts with a positive approach."
            },
            {
              type: "definition",
              title: "4. Concreteness",
              text: "Refers to specifics where interaction is performed with preciseness or by referring to statistics, creating a pronounced effect compared to general talks."
            },
            {
              type: "definition",
              title: "5. Clarity",
              text: "Endeavor to transfer thoughts and ideas into the mind of the receiver effectively using a simple, precise, and easy set of words to express the purpose."
            },
            {
              type: "definition",
              title: "6. Courtesy",
              text: "Polite words playing a prominent role in resolving disputes, understanding the receiver's mentality and feelings to create a lasting effect despite differing opinions."
            },
            {
              type: "definition",
              title: "7. Correctness",
              text: "Refers to the factual accuracy of words used in verbal and non-verbal communication, selecting correct words at the right time."
            }
          ],
          flashcards: [
            {
              id: "fc_sg2_001",
              front: "What are the 7 C's of Effective Communication?",
              back: "1. Completeness\n2. Conciseness\n3. Consideration\n4. Concreteness\n5. Clarity\n6. Courtesy\n7. Correctness"
            },
            {
              id: "fc_sg2_002",
              front: "Which 'C' refers to ensuring no necessary information is missed after analyzing the receiver's mindset?",
              back: "Completeness"
            },
            {
              id: "fc_sg2_003",
              front: "Which 'C' emphasizes using specifics, preciseness, or statistics rather than general talk?",
              back: "Concreteness"
            },
            {
              id: "fc_sg2_004",
              front: "Which 'C' involves respecting the mental perception, needs, and thoughts of the receiver?",
              back: "Consideration"
            },
            {
              id: "fc_sg2_005",
              front: "Which 'C' focuses on factual accuracy and selecting the right words at the right time?",
              back: "Correctness"
            }
          ],
          questions: [
            {
              id: "q_sg2_001",
              type: "multiple_choice",
              question: "Which of the 7 C's involves communicating with specifics or statistics to create a pronounced effect?",
              choices: [
                "Clarity",
                "Concreteness",
                "Conciseness",
                "Completeness"
              ],
              answer: 1,
              explanation: "Concreteness relies on specifics and statistics rather than general talk.",
              difficulty: "medium",
              tags: ["7Cs"]
            },
            {
              id: "q_sg2_002",
              type: "multiple_choice",
              question: "Which principle of the 7 C's emphasizes that 'no necessary information is missed'?",
              choices: [
                "Completeness",
                "Courtesy",
                "Consideration",
                "Correctness"
              ],
              answer: 0,
              explanation: "Completeness ensures all relevant information is sent without missing necessary details.",
              difficulty: "easy",
              tags: ["7Cs"]
            },
            {
              id: "q_sg2_003",
              type: "multiple_choice",
              question: "What is the primary focus of 'Consideration' in communication?",
              choices: [
                "Using short sentences",
                "Giving attention to the receiver's needs, thoughts, and requirements",
                "Checking factual accuracy",
                "Using polite words to resolve disputes"
              ],
              answer: 1,
              explanation: "Consideration focuses on the needs, thoughts, and requirements of receivers with a positive approach.",
              difficulty: "medium",
              tags: ["7Cs"]
            }
          ]
        }
      ]
    }
  ]
};
