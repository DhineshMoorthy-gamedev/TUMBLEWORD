/**
 * 150-Level Progressive Difficulty Campaign (450 Stars Total)
 * 15 Chapters x 10 Levels each with verified solvability, dynamic grid dimensions (N=5, 6, 7, 8),
 * mathematically calibrated optimal move budgets, and progressive difficulty scores (50 -> 1800+).
 * 
 * Auto-generated and BFS solver-verified.
 */

export const CAMPAIGN_LEVELS = [
  {
    "id": 1,
    "name": "First Steps Entry",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 7,
    "difficultyScore": 64,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      ".....",
      "....#",
      "....#"
    ],
    "words": [
      {
        "word": "CAT",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "KEY",
        "cards": [
          {
            "ch": "K",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 1,
            "y": 1
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 2,
    "name": "First Steps Path",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 5,
    "difficultyScore": 70,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      "#....",
      ".....",
      "....#"
    ],
    "words": [
      {
        "word": "ICE",
        "cards": [
          {
            "ch": "I",
            "x": 3,
            "y": 2
          },
          {
            "ch": "C",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 0,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "TOP",
        "cards": [
          {
            "ch": "T",
            "x": 3,
            "y": 3
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "P",
            "x": 4,
            "y": 1
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 3,
    "name": "First Steps Gate",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 3,
    "difficultyScore": 76,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      "....#",
      ".....",
      ".#..."
    ],
    "words": [
      {
        "word": "FLY",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 0,
            "y": 3
          }
        ],
        "best": 1
      },
      {
        "word": "PEN",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 3
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 4,
    "name": "First Steps Chamber",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 4,
    "difficultyScore": 88,
    "difficultyTier": "Casual",
    "walls": [
      "....#",
      ".....",
      ".....",
      ".#...",
      "....."
    ],
    "words": [
      {
        "word": "EGG",
        "cards": [
          {
            "ch": "E",
            "x": 2,
            "y": 3
          },
          {
            "ch": "G",
            "x": 2,
            "y": 4
          },
          {
            "ch": "G",
            "x": 0,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "OWL",
        "cards": [
          {
            "ch": "O",
            "x": 3,
            "y": 1
          },
          {
            "ch": "W",
            "x": 2,
            "y": 3
          },
          {
            "ch": "L",
            "x": 1,
            "y": 2
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 5,
    "name": "First Steps Orbit",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 4,
    "difficultyScore": 98,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      "..#..",
      "...#.",
      "....."
    ],
    "words": [
      {
        "word": "GEM",
        "cards": [
          {
            "ch": "G",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "M",
            "x": 2,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "FLY",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 4
          },
          {
            "ch": "L",
            "x": 3,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 3,
            "y": 2
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 6,
    "name": "First Steps Echo",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 3,
    "difficultyScore": 106,
    "difficultyTier": "Casual",
    "walls": [
      ".#...",
      ".....",
      ".....",
      "...#.",
      "....."
    ],
    "words": [
      {
        "word": "MAP",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 1
          },
          {
            "ch": "A",
            "x": 1,
            "y": 1
          },
          {
            "ch": "P",
            "x": 2,
            "y": 0
          }
        ],
        "best": 1
      },
      {
        "word": "RUG",
        "cards": [
          {
            "ch": "R",
            "x": 3,
            "y": 4
          },
          {
            "ch": "U",
            "x": 0,
            "y": 1
          },
          {
            "ch": "G",
            "x": 2,
            "y": 2
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 7,
    "name": "First Steps Vault",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 3,
    "difficultyScore": 116,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      "..#..",
      ".....",
      "....#",
      "....."
    ],
    "words": [
      {
        "word": "CAT",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "WEB",
        "cards": [
          {
            "ch": "W",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "B",
            "x": 1,
            "y": 3
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 8,
    "name": "First Steps Pillar",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 4,
    "difficultyScore": 128,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      "..#..",
      "...#.",
      "....."
    ],
    "words": [
      {
        "word": "RIB",
        "cards": [
          {
            "ch": "R",
            "x": 3,
            "y": 2
          },
          {
            "ch": "I",
            "x": 4,
            "y": 2
          },
          {
            "ch": "B",
            "x": 4,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "TOP",
        "cards": [
          {
            "ch": "T",
            "x": 0,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "P",
            "x": 2,
            "y": 4
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 9,
    "name": "First Steps Crest",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 4,
    "difficultyScore": 138,
    "difficultyTier": "Casual",
    "walls": [
      "..#..",
      ".....",
      ".....",
      ".....",
      "#...."
    ],
    "words": [
      {
        "word": "ZIP",
        "cards": [
          {
            "ch": "Z",
            "x": 3,
            "y": 4
          },
          {
            "ch": "I",
            "x": 1,
            "y": 3
          },
          {
            "ch": "P",
            "x": 3,
            "y": 2
          }
        ],
        "best": 1
      },
      {
        "word": "DOG",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 3
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "G",
            "x": 0,
            "y": 1
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 10,
    "name": "First Steps Mastery",
    "chapterId": 1,
    "chapterName": "First Steps",
    "n": 5,
    "optimalMoves": 2,
    "difficultyScore": 144,
    "difficultyTier": "Casual",
    "walls": [
      "#....",
      ".....",
      ".....",
      ".....",
      "#...."
    ],
    "words": [
      {
        "word": "PEN",
        "cards": [
          {
            "ch": "P",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 2
          }
        ],
        "best": 1
      },
      {
        "word": "SKY",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 0
          },
          {
            "ch": "K",
            "x": 4,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 3,
            "y": 1
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 11,
    "name": "Corner Hooks Entry",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 4,
    "difficultyScore": 158,
    "difficultyTier": "Casual",
    "walls": [
      "...#.",
      ".....",
      "...#.",
      "....#",
      "....."
    ],
    "words": [
      {
        "word": "SEA",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "FLY",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 3
          },
          {
            "ch": "L",
            "x": 1,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 2,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "BAT",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 2,
            "y": 1
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 12,
    "name": "Corner Hooks Path",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 176,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      ".....",
      "..##.",
      "...#."
    ],
    "words": [
      {
        "word": "BAT",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 1,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "SUN",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 2
          },
          {
            "ch": "U",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "AIR",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 13,
    "name": "Corner Hooks Gate",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 186,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      "#....",
      ".....",
      ".....",
      "..#.#"
    ],
    "words": [
      {
        "word": "CUP",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 3
          },
          {
            "ch": "U",
            "x": 2,
            "y": 0
          },
          {
            "ch": "P",
            "x": 2,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "RUG",
        "cards": [
          {
            "ch": "R",
            "x": 3,
            "y": 0
          },
          {
            "ch": "U",
            "x": 4,
            "y": 2
          },
          {
            "ch": "G",
            "x": 2,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "KEY",
        "cards": [
          {
            "ch": "K",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 4,
            "y": 1
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 14,
    "name": "Corner Hooks Chamber",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 9,
    "difficultyScore": 198,
    "difficultyTier": "Casual",
    "walls": [
      "....#",
      ".....",
      ".....",
      "#....",
      "...#."
    ],
    "words": [
      {
        "word": "DEW",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "W",
            "x": 0,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "FOX",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 4
          },
          {
            "ch": "X",
            "x": 0,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "FOG",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 2
          },
          {
            "ch": "G",
            "x": 0,
            "y": 1
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 15,
    "name": "Corner Hooks Orbit",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 7,
    "difficultyScore": 204,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".#...",
      ".....",
      ".....",
      ".#..#"
    ],
    "words": [
      {
        "word": "WEB",
        "cards": [
          {
            "ch": "W",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          },
          {
            "ch": "B",
            "x": 2,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "FOX",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 4,
            "y": 1
          },
          {
            "ch": "X",
            "x": 1,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "POT",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 3
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 16,
    "name": "Corner Hooks Echo",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 216,
    "difficultyTier": "Casual",
    "walls": [
      "..#..",
      "..#..",
      ".....",
      "#....",
      "....."
    ],
    "words": [
      {
        "word": "HAT",
        "cards": [
          {
            "ch": "H",
            "x": 0,
            "y": 2
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "T",
            "x": 1,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "SEA",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "A",
            "x": 4,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "DEW",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          },
          {
            "ch": "W",
            "x": 3,
            "y": 1
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 17,
    "name": "Corner Hooks Vault",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 9,
    "difficultyScore": 228,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      "#.#..",
      "....#",
      ".....",
      "....."
    ],
    "words": [
      {
        "word": "ORB",
        "cards": [
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          },
          {
            "ch": "B",
            "x": 3,
            "y": 4
          }
        ],
        "best": 1
      },
      {
        "word": "PEN",
        "cards": [
          {
            "ch": "P",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "POT",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 18,
    "name": "Corner Hooks Crest",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 4,
    "difficultyScore": 238,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".....",
      "...##",
      ".....",
      "..#.."
    ],
    "words": [
      {
        "word": "SUN",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 1
          },
          {
            "ch": "U",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "DOG",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 3
          },
          {
            "ch": "G",
            "x": 3,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "BOX",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "X",
            "x": 3,
            "y": 3
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 19,
    "name": "Corner Hooks Pillar",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 10,
    "difficultyScore": 240,
    "difficultyTier": "Casual",
    "walls": [
      ".....",
      ".#...",
      ".....",
      "...##",
      "....."
    ],
    "words": [
      {
        "word": "ORB",
        "cards": [
          {
            "ch": "O",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "B",
            "x": 3,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "HAT",
        "cards": [
          {
            "ch": "H",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "DOT",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 4,
            "y": 4
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 20,
    "name": "Corner Hooks Mastery",
    "chapterId": 2,
    "chapterName": "Corner Hooks",
    "n": 5,
    "optimalMoves": 7,
    "difficultyScore": 254,
    "difficultyTier": "Casual",
    "walls": [
      "...#.",
      ".....",
      ".....",
      "#..#.",
      "....."
    ],
    "words": [
      {
        "word": "ZIP",
        "cards": [
          {
            "ch": "Z",
            "x": 1,
            "y": 0
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "P",
            "x": 0,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "OWL",
        "cards": [
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "W",
            "x": 0,
            "y": 0
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "RIB",
        "cards": [
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "B",
            "x": 3,
            "y": 2
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 21,
    "name": "Chamber Split Entry",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 6,
    "difficultyScore": 262,
    "difficultyTier": "Apprentice",
    "walls": [
      "#....",
      "#.##.",
      ".....",
      ".....",
      "....."
    ],
    "words": [
      {
        "word": "WIND",
        "cards": [
          {
            "ch": "W",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 0,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 3
          },
          {
            "ch": "D",
            "x": 2,
            "y": 4
          }
        ],
        "best": 1
      },
      {
        "word": "RUNE",
        "cards": [
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "U",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 22,
    "name": "Chamber Split Path",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 276,
    "difficultyTier": "Apprentice",
    "walls": [
      "..#..",
      ".#...",
      ".....",
      "#....",
      "..#.."
    ],
    "words": [
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "DUNE",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 3
          },
          {
            "ch": "U",
            "x": 2,
            "y": 3
          },
          {
            "ch": "N",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "ROSE",
        "cards": [
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "S",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 23,
    "name": "Chamber Split Gate",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 5,
    "difficultyScore": 280,
    "difficultyTier": "Apprentice",
    "walls": [
      "#....",
      "#....",
      "#....",
      ".#...",
      "....."
    ],
    "words": [
      {
        "word": "WIND",
        "cards": [
          {
            "ch": "W",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 1
          },
          {
            "ch": "N",
            "x": 4,
            "y": 2
          },
          {
            "ch": "D",
            "x": 3,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "MOSS",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "S",
            "x": 3,
            "y": 1
          },
          {
            "ch": "S",
            "x": 4,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "DUCK",
        "cards": [
          {
            "ch": "D",
            "x": 2,
            "y": 3
          },
          {
            "ch": "U",
            "x": 2,
            "y": 2
          },
          {
            "ch": "C",
            "x": 0,
            "y": 4
          },
          {
            "ch": "K",
            "x": 1,
            "y": 4
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 24,
    "name": "Chamber Split Chamber",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 296,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....",
      ".##..",
      ".....",
      ".#.#.",
      "....."
    ],
    "words": [
      {
        "word": "SURF",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 4
          },
          {
            "ch": "U",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          },
          {
            "ch": "F",
            "x": 4,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "COLD",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 2
          },
          {
            "ch": "O",
            "x": 2,
            "y": 0
          },
          {
            "ch": "L",
            "x": 0,
            "y": 0
          },
          {
            "ch": "D",
            "x": 1,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          },
          {
            "ch": "N",
            "x": 3,
            "y": 1
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 25,
    "name": "Chamber Split Orbit",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 306,
    "difficultyTier": "Apprentice",
    "walls": [
      "#....",
      ".#.#.",
      ".....",
      ".....",
      "..#.."
    ],
    "words": [
      {
        "word": "CALM",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 1
          },
          {
            "ch": "M",
            "x": 1,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "FIRE",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 2,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 4,
            "y": 1
          },
          {
            "ch": "N",
            "x": 1,
            "y": 3
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 26,
    "name": "Chamber Split Echo",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 316,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....",
      ".#...",
      ".#...",
      "#....",
      "..#.."
    ],
    "words": [
      {
        "word": "BEAR",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          }
        ],
        "best": 2
      },
      {
        "word": "STAR",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 3
          },
          {
            "ch": "T",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "SURF",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 4
          },
          {
            "ch": "U",
            "x": 0,
            "y": 0
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "F",
            "x": 1,
            "y": 4
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 27,
    "name": "Chamber Split Vault",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 8,
    "difficultyScore": 326,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....",
      "##...",
      ".....",
      "#.#..",
      "....."
    ],
    "words": [
      {
        "word": "MAZE",
        "cards": [
          {
            "ch": "M",
            "x": 2,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "Z",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "TRUE",
        "cards": [
          {
            "ch": "T",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "U",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "DUNE",
        "cards": [
          {
            "ch": "D",
            "x": 3,
            "y": 1
          },
          {
            "ch": "U",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 28,
    "name": "Chamber Split Crest",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 7,
    "difficultyScore": 344,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....",
      ".....",
      "#..#.",
      "##...",
      "....."
    ],
    "words": [
      {
        "word": "WAVE",
        "cards": [
          {
            "ch": "W",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "V",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "RAIN",
        "cards": [
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 3,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "DUNE",
        "cards": [
          {
            "ch": "D",
            "x": 4,
            "y": 2
          },
          {
            "ch": "U",
            "x": 1,
            "y": 4
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 0
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 29,
    "name": "Chamber Split Pillar",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 16,
    "difficultyScore": 352,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....",
      ".#...",
      "..#..",
      "....#",
      "#...."
    ],
    "words": [
      {
        "word": "RAIN",
        "cards": [
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 0
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "WIND",
        "cards": [
          {
            "ch": "W",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          },
          {
            "ch": "D",
            "x": 4,
            "y": 4
          }
        ],
        "best": 8
      },
      {
        "word": "LAVA",
        "cards": [
          {
            "ch": "L",
            "x": 3,
            "y": 1
          },
          {
            "ch": "A",
            "x": 4,
            "y": 4
          },
          {
            "ch": "V",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 30,
    "name": "Chamber Split Mastery",
    "chapterId": 3,
    "chapterName": "Chamber Split",
    "n": 5,
    "optimalMoves": 11,
    "difficultyScore": 362,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....",
      ".....",
      ".#...",
      "..#..",
      "#...#"
    ],
    "words": [
      {
        "word": "MAZE",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 2
          },
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "Z",
            "x": 3,
            "y": 3
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "FIRE",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "SWAN",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 2
          },
          {
            "ch": "W",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 0,
            "y": 0
          },
          {
            "ch": "N",
            "x": 1,
            "y": 3
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 31,
    "name": "Labyrinth Gates Entry",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 12,
    "difficultyScore": 374,
    "difficultyTier": "Apprentice",
    "walls": [
      "...##.",
      "..#..#",
      "......",
      "......",
      ".#....",
      "......"
    ],
    "words": [
      {
        "word": "WIND",
        "cards": [
          {
            "ch": "W",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 1,
            "y": 1
          },
          {
            "ch": "N",
            "x": 3,
            "y": 5
          },
          {
            "ch": "D",
            "x": 5,
            "y": 2
          }
        ],
        "best": 4
      },
      {
        "word": "PEAK",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "K",
            "x": 1,
            "y": 5
          }
        ],
        "best": 2
      },
      {
        "word": "FIRE",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 2
          },
          {
            "ch": "I",
            "x": 5,
            "y": 3
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          }
        ],
        "best": 1
      },
      {
        "word": "LION",
        "cards": [
          {
            "ch": "L",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "N",
            "x": 5,
            "y": 5
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 32,
    "name": "Labyrinth Gates Gate",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 14,
    "difficultyScore": 398,
    "difficultyTier": "Apprentice",
    "walls": [
      "..#..#",
      "......",
      "......",
      "...#..",
      "#.....",
      "....#."
    ],
    "words": [
      {
        "word": "BLUE",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 3
          },
          {
            "ch": "L",
            "x": 5,
            "y": 1
          },
          {
            "ch": "U",
            "x": 5,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "EPIC",
        "cards": [
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "P",
            "x": 2,
            "y": 2
          },
          {
            "ch": "I",
            "x": 4,
            "y": 4
          },
          {
            "ch": "C",
            "x": 3,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "BOLD",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 2
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "L",
            "x": 0,
            "y": 5
          },
          {
            "ch": "D",
            "x": 0,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "WARM",
        "cards": [
          {
            "ch": "W",
            "x": 0,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "M",
            "x": 1,
            "y": 5
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 33,
    "name": "Labyrinth Gates Path",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 21,
    "difficultyScore": 402,
    "difficultyTier": "Apprentice",
    "walls": [
      ".#...#",
      "...#..",
      "......",
      "......",
      "#.....",
      ".....#"
    ],
    "words": [
      {
        "word": "TRUE",
        "cards": [
          {
            "ch": "T",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "U",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "CALM",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 3
          },
          {
            "ch": "L",
            "x": 3,
            "y": 0
          },
          {
            "ch": "M",
            "x": 0,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "SPIN",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "P",
            "x": 2,
            "y": 3
          },
          {
            "ch": "I",
            "x": 0,
            "y": 0
          },
          {
            "ch": "N",
            "x": 2,
            "y": 1
          }
        ],
        "best": 7
      },
      {
        "word": "DUNE",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 5
          },
          {
            "ch": "U",
            "x": 5,
            "y": 1
          },
          {
            "ch": "N",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 34,
    "name": "Labyrinth Gates Chamber",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 17,
    "difficultyScore": 414,
    "difficultyTier": "Apprentice",
    "walls": [
      ".....#",
      "#.#...",
      "......",
      "......",
      "......",
      ".##..."
    ],
    "words": [
      {
        "word": "BEAM",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          },
          {
            "ch": "A",
            "x": 3,
            "y": 5
          },
          {
            "ch": "M",
            "x": 1,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "WAVE",
        "cards": [
          {
            "ch": "W",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "V",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 1,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "HAWK",
        "cards": [
          {
            "ch": "H",
            "x": 2,
            "y": 0
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "W",
            "x": 2,
            "y": 4
          },
          {
            "ch": "K",
            "x": 0,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "WIND",
        "cards": [
          {
            "ch": "W",
            "x": 1,
            "y": 1
          },
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          },
          {
            "ch": "D",
            "x": 5,
            "y": 1
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 35,
    "name": "Labyrinth Gates Orbit",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 13,
    "difficultyScore": 416,
    "difficultyTier": "Apprentice",
    "walls": [
      "......",
      "......",
      "....#.",
      "....#.",
      "..#...",
      "....##"
    ],
    "words": [
      {
        "word": "JADE",
        "cards": [
          {
            "ch": "J",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          },
          {
            "ch": "D",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "HAWK",
        "cards": [
          {
            "ch": "H",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "W",
            "x": 1,
            "y": 1
          },
          {
            "ch": "K",
            "x": 2,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "DUNE",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 2
          },
          {
            "ch": "U",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "MIST",
        "cards": [
          {
            "ch": "M",
            "x": 2,
            "y": 5
          },
          {
            "ch": "I",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 4
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 36,
    "name": "Labyrinth Gates Echo",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 16,
    "difficultyScore": 432,
    "difficultyTier": "Apprentice",
    "walls": [
      "...#..",
      ".#..#.",
      "......",
      "#.....",
      "......",
      ".#...."
    ],
    "words": [
      {
        "word": "PEAK",
        "cards": [
          {
            "ch": "P",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "A",
            "x": 2,
            "y": 1
          },
          {
            "ch": "K",
            "x": 5,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "STAR",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "LION",
        "cards": [
          {
            "ch": "L",
            "x": 5,
            "y": 1
          },
          {
            "ch": "I",
            "x": 0,
            "y": 0
          },
          {
            "ch": "O",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 4
          }
        ],
        "best": 4
      },
      {
        "word": "SNOW",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 0
          },
          {
            "ch": "N",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "W",
            "x": 1,
            "y": 2
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 37,
    "name": "Labyrinth Gates Vault",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 11,
    "difficultyScore": 432,
    "difficultyTier": "Apprentice",
    "walls": [
      "...##.",
      "......",
      ".....#",
      ".....#",
      "......",
      "..#..."
    ],
    "words": [
      {
        "word": "IRON",
        "cards": [
          {
            "ch": "I",
            "x": 0,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "N",
            "x": 0,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "COLD",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "D",
            "x": 5,
            "y": 5
          }
        ],
        "best": 3
      },
      {
        "word": "CALM",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 1
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 1
          },
          {
            "ch": "M",
            "x": 5,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "MOSS",
        "cards": [
          {
            "ch": "M",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 3,
            "y": 1
          },
          {
            "ch": "S",
            "x": 0,
            "y": 1
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 38,
    "name": "Labyrinth Gates Pillar",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 13,
    "difficultyScore": 446,
    "difficultyTier": "Apprentice",
    "walls": [
      "......",
      "......",
      ".....#",
      ".#...#",
      "..##..",
      "......"
    ],
    "words": [
      {
        "word": "MAZE",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 1
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          },
          {
            "ch": "Z",
            "x": 5,
            "y": 5
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "MIST",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 3,
            "y": 0
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "STAR",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "SWAN",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 3
          },
          {
            "ch": "W",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 39,
    "name": "Labyrinth Gates Crest",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 14,
    "difficultyScore": 458,
    "difficultyTier": "Apprentice",
    "walls": [
      "#.....",
      ".....#",
      ".....#",
      "......",
      "..#...",
      ".....#"
    ],
    "words": [
      {
        "word": "BEAR",
        "cards": [
          {
            "ch": "B",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "LION",
        "cards": [
          {
            "ch": "L",
            "x": 2,
            "y": 2
          },
          {
            "ch": "I",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "WOLF",
        "cards": [
          {
            "ch": "W",
            "x": 2,
            "y": 1
          },
          {
            "ch": "O",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "F",
            "x": 3,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "BLUE",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 3
          },
          {
            "ch": "L",
            "x": 0,
            "y": 4
          },
          {
            "ch": "U",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 3
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 40,
    "name": "Labyrinth Gates Mastery",
    "chapterId": 4,
    "chapterName": "Labyrinth Gates",
    "n": 6,
    "optimalMoves": 13,
    "difficultyScore": 466,
    "difficultyTier": "Apprentice",
    "walls": [
      "......",
      ".#....",
      "......",
      "..#.#.",
      "......",
      ".#..#."
    ],
    "words": [
      {
        "word": "GLOW",
        "cards": [
          {
            "ch": "G",
            "x": 3,
            "y": 5
          },
          {
            "ch": "L",
            "x": 2,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "W",
            "x": 4,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "VAST",
        "cards": [
          {
            "ch": "V",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "S",
            "x": 3,
            "y": 3
          },
          {
            "ch": "T",
            "x": 2,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "STAR",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "SILK",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 1
          },
          {
            "ch": "I",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 0
          },
          {
            "ch": "K",
            "x": 1,
            "y": 0
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 41,
    "name": "Compound Alley Entry",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 15,
    "difficultyScore": 480,
    "difficultyTier": "Adept",
    "walls": [
      ".#...#",
      "#.....",
      "...#..",
      "..#...",
      "......",
      ".#...."
    ],
    "words": [
      {
        "word": "SPIN",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 4
          },
          {
            "ch": "P",
            "x": 5,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "WAVE",
        "cards": [
          {
            "ch": "W",
            "x": 3,
            "y": 5
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "V",
            "x": 2,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "ROSE",
        "cards": [
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 5,
            "y": 5
          },
          {
            "ch": "S",
            "x": 5,
            "y": 3
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "LAVA",
        "cards": [
          {
            "ch": "L",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 5
          },
          {
            "ch": "V",
            "x": 4,
            "y": 3
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 42,
    "name": "Compound Alley Path",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 17,
    "difficultyScore": 494,
    "difficultyTier": "Adept",
    "walls": [
      "#.....",
      ".....#",
      "##....",
      ".#....",
      ".#....",
      "......"
    ],
    "words": [
      {
        "word": "BEAM",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 4,
            "y": 5
          },
          {
            "ch": "M",
            "x": 0,
            "y": 4
          }
        ],
        "best": 4
      },
      {
        "word": "GOLD",
        "cards": [
          {
            "ch": "G",
            "x": 0,
            "y": 1
          },
          {
            "ch": "O",
            "x": 5,
            "y": 3
          },
          {
            "ch": "L",
            "x": 4,
            "y": 0
          },
          {
            "ch": "D",
            "x": 2,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "JADE",
        "cards": [
          {
            "ch": "J",
            "x": 0,
            "y": 1
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "D",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "TIDE",
        "cards": [
          {
            "ch": "T",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 4,
            "y": 4
          },
          {
            "ch": "D",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 43,
    "name": "Compound Alley Chamber",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 12,
    "difficultyScore": 504,
    "difficultyTier": "Adept",
    "walls": [
      "......",
      "##.#..",
      "......",
      "..#.#.",
      "..#...",
      "......"
    ],
    "words": [
      {
        "word": "GLOW",
        "cards": [
          {
            "ch": "G",
            "x": 3,
            "y": 0
          },
          {
            "ch": "L",
            "x": 4,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 3
          },
          {
            "ch": "W",
            "x": 3,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "COLD",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 2
          },
          {
            "ch": "D",
            "x": 5,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "HERO",
        "cards": [
          {
            "ch": "H",
            "x": 5,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 2
          },
          {
            "ch": "O",
            "x": 1,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "MINT",
        "cards": [
          {
            "ch": "M",
            "x": 1,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 0
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 44,
    "name": "Compound Alley Gate",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 20,
    "difficultyScore": 510,
    "difficultyTier": "Adept",
    "walls": [
      "..#...",
      "#.....",
      "....#.",
      "...##.",
      "......",
      "...#.."
    ],
    "words": [
      {
        "word": "BEAR",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "STAR",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "DUSK",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 3
          },
          {
            "ch": "U",
            "x": 5,
            "y": 5
          },
          {
            "ch": "S",
            "x": 0,
            "y": 0
          },
          {
            "ch": "K",
            "x": 2,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 45,
    "name": "Compound Alley Vault",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 5,
    "difficultyScore": 520,
    "difficultyTier": "Adept",
    "walls": [
      "......",
      ".....#",
      "....#.",
      ".....#",
      "......",
      "...###"
    ],
    "words": [
      {
        "word": "HAWK",
        "cards": [
          {
            "ch": "H",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 3
          },
          {
            "ch": "W",
            "x": 4,
            "y": 3
          },
          {
            "ch": "K",
            "x": 2,
            "y": 4
          }
        ],
        "best": 1
      },
      {
        "word": "MOON",
        "cards": [
          {
            "ch": "M",
            "x": 1,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          }
        ],
        "best": 1
      },
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 2,
            "y": 2
          }
        ],
        "best": 2
      },
      {
        "word": "MOSS",
        "cards": [
          {
            "ch": "M",
            "x": 2,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "S",
            "x": 2,
            "y": 3
          },
          {
            "ch": "S",
            "x": 4,
            "y": 4
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 46,
    "name": "Compound Alley Echo",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 12,
    "difficultyScore": 524,
    "difficultyTier": "Adept",
    "walls": [
      "#.....",
      "......",
      "..#...",
      "...##.",
      "...#..",
      "....#."
    ],
    "words": [
      {
        "word": "PEAK",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 3,
            "y": 0
          },
          {
            "ch": "K",
            "x": 1,
            "y": 1
          }
        ],
        "best": 1
      },
      {
        "word": "DUSK",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 4
          },
          {
            "ch": "U",
            "x": 2,
            "y": 4
          },
          {
            "ch": "S",
            "x": 2,
            "y": 1
          },
          {
            "ch": "K",
            "x": 5,
            "y": 5
          }
        ],
        "best": 4
      },
      {
        "word": "MOSS",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "S",
            "x": 4,
            "y": 1
          },
          {
            "ch": "S",
            "x": 3,
            "y": 2
          }
        ],
        "best": 2
      },
      {
        "word": "RUBY",
        "cards": [
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "U",
            "x": 2,
            "y": 0
          },
          {
            "ch": "B",
            "x": 5,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 5
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 47,
    "name": "Compound Alley Orbit",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 18,
    "difficultyScore": 526,
    "difficultyTier": "Adept",
    "walls": [
      "#..#..",
      "......",
      "#...#.",
      ".....#",
      "......",
      "....#."
    ],
    "words": [
      {
        "word": "LION",
        "cards": [
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 5,
            "y": 5
          },
          {
            "ch": "O",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 0,
            "y": 5
          }
        ],
        "best": 4
      },
      {
        "word": "BOLD",
        "cards": [
          {
            "ch": "B",
            "x": 5,
            "y": 4
          },
          {
            "ch": "O",
            "x": 0,
            "y": 5
          },
          {
            "ch": "L",
            "x": 0,
            "y": 4
          },
          {
            "ch": "D",
            "x": 3,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "BLUE",
        "cards": [
          {
            "ch": "B",
            "x": 5,
            "y": 0
          },
          {
            "ch": "L",
            "x": 2,
            "y": 2
          },
          {
            "ch": "U",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 4
          }
        ],
        "best": 4
      },
      {
        "word": "WOLF",
        "cards": [
          {
            "ch": "W",
            "x": 2,
            "y": 0
          },
          {
            "ch": "O",
            "x": 2,
            "y": 1
          },
          {
            "ch": "L",
            "x": 5,
            "y": 5
          },
          {
            "ch": "F",
            "x": 0,
            "y": 5
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 48,
    "name": "Compound Alley Pillar",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 14,
    "difficultyScore": 548,
    "difficultyTier": "Adept",
    "walls": [
      "#.#...",
      ".....#",
      "...#.#",
      "......",
      "......",
      "....#."
    ],
    "words": [
      {
        "word": "STAR",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 0,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "LION",
        "cards": [
          {
            "ch": "L",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 5,
            "y": 4
          },
          {
            "ch": "O",
            "x": 0,
            "y": 5
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "SWAN",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "W",
            "x": 5,
            "y": 0
          },
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "BEAR",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 49,
    "name": "Compound Alley Crest",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 16,
    "difficultyScore": 562,
    "difficultyTier": "Adept",
    "walls": [
      ".....#",
      "...#..",
      ".....#",
      "......",
      "#...#.",
      ".#...."
    ],
    "words": [
      {
        "word": "SPIN",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 3
          },
          {
            "ch": "P",
            "x": 2,
            "y": 4
          },
          {
            "ch": "I",
            "x": 0,
            "y": 0
          },
          {
            "ch": "N",
            "x": 0,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "FERN",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "MAZE",
        "cards": [
          {
            "ch": "M",
            "x": 2,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "Z",
            "x": 5,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "LEAF",
        "cards": [
          {
            "ch": "L",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "A",
            "x": 2,
            "y": 1
          },
          {
            "ch": "F",
            "x": 2,
            "y": 0
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 50,
    "name": "Compound Alley Mastery",
    "chapterId": 5,
    "chapterName": "Compound Alley",
    "n": 6,
    "optimalMoves": 12,
    "difficultyScore": 564,
    "difficultyTier": "Adept",
    "walls": [
      "....#.",
      "....#.",
      "......",
      "#....#",
      "#....#",
      "......"
    ],
    "words": [
      {
        "word": "WOLF",
        "cards": [
          {
            "ch": "W",
            "x": 0,
            "y": 0
          },
          {
            "ch": "O",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 3,
            "y": 1
          },
          {
            "ch": "F",
            "x": 0,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "MAZE",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 1
          },
          {
            "ch": "Z",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          }
        ],
        "best": 1
      },
      {
        "word": "HERO",
        "cards": [
          {
            "ch": "H",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          }
        ],
        "best": 4
      },
      {
        "word": "SNOW",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 0
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "W",
            "x": 3,
            "y": 0
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 51,
    "name": "Pivot Chambers Entry",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 18,
    "difficultyScore": 586,
    "difficultyTier": "Adept",
    "walls": [
      "...#..",
      "..##..",
      "......",
      "...#.#",
      "..#...",
      "....#."
    ],
    "words": [
      {
        "word": "EARTH",
        "cards": [
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 3,
            "y": 5
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          },
          {
            "ch": "H",
            "x": 2,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "T",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "M",
            "x": 3,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "STEEL",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          },
          {
            "ch": "L",
            "x": 5,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "NIGHT",
        "cards": [
          {
            "ch": "N",
            "x": 2,
            "y": 2
          },
          {
            "ch": "I",
            "x": 1,
            "y": 4
          },
          {
            "ch": "G",
            "x": 1,
            "y": 2
          },
          {
            "ch": "H",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 52,
    "name": "Pivot Chambers Gate",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 16,
    "difficultyScore": 602,
    "difficultyTier": "Adept",
    "walls": [
      "#...#.",
      "...#..",
      "...#..",
      "......",
      "......",
      "..##.#"
    ],
    "words": [
      {
        "word": "EARTH",
        "cards": [
          {
            "ch": "E",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "T",
            "x": 0,
            "y": 3
          },
          {
            "ch": "H",
            "x": 1,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "GROVE",
        "cards": [
          {
            "ch": "G",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "V",
            "x": 4,
            "y": 5
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "WATER",
        "cards": [
          {
            "ch": "W",
            "x": 2,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 2,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "CROWN",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 0
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "W",
            "x": 5,
            "y": 1
          },
          {
            "ch": "N",
            "x": 1,
            "y": 4
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 53,
    "name": "Pivot Chambers Path",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 23,
    "difficultyScore": 606,
    "difficultyTier": "Adept",
    "walls": [
      ".....#",
      ".#....",
      "......",
      "#..#..",
      "....#.",
      "..#..#"
    ],
    "words": [
      {
        "word": "NORTH",
        "cards": [
          {
            "ch": "N",
            "x": 1,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          },
          {
            "ch": "H",
            "x": 0,
            "y": 5
          }
        ],
        "best": 9
      },
      {
        "word": "CLOUD",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 3
          },
          {
            "ch": "L",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 4
          },
          {
            "ch": "U",
            "x": 1,
            "y": 4
          },
          {
            "ch": "D",
            "x": 1,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "EAGLE",
        "cards": [
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 0
          },
          {
            "ch": "G",
            "x": 5,
            "y": 1
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "FROST",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 4
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "S",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 2,
            "y": 0
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 54,
    "name": "Pivot Chambers Chamber",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 15,
    "difficultyScore": 610,
    "difficultyTier": "Adept",
    "walls": [
      ".##.#.",
      "......",
      "##....",
      "......",
      ".....#",
      "...#.."
    ],
    "words": [
      {
        "word": "GROVE",
        "cards": [
          {
            "ch": "G",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 5,
            "y": 0
          },
          {
            "ch": "V",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "BRAVE",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 3
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          },
          {
            "ch": "V",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "CREEK",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 3
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "K",
            "x": 5,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "EAGLE",
        "cards": [
          {
            "ch": "E",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "G",
            "x": 2,
            "y": 2
          },
          {
            "ch": "L",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 1
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 55,
    "name": "Pivot Chambers Orbit",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 20,
    "difficultyScore": 630,
    "difficultyTier": "Adept",
    "walls": [
      "......",
      "..#...",
      "#.....",
      ".#....",
      "...#..",
      "##.#.."
    ],
    "words": [
      {
        "word": "EMBER",
        "cards": [
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "M",
            "x": 1,
            "y": 4
          },
          {
            "ch": "B",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "SOLAR",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "L",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "RIVER",
        "cards": [
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "V",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 3,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "NORTH",
        "cards": [
          {
            "ch": "N",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 4
          },
          {
            "ch": "H",
            "x": 5,
            "y": 2
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 56,
    "name": "Pivot Chambers Echo",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 21,
    "difficultyScore": 642,
    "difficultyTier": "Adept",
    "walls": [
      "...#..",
      "......",
      "......",
      ".#.#.#",
      ".....#",
      ".#.#.."
    ],
    "words": [
      {
        "word": "SHARK",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 2
          },
          {
            "ch": "H",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 1
          },
          {
            "ch": "K",
            "x": 3,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "FLAME",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 3,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "M",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "MAGIC",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 5
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "G",
            "x": 0,
            "y": 2
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "C",
            "x": 4,
            "y": 2
          }
        ],
        "best": 4
      },
      {
        "word": "FROST",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "S",
            "x": 5,
            "y": 0
          },
          {
            "ch": "T",
            "x": 0,
            "y": 4
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 57,
    "name": "Pivot Chambers Vault",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 18,
    "difficultyScore": 646,
    "difficultyTier": "Adept",
    "walls": [
      "...#..",
      ".....#",
      ".#....",
      ".#....",
      "......",
      ".#..##"
    ],
    "words": [
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "M",
            "x": 4,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "RIVER",
        "cards": [
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "V",
            "x": 1,
            "y": 1
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "FLASH",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 4,
            "y": 1
          },
          {
            "ch": "H",
            "x": 2,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "SPACE",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 5
          },
          {
            "ch": "P",
            "x": 2,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "C",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 0
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 58,
    "name": "Pivot Chambers Crest",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 16,
    "difficultyScore": 662,
    "difficultyTier": "Adept",
    "walls": [
      "......",
      "......",
      ".#.#..",
      "#.....",
      "...#.#",
      "#...#."
    ],
    "words": [
      {
        "word": "CLOUD",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 3
          },
          {
            "ch": "L",
            "x": 4,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 1
          },
          {
            "ch": "U",
            "x": 0,
            "y": 4
          },
          {
            "ch": "D",
            "x": 2,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "SPACE",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 1
          },
          {
            "ch": "P",
            "x": 5,
            "y": 1
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "C",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "GROVE",
        "cards": [
          {
            "ch": "G",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 3
          },
          {
            "ch": "V",
            "x": 2,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          }
        ],
        "best": 2
      },
      {
        "word": "STEEL",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 2,
            "y": 2
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 59,
    "name": "Pivot Chambers Pillar",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 24,
    "difficultyScore": 668,
    "difficultyTier": "Adept",
    "walls": [
      "..##.#",
      "..#...",
      ".#....",
      "......",
      "#....#",
      "......"
    ],
    "words": [
      {
        "word": "FLAME",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "M",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          },
          {
            "ch": "M",
            "x": 0,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "CREEK",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 3
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          },
          {
            "ch": "K",
            "x": 3,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "PRISM",
        "cards": [
          {
            "ch": "P",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "I",
            "x": 3,
            "y": 3
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "M",
            "x": 0,
            "y": 0
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 60,
    "name": "Pivot Chambers Mastery",
    "chapterId": 6,
    "chapterName": "Pivot Chambers",
    "n": 6,
    "optimalMoves": 25,
    "difficultyScore": 690,
    "difficultyTier": "Adept",
    "walls": [
      ".#..#.",
      "......",
      "#.#...",
      ".....#",
      "......",
      ".#..#."
    ],
    "words": [
      {
        "word": "EARTH",
        "cards": [
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 4
          },
          {
            "ch": "H",
            "x": 5,
            "y": 2
          }
        ],
        "best": 7
      },
      {
        "word": "GHOST",
        "cards": [
          {
            "ch": "G",
            "x": 5,
            "y": 1
          },
          {
            "ch": "H",
            "x": 1,
            "y": 2
          },
          {
            "ch": "O",
            "x": 0,
            "y": 0
          },
          {
            "ch": "S",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "RIVER",
        "cards": [
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 5,
            "y": 1
          },
          {
            "ch": "V",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "OCEAN",
        "cards": [
          {
            "ch": "O",
            "x": 0,
            "y": 5
          },
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          },
          {
            "ch": "A",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 2,
            "y": 3
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 61,
    "name": "The Citadel Entry",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 23,
    "difficultyScore": 696,
    "difficultyTier": "Master",
    "walls": [
      ".#...##",
      "...#...",
      ".......",
      ".#....#",
      ".......",
      "#......",
      "....#.."
    ],
    "words": [
      {
        "word": "STONE",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 0
          },
          {
            "ch": "N",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          }
        ],
        "best": 1
      },
      {
        "word": "SPARK",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 1
          },
          {
            "ch": "P",
            "x": 3,
            "y": 5
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "K",
            "x": 0,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 5
          },
          {
            "ch": "O",
            "x": 2,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 5
          },
          {
            "ch": "M",
            "x": 4,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "SOUTH",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 2
          },
          {
            "ch": "U",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          },
          {
            "ch": "H",
            "x": 3,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "STEEL",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "L",
            "x": 5,
            "y": 4
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 62,
    "name": "The Citadel Path",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 18,
    "difficultyScore": 696,
    "difficultyTier": "Master",
    "walls": [
      ".#.##..",
      ".......",
      "..#....",
      ".......",
      "..#.#..",
      "#......",
      "...#..."
    ],
    "words": [
      {
        "word": "QUEST",
        "cards": [
          {
            "ch": "Q",
            "x": 5,
            "y": 2
          },
          {
            "ch": "U",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "S",
            "x": 4,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 6
          }
        ],
        "best": 2
      },
      {
        "word": "TIGER",
        "cards": [
          {
            "ch": "T",
            "x": 4,
            "y": 6
          },
          {
            "ch": "I",
            "x": 6,
            "y": 5
          },
          {
            "ch": "G",
            "x": 1,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          }
        ],
        "best": 2
      },
      {
        "word": "NORTH",
        "cards": [
          {
            "ch": "N",
            "x": 0,
            "y": 2
          },
          {
            "ch": "O",
            "x": 4,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          },
          {
            "ch": "H",
            "x": 6,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "SHARK",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "H",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "K",
            "x": 1,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 6,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 2
          },
          {
            "ch": "M",
            "x": 5,
            "y": 3
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 63,
    "name": "The Citadel Gate",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 22,
    "difficultyScore": 714,
    "difficultyTier": "Master",
    "walls": [
      "......#",
      "...#...",
      ".......",
      "#......",
      ".....##",
      "...###.",
      "......."
    ],
    "words": [
      {
        "word": "LIGHT",
        "cards": [
          {
            "ch": "L",
            "x": 4,
            "y": 6
          },
          {
            "ch": "I",
            "x": 5,
            "y": 3
          },
          {
            "ch": "G",
            "x": 3,
            "y": 4
          },
          {
            "ch": "H",
            "x": 4,
            "y": 3
          },
          {
            "ch": "T",
            "x": 1,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "SOUTH",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 0
          },
          {
            "ch": "O",
            "x": 5,
            "y": 2
          },
          {
            "ch": "U",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 3
          },
          {
            "ch": "H",
            "x": 0,
            "y": 2
          }
        ],
        "best": 2
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "T",
            "x": 5,
            "y": 0
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "R",
            "x": 6,
            "y": 3
          },
          {
            "ch": "M",
            "x": 5,
            "y": 6
          }
        ],
        "best": 4
      },
      {
        "word": "FROST",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "T",
            "x": 3,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "WATER",
        "cards": [
          {
            "ch": "W",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 1,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 6
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 64,
    "name": "The Citadel Orbit",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 18,
    "difficultyScore": 726,
    "difficultyTier": "Master",
    "walls": [
      "......#",
      "......#",
      "..#...#",
      ".......",
      "...#...",
      ".#..#..",
      "#......"
    ],
    "words": [
      {
        "word": "SOUTH",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "U",
            "x": 4,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "H",
            "x": 5,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "FLAME",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 0
          },
          {
            "ch": "L",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "M",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          },
          {
            "ch": "M",
            "x": 3,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "CORAL",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "R",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 2,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "TIGER",
        "cards": [
          {
            "ch": "T",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 1
          },
          {
            "ch": "G",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 65,
    "name": "The Citadel Chamber",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 33,
    "difficultyScore": 746,
    "difficultyTier": "Master",
    "walls": [
      "...#...",
      "...#...",
      ".......",
      "#......",
      "....#..",
      "....##.",
      "..#.#.."
    ],
    "words": [
      {
        "word": "GHOST",
        "cards": [
          {
            "ch": "G",
            "x": 1,
            "y": 2
          },
          {
            "ch": "H",
            "x": 2,
            "y": 4
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "S",
            "x": 4,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 5
          }
        ],
        "best": 4
      },
      {
        "word": "FOCUS",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 5
          },
          {
            "ch": "C",
            "x": 5,
            "y": 3
          },
          {
            "ch": "U",
            "x": 5,
            "y": 6
          },
          {
            "ch": "S",
            "x": 5,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "SPACE",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 5
          },
          {
            "ch": "P",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "C",
            "x": 2,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "QUEST",
        "cards": [
          {
            "ch": "Q",
            "x": 0,
            "y": 0
          },
          {
            "ch": "U",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          },
          {
            "ch": "S",
            "x": 3,
            "y": 5
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "OCEAN",
        "cards": [
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "C",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "N",
            "x": 4,
            "y": 3
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 66,
    "name": "The Citadel Vault",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 24,
    "difficultyScore": 758,
    "difficultyTier": "Master",
    "walls": [
      ".....#.",
      "..#....",
      ".......",
      "..##.#.",
      ".......",
      "....##.",
      "....#.."
    ],
    "words": [
      {
        "word": "FROST",
        "cards": [
          {
            "ch": "F",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 6
          },
          {
            "ch": "T",
            "x": 6,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "GHOST",
        "cards": [
          {
            "ch": "G",
            "x": 4,
            "y": 2
          },
          {
            "ch": "H",
            "x": 0,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "TITAN",
        "cards": [
          {
            "ch": "T",
            "x": 2,
            "y": 6
          },
          {
            "ch": "I",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 4
          },
          {
            "ch": "N",
            "x": 6,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "ORBIT",
        "cards": [
          {
            "ch": "O",
            "x": 0,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 6
          },
          {
            "ch": "B",
            "x": 0,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "FOCUS",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 4,
            "y": 2
          },
          {
            "ch": "C",
            "x": 2,
            "y": 4
          },
          {
            "ch": "U",
            "x": 3,
            "y": 6
          },
          {
            "ch": "S",
            "x": 0,
            "y": 6
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 67,
    "name": "The Citadel Echo",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 32,
    "difficultyScore": 764,
    "difficultyTier": "Master",
    "walls": [
      "..#....",
      "#......",
      ".......",
      ".......",
      "......#",
      ".#.##..",
      "...#.#."
    ],
    "words": [
      {
        "word": "SPARK",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 0
          },
          {
            "ch": "P",
            "x": 5,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "K",
            "x": 4,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "BRAVE",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 1
          },
          {
            "ch": "R",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "V",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "TITAN",
        "cards": [
          {
            "ch": "T",
            "x": 2,
            "y": 2
          },
          {
            "ch": "I",
            "x": 5,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 1
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "N",
            "x": 6,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "SOUTH",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 0
          },
          {
            "ch": "U",
            "x": 6,
            "y": 6
          },
          {
            "ch": "T",
            "x": 1,
            "y": 2
          },
          {
            "ch": "H",
            "x": 3,
            "y": 4
          }
        ],
        "best": 10
      },
      {
        "word": "OCEAN",
        "cards": [
          {
            "ch": "O",
            "x": 1,
            "y": 0
          },
          {
            "ch": "C",
            "x": 6,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 4,
            "y": 0
          },
          {
            "ch": "N",
            "x": 5,
            "y": 3
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 68,
    "name": "The Citadel Pillar",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 23,
    "difficultyScore": 766,
    "difficultyTier": "Master",
    "walls": [
      "......#",
      ".....##",
      "...#...",
      "......#",
      "#......",
      "#....#.",
      "......."
    ],
    "words": [
      {
        "word": "OCEAN",
        "cards": [
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "C",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "SPARK",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 2
          },
          {
            "ch": "P",
            "x": 1,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 1
          },
          {
            "ch": "K",
            "x": 3,
            "y": 0
          }
        ],
        "best": 5
      },
      {
        "word": "EMBER",
        "cards": [
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "M",
            "x": 5,
            "y": 4
          },
          {
            "ch": "B",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          }
        ],
        "best": 3
      },
      {
        "word": "FOCUS",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 5
          },
          {
            "ch": "O",
            "x": 6,
            "y": 5
          },
          {
            "ch": "C",
            "x": 3,
            "y": 0
          },
          {
            "ch": "U",
            "x": 5,
            "y": 6
          },
          {
            "ch": "S",
            "x": 3,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "BLOOM",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 1
          },
          {
            "ch": "L",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "M",
            "x": 2,
            "y": 0
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 69,
    "name": "The Citadel Crest",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 21,
    "difficultyScore": 772,
    "difficultyTier": "Master",
    "walls": [
      "...#...",
      ".......",
      ".#.....",
      ".##....",
      "...#...",
      ".##.#..",
      "......."
    ],
    "words": [
      {
        "word": "PRISM",
        "cards": [
          {
            "ch": "P",
            "x": 5,
            "y": 0
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "I",
            "x": 0,
            "y": 1
          },
          {
            "ch": "S",
            "x": 5,
            "y": 3
          },
          {
            "ch": "M",
            "x": 1,
            "y": 6
          }
        ],
        "best": 2
      },
      {
        "word": "TITAN",
        "cards": [
          {
            "ch": "T",
            "x": 2,
            "y": 6
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 6,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "GROVE",
        "cards": [
          {
            "ch": "G",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "V",
            "x": 6,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "BRAVE",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 6
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "V",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "TIGER",
        "cards": [
          {
            "ch": "T",
            "x": 4,
            "y": 4
          },
          {
            "ch": "I",
            "x": 3,
            "y": 3
          },
          {
            "ch": "G",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 70,
    "name": "The Citadel Mastery",
    "chapterId": 7,
    "chapterName": "The Citadel",
    "n": 7,
    "optimalMoves": 19,
    "difficultyScore": 778,
    "difficultyTier": "Master",
    "walls": [
      "#......",
      "......#",
      "...#...",
      "....#..",
      ".#.....",
      "..#....",
      "#....#."
    ],
    "words": [
      {
        "word": "ORBIT",
        "cards": [
          {
            "ch": "O",
            "x": 6,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 2
          },
          {
            "ch": "B",
            "x": 3,
            "y": 0
          },
          {
            "ch": "I",
            "x": 1,
            "y": 3
          },
          {
            "ch": "T",
            "x": 0,
            "y": 5
          }
        ],
        "best": 3
      },
      {
        "word": "SPARK",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 3
          },
          {
            "ch": "P",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          },
          {
            "ch": "K",
            "x": 1,
            "y": 6
          }
        ],
        "best": 4
      },
      {
        "word": "VALOR",
        "cards": [
          {
            "ch": "V",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 3
          },
          {
            "ch": "L",
            "x": 2,
            "y": 0
          },
          {
            "ch": "O",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "NIGHT",
        "cards": [
          {
            "ch": "N",
            "x": 2,
            "y": 4
          },
          {
            "ch": "I",
            "x": 5,
            "y": 5
          },
          {
            "ch": "G",
            "x": 5,
            "y": 2
          },
          {
            "ch": "H",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 1
          }
        ],
        "best": 2
      },
      {
        "word": "LIGHT",
        "cards": [
          {
            "ch": "L",
            "x": 2,
            "y": 6
          },
          {
            "ch": "I",
            "x": 1,
            "y": 6
          },
          {
            "ch": "G",
            "x": 1,
            "y": 0
          },
          {
            "ch": "H",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 71,
    "name": "Vortex Core Entry",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 28,
    "difficultyScore": 806,
    "difficultyTier": "Master",
    "walls": [
      "....#..",
      ".......",
      ".#.....",
      "..#...#",
      "...#...",
      ".#..#..",
      "..##..."
    ],
    "words": [
      {
        "word": "OCEAN",
        "cards": [
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "C",
            "x": 3,
            "y": 3
          },
          {
            "ch": "E",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "CLIFF",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 1
          },
          {
            "ch": "L",
            "x": 5,
            "y": 6
          },
          {
            "ch": "I",
            "x": 0,
            "y": 3
          },
          {
            "ch": "F",
            "x": 1,
            "y": 3
          },
          {
            "ch": "F",
            "x": 3,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "M",
            "x": 3,
            "y": 1
          }
        ],
        "best": 7
      },
      {
        "word": "SOLAR",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "L",
            "x": 6,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 6,
            "y": 1
          }
        ],
        "best": 7
      },
      {
        "word": "BRAVE",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "V",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 72,
    "name": "Vortex Core Chamber",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 22,
    "difficultyScore": 824,
    "difficultyTier": "Master",
    "walls": [
      ".......",
      ".......",
      "#....##",
      "......#",
      "...#...",
      "..#....",
      ".##.#.."
    ],
    "words": [
      {
        "word": "WATER",
        "cards": [
          {
            "ch": "W",
            "x": 1,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 5
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "LIGHT",
        "cards": [
          {
            "ch": "L",
            "x": 0,
            "y": 1
          },
          {
            "ch": "I",
            "x": 0,
            "y": 4
          },
          {
            "ch": "G",
            "x": 0,
            "y": 5
          },
          {
            "ch": "H",
            "x": 5,
            "y": 5
          },
          {
            "ch": "T",
            "x": 0,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 5,
            "y": 0
          },
          {
            "ch": "T",
            "x": 3,
            "y": 0
          },
          {
            "ch": "O",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          },
          {
            "ch": "M",
            "x": 3,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "VALOR",
        "cards": [
          {
            "ch": "V",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 6,
            "y": 0
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "TIGER",
        "cards": [
          {
            "ch": "T",
            "x": 2,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 1
          },
          {
            "ch": "G",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 2
          }
        ],
        "best": 1
      }
    ]
  },
  {
    "id": 73,
    "name": "Vortex Core Path",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 33,
    "difficultyScore": 826,
    "difficultyTier": "Master",
    "walls": [
      "...#...",
      "#..#...",
      ".#.....",
      ".......",
      "....#..",
      ".....##",
      "#....#."
    ],
    "words": [
      {
        "word": "CLIFF",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 5
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "F",
            "x": 0,
            "y": 2
          },
          {
            "ch": "F",
            "x": 5,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 6
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "M",
            "x": 5,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "VALOR",
        "cards": [
          {
            "ch": "V",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 0
          },
          {
            "ch": "L",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 1
          },
          {
            "ch": "R",
            "x": 2,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "CROWN",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 3
          },
          {
            "ch": "R",
            "x": 2,
            "y": 0
          },
          {
            "ch": "O",
            "x": 1,
            "y": 3
          },
          {
            "ch": "W",
            "x": 6,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "ORBIT",
        "cards": [
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          },
          {
            "ch": "B",
            "x": 0,
            "y": 2
          },
          {
            "ch": "I",
            "x": 6,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 74,
    "name": "Vortex Core Orbit",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 18,
    "difficultyScore": 826,
    "difficultyTier": "Master",
    "walls": [
      "#......",
      "...###.",
      "#......",
      "#.#....",
      ".#.....",
      ".......",
      "..#...."
    ],
    "words": [
      {
        "word": "CREEK",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          },
          {
            "ch": "E",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "K",
            "x": 6,
            "y": 5
          }
        ],
        "best": 2
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 1
          },
          {
            "ch": "M",
            "x": 1,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "NIGHT",
        "cards": [
          {
            "ch": "N",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 4,
            "y": 6
          },
          {
            "ch": "G",
            "x": 3,
            "y": 4
          },
          {
            "ch": "H",
            "x": 0,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "SOUTH",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 6,
            "y": 0
          },
          {
            "ch": "U",
            "x": 3,
            "y": 2
          },
          {
            "ch": "T",
            "x": 2,
            "y": 5
          },
          {
            "ch": "H",
            "x": 1,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "BRAVE",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "V",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 75,
    "name": "Vortex Core Echo",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 17,
    "difficultyScore": 834,
    "difficultyTier": "Master",
    "walls": [
      ".......",
      ".##....",
      ".....#.",
      ".#.##..",
      ".#..##.",
      ".......",
      "......."
    ],
    "words": [
      {
        "word": "STONE",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 5
          },
          {
            "ch": "T",
            "x": 6,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 2
          },
          {
            "ch": "N",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          }
        ],
        "best": 3
      },
      {
        "word": "RIVER",
        "cards": [
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 6,
            "y": 4
          },
          {
            "ch": "V",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          }
        ],
        "best": 4
      },
      {
        "word": "FROST",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "S",
            "x": 4,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 0
          }
        ],
        "best": 5
      },
      {
        "word": "PRISM",
        "cards": [
          {
            "ch": "P",
            "x": 0,
            "y": 2
          },
          {
            "ch": "R",
            "x": 3,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "S",
            "x": 5,
            "y": 6
          },
          {
            "ch": "M",
            "x": 0,
            "y": 5
          }
        ],
        "best": 2
      },
      {
        "word": "PULSE",
        "cards": [
          {
            "ch": "P",
            "x": 0,
            "y": 6
          },
          {
            "ch": "U",
            "x": 1,
            "y": 6
          },
          {
            "ch": "L",
            "x": 6,
            "y": 1
          },
          {
            "ch": "S",
            "x": 5,
            "y": 1
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 76,
    "name": "Vortex Core Gate",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 33,
    "difficultyScore": 836,
    "difficultyTier": "Master",
    "walls": [
      "#..#...",
      "...#...",
      ".....#.",
      ".......",
      ".#....#",
      ".#.#...",
      "...#..."
    ],
    "words": [
      {
        "word": "ORBIT",
        "cards": [
          {
            "ch": "O",
            "x": 6,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 0
          },
          {
            "ch": "B",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 2,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "FLAME",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 5
          },
          {
            "ch": "M",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "TITAN",
        "cards": [
          {
            "ch": "T",
            "x": 2,
            "y": 6
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "T",
            "x": 5,
            "y": 5
          },
          {
            "ch": "A",
            "x": 3,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "STORM",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 6
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 6
          },
          {
            "ch": "M",
            "x": 5,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "WATER",
        "cards": [
          {
            "ch": "W",
            "x": 6,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "T",
            "x": 2,
            "y": 6
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 5
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 77,
    "name": "Vortex Core Pillar",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 20,
    "difficultyScore": 860,
    "difficultyTier": "Master",
    "walls": [
      ".......",
      "#.#.#..",
      ".......",
      "...###.",
      ".#.....",
      "...#.#.",
      "......."
    ],
    "words": [
      {
        "word": "FOCUS",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 6,
            "y": 2
          },
          {
            "ch": "C",
            "x": 5,
            "y": 2
          },
          {
            "ch": "U",
            "x": 4,
            "y": 0
          },
          {
            "ch": "S",
            "x": 4,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "RIVER",
        "cards": [
          {
            "ch": "R",
            "x": 3,
            "y": 1
          },
          {
            "ch": "I",
            "x": 6,
            "y": 5
          },
          {
            "ch": "V",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 2
          }
        ],
        "best": 2
      },
      {
        "word": "PEARL",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "EAGLE",
        "cards": [
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "G",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 1,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "CORAL",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 2
          },
          {
            "ch": "O",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 4,
            "y": 6
          },
          {
            "ch": "L",
            "x": 5,
            "y": 0
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 78,
    "name": "Vortex Core Vault",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 28,
    "difficultyScore": 866,
    "difficultyTier": "Master",
    "walls": [
      "..#....",
      "#......",
      "#......",
      "..#....",
      "..##...",
      "..#...#",
      "......#"
    ],
    "words": [
      {
        "word": "STONE",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 6
          },
          {
            "ch": "N",
            "x": 2,
            "y": 6
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "ORBIT",
        "cards": [
          {
            "ch": "O",
            "x": 6,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "B",
            "x": 5,
            "y": 2
          },
          {
            "ch": "I",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "PRISM",
        "cards": [
          {
            "ch": "P",
            "x": 4,
            "y": 5
          },
          {
            "ch": "R",
            "x": 6,
            "y": 0
          },
          {
            "ch": "I",
            "x": 3,
            "y": 2
          },
          {
            "ch": "S",
            "x": 6,
            "y": 2
          },
          {
            "ch": "M",
            "x": 0,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "CROWN",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "W",
            "x": 3,
            "y": 1
          },
          {
            "ch": "N",
            "x": 1,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "MAGIC",
        "cards": [
          {
            "ch": "M",
            "x": 4,
            "y": 5
          },
          {
            "ch": "A",
            "x": 0,
            "y": 6
          },
          {
            "ch": "G",
            "x": 3,
            "y": 1
          },
          {
            "ch": "I",
            "x": 6,
            "y": 3
          },
          {
            "ch": "C",
            "x": 0,
            "y": 5
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 79,
    "name": "Vortex Core Mastery",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 19,
    "difficultyScore": 878,
    "difficultyTier": "Master",
    "walls": [
      ".#.....",
      ".....#.",
      ".......",
      ".#.#.#.",
      ".......",
      "...##.#",
      "...#..."
    ],
    "words": [
      {
        "word": "CORAL",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "L",
            "x": 6,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "FLAME",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 5
          },
          {
            "ch": "L",
            "x": 6,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "M",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "EMBER",
        "cards": [
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "M",
            "x": 3,
            "y": 4
          },
          {
            "ch": "B",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "BLOOM",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 6
          },
          {
            "ch": "L",
            "x": 6,
            "y": 0
          },
          {
            "ch": "O",
            "x": 0,
            "y": 1
          },
          {
            "ch": "O",
            "x": 5,
            "y": 0
          },
          {
            "ch": "M",
            "x": 1,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "FROST",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 5
          },
          {
            "ch": "R",
            "x": 3,
            "y": 0
          },
          {
            "ch": "O",
            "x": 3,
            "y": 1
          },
          {
            "ch": "S",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 2,
            "y": 0
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 80,
    "name": "Vortex Core Crest",
    "chapterId": 8,
    "chapterName": "Vortex Core",
    "n": 7,
    "optimalMoves": 26,
    "difficultyScore": 882,
    "difficultyTier": "Master",
    "walls": [
      ".......",
      "......#",
      ".#.....",
      "#......",
      "..#....",
      "#..#.##",
      "..#...."
    ],
    "words": [
      {
        "word": "CREEK",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "K",
            "x": 3,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "STEEL",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 0
          },
          {
            "ch": "T",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 1
          },
          {
            "ch": "L",
            "x": 6,
            "y": 3
          }
        ],
        "best": 3
      },
      {
        "word": "GHOST",
        "cards": [
          {
            "ch": "G",
            "x": 4,
            "y": 5
          },
          {
            "ch": "H",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "S",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "BLAZE",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 0
          },
          {
            "ch": "L",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "Z",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "WATER",
        "cards": [
          {
            "ch": "W",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 81,
    "name": "Gravity Loom Entry",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 27,
    "difficultyScore": 904,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".......",
      "#..#..#",
      ".....#.",
      ".......",
      "..#...#",
      ".......",
      "###..#."
    ],
    "words": [
      {
        "word": "ORBITS",
        "cards": [
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 5,
            "y": 5
          },
          {
            "ch": "B",
            "x": 5,
            "y": 4
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 0,
            "y": 2
          },
          {
            "ch": "S",
            "x": 6,
            "y": 0
          }
        ],
        "best": 9
      },
      {
        "word": "DRAGON",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 2
          },
          {
            "ch": "R",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "G",
            "x": 6,
            "y": 6
          },
          {
            "ch": "O",
            "x": 4,
            "y": 5
          },
          {
            "ch": "N",
            "x": 6,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "FOREST",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 5,
            "y": 4
          },
          {
            "ch": "S",
            "x": 0,
            "y": 2
          },
          {
            "ch": "T",
            "x": 3,
            "y": 6
          }
        ],
        "best": 4
      },
      {
        "word": "KNIGHT",
        "cards": [
          {
            "ch": "K",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 5,
            "y": 3
          },
          {
            "ch": "I",
            "x": 2,
            "y": 3
          },
          {
            "ch": "G",
            "x": 6,
            "y": 5
          },
          {
            "ch": "H",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 1,
            "y": 4
          }
        ],
        "best": 2
      },
      {
        "word": "WINTER",
        "cards": [
          {
            "ch": "W",
            "x": 3,
            "y": 6
          },
          {
            "ch": "I",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 6,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 82,
    "name": "Gravity Loom Gate",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 21,
    "difficultyScore": 908,
    "difficultyTier": "Grandmaster",
    "walls": [
      "##..#..",
      ".......",
      ".#.....",
      ".#.#...",
      ".......",
      "....#..",
      ".##...#"
    ],
    "words": [
      {
        "word": "AURORA",
        "cards": [
          {
            "ch": "A",
            "x": 2,
            "y": 3
          },
          {
            "ch": "U",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "CHRONO",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 4
          },
          {
            "ch": "H",
            "x": 4,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 6
          },
          {
            "ch": "O",
            "x": 2,
            "y": 0
          },
          {
            "ch": "N",
            "x": 3,
            "y": 1
          },
          {
            "ch": "O",
            "x": 0,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "COSMOS",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 2
          },
          {
            "ch": "O",
            "x": 4,
            "y": 4
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "M",
            "x": 4,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "S",
            "x": 0,
            "y": 5
          }
        ],
        "best": 3
      },
      {
        "word": "ASTRAL",
        "cards": [
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "S",
            "x": 5,
            "y": 0
          },
          {
            "ch": "T",
            "x": 5,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 6
          },
          {
            "ch": "A",
            "x": 0,
            "y": 6
          },
          {
            "ch": "L",
            "x": 4,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 0,
            "y": 6
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "M",
            "x": 0,
            "y": 5
          },
          {
            "ch": "P",
            "x": 6,
            "y": 5
          },
          {
            "ch": "L",
            "x": 2,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 2
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 83,
    "name": "Gravity Loom Path",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 31,
    "difficultyScore": 920,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".......",
      "#.#....",
      "....#..",
      "#....#.",
      ".....##",
      ".....#.",
      ".##...."
    ],
    "words": [
      {
        "word": "DRAGON",
        "cards": [
          {
            "ch": "D",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 6
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "G",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 5
          },
          {
            "ch": "N",
            "x": 0,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 1
          },
          {
            "ch": "Z",
            "x": 2,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "SHADOW",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 0
          },
          {
            "ch": "H",
            "x": 3,
            "y": 1
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "D",
            "x": 3,
            "y": 5
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "W",
            "x": 6,
            "y": 2
          }
        ],
        "best": 9
      },
      {
        "word": "CANYON",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 6
          },
          {
            "ch": "A",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 5,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 1,
            "y": 3
          },
          {
            "ch": "O",
            "x": 2,
            "y": 5
          },
          {
            "ch": "N",
            "x": 3,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "COSMIC",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 0
          },
          {
            "ch": "S",
            "x": 1,
            "y": 5
          },
          {
            "ch": "M",
            "x": 6,
            "y": 5
          },
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "C",
            "x": 6,
            "y": 2
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 84,
    "name": "Gravity Loom Orbit",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 20,
    "difficultyScore": 922,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".......",
      "..#.#..",
      "....#..",
      "..##.#.",
      "#....#.",
      ".#.....",
      ".#....."
    ],
    "words": [
      {
        "word": "ORBITS",
        "cards": [
          {
            "ch": "O",
            "x": 2,
            "y": 6
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          },
          {
            "ch": "B",
            "x": 3,
            "y": 5
          },
          {
            "ch": "I",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 1
          }
        ],
        "best": 4
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "Z",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "CHRONO",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 0
          },
          {
            "ch": "H",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "N",
            "x": 5,
            "y": 2
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "METEOR",
        "cards": [
          {
            "ch": "M",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 1
          },
          {
            "ch": "R",
            "x": 2,
            "y": 5
          }
        ],
        "best": 4
      },
      {
        "word": "SHADOW",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 2
          },
          {
            "ch": "H",
            "x": 6,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "D",
            "x": 1,
            "y": 4
          },
          {
            "ch": "O",
            "x": 6,
            "y": 6
          },
          {
            "ch": "W",
            "x": 5,
            "y": 1
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 85,
    "name": "Gravity Loom Chamber",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 31,
    "difficultyScore": 936,
    "difficultyTier": "Grandmaster",
    "walls": [
      "#....#.",
      "....#.#",
      "..#...#",
      ".......",
      "...#...",
      ".....#.",
      ".#..#.."
    ],
    "words": [
      {
        "word": "AURORA",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "U",
            "x": 0,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "SUMMER",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 3
          },
          {
            "ch": "U",
            "x": 4,
            "y": 2
          },
          {
            "ch": "M",
            "x": 5,
            "y": 4
          },
          {
            "ch": "M",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "STREAM",
        "cards": [
          {
            "ch": "S",
            "x": 2,
            "y": 4
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          },
          {
            "ch": "R",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "M",
            "x": 3,
            "y": 2
          }
        ],
        "best": 4
      },
      {
        "word": "COSMOS",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 0
          },
          {
            "ch": "O",
            "x": 0,
            "y": 2
          },
          {
            "ch": "S",
            "x": 2,
            "y": 4
          },
          {
            "ch": "M",
            "x": 3,
            "y": 6
          },
          {
            "ch": "O",
            "x": 6,
            "y": 4
          },
          {
            "ch": "S",
            "x": 0,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "M",
            "x": 4,
            "y": 0
          },
          {
            "ch": "P",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 86,
    "name": "Gravity Loom Vault",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 27,
    "difficultyScore": 952,
    "difficultyTier": "Grandmaster",
    "walls": [
      "#..#...",
      ".#.#.#.",
      ".....#.",
      "....##.",
      ".......",
      "#.....#",
      "......."
    ],
    "words": [
      {
        "word": "SUMMER",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 2
          },
          {
            "ch": "U",
            "x": 4,
            "y": 5
          },
          {
            "ch": "M",
            "x": 6,
            "y": 0
          },
          {
            "ch": "M",
            "x": 6,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 6,
            "y": 3
          },
          {
            "ch": "L",
            "x": 1,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 5
          },
          {
            "ch": "N",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          }
        ],
        "best": 8
      },
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          },
          {
            "ch": "M",
            "x": 5,
            "y": 6
          },
          {
            "ch": "P",
            "x": 5,
            "y": 5
          },
          {
            "ch": "L",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "CHRONO",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 5
          },
          {
            "ch": "H",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 5,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 6
          },
          {
            "ch": "N",
            "x": 4,
            "y": 6
          },
          {
            "ch": "O",
            "x": 6,
            "y": 6
          }
        ],
        "best": 1
      },
      {
        "word": "SPIRIT",
        "cards": [
          {
            "ch": "S",
            "x": 3,
            "y": 2
          },
          {
            "ch": "P",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 2,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 6
          },
          {
            "ch": "T",
            "x": 3,
            "y": 5
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 87,
    "name": "Gravity Loom Pillar",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 25,
    "difficultyScore": 956,
    "difficultyTier": "Grandmaster",
    "walls": [
      "....#..",
      "....#.#",
      ".......",
      "#.#....",
      "..#..#.",
      "..#..#.",
      "......#"
    ],
    "words": [
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          },
          {
            "ch": "T",
            "x": 6,
            "y": 2
          }
        ],
        "best": 2
      },
      {
        "word": "SPHERE",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 0
          },
          {
            "ch": "P",
            "x": 1,
            "y": 2
          },
          {
            "ch": "H",
            "x": 2,
            "y": 6
          },
          {
            "ch": "E",
            "x": 0,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          }
        ],
        "best": 8
      },
      {
        "word": "SPRING",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "P",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          },
          {
            "ch": "I",
            "x": 0,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 2
          },
          {
            "ch": "G",
            "x": 0,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "CHRONO",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 3
          },
          {
            "ch": "H",
            "x": 3,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 1
          },
          {
            "ch": "N",
            "x": 5,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "M",
            "x": 0,
            "y": 4
          },
          {
            "ch": "P",
            "x": 4,
            "y": 6
          },
          {
            "ch": "L",
            "x": 3,
            "y": 6
          },
          {
            "ch": "E",
            "x": 6,
            "y": 4
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 88,
    "name": "Gravity Loom Echo",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 37,
    "difficultyScore": 964,
    "difficultyTier": "Grandmaster",
    "walls": [
      "...#...",
      ".#....#",
      "...##..",
      ".#.#...",
      "#......",
      "#......",
      ".....#."
    ],
    "words": [
      {
        "word": "FOREST",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 5
          },
          {
            "ch": "R",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 0
          },
          {
            "ch": "T",
            "x": 3,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 3,
            "y": 1
          },
          {
            "ch": "L",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "N",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 6
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "BEACON",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 6
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "C",
            "x": 0,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "N",
            "x": 4,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "AURORA",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "U",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 1,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "SPIRIT",
        "cards": [
          {
            "ch": "S",
            "x": 4,
            "y": 5
          },
          {
            "ch": "P",
            "x": 2,
            "y": 3
          },
          {
            "ch": "I",
            "x": 5,
            "y": 3
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 89,
    "name": "Gravity Loom Mastery",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 24,
    "difficultyScore": 970,
    "difficultyTier": "Grandmaster",
    "walls": [
      "###....",
      ".#...#.",
      ".......",
      "#.##..#",
      "..#....",
      ".......",
      "......."
    ],
    "words": [
      {
        "word": "KNIGHT",
        "cards": [
          {
            "ch": "K",
            "x": 2,
            "y": 1
          },
          {
            "ch": "N",
            "x": 0,
            "y": 2
          },
          {
            "ch": "I",
            "x": 4,
            "y": 6
          },
          {
            "ch": "G",
            "x": 3,
            "y": 0
          },
          {
            "ch": "H",
            "x": 6,
            "y": 1
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          }
        ],
        "best": 9
      },
      {
        "word": "WINTER",
        "cards": [
          {
            "ch": "W",
            "x": 5,
            "y": 6
          },
          {
            "ch": "I",
            "x": 6,
            "y": 1
          },
          {
            "ch": "N",
            "x": 5,
            "y": 0
          },
          {
            "ch": "T",
            "x": 6,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "VALLEY",
        "cards": [
          {
            "ch": "V",
            "x": 6,
            "y": 6
          },
          {
            "ch": "A",
            "x": 4,
            "y": 4
          },
          {
            "ch": "L",
            "x": 6,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "Y",
            "x": 6,
            "y": 4
          }
        ],
        "best": 3
      },
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 2,
            "y": 2
          },
          {
            "ch": "L",
            "x": 6,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 4
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "T",
            "x": 3,
            "y": 5
          }
        ],
        "best": 3
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "Z",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 0
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 90,
    "name": "Grandmaster Vault Entry",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 24,
    "difficultyScore": 978,
    "difficultyTier": "Grandmaster",
    "walls": [
      "..#.....",
      "........",
      "#...#...",
      ".#.#.#..",
      "#.......",
      "....##..",
      ".#.....#",
      ".#......"
    ],
    "words": [
      {
        "word": "SUMMER",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 7
          },
          {
            "ch": "U",
            "x": 6,
            "y": 1
          },
          {
            "ch": "M",
            "x": 7,
            "y": 4
          },
          {
            "ch": "M",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "VALLEY",
        "cards": [
          {
            "ch": "V",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 5
          },
          {
            "ch": "L",
            "x": 3,
            "y": 6
          },
          {
            "ch": "L",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 6,
            "y": 4
          },
          {
            "ch": "Y",
            "x": 4,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 6
          },
          {
            "ch": "R",
            "x": 7,
            "y": 2
          },
          {
            "ch": "E",
            "x": 7,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          },
          {
            "ch": "Z",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "FOREST",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 1
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          },
          {
            "ch": "S",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          }
        ],
        "best": 4
      },
      {
        "word": "DRAGON",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 7,
            "y": 4
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "G",
            "x": 3,
            "y": 6
          },
          {
            "ch": "O",
            "x": 2,
            "y": 7
          },
          {
            "ch": "N",
            "x": 6,
            "y": 7
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 91,
    "name": "Gravity Loom Crest",
    "chapterId": 9,
    "chapterName": "Gravity Loom",
    "n": 7,
    "optimalMoves": 35,
    "difficultyScore": 984,
    "difficultyTier": "Grandmaster",
    "walls": [
      "#..#.#.",
      ".......",
      "#......",
      "..#..##",
      "..#....",
      "#......",
      "..#...."
    ],
    "words": [
      {
        "word": "SILVER",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 1
          },
          {
            "ch": "L",
            "x": 5,
            "y": 1
          },
          {
            "ch": "V",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "ZENITH",
        "cards": [
          {
            "ch": "Z",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "N",
            "x": 2,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          },
          {
            "ch": "H",
            "x": 5,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "FOREST",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "S",
            "x": 3,
            "y": 5
          },
          {
            "ch": "T",
            "x": 2,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "GALAXY",
        "cards": [
          {
            "ch": "G",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 4,
            "y": 6
          },
          {
            "ch": "L",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 6,
            "y": 2
          },
          {
            "ch": "X",
            "x": 0,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 6
          }
        ],
        "best": 10
      },
      {
        "word": "COSMOS",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 2
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "S",
            "x": 0,
            "y": 1
          },
          {
            "ch": "M",
            "x": 5,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 2
          },
          {
            "ch": "S",
            "x": 3,
            "y": 4
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 92,
    "name": "Grandmaster Vault Echo",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 16,
    "difficultyScore": 997,
    "difficultyTier": "Grandmaster",
    "walls": [
      "........",
      ".......#",
      "#..##...",
      "#.###...",
      "#.......",
      ".#.#....",
      "........",
      "#......."
    ],
    "words": [
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 5,
            "y": 3
          },
          {
            "ch": "L",
            "x": 7,
            "y": 4
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "N",
            "x": 4,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 7
          },
          {
            "ch": "T",
            "x": 5,
            "y": 5
          }
        ],
        "best": 3
      },
      {
        "word": "CHRONO",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 6
          },
          {
            "ch": "H",
            "x": 2,
            "y": 6
          },
          {
            "ch": "R",
            "x": 3,
            "y": 7
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "N",
            "x": 6,
            "y": 1
          },
          {
            "ch": "O",
            "x": 4,
            "y": 7
          }
        ],
        "best": 2
      },
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          },
          {
            "ch": "M",
            "x": 6,
            "y": 4
          },
          {
            "ch": "P",
            "x": 3,
            "y": 1
          },
          {
            "ch": "L",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 6
          }
        ],
        "best": 3
      },
      {
        "word": "AURORA",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 5
          },
          {
            "ch": "U",
            "x": 2,
            "y": 0
          },
          {
            "ch": "R",
            "x": 7,
            "y": 3
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "R",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 7,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "SPRING",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 3
          },
          {
            "ch": "P",
            "x": 6,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 7
          },
          {
            "ch": "I",
            "x": 6,
            "y": 6
          },
          {
            "ch": "N",
            "x": 2,
            "y": 4
          },
          {
            "ch": "G",
            "x": 2,
            "y": 5
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 93,
    "name": "Grandmaster Vault Gate",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 27,
    "difficultyScore": 998,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".##....#",
      "....#...",
      ".#......",
      ".#......",
      "....#...",
      "...#..#.",
      "........",
      "##...#.."
    ],
    "words": [
      {
        "word": "ORBITS",
        "cards": [
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 4,
            "y": 2
          },
          {
            "ch": "B",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          },
          {
            "ch": "S",
            "x": 4,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "SPIRIT",
        "cards": [
          {
            "ch": "S",
            "x": 7,
            "y": 7
          },
          {
            "ch": "P",
            "x": 6,
            "y": 6
          },
          {
            "ch": "I",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 2,
            "y": 5
          },
          {
            "ch": "T",
            "x": 5,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "SHADOW",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "H",
            "x": 2,
            "y": 6
          },
          {
            "ch": "A",
            "x": 7,
            "y": 3
          },
          {
            "ch": "D",
            "x": 2,
            "y": 7
          },
          {
            "ch": "O",
            "x": 0,
            "y": 6
          },
          {
            "ch": "W",
            "x": 5,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 7,
            "y": 1
          },
          {
            "ch": "M",
            "x": 0,
            "y": 2
          },
          {
            "ch": "P",
            "x": 3,
            "y": 3
          },
          {
            "ch": "L",
            "x": 7,
            "y": 7
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "QUARTZ",
        "cards": [
          {
            "ch": "Q",
            "x": 3,
            "y": 2
          },
          {
            "ch": "U",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 6,
            "y": 7
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 6
          },
          {
            "ch": "Z",
            "x": 0,
            "y": 4
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 94,
    "name": "Grandmaster Vault Path",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 32,
    "difficultyScore": 1001,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".#......",
      "...#....",
      "..#.##..",
      "..#....#",
      "#.......",
      "........",
      "###..#..",
      "........"
    ],
    "words": [
      {
        "word": "QUARTZ",
        "cards": [
          {
            "ch": "Q",
            "x": 4,
            "y": 7
          },
          {
            "ch": "U",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 7
          },
          {
            "ch": "R",
            "x": 7,
            "y": 4
          },
          {
            "ch": "T",
            "x": 5,
            "y": 4
          },
          {
            "ch": "Z",
            "x": 4,
            "y": 0
          }
        ],
        "best": 5
      },
      {
        "word": "CHRONO",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 5
          },
          {
            "ch": "H",
            "x": 7,
            "y": 1
          },
          {
            "ch": "R",
            "x": 6,
            "y": 7
          },
          {
            "ch": "O",
            "x": 3,
            "y": 2
          },
          {
            "ch": "N",
            "x": 6,
            "y": 5
          },
          {
            "ch": "O",
            "x": 6,
            "y": 6
          }
        ],
        "best": 4
      },
      {
        "word": "COSMOS",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "S",
            "x": 3,
            "y": 6
          },
          {
            "ch": "M",
            "x": 7,
            "y": 6
          },
          {
            "ch": "O",
            "x": 7,
            "y": 7
          },
          {
            "ch": "S",
            "x": 5,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "METEOR",
        "cards": [
          {
            "ch": "M",
            "x": 7,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "T",
            "x": 7,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "O",
            "x": 7,
            "y": 6
          },
          {
            "ch": "R",
            "x": 4,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "DRAGON",
        "cards": [
          {
            "ch": "D",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "G",
            "x": 3,
            "y": 3
          },
          {
            "ch": "O",
            "x": 4,
            "y": 7
          },
          {
            "ch": "N",
            "x": 7,
            "y": 1
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 95,
    "name": "Grandmaster Vault Chamber",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 32,
    "difficultyScore": 1015,
    "difficultyTier": "Grandmaster",
    "walls": [
      "...#....",
      "...#..#.",
      ".....#..",
      ".##.....",
      "..#....#",
      "#.....#.",
      "..#.....",
      "#......."
    ],
    "words": [
      {
        "word": "ZENITH",
        "cards": [
          {
            "ch": "Z",
            "x": 4,
            "y": 6
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 1,
            "y": 4
          },
          {
            "ch": "H",
            "x": 1,
            "y": 7
          }
        ],
        "best": 4
      },
      {
        "word": "SPRING",
        "cards": [
          {
            "ch": "S",
            "x": 7,
            "y": 6
          },
          {
            "ch": "P",
            "x": 1,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 6
          },
          {
            "ch": "I",
            "x": 6,
            "y": 7
          },
          {
            "ch": "N",
            "x": 7,
            "y": 1
          },
          {
            "ch": "G",
            "x": 2,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "WINTER",
        "cards": [
          {
            "ch": "W",
            "x": 6,
            "y": 3
          },
          {
            "ch": "I",
            "x": 6,
            "y": 0
          },
          {
            "ch": "N",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "SPHERE",
        "cards": [
          {
            "ch": "S",
            "x": 0,
            "y": 0
          },
          {
            "ch": "P",
            "x": 6,
            "y": 4
          },
          {
            "ch": "H",
            "x": 4,
            "y": 7
          },
          {
            "ch": "E",
            "x": 0,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 7,
            "y": 7
          }
        ],
        "best": 6
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 1
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "E",
            "x": 5,
            "y": 5
          },
          {
            "ch": "E",
            "x": 7,
            "y": 1
          },
          {
            "ch": "Z",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 96,
    "name": "Grandmaster Vault Orbit",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 31,
    "difficultyScore": 1020,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".#......",
      ".#......",
      ".#......",
      "......#.",
      "..##..#.",
      "..##..#.",
      "#......#",
      "........"
    ],
    "words": [
      {
        "word": "TEMPLE",
        "cards": [
          {
            "ch": "T",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          },
          {
            "ch": "M",
            "x": 7,
            "y": 2
          },
          {
            "ch": "P",
            "x": 5,
            "y": 5
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "E",
            "x": 7,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "COSMIC",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 1
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "S",
            "x": 5,
            "y": 2
          },
          {
            "ch": "M",
            "x": 7,
            "y": 5
          },
          {
            "ch": "I",
            "x": 4,
            "y": 7
          },
          {
            "ch": "C",
            "x": 1,
            "y": 7
          }
        ],
        "best": 7
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 5
          },
          {
            "ch": "E",
            "x": 7,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 2
          },
          {
            "ch": "Z",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "MIRROR",
        "cards": [
          {
            "ch": "M",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "CASTLE",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 4,
            "y": 2
          },
          {
            "ch": "T",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 7,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 97,
    "name": "Grandmaster Vault Pillar",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 22,
    "difficultyScore": 1023,
    "difficultyTier": "Grandmaster",
    "walls": [
      "....###.",
      "........",
      "..#....#",
      "........",
      "..##.#.#",
      "........",
      "..#..#..",
      "...#...."
    ],
    "words": [
      {
        "word": "CANYON",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 3
          },
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 7
          },
          {
            "ch": "O",
            "x": 6,
            "y": 4
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "BEACON",
        "cards": [
          {
            "ch": "B",
            "x": 7,
            "y": 5
          },
          {
            "ch": "E",
            "x": 6,
            "y": 5
          },
          {
            "ch": "A",
            "x": 3,
            "y": 2
          },
          {
            "ch": "C",
            "x": 3,
            "y": 0
          },
          {
            "ch": "O",
            "x": 0,
            "y": 4
          },
          {
            "ch": "N",
            "x": 2,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "BREEZE",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 3
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          },
          {
            "ch": "Z",
            "x": 5,
            "y": 5
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 7,
            "y": 3
          },
          {
            "ch": "L",
            "x": 5,
            "y": 7
          },
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "N",
            "x": 0,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 5
          },
          {
            "ch": "T",
            "x": 1,
            "y": 2
          }
        ],
        "best": 7
      },
      {
        "word": "KNIGHT",
        "cards": [
          {
            "ch": "K",
            "x": 7,
            "y": 6
          },
          {
            "ch": "N",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 3,
            "y": 0
          },
          {
            "ch": "G",
            "x": 0,
            "y": 6
          },
          {
            "ch": "H",
            "x": 4,
            "y": 5
          },
          {
            "ch": "T",
            "x": 0,
            "y": 2
          }
        ],
        "best": 3
      }
    ]
  },
  {
    "id": 98,
    "name": "Grandmaster Vault Vault",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 30,
    "difficultyScore": 1032,
    "difficultyTier": "Grandmaster",
    "walls": [
      "......#.",
      "...##.#.",
      "........",
      "...#...#",
      "#....#..",
      ".#.#....",
      "#.......",
      ".......#"
    ],
    "words": [
      {
        "word": "STREAM",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 7
          },
          {
            "ch": "R",
            "x": 5,
            "y": 5
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 6
          },
          {
            "ch": "M",
            "x": 6,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "COSMOS",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "S",
            "x": 4,
            "y": 6
          },
          {
            "ch": "M",
            "x": 2,
            "y": 5
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "S",
            "x": 4,
            "y": 0
          }
        ],
        "best": 3
      },
      {
        "word": "FOREST",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 7
          },
          {
            "ch": "O",
            "x": 0,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 7,
            "y": 0
          },
          {
            "ch": "S",
            "x": 0,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 2
          }
        ],
        "best": 7
      },
      {
        "word": "SPRING",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 7
          },
          {
            "ch": "P",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 6
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 1,
            "y": 1
          },
          {
            "ch": "G",
            "x": 4,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "AURORA",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 0
          },
          {
            "ch": "U",
            "x": 0,
            "y": 3
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 6
          },
          {
            "ch": "A",
            "x": 5,
            "y": 7
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 99,
    "name": "Grandmaster Vault Mastery",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 22,
    "difficultyScore": 1037,
    "difficultyTier": "Grandmaster",
    "walls": [
      "#..####.",
      "#.......",
      "...#....",
      "#...##..",
      "........",
      "...#...#",
      "........",
      "........"
    ],
    "words": [
      {
        "word": "SHADOW",
        "cards": [
          {
            "ch": "S",
            "x": 7,
            "y": 4
          },
          {
            "ch": "H",
            "x": 0,
            "y": 6
          },
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "D",
            "x": 7,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 4
          },
          {
            "ch": "W",
            "x": 2,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "KNIGHT",
        "cards": [
          {
            "ch": "K",
            "x": 2,
            "y": 6
          },
          {
            "ch": "N",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 2,
            "y": 3
          },
          {
            "ch": "G",
            "x": 5,
            "y": 5
          },
          {
            "ch": "H",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 2,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "FOREST",
        "cards": [
          {
            "ch": "F",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          },
          {
            "ch": "S",
            "x": 2,
            "y": 6
          },
          {
            "ch": "T",
            "x": 1,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "WINTER",
        "cards": [
          {
            "ch": "W",
            "x": 6,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 1
          },
          {
            "ch": "N",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          }
        ],
        "best": 5
      },
      {
        "word": "SUMMER",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "U",
            "x": 1,
            "y": 5
          },
          {
            "ch": "M",
            "x": 3,
            "y": 4
          },
          {
            "ch": "M",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          }
        ],
        "best": 2
      }
    ]
  },
  {
    "id": 100,
    "name": "Grandmaster Vault Crest",
    "chapterId": 10,
    "chapterName": "Grandmaster Vault",
    "n": 8,
    "optimalMoves": 35,
    "difficultyScore": 1056,
    "difficultyTier": "Grandmaster",
    "walls": [
      ".#......",
      "..#....#",
      "#.#...#.",
      "#...#.##",
      "........",
      "..#.....",
      "........",
      ".....#.."
    ],
    "words": [
      {
        "word": "CASTLE",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 5
          },
          {
            "ch": "A",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 5
          },
          {
            "ch": "L",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 1,
            "y": 7
          }
        ],
        "best": 9
      },
      {
        "word": "SHADOW",
        "cards": [
          {
            "ch": "S",
            "x": 6,
            "y": 5
          },
          {
            "ch": "H",
            "x": 4,
            "y": 5
          },
          {
            "ch": "A",
            "x": 5,
            "y": 5
          },
          {
            "ch": "D",
            "x": 5,
            "y": 4
          },
          {
            "ch": "O",
            "x": 0,
            "y": 1
          },
          {
            "ch": "W",
            "x": 1,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "PLANET",
        "cards": [
          {
            "ch": "P",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 3,
            "y": 2
          },
          {
            "ch": "N",
            "x": 5,
            "y": 2
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          },
          {
            "ch": "T",
            "x": 0,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "SPIRIT",
        "cards": [
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "P",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 1,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "T",
            "x": 7,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "MIRROR",
        "cards": [
          {
            "ch": "M",
            "x": 5,
            "y": 2
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 6,
            "y": 5
          },
          {
            "ch": "R",
            "x": 7,
            "y": 6
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 101,
    "name": "Titan Enigma Path",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 30,
    "difficultyScore": 1150,
    "difficultyTier": "Mythic",
    "walls": [
      ".......#",
      ".#..##..",
      ".#...#..",
      ".#.#....",
      "##..#..#",
      "........",
      "........",
      ".....#.."
    ],
    "words": [
      {
        "word": "MONARCH",
        "cards": [
          {
            "ch": "M",
            "x": 1,
            "y": 6
          },
          {
            "ch": "O",
            "x": 1,
            "y": 7
          },
          {
            "ch": "N",
            "x": 6,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "C",
            "x": 2,
            "y": 5
          },
          {
            "ch": "H",
            "x": 7,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "ARCHWAY",
        "cards": [
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "R",
            "x": 3,
            "y": 0
          },
          {
            "ch": "C",
            "x": 6,
            "y": 1
          },
          {
            "ch": "H",
            "x": 4,
            "y": 0
          },
          {
            "ch": "W",
            "x": 2,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 6,
            "y": 6
          }
        ],
        "best": 4
      },
      {
        "word": "CUBICLE",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 4
          },
          {
            "ch": "U",
            "x": 3,
            "y": 1
          },
          {
            "ch": "B",
            "x": 6,
            "y": 7
          },
          {
            "ch": "I",
            "x": 6,
            "y": 4
          },
          {
            "ch": "C",
            "x": 4,
            "y": 7
          },
          {
            "ch": "L",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          }
        ],
        "best": 7
      },
      {
        "word": "ACROBAT",
        "cards": [
          {
            "ch": "A",
            "x": 3,
            "y": 0
          },
          {
            "ch": "C",
            "x": 6,
            "y": 7
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "B",
            "x": 3,
            "y": 7
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "COTTAGE",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          },
          {
            "ch": "T",
            "x": 7,
            "y": 6
          },
          {
            "ch": "A",
            "x": 5,
            "y": 4
          },
          {
            "ch": "G",
            "x": 2,
            "y": 5
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 102,
    "name": "Titan Enigma Entry",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 39,
    "difficultyScore": 1158,
    "difficultyTier": "Mythic",
    "walls": [
      ".......#",
      "#..#....",
      ".#......",
      ".......#",
      "....#...",
      ".#...#..",
      "......#.",
      ".####..."
    ],
    "words": [
      {
        "word": "ESSENCE",
        "cards": [
          {
            "ch": "E",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 0,
            "y": 3
          },
          {
            "ch": "S",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          },
          {
            "ch": "N",
            "x": 0,
            "y": 7
          },
          {
            "ch": "C",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          }
        ],
        "best": 10
      },
      {
        "word": "HOLIDAY",
        "cards": [
          {
            "ch": "H",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 4
          },
          {
            "ch": "L",
            "x": 2,
            "y": 3
          },
          {
            "ch": "I",
            "x": 0,
            "y": 2
          },
          {
            "ch": "D",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "CHARIOT",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 3
          },
          {
            "ch": "H",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 7,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "T",
            "x": 2,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "CHANNEL",
        "cards": [
          {
            "ch": "C",
            "x": 7,
            "y": 2
          },
          {
            "ch": "H",
            "x": 3,
            "y": 5
          },
          {
            "ch": "A",
            "x": 7,
            "y": 1
          },
          {
            "ch": "N",
            "x": 6,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          },
          {
            "ch": "L",
            "x": 0,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "HEATHER",
        "cards": [
          {
            "ch": "H",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          },
          {
            "ch": "H",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 7,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 103,
    "name": "Titan Enigma Gate",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 32,
    "difficultyScore": 1164,
    "difficultyTier": "Mythic",
    "walls": [
      "#...#..#",
      "...#...#",
      "....#...",
      "....##..",
      ".....#..",
      "..#.#...",
      ".#.#....",
      "........"
    ],
    "words": [
      {
        "word": "DAYPACK",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 6
          },
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 1
          },
          {
            "ch": "P",
            "x": 6,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 4
          },
          {
            "ch": "C",
            "x": 0,
            "y": 7
          },
          {
            "ch": "K",
            "x": 3,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "CATALOG",
        "cards": [
          {
            "ch": "C",
            "x": 7,
            "y": 5
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "T",
            "x": 7,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 7
          },
          {
            "ch": "L",
            "x": 7,
            "y": 2
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "G",
            "x": 0,
            "y": 6
          }
        ],
        "best": 3
      },
      {
        "word": "ACCOUNT",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "C",
            "x": 5,
            "y": 7
          },
          {
            "ch": "C",
            "x": 2,
            "y": 3
          },
          {
            "ch": "O",
            "x": 0,
            "y": 7
          },
          {
            "ch": "U",
            "x": 1,
            "y": 1
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          },
          {
            "ch": "T",
            "x": 4,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "BICYCLE",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 5
          },
          {
            "ch": "I",
            "x": 3,
            "y": 2
          },
          {
            "ch": "C",
            "x": 6,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 5
          },
          {
            "ch": "C",
            "x": 6,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "COTTAGE",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 6
          },
          {
            "ch": "O",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 6
          },
          {
            "ch": "T",
            "x": 7,
            "y": 2
          },
          {
            "ch": "A",
            "x": 6,
            "y": 7
          },
          {
            "ch": "G",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 104,
    "name": "Titan Enigma Chamber",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 29,
    "difficultyScore": 1168,
    "difficultyTier": "Mythic",
    "walls": [
      ".#.....#",
      "#.......",
      ".#.####.",
      "........",
      "..#.....",
      "#.#.....",
      "........",
      ".#...#.."
    ],
    "words": [
      {
        "word": "EMOTION",
        "cards": [
          {
            "ch": "E",
            "x": 5,
            "y": 5
          },
          {
            "ch": "M",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 6
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "N",
            "x": 4,
            "y": 7
          }
        ],
        "best": 3
      },
      {
        "word": "ACADEMY",
        "cards": [
          {
            "ch": "A",
            "x": 3,
            "y": 5
          },
          {
            "ch": "C",
            "x": 6,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 6
          },
          {
            "ch": "D",
            "x": 4,
            "y": 6
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "M",
            "x": 1,
            "y": 3
          },
          {
            "ch": "Y",
            "x": 1,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "AIRPORT",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 7,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 6
          },
          {
            "ch": "P",
            "x": 1,
            "y": 3
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          },
          {
            "ch": "T",
            "x": 2,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "BUILDER",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 4
          },
          {
            "ch": "U",
            "x": 4,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 6
          },
          {
            "ch": "L",
            "x": 2,
            "y": 6
          },
          {
            "ch": "D",
            "x": 0,
            "y": 7
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 7,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "BOULDER",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 3
          },
          {
            "ch": "U",
            "x": 7,
            "y": 7
          },
          {
            "ch": "L",
            "x": 6,
            "y": 3
          },
          {
            "ch": "D",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 7,
            "y": 6
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 105,
    "name": "Titan Enigma Echo",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 28,
    "difficultyScore": 1186,
    "difficultyTier": "Mythic",
    "walls": [
      ".....#..",
      "..#...#.",
      ".....#..",
      "...#....",
      "...#....",
      "..##....",
      ".##...#.",
      ".##....."
    ],
    "words": [
      {
        "word": "FLOWING",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 6
          },
          {
            "ch": "L",
            "x": 5,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 1
          },
          {
            "ch": "W",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 7
          },
          {
            "ch": "N",
            "x": 0,
            "y": 2
          },
          {
            "ch": "G",
            "x": 5,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "BOULDER",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 2
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "U",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 5,
            "y": 5
          },
          {
            "ch": "D",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 3,
            "y": 6
          },
          {
            "ch": "R",
            "x": 7,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "DAYPACK",
        "cards": [
          {
            "ch": "D",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 3
          },
          {
            "ch": "P",
            "x": 3,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "C",
            "x": 0,
            "y": 3
          },
          {
            "ch": "K",
            "x": 0,
            "y": 7
          }
        ],
        "best": 3
      },
      {
        "word": "CABINET",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 4
          },
          {
            "ch": "A",
            "x": 7,
            "y": 0
          },
          {
            "ch": "B",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "N",
            "x": 5,
            "y": 7
          },
          {
            "ch": "E",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "AVENGER",
        "cards": [
          {
            "ch": "A",
            "x": 7,
            "y": 0
          },
          {
            "ch": "V",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 7,
            "y": 5
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          },
          {
            "ch": "G",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 7
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 106,
    "name": "Titan Enigma Orbit",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 36,
    "difficultyScore": 1192,
    "difficultyTier": "Mythic",
    "walls": [
      "##.#..#.",
      ".......#",
      ".....#..",
      "...#...#",
      "#.......",
      "........",
      "..##..#.",
      "....#..."
    ],
    "words": [
      {
        "word": "FRIGATE",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 7
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "I",
            "x": 2,
            "y": 5
          },
          {
            "ch": "G",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 1,
            "y": 7
          },
          {
            "ch": "T",
            "x": 6,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          }
        ],
        "best": 10
      },
      {
        "word": "AMATEUR",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "M",
            "x": 3,
            "y": 7
          },
          {
            "ch": "A",
            "x": 0,
            "y": 7
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          },
          {
            "ch": "E",
            "x": 1,
            "y": 5
          },
          {
            "ch": "U",
            "x": 5,
            "y": 7
          },
          {
            "ch": "R",
            "x": 7,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "CIRCUIT",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 5
          },
          {
            "ch": "I",
            "x": 5,
            "y": 0
          },
          {
            "ch": "R",
            "x": 7,
            "y": 7
          },
          {
            "ch": "C",
            "x": 4,
            "y": 2
          },
          {
            "ch": "U",
            "x": 5,
            "y": 4
          },
          {
            "ch": "I",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 1
          }
        ],
        "best": 9
      },
      {
        "word": "BANQUET",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 2
          },
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "N",
            "x": 5,
            "y": 3
          },
          {
            "ch": "Q",
            "x": 4,
            "y": 3
          },
          {
            "ch": "U",
            "x": 6,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 5,
            "y": 1
          }
        ],
        "best": 5
      },
      {
        "word": "ANTIQUE",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "Q",
            "x": 1,
            "y": 3
          },
          {
            "ch": "U",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 107,
    "name": "Titan Enigma Vault",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 37,
    "difficultyScore": 1214,
    "difficultyTier": "Mythic",
    "walls": [
      "...#...#",
      ".#..#...",
      "........",
      "#......#",
      "....#...",
      "#...#.##",
      "#.......",
      "..#....."
    ],
    "words": [
      {
        "word": "ESSENCE",
        "cards": [
          {
            "ch": "E",
            "x": 6,
            "y": 6
          },
          {
            "ch": "S",
            "x": 5,
            "y": 6
          },
          {
            "ch": "S",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 6
          },
          {
            "ch": "N",
            "x": 3,
            "y": 3
          },
          {
            "ch": "C",
            "x": 6,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 7
          }
        ],
        "best": 5
      },
      {
        "word": "JUMPING",
        "cards": [
          {
            "ch": "J",
            "x": 2,
            "y": 6
          },
          {
            "ch": "U",
            "x": 4,
            "y": 6
          },
          {
            "ch": "M",
            "x": 6,
            "y": 0
          },
          {
            "ch": "P",
            "x": 7,
            "y": 7
          },
          {
            "ch": "I",
            "x": 3,
            "y": 1
          },
          {
            "ch": "N",
            "x": 2,
            "y": 1
          },
          {
            "ch": "G",
            "x": 4,
            "y": 2
          }
        ],
        "best": 9
      },
      {
        "word": "FULFILL",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 7
          },
          {
            "ch": "U",
            "x": 5,
            "y": 5
          },
          {
            "ch": "L",
            "x": 1,
            "y": 3
          },
          {
            "ch": "F",
            "x": 3,
            "y": 4
          },
          {
            "ch": "I",
            "x": 2,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 6
          },
          {
            "ch": "L",
            "x": 4,
            "y": 7
          }
        ],
        "best": 9
      },
      {
        "word": "BLOSSOM",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 6
          },
          {
            "ch": "L",
            "x": 6,
            "y": 7
          },
          {
            "ch": "O",
            "x": 6,
            "y": 1
          },
          {
            "ch": "S",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 7,
            "y": 2
          },
          {
            "ch": "O",
            "x": 2,
            "y": 5
          },
          {
            "ch": "M",
            "x": 1,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "BOULDER",
        "cards": [
          {
            "ch": "B",
            "x": 5,
            "y": 3
          },
          {
            "ch": "O",
            "x": 0,
            "y": 1
          },
          {
            "ch": "U",
            "x": 1,
            "y": 2
          },
          {
            "ch": "L",
            "x": 1,
            "y": 4
          },
          {
            "ch": "D",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 0,
            "y": 0
          },
          {
            "ch": "R",
            "x": 4,
            "y": 6
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 108,
    "name": "Titan Enigma Pillar",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 34,
    "difficultyScore": 1218,
    "difficultyTier": "Mythic",
    "walls": [
      "........",
      "..#.#...",
      ".#.#...#",
      ".#......",
      ".#...#.#",
      "........",
      ".#....##",
      ".......#"
    ],
    "words": [
      {
        "word": "ARTISAN",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 5
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 4,
            "y": 0
          },
          {
            "ch": "I",
            "x": 0,
            "y": 2
          },
          {
            "ch": "S",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "N",
            "x": 7,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "CARAMEL",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 6
          },
          {
            "ch": "M",
            "x": 5,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 0,
            "y": 1
          }
        ],
        "best": 9
      },
      {
        "word": "BLANKET",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 7
          },
          {
            "ch": "L",
            "x": 5,
            "y": 1
          },
          {
            "ch": "A",
            "x": 5,
            "y": 5
          },
          {
            "ch": "N",
            "x": 2,
            "y": 5
          },
          {
            "ch": "K",
            "x": 5,
            "y": 7
          },
          {
            "ch": "E",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 3,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "ACCOUNT",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "C",
            "x": 4,
            "y": 5
          },
          {
            "ch": "C",
            "x": 2,
            "y": 0
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "U",
            "x": 1,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 7
          }
        ],
        "best": 7
      },
      {
        "word": "FITNESS",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 2,
            "y": 5
          },
          {
            "ch": "T",
            "x": 7,
            "y": 0
          },
          {
            "ch": "N",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "S",
            "x": 1,
            "y": 7
          },
          {
            "ch": "S",
            "x": 0,
            "y": 7
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 109,
    "name": "Titan Enigma Crest",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 30,
    "difficultyScore": 1220,
    "difficultyTier": "Mythic",
    "walls": [
      "#.#.....",
      "#..#..#.",
      ".#..#...",
      "........",
      ".....#..",
      "#....#..",
      "..#..#..",
      "..#....."
    ],
    "words": [
      {
        "word": "EMOTION",
        "cards": [
          {
            "ch": "E",
            "x": 7,
            "y": 3
          },
          {
            "ch": "M",
            "x": 3,
            "y": 0
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 7
          },
          {
            "ch": "N",
            "x": 4,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "ACADEMY",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 0
          },
          {
            "ch": "C",
            "x": 5,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 2
          },
          {
            "ch": "D",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 1
          },
          {
            "ch": "M",
            "x": 3,
            "y": 7
          },
          {
            "ch": "Y",
            "x": 1,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "BLOSSOM",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 0
          },
          {
            "ch": "L",
            "x": 1,
            "y": 4
          },
          {
            "ch": "O",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 5,
            "y": 2
          },
          {
            "ch": "S",
            "x": 1,
            "y": 6
          },
          {
            "ch": "O",
            "x": 6,
            "y": 2
          },
          {
            "ch": "M",
            "x": 6,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "GALLERY",
        "cards": [
          {
            "ch": "G",
            "x": 4,
            "y": 7
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "L",
            "x": 4,
            "y": 1
          },
          {
            "ch": "L",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          },
          {
            "ch": "R",
            "x": 7,
            "y": 5
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "CATALOG",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 1,
            "y": 4
          },
          {
            "ch": "A",
            "x": 7,
            "y": 7
          },
          {
            "ch": "L",
            "x": 6,
            "y": 2
          },
          {
            "ch": "O",
            "x": 3,
            "y": 7
          },
          {
            "ch": "G",
            "x": 4,
            "y": 0
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 110,
    "name": "Titan Enigma Mastery",
    "chapterId": 11,
    "chapterName": "Titan Enigma",
    "n": 8,
    "optimalMoves": 37,
    "difficultyScore": 1244,
    "difficultyTier": "Mythic",
    "walls": [
      "........",
      "........",
      ".#.#.##.",
      "#.#.....",
      "#....#..",
      "#.....#.",
      ".#......",
      "...#..#."
    ],
    "words": [
      {
        "word": "DOLPHIN",
        "cards": [
          {
            "ch": "D",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 4,
            "y": 5
          },
          {
            "ch": "L",
            "x": 3,
            "y": 6
          },
          {
            "ch": "P",
            "x": 7,
            "y": 1
          },
          {
            "ch": "H",
            "x": 0,
            "y": 1
          },
          {
            "ch": "I",
            "x": 0,
            "y": 0
          },
          {
            "ch": "N",
            "x": 3,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "HARVEST",
        "cards": [
          {
            "ch": "H",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 5
          },
          {
            "ch": "R",
            "x": 6,
            "y": 4
          },
          {
            "ch": "V",
            "x": 2,
            "y": 6
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          },
          {
            "ch": "S",
            "x": 0,
            "y": 2
          },
          {
            "ch": "T",
            "x": 3,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "BEDROOM",
        "cards": [
          {
            "ch": "B",
            "x": 7,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          },
          {
            "ch": "D",
            "x": 7,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "O",
            "x": 7,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 4
          },
          {
            "ch": "M",
            "x": 1,
            "y": 7
          }
        ],
        "best": 10
      },
      {
        "word": "CATALOG",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 1
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "L",
            "x": 2,
            "y": 5
          },
          {
            "ch": "O",
            "x": 4,
            "y": 4
          },
          {
            "ch": "G",
            "x": 4,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "BANDAGE",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 0
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "N",
            "x": 6,
            "y": 1
          },
          {
            "ch": "D",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "G",
            "x": 7,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 111,
    "name": "Labyrinth of Echoes Gate",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 34,
    "difficultyScore": 1288,
    "difficultyTier": "Mythic",
    "walls": [
      "#.#...#.",
      "........",
      "...#.#..",
      ".#.##...",
      ".....##.",
      ".#...##.",
      "....#...",
      "#......."
    ],
    "words": [
      {
        "word": "MAMMOTH",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 7
          },
          {
            "ch": "M",
            "x": 2,
            "y": 6
          },
          {
            "ch": "M",
            "x": 2,
            "y": 7
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "T",
            "x": 7,
            "y": 4
          },
          {
            "ch": "H",
            "x": 7,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "JOURNEY",
        "cards": [
          {
            "ch": "J",
            "x": 2,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 5
          },
          {
            "ch": "U",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 7,
            "y": 5
          },
          {
            "ch": "N",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 7
          }
        ],
        "best": 7
      },
      {
        "word": "IMAGINE",
        "cards": [
          {
            "ch": "I",
            "x": 0,
            "y": 3
          },
          {
            "ch": "M",
            "x": 0,
            "y": 4
          },
          {
            "ch": "A",
            "x": 5,
            "y": 0
          },
          {
            "ch": "G",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 2,
            "y": 4
          },
          {
            "ch": "N",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "MEMBERS",
        "cards": [
          {
            "ch": "M",
            "x": 6,
            "y": 6
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          },
          {
            "ch": "M",
            "x": 2,
            "y": 7
          },
          {
            "ch": "B",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 3,
            "y": 0
          },
          {
            "ch": "S",
            "x": 2,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "FRIGATE",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 7
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "G",
            "x": 3,
            "y": 5
          },
          {
            "ch": "A",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 1,
            "y": 1
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 112,
    "name": "Labyrinth of Echoes Chamber",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 29,
    "difficultyScore": 1288,
    "difficultyTier": "Mythic",
    "walls": [
      ".#.#....",
      "........",
      "....#.#.",
      "..#..##.",
      "..#.....",
      "......##",
      "#.#..#.#",
      "#......."
    ],
    "words": [
      {
        "word": "ACROBAT",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "C",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 3,
            "y": 6
          },
          {
            "ch": "O",
            "x": 1,
            "y": 6
          },
          {
            "ch": "B",
            "x": 4,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 7
          },
          {
            "ch": "T",
            "x": 6,
            "y": 7
          }
        ],
        "best": 4
      },
      {
        "word": "COURAGE",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "U",
            "x": 5,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "G",
            "x": 7,
            "y": 7
          },
          {
            "ch": "E",
            "x": 3,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "ALGEBRA",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "L",
            "x": 6,
            "y": 0
          },
          {
            "ch": "G",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "B",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "ACHIEVE",
        "cards": [
          {
            "ch": "A",
            "x": 7,
            "y": 1
          },
          {
            "ch": "C",
            "x": 2,
            "y": 5
          },
          {
            "ch": "H",
            "x": 5,
            "y": 0
          },
          {
            "ch": "I",
            "x": 4,
            "y": 6
          },
          {
            "ch": "E",
            "x": 1,
            "y": 5
          },
          {
            "ch": "V",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "DIAMOND",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 2
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 0
          },
          {
            "ch": "M",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 1
          },
          {
            "ch": "N",
            "x": 5,
            "y": 7
          },
          {
            "ch": "D",
            "x": 0,
            "y": 4
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 113,
    "name": "Labyrinth of Echoes Entry",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 48,
    "difficultyScore": 1296,
    "difficultyTier": "Mythic",
    "walls": [
      "...#....",
      ".#......",
      ".....#.#",
      "#.....##",
      "##......",
      "...##...",
      ".....#.#",
      "..#...#."
    ],
    "words": [
      {
        "word": "ISLANDS",
        "cards": [
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "S",
            "x": 6,
            "y": 5
          },
          {
            "ch": "L",
            "x": 5,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 1
          },
          {
            "ch": "N",
            "x": 4,
            "y": 2
          },
          {
            "ch": "D",
            "x": 4,
            "y": 7
          },
          {
            "ch": "S",
            "x": 1,
            "y": 7
          }
        ],
        "best": 10
      },
      {
        "word": "MISSION",
        "cards": [
          {
            "ch": "M",
            "x": 7,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 1
          },
          {
            "ch": "S",
            "x": 1,
            "y": 3
          },
          {
            "ch": "S",
            "x": 5,
            "y": 5
          },
          {
            "ch": "I",
            "x": 3,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 4
          },
          {
            "ch": "N",
            "x": 1,
            "y": 5
          }
        ],
        "best": 9
      },
      {
        "word": "LEOPARD",
        "cards": [
          {
            "ch": "L",
            "x": 3,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 5
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "P",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 4
          },
          {
            "ch": "R",
            "x": 6,
            "y": 4
          },
          {
            "ch": "D",
            "x": 3,
            "y": 1
          }
        ],
        "best": 10
      },
      {
        "word": "FRIGATE",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 0
          },
          {
            "ch": "I",
            "x": 6,
            "y": 5
          },
          {
            "ch": "G",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 6
          },
          {
            "ch": "E",
            "x": 1,
            "y": 6
          }
        ],
        "best": 10
      },
      {
        "word": "HABITAT",
        "cards": [
          {
            "ch": "H",
            "x": 2,
            "y": 0
          },
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "B",
            "x": 1,
            "y": 6
          },
          {
            "ch": "I",
            "x": 6,
            "y": 5
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 6
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 114,
    "name": "Labyrinth of Echoes Path",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 43,
    "difficultyScore": 1296,
    "difficultyTier": "Mythic",
    "walls": [
      "........",
      "...##.#.",
      ".#......",
      "##.#...#",
      "....##..",
      "..#.....",
      "...#.#..",
      "##......"
    ],
    "words": [
      {
        "word": "BUILDER",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 7
          },
          {
            "ch": "U",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "L",
            "x": 5,
            "y": 1
          },
          {
            "ch": "D",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 1,
            "y": 1
          },
          {
            "ch": "R",
            "x": 7,
            "y": 6
          }
        ],
        "best": 9
      },
      {
        "word": "FEATURE",
        "cards": [
          {
            "ch": "F",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 7,
            "y": 5
          },
          {
            "ch": "A",
            "x": 0,
            "y": 6
          },
          {
            "ch": "T",
            "x": 3,
            "y": 5
          },
          {
            "ch": "U",
            "x": 7,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "CARAMEL",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "M",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "L",
            "x": 5,
            "y": 5
          }
        ],
        "best": 10
      },
      {
        "word": "FULFILL",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 4
          },
          {
            "ch": "U",
            "x": 6,
            "y": 5
          },
          {
            "ch": "L",
            "x": 3,
            "y": 2
          },
          {
            "ch": "F",
            "x": 4,
            "y": 7
          },
          {
            "ch": "I",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 7,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "BLANKET",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 2
          },
          {
            "ch": "L",
            "x": 5,
            "y": 7
          },
          {
            "ch": "A",
            "x": 3,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 2
          },
          {
            "ch": "K",
            "x": 4,
            "y": 5
          },
          {
            "ch": "E",
            "x": 7,
            "y": 0
          },
          {
            "ch": "T",
            "x": 2,
            "y": 6
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 115,
    "name": "Labyrinth of Echoes Orbit",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 37,
    "difficultyScore": 1314,
    "difficultyTier": "Mythic",
    "walls": [
      "........",
      ".#.#.##.",
      "...#..#.",
      ".....#..",
      "..#..#..",
      "...##...",
      ".#..#...",
      ".....##."
    ],
    "words": [
      {
        "word": "FIGHTER",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 7
          },
          {
            "ch": "I",
            "x": 6,
            "y": 6
          },
          {
            "ch": "G",
            "x": 7,
            "y": 0
          },
          {
            "ch": "H",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 4,
            "y": 7
          },
          {
            "ch": "E",
            "x": 1,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 7
          }
        ],
        "best": 5
      },
      {
        "word": "MACHINE",
        "cards": [
          {
            "ch": "M",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "H",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 6,
            "y": 6
          },
          {
            "ch": "N",
            "x": 3,
            "y": 7
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "HUNTING",
        "cards": [
          {
            "ch": "H",
            "x": 4,
            "y": 4
          },
          {
            "ch": "U",
            "x": 7,
            "y": 7
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          },
          {
            "ch": "T",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 2,
            "y": 7
          },
          {
            "ch": "N",
            "x": 4,
            "y": 7
          },
          {
            "ch": "G",
            "x": 2,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "HOLIDAY",
        "cards": [
          {
            "ch": "H",
            "x": 7,
            "y": 7
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 5,
            "y": 2
          },
          {
            "ch": "D",
            "x": 2,
            "y": 1
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 0,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "MONITOR",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 0
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "N",
            "x": 0,
            "y": 6
          },
          {
            "ch": "I",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 1,
            "y": 7
          },
          {
            "ch": "O",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 4,
            "y": 2
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 116,
    "name": "Labyrinth of Echoes Vault",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 36,
    "difficultyScore": 1332,
    "difficultyTier": "Mythic",
    "walls": [
      ".#......",
      "#..#.##.",
      "........",
      "...#....",
      "..#...#.",
      ".#...##.",
      "#..#....",
      ".##....."
    ],
    "words": [
      {
        "word": "MAJESTY",
        "cards": [
          {
            "ch": "M",
            "x": 7,
            "y": 4
          },
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "J",
            "x": 7,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "S",
            "x": 2,
            "y": 5
          },
          {
            "ch": "T",
            "x": 4,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 4,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "CELLIST",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "L",
            "x": 2,
            "y": 0
          },
          {
            "ch": "L",
            "x": 7,
            "y": 6
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "CHAMBER",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 6
          },
          {
            "ch": "H",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 0
          },
          {
            "ch": "M",
            "x": 1,
            "y": 1
          },
          {
            "ch": "B",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 0
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "BANQUET",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 7
          },
          {
            "ch": "N",
            "x": 1,
            "y": 3
          },
          {
            "ch": "Q",
            "x": 5,
            "y": 0
          },
          {
            "ch": "U",
            "x": 5,
            "y": 7
          },
          {
            "ch": "E",
            "x": 7,
            "y": 7
          },
          {
            "ch": "T",
            "x": 4,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "BLOSSOM",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 1
          },
          {
            "ch": "L",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "S",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 5,
            "y": 3
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "M",
            "x": 4,
            "y": 7
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 117,
    "name": "Labyrinth of Echoes Echo",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 44,
    "difficultyScore": 1338,
    "difficultyTier": "Mythic",
    "walls": [
      "..##....",
      "#....##.",
      ".......#",
      "..#....#",
      "......##",
      ".......#",
      "#..#..##",
      "........"
    ],
    "words": [
      {
        "word": "INSIGHT",
        "cards": [
          {
            "ch": "I",
            "x": 7,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 0
          },
          {
            "ch": "I",
            "x": 1,
            "y": 5
          },
          {
            "ch": "G",
            "x": 3,
            "y": 4
          },
          {
            "ch": "H",
            "x": 6,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 7
          }
        ],
        "best": 9
      },
      {
        "word": "COURAGE",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 2
          },
          {
            "ch": "O",
            "x": 7,
            "y": 0
          },
          {
            "ch": "U",
            "x": 3,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 7
          },
          {
            "ch": "G",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          }
        ],
        "best": 10
      },
      {
        "word": "CENTURY",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 7
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "N",
            "x": 1,
            "y": 6
          },
          {
            "ch": "T",
            "x": 3,
            "y": 3
          },
          {
            "ch": "U",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 5,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 4
          }
        ],
        "best": 10
      },
      {
        "word": "CRICKET",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          },
          {
            "ch": "I",
            "x": 5,
            "y": 2
          },
          {
            "ch": "C",
            "x": 1,
            "y": 6
          },
          {
            "ch": "K",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 0
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "DENTIST",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "N",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          },
          {
            "ch": "I",
            "x": 5,
            "y": 0
          },
          {
            "ch": "S",
            "x": 2,
            "y": 1
          },
          {
            "ch": "T",
            "x": 5,
            "y": 5
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 118,
    "name": "Labyrinth of Echoes Pillar",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 34,
    "difficultyScore": 1338,
    "difficultyTier": "Mythic",
    "walls": [
      ".#......",
      "..##.#.#",
      ".#......",
      "..##....",
      ".....#.#",
      "..#..#..",
      "#.##....",
      "........"
    ],
    "words": [
      {
        "word": "CURATOR",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 0
          },
          {
            "ch": "U",
            "x": 1,
            "y": 1
          },
          {
            "ch": "R",
            "x": 6,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "T",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 5,
            "y": 3
          },
          {
            "ch": "R",
            "x": 6,
            "y": 0
          }
        ],
        "best": 9
      },
      {
        "word": "MAJESTY",
        "cards": [
          {
            "ch": "M",
            "x": 7,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "J",
            "x": 6,
            "y": 1
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          },
          {
            "ch": "S",
            "x": 1,
            "y": 7
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 4,
            "y": 6
          }
        ],
        "best": 4
      },
      {
        "word": "AIRPORT",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 6
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "P",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 7,
            "y": 0
          },
          {
            "ch": "R",
            "x": 7,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "BIOLOGY",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 5,
            "y": 3
          },
          {
            "ch": "O",
            "x": 2,
            "y": 2
          },
          {
            "ch": "L",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 7,
            "y": 7
          },
          {
            "ch": "G",
            "x": 5,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 4,
            "y": 7
          }
        ],
        "best": 7
      },
      {
        "word": "COURAGE",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 0
          },
          {
            "ch": "O",
            "x": 7,
            "y": 0
          },
          {
            "ch": "U",
            "x": 6,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 4
          },
          {
            "ch": "A",
            "x": 4,
            "y": 2
          },
          {
            "ch": "G",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 5
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 119,
    "name": "Labyrinth of Echoes Crest",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 31,
    "difficultyScore": 1342,
    "difficultyTier": "Mythic",
    "walls": [
      "...#..##",
      "..#...##",
      "....#...",
      "#.......",
      "..#.....",
      "..###...",
      "........",
      "...#.#.#"
    ],
    "words": [
      {
        "word": "GARLAND",
        "cards": [
          {
            "ch": "G",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "R",
            "x": 3,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "N",
            "x": 0,
            "y": 5
          },
          {
            "ch": "D",
            "x": 7,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "AIRPORT",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          },
          {
            "ch": "P",
            "x": 7,
            "y": 2
          },
          {
            "ch": "O",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "T",
            "x": 1,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "KICKOFF",
        "cards": [
          {
            "ch": "K",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 7,
            "y": 6
          },
          {
            "ch": "C",
            "x": 1,
            "y": 5
          },
          {
            "ch": "K",
            "x": 2,
            "y": 7
          },
          {
            "ch": "O",
            "x": 4,
            "y": 1
          },
          {
            "ch": "F",
            "x": 0,
            "y": 5
          },
          {
            "ch": "F",
            "x": 6,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "ANALYST",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 7
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          },
          {
            "ch": "A",
            "x": 4,
            "y": 7
          },
          {
            "ch": "L",
            "x": 5,
            "y": 3
          },
          {
            "ch": "Y",
            "x": 6,
            "y": 2
          },
          {
            "ch": "S",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 3,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "MUSTARD",
        "cards": [
          {
            "ch": "M",
            "x": 5,
            "y": 1
          },
          {
            "ch": "U",
            "x": 2,
            "y": 7
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "T",
            "x": 0,
            "y": 5
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          },
          {
            "ch": "D",
            "x": 7,
            "y": 4
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 120,
    "name": "Labyrinth of Echoes Mastery",
    "chapterId": 12,
    "chapterName": "Labyrinth of Echoes",
    "n": 8,
    "optimalMoves": 41,
    "difficultyScore": 1372,
    "difficultyTier": "Mythic",
    "walls": [
      "........",
      "..#.....",
      "..##....",
      "#...##.#",
      "..#.....",
      "....#...",
      "#...#..#",
      "..#.##.."
    ],
    "words": [
      {
        "word": "KNIGHTS",
        "cards": [
          {
            "ch": "K",
            "x": 7,
            "y": 7
          },
          {
            "ch": "N",
            "x": 7,
            "y": 5
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "G",
            "x": 5,
            "y": 6
          },
          {
            "ch": "H",
            "x": 3,
            "y": 7
          },
          {
            "ch": "T",
            "x": 1,
            "y": 7
          },
          {
            "ch": "S",
            "x": 1,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "ACHIEVE",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "C",
            "x": 5,
            "y": 6
          },
          {
            "ch": "H",
            "x": 7,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 6
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          },
          {
            "ch": "V",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "ACCOUNT",
        "cards": [
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "C",
            "x": 6,
            "y": 4
          },
          {
            "ch": "C",
            "x": 0,
            "y": 0
          },
          {
            "ch": "O",
            "x": 7,
            "y": 0
          },
          {
            "ch": "U",
            "x": 1,
            "y": 4
          },
          {
            "ch": "N",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 1,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "AMPLIFY",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 7
          },
          {
            "ch": "M",
            "x": 6,
            "y": 3
          },
          {
            "ch": "P",
            "x": 2,
            "y": 5
          },
          {
            "ch": "L",
            "x": 6,
            "y": 0
          },
          {
            "ch": "I",
            "x": 5,
            "y": 6
          },
          {
            "ch": "F",
            "x": 6,
            "y": 5
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 7
          }
        ],
        "best": 10
      },
      {
        "word": "CHANNEL",
        "cards": [
          {
            "ch": "C",
            "x": 7,
            "y": 2
          },
          {
            "ch": "H",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "N",
            "x": 2,
            "y": 0
          },
          {
            "ch": "N",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 1,
            "y": 6
          },
          {
            "ch": "L",
            "x": 5,
            "y": 1
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 121,
    "name": "Singularity Matrix Entry",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 49,
    "difficultyScore": 1418,
    "difficultyTier": "Legendary",
    "walls": [
      "......#.",
      "#.......",
      "..#.....",
      "..#...#.",
      ".......#",
      "#.#....#",
      "#....#.#",
      "#..##..#"
    ],
    "words": [
      {
        "word": "AIRPORT",
        "cards": [
          {
            "ch": "A",
            "x": 7,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "P",
            "x": 5,
            "y": 0
          },
          {
            "ch": "O",
            "x": 1,
            "y": 7
          },
          {
            "ch": "R",
            "x": 1,
            "y": 4
          },
          {
            "ch": "T",
            "x": 5,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "CENTURY",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 5,
            "y": 5
          },
          {
            "ch": "N",
            "x": 7,
            "y": 1
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          },
          {
            "ch": "U",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 6,
            "y": 4
          }
        ],
        "best": 10
      },
      {
        "word": "AMATEUR",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 5
          },
          {
            "ch": "M",
            "x": 5,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 5
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "U",
            "x": 5,
            "y": 7
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "BURRITO",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 1
          },
          {
            "ch": "U",
            "x": 5,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 6,
            "y": 7
          },
          {
            "ch": "I",
            "x": 2,
            "y": 4
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          },
          {
            "ch": "O",
            "x": 3,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "FARMING",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          },
          {
            "ch": "M",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 4
          },
          {
            "ch": "G",
            "x": 2,
            "y": 7
          }
        ],
        "best": 10
      },
      {
        "word": "INITIAL",
        "cards": [
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "T",
            "x": 1,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 1
          },
          {
            "ch": "A",
            "x": 0,
            "y": 3
          },
          {
            "ch": "L",
            "x": 5,
            "y": 3
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 122,
    "name": "Singularity Matrix Gate",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 37,
    "difficultyScore": 1418,
    "difficultyTier": "Legendary",
    "walls": [
      "..##..#.",
      "......#.",
      ".#.#..##",
      "##.##...",
      "....#.#.",
      "...#....",
      "........",
      "..#....."
    ],
    "words": [
      {
        "word": "CENTURY",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 3,
            "y": 6
          },
          {
            "ch": "N",
            "x": 6,
            "y": 3
          },
          {
            "ch": "T",
            "x": 2,
            "y": 3
          },
          {
            "ch": "U",
            "x": 7,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 2,
            "y": 1
          }
        ],
        "best": 9
      },
      {
        "word": "FRAGILE",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 7
          },
          {
            "ch": "R",
            "x": 4,
            "y": 5
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          },
          {
            "ch": "G",
            "x": 7,
            "y": 3
          },
          {
            "ch": "I",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 1,
            "y": 7
          }
        ],
        "best": 5
      },
      {
        "word": "ARTISAN",
        "cards": [
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 2
          },
          {
            "ch": "T",
            "x": 5,
            "y": 7
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 5,
            "y": 0
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "N",
            "x": 3,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "CAMPING",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "M",
            "x": 0,
            "y": 5
          },
          {
            "ch": "P",
            "x": 5,
            "y": 4
          },
          {
            "ch": "I",
            "x": 5,
            "y": 1
          },
          {
            "ch": "N",
            "x": 2,
            "y": 1
          },
          {
            "ch": "G",
            "x": 4,
            "y": 1
          }
        ],
        "best": 3
      },
      {
        "word": "CLASSIC",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 2
          },
          {
            "ch": "L",
            "x": 5,
            "y": 5
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "C",
            "x": 6,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "CARAMEL",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 6
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 6
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          },
          {
            "ch": "M",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 5
          },
          {
            "ch": "L",
            "x": 2,
            "y": 3
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 123,
    "name": "Singularity Matrix Path",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 49,
    "difficultyScore": 1430,
    "difficultyTier": "Legendary",
    "walls": [
      "#.......",
      ".##.....",
      "......##",
      "#...#..#",
      "..#..#..",
      "....##.#",
      "........",
      ".###...."
    ],
    "words": [
      {
        "word": "LANTERN",
        "cards": [
          {
            "ch": "L",
            "x": 6,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 3
          },
          {
            "ch": "T",
            "x": 0,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 3,
            "y": 1
          },
          {
            "ch": "N",
            "x": 4,
            "y": 7
          }
        ],
        "best": 9
      },
      {
        "word": "HAMSTER",
        "cards": [
          {
            "ch": "H",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 2
          },
          {
            "ch": "M",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 4,
            "y": 7
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "ICEBERG",
        "cards": [
          {
            "ch": "I",
            "x": 4,
            "y": 2
          },
          {
            "ch": "C",
            "x": 6,
            "y": 6
          },
          {
            "ch": "E",
            "x": 0,
            "y": 7
          },
          {
            "ch": "B",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "G",
            "x": 3,
            "y": 0
          }
        ],
        "best": 9
      },
      {
        "word": "IMAGINE",
        "cards": [
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "M",
            "x": 2,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 2
          },
          {
            "ch": "G",
            "x": 7,
            "y": 0
          },
          {
            "ch": "I",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 1,
            "y": 5
          },
          {
            "ch": "E",
            "x": 7,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "GLACIER",
        "cards": [
          {
            "ch": "G",
            "x": 5,
            "y": 1
          },
          {
            "ch": "L",
            "x": 2,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 5
          },
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "HARVEST",
        "cards": [
          {
            "ch": "H",
            "x": 2,
            "y": 5
          },
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "R",
            "x": 7,
            "y": 1
          },
          {
            "ch": "V",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 2,
            "y": 6
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 124,
    "name": "Singularity Matrix Chamber",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 43,
    "difficultyScore": 1442,
    "difficultyTier": "Legendary",
    "walls": [
      "....#...",
      "........",
      ".......#",
      "....##..",
      "#.#.....",
      "#....##.",
      "#....##.",
      ".##.##.."
    ],
    "words": [
      {
        "word": "HYDRANT",
        "cards": [
          {
            "ch": "H",
            "x": 1,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 4,
            "y": 2
          },
          {
            "ch": "D",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "N",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "LUGGAGE",
        "cards": [
          {
            "ch": "L",
            "x": 2,
            "y": 6
          },
          {
            "ch": "U",
            "x": 1,
            "y": 1
          },
          {
            "ch": "G",
            "x": 6,
            "y": 1
          },
          {
            "ch": "G",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "G",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          }
        ],
        "best": 5
      },
      {
        "word": "BIOLOGY",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 7,
            "y": 5
          },
          {
            "ch": "O",
            "x": 2,
            "y": 6
          },
          {
            "ch": "L",
            "x": 7,
            "y": 3
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "G",
            "x": 4,
            "y": 5
          },
          {
            "ch": "Y",
            "x": 6,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "MUSTARD",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 7
          },
          {
            "ch": "U",
            "x": 4,
            "y": 1
          },
          {
            "ch": "S",
            "x": 5,
            "y": 4
          },
          {
            "ch": "T",
            "x": 0,
            "y": 2
          },
          {
            "ch": "A",
            "x": 7,
            "y": 5
          },
          {
            "ch": "R",
            "x": 6,
            "y": 7
          },
          {
            "ch": "D",
            "x": 7,
            "y": 0
          }
        ],
        "best": 9
      },
      {
        "word": "MEMBERS",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 7,
            "y": 3
          },
          {
            "ch": "M",
            "x": 0,
            "y": 2
          },
          {
            "ch": "B",
            "x": 6,
            "y": 1
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 5
          },
          {
            "ch": "S",
            "x": 6,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "HUNTING",
        "cards": [
          {
            "ch": "H",
            "x": 6,
            "y": 7
          },
          {
            "ch": "U",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 5,
            "y": 4
          },
          {
            "ch": "T",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "N",
            "x": 2,
            "y": 5
          },
          {
            "ch": "G",
            "x": 3,
            "y": 3
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 125,
    "name": "Singularity Matrix Orbit",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 47,
    "difficultyScore": 1462,
    "difficultyTier": "Legendary",
    "walls": [
      "..#.....",
      "..#...#.",
      ".#.#....",
      "........",
      "#.......",
      "..###.#.",
      "#...#.#.",
      "#.#...#."
    ],
    "words": [
      {
        "word": "MEASURE",
        "cards": [
          {
            "ch": "M",
            "x": 7,
            "y": 1
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "S",
            "x": 7,
            "y": 3
          },
          {
            "ch": "U",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 7,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "FIREFLY",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 2
          },
          {
            "ch": "I",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          },
          {
            "ch": "E",
            "x": 7,
            "y": 6
          },
          {
            "ch": "F",
            "x": 5,
            "y": 6
          },
          {
            "ch": "L",
            "x": 7,
            "y": 4
          },
          {
            "ch": "Y",
            "x": 0,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "HALIBUT",
        "cards": [
          {
            "ch": "H",
            "x": 6,
            "y": 0
          },
          {
            "ch": "A",
            "x": 6,
            "y": 3
          },
          {
            "ch": "L",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 7,
            "y": 5
          },
          {
            "ch": "B",
            "x": 1,
            "y": 4
          },
          {
            "ch": "U",
            "x": 1,
            "y": 1
          },
          {
            "ch": "T",
            "x": 5,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "LEOPARD",
        "cards": [
          {
            "ch": "L",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 1,
            "y": 6
          },
          {
            "ch": "P",
            "x": 7,
            "y": 7
          },
          {
            "ch": "A",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 1
          },
          {
            "ch": "D",
            "x": 3,
            "y": 4
          }
        ],
        "best": 8
      },
      {
        "word": "FLICKER",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 2
          },
          {
            "ch": "L",
            "x": 2,
            "y": 4
          },
          {
            "ch": "I",
            "x": 0,
            "y": 1
          },
          {
            "ch": "C",
            "x": 0,
            "y": 0
          },
          {
            "ch": "K",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 6,
            "y": 2
          }
        ],
        "best": 9
      },
      {
        "word": "MISSION",
        "cards": [
          {
            "ch": "M",
            "x": 3,
            "y": 4
          },
          {
            "ch": "I",
            "x": 6,
            "y": 0
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "S",
            "x": 0,
            "y": 0
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "O",
            "x": 1,
            "y": 3
          },
          {
            "ch": "N",
            "x": 2,
            "y": 4
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 126,
    "name": "Singularity Matrix Echo",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 46,
    "difficultyScore": 1472,
    "difficultyTier": "Legendary",
    "walls": [
      "#...##..",
      "#.......",
      "...#....",
      "...#....",
      ".#...#.#",
      ".#..#...",
      "..#.....",
      "#..###.."
    ],
    "words": [
      {
        "word": "ANGELIC",
        "cards": [
          {
            "ch": "A",
            "x": 2,
            "y": 1
          },
          {
            "ch": "N",
            "x": 3,
            "y": 1
          },
          {
            "ch": "G",
            "x": 6,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "L",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "C",
            "x": 4,
            "y": 4
          }
        ],
        "best": 5
      },
      {
        "word": "INSPIRE",
        "cards": [
          {
            "ch": "I",
            "x": 0,
            "y": 3
          },
          {
            "ch": "N",
            "x": 7,
            "y": 5
          },
          {
            "ch": "S",
            "x": 5,
            "y": 6
          },
          {
            "ch": "P",
            "x": 4,
            "y": 4
          },
          {
            "ch": "I",
            "x": 5,
            "y": 1
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          }
        ],
        "best": 9
      },
      {
        "word": "JOURNEY",
        "cards": [
          {
            "ch": "J",
            "x": 6,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 5
          },
          {
            "ch": "U",
            "x": 7,
            "y": 0
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "N",
            "x": 7,
            "y": 5
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          },
          {
            "ch": "Y",
            "x": 2,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "ANTIQUE",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 2
          },
          {
            "ch": "N",
            "x": 5,
            "y": 5
          },
          {
            "ch": "T",
            "x": 2,
            "y": 5
          },
          {
            "ch": "I",
            "x": 7,
            "y": 3
          },
          {
            "ch": "Q",
            "x": 5,
            "y": 1
          },
          {
            "ch": "U",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 7,
            "y": 0
          }
        ],
        "best": 9
      },
      {
        "word": "FASHION",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 6
          },
          {
            "ch": "A",
            "x": 3,
            "y": 6
          },
          {
            "ch": "S",
            "x": 6,
            "y": 6
          },
          {
            "ch": "H",
            "x": 2,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 5
          },
          {
            "ch": "N",
            "x": 7,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "ARCHWAY",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 2
          },
          {
            "ch": "C",
            "x": 3,
            "y": 5
          },
          {
            "ch": "H",
            "x": 5,
            "y": 5
          },
          {
            "ch": "W",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 2
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 127,
    "name": "Singularity Matrix Vault",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 45,
    "difficultyScore": 1482,
    "difficultyTier": "Legendary",
    "walls": [
      "#.#....#",
      "..#.....",
      "#.......",
      "##......",
      "#..#....",
      "..#..##.",
      "....##..",
      ".#....#."
    ],
    "words": [
      {
        "word": "CENTURY",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 2
          },
          {
            "ch": "N",
            "x": 3,
            "y": 2
          },
          {
            "ch": "T",
            "x": 7,
            "y": 7
          },
          {
            "ch": "U",
            "x": 3,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 5
          }
        ],
        "best": 9
      },
      {
        "word": "EQUATOR",
        "cards": [
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "Q",
            "x": 6,
            "y": 3
          },
          {
            "ch": "U",
            "x": 4,
            "y": 5
          },
          {
            "ch": "A",
            "x": 7,
            "y": 5
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 7
          },
          {
            "ch": "R",
            "x": 3,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "CATALOG",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 7
          },
          {
            "ch": "A",
            "x": 5,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 6
          },
          {
            "ch": "A",
            "x": 2,
            "y": 6
          },
          {
            "ch": "L",
            "x": 7,
            "y": 5
          },
          {
            "ch": "O",
            "x": 7,
            "y": 4
          },
          {
            "ch": "G",
            "x": 6,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "DESTINY",
        "cards": [
          {
            "ch": "D",
            "x": 3,
            "y": 7
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          },
          {
            "ch": "S",
            "x": 2,
            "y": 7
          },
          {
            "ch": "T",
            "x": 7,
            "y": 7
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "N",
            "x": 5,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 3,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "CASCADE",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 1
          },
          {
            "ch": "S",
            "x": 7,
            "y": 1
          },
          {
            "ch": "C",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          },
          {
            "ch": "D",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "CONCERT",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 4
          },
          {
            "ch": "O",
            "x": 5,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 7
          },
          {
            "ch": "C",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 7
          },
          {
            "ch": "T",
            "x": 5,
            "y": 1
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 128,
    "name": "Singularity Matrix Crest",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 39,
    "difficultyScore": 1494,
    "difficultyTier": "Legendary",
    "walls": [
      "...#..##",
      "......#.",
      "###.....",
      "......#.",
      "......##",
      ".#..#..#",
      "..#.....",
      "......##"
    ],
    "words": [
      {
        "word": "ALGEBRA",
        "cards": [
          {
            "ch": "A",
            "x": 3,
            "y": 7
          },
          {
            "ch": "L",
            "x": 2,
            "y": 4
          },
          {
            "ch": "G",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "B",
            "x": 4,
            "y": 3
          },
          {
            "ch": "R",
            "x": 6,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          }
        ],
        "best": 4
      },
      {
        "word": "BICYCLE",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 6
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "C",
            "x": 0,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 0,
            "y": 5
          },
          {
            "ch": "C",
            "x": 3,
            "y": 2
          },
          {
            "ch": "L",
            "x": 3,
            "y": 6
          },
          {
            "ch": "E",
            "x": 0,
            "y": 1
          }
        ],
        "best": 10
      },
      {
        "word": "ACCOUNT",
        "cards": [
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "C",
            "x": 3,
            "y": 2
          },
          {
            "ch": "C",
            "x": 6,
            "y": 6
          },
          {
            "ch": "O",
            "x": 4,
            "y": 1
          },
          {
            "ch": "U",
            "x": 7,
            "y": 1
          },
          {
            "ch": "N",
            "x": 7,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 6
          }
        ],
        "best": 9
      },
      {
        "word": "ARCHWAY",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          },
          {
            "ch": "C",
            "x": 0,
            "y": 5
          },
          {
            "ch": "H",
            "x": 7,
            "y": 1
          },
          {
            "ch": "W",
            "x": 5,
            "y": 7
          },
          {
            "ch": "A",
            "x": 5,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "BOWLING",
        "cards": [
          {
            "ch": "B",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 6,
            "y": 6
          },
          {
            "ch": "W",
            "x": 7,
            "y": 2
          },
          {
            "ch": "L",
            "x": 3,
            "y": 6
          },
          {
            "ch": "I",
            "x": 7,
            "y": 6
          },
          {
            "ch": "N",
            "x": 3,
            "y": 3
          },
          {
            "ch": "G",
            "x": 5,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "CARAMEL",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "M",
            "x": 5,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          },
          {
            "ch": "L",
            "x": 3,
            "y": 1
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 129,
    "name": "Singularity Matrix Pillar",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 46,
    "difficultyScore": 1496,
    "difficultyTier": "Legendary",
    "walls": [
      "..#.....",
      "......#.",
      "....####",
      "#...#...",
      "........",
      "#..###..",
      "..#....#",
      "#....#.."
    ],
    "words": [
      {
        "word": "FEATHER",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 5
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 4,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          },
          {
            "ch": "H",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 7,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "CRICKET",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 2,
            "y": 4
          },
          {
            "ch": "I",
            "x": 7,
            "y": 1
          },
          {
            "ch": "C",
            "x": 5,
            "y": 3
          },
          {
            "ch": "K",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 1,
            "y": 2
          }
        ],
        "best": 9
      },
      {
        "word": "APRICOT",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "P",
            "x": 3,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "I",
            "x": 7,
            "y": 5
          },
          {
            "ch": "C",
            "x": 5,
            "y": 0
          },
          {
            "ch": "O",
            "x": 5,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "CAVALRY",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 7
          },
          {
            "ch": "V",
            "x": 6,
            "y": 5
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "L",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 3,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "FARMING",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 6
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "R",
            "x": 5,
            "y": 0
          },
          {
            "ch": "M",
            "x": 1,
            "y": 1
          },
          {
            "ch": "I",
            "x": 6,
            "y": 3
          },
          {
            "ch": "N",
            "x": 3,
            "y": 3
          },
          {
            "ch": "G",
            "x": 6,
            "y": 0
          }
        ],
        "best": 6
      },
      {
        "word": "HEADWAY",
        "cards": [
          {
            "ch": "H",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 7
          },
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "D",
            "x": 3,
            "y": 7
          },
          {
            "ch": "W",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 0
          },
          {
            "ch": "Y",
            "x": 2,
            "y": 5
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 130,
    "name": "Singularity Matrix Mastery",
    "chapterId": 13,
    "chapterName": "Singularity Matrix",
    "n": 8,
    "optimalMoves": 49,
    "difficultyScore": 1526,
    "difficultyTier": "Legendary",
    "walls": [
      ".....###",
      "#....#..",
      "#..#..#.",
      "......#.",
      "...#....",
      "...##...",
      ".#..#.#.",
      "#......."
    ],
    "words": [
      {
        "word": "DENTIST",
        "cards": [
          {
            "ch": "D",
            "x": 2,
            "y": 5
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          },
          {
            "ch": "N",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 7,
            "y": 1
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "S",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 0,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "EVENING",
        "cards": [
          {
            "ch": "E",
            "x": 3,
            "y": 6
          },
          {
            "ch": "V",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 7,
            "y": 1
          },
          {
            "ch": "N",
            "x": 0,
            "y": 6
          },
          {
            "ch": "I",
            "x": 5,
            "y": 5
          },
          {
            "ch": "N",
            "x": 5,
            "y": 4
          },
          {
            "ch": "G",
            "x": 3,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "ARTISAN",
        "cards": [
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "R",
            "x": 0,
            "y": 6
          },
          {
            "ch": "T",
            "x": 1,
            "y": 2
          },
          {
            "ch": "I",
            "x": 2,
            "y": 3
          },
          {
            "ch": "S",
            "x": 2,
            "y": 1
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "N",
            "x": 3,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "FRAGILE",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 5
          },
          {
            "ch": "R",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "G",
            "x": 2,
            "y": 5
          },
          {
            "ch": "I",
            "x": 3,
            "y": 6
          },
          {
            "ch": "L",
            "x": 0,
            "y": 6
          },
          {
            "ch": "E",
            "x": 0,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "FARMING",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 1
          },
          {
            "ch": "A",
            "x": 6,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 5
          },
          {
            "ch": "M",
            "x": 6,
            "y": 1
          },
          {
            "ch": "I",
            "x": 6,
            "y": 5
          },
          {
            "ch": "N",
            "x": 4,
            "y": 0
          },
          {
            "ch": "G",
            "x": 7,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "BUILDER",
        "cards": [
          {
            "ch": "B",
            "x": 6,
            "y": 7
          },
          {
            "ch": "U",
            "x": 2,
            "y": 7
          },
          {
            "ch": "I",
            "x": 0,
            "y": 0
          },
          {
            "ch": "L",
            "x": 2,
            "y": 1
          },
          {
            "ch": "D",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 7,
            "y": 3
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 131,
    "name": "Aether Crucible Entry",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 42,
    "difficultyScore": 1544,
    "difficultyTier": "Legendary",
    "walls": [
      ".#..##.#",
      "...##...",
      "...#....",
      "....##..",
      ".......#",
      "##.#.#..",
      ".......#",
      "....##.."
    ],
    "words": [
      {
        "word": "BROADWAY",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 7,
            "y": 5
          },
          {
            "ch": "O",
            "x": 7,
            "y": 1
          },
          {
            "ch": "A",
            "x": 1,
            "y": 3
          },
          {
            "ch": "D",
            "x": 6,
            "y": 3
          },
          {
            "ch": "W",
            "x": 7,
            "y": 2
          },
          {
            "ch": "A",
            "x": 3,
            "y": 7
          },
          {
            "ch": "Y",
            "x": 2,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "CALMINGS",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 6
          },
          {
            "ch": "A",
            "x": 6,
            "y": 7
          },
          {
            "ch": "L",
            "x": 5,
            "y": 4
          },
          {
            "ch": "M",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 2,
            "y": 1
          },
          {
            "ch": "N",
            "x": 5,
            "y": 1
          },
          {
            "ch": "G",
            "x": 6,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "DELICATE",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 6
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          },
          {
            "ch": "L",
            "x": 7,
            "y": 5
          },
          {
            "ch": "I",
            "x": 3,
            "y": 3
          },
          {
            "ch": "C",
            "x": 7,
            "y": 7
          },
          {
            "ch": "A",
            "x": 7,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "FLOURISH",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 7
          },
          {
            "ch": "L",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 6
          },
          {
            "ch": "U",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 5
          },
          {
            "ch": "I",
            "x": 7,
            "y": 5
          },
          {
            "ch": "S",
            "x": 0,
            "y": 6
          },
          {
            "ch": "H",
            "x": 1,
            "y": 6
          }
        ],
        "best": 9
      },
      {
        "word": "COMPUTER",
        "cards": [
          {
            "ch": "C",
            "x": 2,
            "y": 1
          },
          {
            "ch": "O",
            "x": 6,
            "y": 1
          },
          {
            "ch": "M",
            "x": 0,
            "y": 6
          },
          {
            "ch": "P",
            "x": 2,
            "y": 2
          },
          {
            "ch": "U",
            "x": 1,
            "y": 6
          },
          {
            "ch": "T",
            "x": 0,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 0,
            "y": 7
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 132,
    "name": "Aether Crucible Path",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 36,
    "difficultyScore": 1544,
    "difficultyTier": "Legendary",
    "walls": [
      "#....##.",
      "#.##.##.",
      "#.......",
      "......##",
      "........",
      "#.....#.",
      "#....#.#",
      ".......#"
    ],
    "words": [
      {
        "word": "FLAMINGO",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 2
          },
          {
            "ch": "L",
            "x": 6,
            "y": 6
          },
          {
            "ch": "A",
            "x": 4,
            "y": 4
          },
          {
            "ch": "M",
            "x": 4,
            "y": 0
          },
          {
            "ch": "I",
            "x": 4,
            "y": 7
          },
          {
            "ch": "N",
            "x": 2,
            "y": 5
          },
          {
            "ch": "G",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 6,
            "y": 4
          }
        ],
        "best": 8
      },
      {
        "word": "CREATIVE",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 4,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 4
          },
          {
            "ch": "V",
            "x": 5,
            "y": 3
          },
          {
            "ch": "E",
            "x": 5,
            "y": 7
          }
        ],
        "best": 6
      },
      {
        "word": "CORRIDOR",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 7
          },
          {
            "ch": "O",
            "x": 2,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 3
          },
          {
            "ch": "I",
            "x": 4,
            "y": 7
          },
          {
            "ch": "D",
            "x": 6,
            "y": 7
          },
          {
            "ch": "O",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "DEVOTION",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 5
          },
          {
            "ch": "V",
            "x": 1,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 4
          },
          {
            "ch": "T",
            "x": 3,
            "y": 7
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "N",
            "x": 5,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "FLYPAPER",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 5,
            "y": 2
          },
          {
            "ch": "Y",
            "x": 3,
            "y": 0
          },
          {
            "ch": "P",
            "x": 4,
            "y": 7
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "P",
            "x": 2,
            "y": 7
          },
          {
            "ch": "E",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 5,
            "y": 4
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 133,
    "name": "Aether Crucible Gate",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 42,
    "difficultyScore": 1568,
    "difficultyTier": "Legendary",
    "walls": [
      "##.....#",
      "#..#.#.#",
      "........",
      ".#....##",
      "..##..#.",
      "......#.",
      "#..#....",
      ".......#"
    ],
    "words": [
      {
        "word": "DOWNTOWN",
        "cards": [
          {
            "ch": "D",
            "x": 4,
            "y": 2
          },
          {
            "ch": "O",
            "x": 4,
            "y": 6
          },
          {
            "ch": "W",
            "x": 4,
            "y": 5
          },
          {
            "ch": "N",
            "x": 7,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 7
          },
          {
            "ch": "W",
            "x": 1,
            "y": 4
          },
          {
            "ch": "N",
            "x": 1,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "CASTAWAY",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 7
          },
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "S",
            "x": 4,
            "y": 5
          },
          {
            "ch": "T",
            "x": 5,
            "y": 2
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "W",
            "x": 1,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 4
          },
          {
            "ch": "Y",
            "x": 6,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "ENGAGING",
        "cards": [
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "N",
            "x": 4,
            "y": 7
          },
          {
            "ch": "G",
            "x": 5,
            "y": 7
          },
          {
            "ch": "A",
            "x": 2,
            "y": 7
          },
          {
            "ch": "G",
            "x": 5,
            "y": 6
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 6,
            "y": 1
          },
          {
            "ch": "G",
            "x": 7,
            "y": 4
          }
        ],
        "best": 10
      },
      {
        "word": "FREEBIRD",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 5,
            "y": 3
          },
          {
            "ch": "E",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          },
          {
            "ch": "B",
            "x": 3,
            "y": 5
          },
          {
            "ch": "I",
            "x": 2,
            "y": 1
          },
          {
            "ch": "R",
            "x": 1,
            "y": 5
          },
          {
            "ch": "D",
            "x": 1,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "ELEVATOR",
        "cards": [
          {
            "ch": "E",
            "x": 4,
            "y": 5
          },
          {
            "ch": "L",
            "x": 2,
            "y": 1
          },
          {
            "ch": "E",
            "x": 0,
            "y": 7
          },
          {
            "ch": "V",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 3
          },
          {
            "ch": "T",
            "x": 3,
            "y": 5
          },
          {
            "ch": "O",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 0
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 134,
    "name": "Aether Crucible Chamber",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 36,
    "difficultyScore": 1568,
    "difficultyTier": "Legendary",
    "walls": [
      "#...###.",
      "#.#..##.",
      "......##",
      ".......#",
      "....#...",
      "...#....",
      "...#.#..",
      ".#....#."
    ],
    "words": [
      {
        "word": "FREEBIRD",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 5
          },
          {
            "ch": "R",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 2,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 7
          },
          {
            "ch": "B",
            "x": 1,
            "y": 1
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "R",
            "x": 6,
            "y": 5
          },
          {
            "ch": "D",
            "x": 0,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "CLARINET",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 6
          },
          {
            "ch": "L",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 7
          },
          {
            "ch": "R",
            "x": 7,
            "y": 5
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "N",
            "x": 1,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "ATHLETIC",
        "cards": [
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "T",
            "x": 7,
            "y": 5
          },
          {
            "ch": "H",
            "x": 3,
            "y": 7
          },
          {
            "ch": "L",
            "x": 0,
            "y": 7
          },
          {
            "ch": "E",
            "x": 0,
            "y": 2
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          },
          {
            "ch": "I",
            "x": 6,
            "y": 4
          },
          {
            "ch": "C",
            "x": 1,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "CATERING",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 4
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 1,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 7
          },
          {
            "ch": "I",
            "x": 0,
            "y": 4
          },
          {
            "ch": "N",
            "x": 5,
            "y": 4
          },
          {
            "ch": "G",
            "x": 0,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "AMETHYST",
        "cards": [
          {
            "ch": "A",
            "x": 3,
            "y": 2
          },
          {
            "ch": "M",
            "x": 1,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "T",
            "x": 1,
            "y": 1
          },
          {
            "ch": "H",
            "x": 4,
            "y": 5
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 5
          },
          {
            "ch": "S",
            "x": 0,
            "y": 2
          },
          {
            "ch": "T",
            "x": 2,
            "y": 2
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 135,
    "name": "Aether Crucible Orbit",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 39,
    "difficultyScore": 1586,
    "difficultyTier": "Legendary",
    "walls": [
      ".#......",
      "...##...",
      "..#.....",
      "#...#...",
      "..#.....",
      ".#......",
      "#..#...#",
      "##.##.##"
    ],
    "words": [
      {
        "word": "FLAWLESS",
        "cards": [
          {
            "ch": "F",
            "x": 6,
            "y": 3
          },
          {
            "ch": "L",
            "x": 3,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 1
          },
          {
            "ch": "W",
            "x": 7,
            "y": 1
          },
          {
            "ch": "L",
            "x": 4,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "S",
            "x": 6,
            "y": 6
          },
          {
            "ch": "S",
            "x": 4,
            "y": 2
          }
        ],
        "best": 3
      },
      {
        "word": "CHEERING",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 5
          },
          {
            "ch": "H",
            "x": 6,
            "y": 4
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 2,
            "y": 7
          },
          {
            "ch": "R",
            "x": 2,
            "y": 1
          },
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "N",
            "x": 3,
            "y": 2
          },
          {
            "ch": "G",
            "x": 7,
            "y": 3
          }
        ],
        "best": 9
      },
      {
        "word": "DAYBREAK",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 3,
            "y": 5
          },
          {
            "ch": "Y",
            "x": 7,
            "y": 4
          },
          {
            "ch": "B",
            "x": 1,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 6
          },
          {
            "ch": "E",
            "x": 7,
            "y": 1
          },
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "K",
            "x": 5,
            "y": 0
          }
        ],
        "best": 10
      },
      {
        "word": "DESIGNER",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 3
          },
          {
            "ch": "E",
            "x": 6,
            "y": 4
          },
          {
            "ch": "S",
            "x": 7,
            "y": 4
          },
          {
            "ch": "I",
            "x": 5,
            "y": 1
          },
          {
            "ch": "G",
            "x": 2,
            "y": 6
          },
          {
            "ch": "N",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 6
          },
          {
            "ch": "R",
            "x": 6,
            "y": 1
          }
        ],
        "best": 10
      },
      {
        "word": "CASTAWAY",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 6
          },
          {
            "ch": "A",
            "x": 7,
            "y": 5
          },
          {
            "ch": "S",
            "x": 4,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 7
          },
          {
            "ch": "A",
            "x": 7,
            "y": 2
          },
          {
            "ch": "W",
            "x": 0,
            "y": 2
          },
          {
            "ch": "A",
            "x": 0,
            "y": 5
          },
          {
            "ch": "Y",
            "x": 5,
            "y": 7
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 136,
    "name": "Aether Crucible Echo",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 37,
    "difficultyScore": 1594,
    "difficultyTier": "Legendary",
    "walls": [
      "#....#.#",
      "..#.....",
      "#..#.##.",
      "........",
      "....##..",
      "........",
      "#.#.#..#",
      "....###."
    ],
    "words": [
      {
        "word": "EYELIGHT",
        "cards": [
          {
            "ch": "E",
            "x": 0,
            "y": 1
          },
          {
            "ch": "Y",
            "x": 3,
            "y": 3
          },
          {
            "ch": "E",
            "x": 7,
            "y": 2
          },
          {
            "ch": "L",
            "x": 6,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "G",
            "x": 3,
            "y": 4
          },
          {
            "ch": "H",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 4,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "ELEVATOR",
        "cards": [
          {
            "ch": "E",
            "x": 6,
            "y": 5
          },
          {
            "ch": "L",
            "x": 7,
            "y": 5
          },
          {
            "ch": "E",
            "x": 1,
            "y": 4
          },
          {
            "ch": "V",
            "x": 4,
            "y": 1
          },
          {
            "ch": "A",
            "x": 6,
            "y": 4
          },
          {
            "ch": "T",
            "x": 6,
            "y": 3
          },
          {
            "ch": "O",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "DOWNTOWN",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 1,
            "y": 6
          },
          {
            "ch": "W",
            "x": 0,
            "y": 4
          },
          {
            "ch": "N",
            "x": 1,
            "y": 4
          },
          {
            "ch": "T",
            "x": 7,
            "y": 5
          },
          {
            "ch": "O",
            "x": 4,
            "y": 1
          },
          {
            "ch": "W",
            "x": 6,
            "y": 0
          },
          {
            "ch": "N",
            "x": 2,
            "y": 5
          }
        ],
        "best": 4
      },
      {
        "word": "FRUITION",
        "cards": [
          {
            "ch": "F",
            "x": 6,
            "y": 5
          },
          {
            "ch": "R",
            "x": 4,
            "y": 2
          },
          {
            "ch": "U",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 0,
            "y": 1
          },
          {
            "ch": "N",
            "x": 7,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "HABITATS",
        "cards": [
          {
            "ch": "H",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 7
          },
          {
            "ch": "B",
            "x": 2,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 5
          },
          {
            "ch": "T",
            "x": 3,
            "y": 7
          },
          {
            "ch": "A",
            "x": 7,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 3
          },
          {
            "ch": "S",
            "x": 6,
            "y": 0
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 137,
    "name": "Aether Crucible Pillar",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 34,
    "difficultyScore": 1612,
    "difficultyTier": "Legendary",
    "walls": [
      "#...###.",
      "........",
      ".##.....",
      "...#..#.",
      ".##.#...",
      ".#....#.",
      "........",
      "#....###"
    ],
    "words": [
      {
        "word": "FIREBALL",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 0
          },
          {
            "ch": "I",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 2,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 1
          },
          {
            "ch": "B",
            "x": 3,
            "y": 2
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          },
          {
            "ch": "L",
            "x": 0,
            "y": 6
          },
          {
            "ch": "L",
            "x": 5,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "FESTIVAL",
        "cards": [
          {
            "ch": "F",
            "x": 1,
            "y": 1
          },
          {
            "ch": "E",
            "x": 5,
            "y": 4
          },
          {
            "ch": "S",
            "x": 6,
            "y": 1
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "I",
            "x": 7,
            "y": 0
          },
          {
            "ch": "V",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          },
          {
            "ch": "L",
            "x": 3,
            "y": 1
          }
        ],
        "best": 9
      },
      {
        "word": "ESTIMATE",
        "cards": [
          {
            "ch": "E",
            "x": 0,
            "y": 6
          },
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "T",
            "x": 7,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 7
          },
          {
            "ch": "M",
            "x": 0,
            "y": 4
          },
          {
            "ch": "A",
            "x": 0,
            "y": 1
          },
          {
            "ch": "T",
            "x": 2,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "DRUMROLL",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 5
          },
          {
            "ch": "R",
            "x": 5,
            "y": 2
          },
          {
            "ch": "U",
            "x": 3,
            "y": 5
          },
          {
            "ch": "M",
            "x": 6,
            "y": 4
          },
          {
            "ch": "R",
            "x": 7,
            "y": 3
          },
          {
            "ch": "O",
            "x": 0,
            "y": 4
          },
          {
            "ch": "L",
            "x": 2,
            "y": 7
          },
          {
            "ch": "L",
            "x": 4,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "DRILLBIT",
        "cards": [
          {
            "ch": "D",
            "x": 6,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "I",
            "x": 5,
            "y": 3
          },
          {
            "ch": "L",
            "x": 1,
            "y": 0
          },
          {
            "ch": "L",
            "x": 4,
            "y": 6
          },
          {
            "ch": "B",
            "x": 2,
            "y": 7
          },
          {
            "ch": "I",
            "x": 7,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 5
          }
        ],
        "best": 7
      }
    ]
  },
  {
    "id": 138,
    "name": "Aether Crucible Vault",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 45,
    "difficultyScore": 1622,
    "difficultyTier": "Legendary",
    "walls": [
      "#...##..",
      "..#....#",
      "....##..",
      ".#.....#",
      "...#..#.",
      ".#....##",
      "......##",
      "..#....."
    ],
    "words": [
      {
        "word": "FIREBALL",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 7,
            "y": 7
          },
          {
            "ch": "E",
            "x": 7,
            "y": 0
          },
          {
            "ch": "B",
            "x": 4,
            "y": 5
          },
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "L",
            "x": 4,
            "y": 4
          },
          {
            "ch": "L",
            "x": 2,
            "y": 5
          }
        ],
        "best": 9
      },
      {
        "word": "DRUMBEAT",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 6
          },
          {
            "ch": "R",
            "x": 6,
            "y": 7
          },
          {
            "ch": "U",
            "x": 0,
            "y": 4
          },
          {
            "ch": "M",
            "x": 5,
            "y": 4
          },
          {
            "ch": "B",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 3,
            "y": 6
          },
          {
            "ch": "A",
            "x": 2,
            "y": 6
          },
          {
            "ch": "T",
            "x": 4,
            "y": 6
          }
        ],
        "best": 10
      },
      {
        "word": "DESIGNER",
        "cards": [
          {
            "ch": "D",
            "x": 2,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 6
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 3,
            "y": 6
          },
          {
            "ch": "G",
            "x": 3,
            "y": 0
          },
          {
            "ch": "N",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          },
          {
            "ch": "R",
            "x": 5,
            "y": 7
          }
        ],
        "best": 7
      },
      {
        "word": "ALTITUDE",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "L",
            "x": 5,
            "y": 3
          },
          {
            "ch": "T",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 0,
            "y": 6
          },
          {
            "ch": "T",
            "x": 2,
            "y": 2
          },
          {
            "ch": "U",
            "x": 4,
            "y": 7
          },
          {
            "ch": "D",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 6,
            "y": 0
          }
        ],
        "best": 9
      },
      {
        "word": "ABSOLUTE",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 4
          },
          {
            "ch": "B",
            "x": 0,
            "y": 1
          },
          {
            "ch": "S",
            "x": 1,
            "y": 1
          },
          {
            "ch": "O",
            "x": 4,
            "y": 1
          },
          {
            "ch": "L",
            "x": 3,
            "y": 3
          },
          {
            "ch": "U",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 4,
            "y": 5
          },
          {
            "ch": "E",
            "x": 6,
            "y": 7
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 139,
    "name": "Aether Crucible Crest",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 33,
    "difficultyScore": 1622,
    "difficultyTier": "Legendary",
    "walls": [
      "#...####",
      "..#...#.",
      "..#...#.",
      "......#.",
      ".#...##.",
      "...###..",
      "....#...",
      "........"
    ],
    "words": [
      {
        "word": "ABSOLUTE",
        "cards": [
          {
            "ch": "A",
            "x": 2,
            "y": 4
          },
          {
            "ch": "B",
            "x": 2,
            "y": 3
          },
          {
            "ch": "S",
            "x": 6,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 3
          },
          {
            "ch": "L",
            "x": 1,
            "y": 1
          },
          {
            "ch": "U",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 7,
            "y": 7
          }
        ],
        "best": 5
      },
      {
        "word": "CLARINET",
        "cards": [
          {
            "ch": "C",
            "x": 4,
            "y": 7
          },
          {
            "ch": "L",
            "x": 7,
            "y": 6
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "R",
            "x": 5,
            "y": 1
          },
          {
            "ch": "I",
            "x": 5,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 2,
            "y": 7
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "DECISIVE",
        "cards": [
          {
            "ch": "D",
            "x": 3,
            "y": 1
          },
          {
            "ch": "E",
            "x": 2,
            "y": 6
          },
          {
            "ch": "C",
            "x": 1,
            "y": 5
          },
          {
            "ch": "I",
            "x": 1,
            "y": 1
          },
          {
            "ch": "S",
            "x": 7,
            "y": 6
          },
          {
            "ch": "I",
            "x": 7,
            "y": 5
          },
          {
            "ch": "V",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 5,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "ENGINEER",
        "cards": [
          {
            "ch": "E",
            "x": 0,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 6
          },
          {
            "ch": "G",
            "x": 0,
            "y": 2
          },
          {
            "ch": "I",
            "x": 1,
            "y": 6
          },
          {
            "ch": "N",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 3,
            "y": 7
          }
        ],
        "best": 4
      },
      {
        "word": "DESERTED",
        "cards": [
          {
            "ch": "D",
            "x": 7,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 5
          },
          {
            "ch": "S",
            "x": 1,
            "y": 0
          },
          {
            "ch": "E",
            "x": 1,
            "y": 5
          },
          {
            "ch": "R",
            "x": 3,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 7
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "D",
            "x": 7,
            "y": 6
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 140,
    "name": "Aether Crucible Mastery",
    "chapterId": 14,
    "chapterName": "Aether Crucible",
    "n": 8,
    "optimalMoves": 42,
    "difficultyScore": 1652,
    "difficultyTier": "Legendary",
    "walls": [
      "##..#..#",
      "........",
      "......##",
      "......#.",
      "........",
      ".##.##..",
      "...#...#",
      "##.##..."
    ],
    "words": [
      {
        "word": "APPROVAL",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "P",
            "x": 0,
            "y": 6
          },
          {
            "ch": "P",
            "x": 7,
            "y": 7
          },
          {
            "ch": "R",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 1
          },
          {
            "ch": "V",
            "x": 1,
            "y": 1
          },
          {
            "ch": "A",
            "x": 6,
            "y": 7
          },
          {
            "ch": "L",
            "x": 5,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "CERAMICS",
        "cards": [
          {
            "ch": "C",
            "x": 7,
            "y": 7
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 1
          },
          {
            "ch": "M",
            "x": 2,
            "y": 7
          },
          {
            "ch": "I",
            "x": 7,
            "y": 5
          },
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "S",
            "x": 5,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "DECORATE",
        "cards": [
          {
            "ch": "D",
            "x": 0,
            "y": 3
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "C",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 1
          },
          {
            "ch": "R",
            "x": 2,
            "y": 7
          },
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "E",
            "x": 1,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "FLAWLESS",
        "cards": [
          {
            "ch": "F",
            "x": 7,
            "y": 4
          },
          {
            "ch": "L",
            "x": 7,
            "y": 7
          },
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "W",
            "x": 5,
            "y": 7
          },
          {
            "ch": "L",
            "x": 7,
            "y": 3
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "S",
            "x": 5,
            "y": 0
          }
        ],
        "best": 10
      },
      {
        "word": "DRUMBEAT",
        "cards": [
          {
            "ch": "D",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 2,
            "y": 0
          },
          {
            "ch": "U",
            "x": 4,
            "y": 6
          },
          {
            "ch": "M",
            "x": 5,
            "y": 6
          },
          {
            "ch": "B",
            "x": 5,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "T",
            "x": 0,
            "y": 6
          }
        ],
        "best": 10
      }
    ]
  },
  {
    "id": 141,
    "name": "Transcendence Core Entry",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 47,
    "difficultyScore": 1694,
    "difficultyTier": "Transcendence",
    "walls": [
      "###.#...",
      ".#......",
      "...#.##.",
      "#.......",
      ".#.#..#.",
      "....#...",
      "#.#.#...",
      "#.#....."
    ],
    "words": [
      {
        "word": "CUPCAKES",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 1
          },
          {
            "ch": "U",
            "x": 0,
            "y": 1
          },
          {
            "ch": "P",
            "x": 2,
            "y": 5
          },
          {
            "ch": "C",
            "x": 4,
            "y": 7
          },
          {
            "ch": "A",
            "x": 7,
            "y": 3
          },
          {
            "ch": "K",
            "x": 5,
            "y": 4
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "S",
            "x": 4,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "BARBECUE",
        "cards": [
          {
            "ch": "B",
            "x": 4,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "B",
            "x": 6,
            "y": 7
          },
          {
            "ch": "E",
            "x": 1,
            "y": 2
          },
          {
            "ch": "C",
            "x": 5,
            "y": 3
          },
          {
            "ch": "U",
            "x": 6,
            "y": 0
          },
          {
            "ch": "E",
            "x": 4,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "BOOKWORM",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 7
          },
          {
            "ch": "O",
            "x": 1,
            "y": 5
          },
          {
            "ch": "O",
            "x": 7,
            "y": 3
          },
          {
            "ch": "K",
            "x": 7,
            "y": 4
          },
          {
            "ch": "W",
            "x": 5,
            "y": 1
          },
          {
            "ch": "O",
            "x": 7,
            "y": 2
          },
          {
            "ch": "R",
            "x": 5,
            "y": 5
          },
          {
            "ch": "M",
            "x": 4,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "ANCESTOR",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 1
          },
          {
            "ch": "N",
            "x": 0,
            "y": 2
          },
          {
            "ch": "C",
            "x": 0,
            "y": 4
          },
          {
            "ch": "E",
            "x": 7,
            "y": 6
          },
          {
            "ch": "S",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 2,
            "y": 1
          },
          {
            "ch": "O",
            "x": 4,
            "y": 7
          },
          {
            "ch": "R",
            "x": 6,
            "y": 7
          }
        ],
        "best": 10
      },
      {
        "word": "BELIEVER",
        "cards": [
          {
            "ch": "B",
            "x": 2,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 4
          },
          {
            "ch": "L",
            "x": 6,
            "y": 3
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "V",
            "x": 3,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          },
          {
            "ch": "R",
            "x": 7,
            "y": 3
          }
        ],
        "best": 7
      },
      {
        "word": "FLASHING",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 4,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 7
          },
          {
            "ch": "S",
            "x": 0,
            "y": 5
          },
          {
            "ch": "H",
            "x": 1,
            "y": 7
          },
          {
            "ch": "I",
            "x": 6,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 1
          },
          {
            "ch": "G",
            "x": 7,
            "y": 4
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 142,
    "name": "Transcendence Core Path",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 44,
    "difficultyScore": 1703,
    "difficultyTier": "Transcendence",
    "walls": [
      "##..##..",
      "...#.#..",
      "#.......",
      "..#####.",
      "#..#....",
      "#.#...#.",
      "......#.",
      "........"
    ],
    "words": [
      {
        "word": "COMPUTER",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 2
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "M",
            "x": 1,
            "y": 2
          },
          {
            "ch": "P",
            "x": 7,
            "y": 7
          },
          {
            "ch": "U",
            "x": 1,
            "y": 1
          },
          {
            "ch": "T",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 6,
            "y": 7
          },
          {
            "ch": "R",
            "x": 7,
            "y": 5
          }
        ],
        "best": 7
      },
      {
        "word": "COLORFUL",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "L",
            "x": 1,
            "y": 3
          },
          {
            "ch": "O",
            "x": 7,
            "y": 0
          },
          {
            "ch": "R",
            "x": 4,
            "y": 5
          },
          {
            "ch": "F",
            "x": 0,
            "y": 3
          },
          {
            "ch": "U",
            "x": 6,
            "y": 2
          },
          {
            "ch": "L",
            "x": 2,
            "y": 7
          }
        ],
        "best": 8
      },
      {
        "word": "DINOSAUR",
        "cards": [
          {
            "ch": "D",
            "x": 7,
            "y": 6
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "N",
            "x": 1,
            "y": 3
          },
          {
            "ch": "O",
            "x": 4,
            "y": 2
          },
          {
            "ch": "S",
            "x": 5,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 1
          },
          {
            "ch": "U",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 7,
            "y": 7
          }
        ],
        "best": 10
      },
      {
        "word": "CROSSING",
        "cards": [
          {
            "ch": "C",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 7,
            "y": 7
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "S",
            "x": 2,
            "y": 4
          },
          {
            "ch": "S",
            "x": 4,
            "y": 1
          },
          {
            "ch": "I",
            "x": 5,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 0
          },
          {
            "ch": "G",
            "x": 4,
            "y": 6
          }
        ],
        "best": 9
      },
      {
        "word": "CASTAWAY",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 2
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 5,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "W",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 7,
            "y": 6
          },
          {
            "ch": "Y",
            "x": 2,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "DAUGHTER",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 5
          },
          {
            "ch": "A",
            "x": 6,
            "y": 2
          },
          {
            "ch": "U",
            "x": 7,
            "y": 5
          },
          {
            "ch": "G",
            "x": 1,
            "y": 4
          },
          {
            "ch": "H",
            "x": 2,
            "y": 6
          },
          {
            "ch": "T",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 2
          }
        ],
        "best": 4
      }
    ]
  },
  {
    "id": 143,
    "name": "Transcendence Core Gate",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 37,
    "difficultyScore": 1704,
    "difficultyTier": "Transcendence",
    "walls": [
      "###..##.",
      "..#.##..",
      "..#.##..",
      "......#.",
      ".....#..",
      "#....#..",
      "........",
      ".....###"
    ],
    "words": [
      {
        "word": "BACKPACK",
        "cards": [
          {
            "ch": "B",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 3
          },
          {
            "ch": "C",
            "x": 7,
            "y": 1
          },
          {
            "ch": "K",
            "x": 4,
            "y": 7
          },
          {
            "ch": "P",
            "x": 2,
            "y": 5
          },
          {
            "ch": "A",
            "x": 0,
            "y": 3
          },
          {
            "ch": "C",
            "x": 3,
            "y": 7
          },
          {
            "ch": "K",
            "x": 0,
            "y": 6
          }
        ],
        "best": 5
      },
      {
        "word": "CORRIDOR",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 6
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 6
          },
          {
            "ch": "R",
            "x": 7,
            "y": 4
          },
          {
            "ch": "I",
            "x": 3,
            "y": 7
          },
          {
            "ch": "D",
            "x": 4,
            "y": 4
          },
          {
            "ch": "O",
            "x": 2,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          }
        ],
        "best": 6
      },
      {
        "word": "BIRDCAGE",
        "cards": [
          {
            "ch": "B",
            "x": 0,
            "y": 6
          },
          {
            "ch": "I",
            "x": 7,
            "y": 6
          },
          {
            "ch": "R",
            "x": 0,
            "y": 7
          },
          {
            "ch": "D",
            "x": 3,
            "y": 7
          },
          {
            "ch": "C",
            "x": 6,
            "y": 5
          },
          {
            "ch": "A",
            "x": 7,
            "y": 5
          },
          {
            "ch": "G",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          }
        ],
        "best": 4
      },
      {
        "word": "ESTIMATE",
        "cards": [
          {
            "ch": "E",
            "x": 2,
            "y": 7
          },
          {
            "ch": "S",
            "x": 7,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 3
          },
          {
            "ch": "I",
            "x": 1,
            "y": 1
          },
          {
            "ch": "M",
            "x": 0,
            "y": 6
          },
          {
            "ch": "A",
            "x": 4,
            "y": 6
          },
          {
            "ch": "T",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 3,
            "y": 1
          }
        ],
        "best": 6
      },
      {
        "word": "EMPHASIS",
        "cards": [
          {
            "ch": "E",
            "x": 7,
            "y": 2
          },
          {
            "ch": "M",
            "x": 3,
            "y": 6
          },
          {
            "ch": "P",
            "x": 1,
            "y": 1
          },
          {
            "ch": "H",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 0,
            "y": 4
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 3,
            "y": 1
          },
          {
            "ch": "S",
            "x": 7,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "ANCESTOR",
        "cards": [
          {
            "ch": "A",
            "x": 3,
            "y": 4
          },
          {
            "ch": "N",
            "x": 6,
            "y": 5
          },
          {
            "ch": "C",
            "x": 4,
            "y": 4
          },
          {
            "ch": "E",
            "x": 6,
            "y": 6
          },
          {
            "ch": "S",
            "x": 4,
            "y": 6
          },
          {
            "ch": "T",
            "x": 6,
            "y": 4
          },
          {
            "ch": "O",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 2,
            "y": 7
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 144,
    "name": "Transcendence Core Chamber",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 46,
    "difficultyScore": 1737,
    "difficultyTier": "Transcendence",
    "walls": [
      ".#.#....",
      "##...##.",
      ".......#",
      "....#.#.",
      "....###.",
      "..#.#...",
      ".......#",
      "#.....##"
    ],
    "words": [
      {
        "word": "FOREHEAD",
        "cards": [
          {
            "ch": "F",
            "x": 0,
            "y": 5
          },
          {
            "ch": "O",
            "x": 3,
            "y": 6
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "H",
            "x": 4,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 7
          },
          {
            "ch": "A",
            "x": 5,
            "y": 7
          },
          {
            "ch": "D",
            "x": 2,
            "y": 3
          }
        ],
        "best": 6
      },
      {
        "word": "GAUNTLET",
        "cards": [
          {
            "ch": "G",
            "x": 3,
            "y": 3
          },
          {
            "ch": "A",
            "x": 7,
            "y": 3
          },
          {
            "ch": "U",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 3,
            "y": 5
          },
          {
            "ch": "T",
            "x": 2,
            "y": 4
          },
          {
            "ch": "L",
            "x": 3,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 1,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "GLACIERS",
        "cards": [
          {
            "ch": "G",
            "x": 0,
            "y": 2
          },
          {
            "ch": "L",
            "x": 7,
            "y": 1
          },
          {
            "ch": "A",
            "x": 2,
            "y": 0
          },
          {
            "ch": "C",
            "x": 1,
            "y": 3
          },
          {
            "ch": "I",
            "x": 0,
            "y": 5
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "S",
            "x": 7,
            "y": 4
          }
        ],
        "best": 10
      },
      {
        "word": "BLIZZARD",
        "cards": [
          {
            "ch": "B",
            "x": 5,
            "y": 0
          },
          {
            "ch": "L",
            "x": 0,
            "y": 3
          },
          {
            "ch": "I",
            "x": 3,
            "y": 6
          },
          {
            "ch": "Z",
            "x": 0,
            "y": 2
          },
          {
            "ch": "Z",
            "x": 4,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 3
          },
          {
            "ch": "R",
            "x": 3,
            "y": 5
          },
          {
            "ch": "D",
            "x": 7,
            "y": 3
          }
        ],
        "best": 5
      },
      {
        "word": "CABINETS",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 4
          },
          {
            "ch": "A",
            "x": 1,
            "y": 6
          },
          {
            "ch": "B",
            "x": 3,
            "y": 2
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "N",
            "x": 2,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 7
          },
          {
            "ch": "T",
            "x": 7,
            "y": 0
          },
          {
            "ch": "S",
            "x": 2,
            "y": 3
          }
        ],
        "best": 8
      },
      {
        "word": "FLOURISH",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 6
          },
          {
            "ch": "L",
            "x": 0,
            "y": 2
          },
          {
            "ch": "O",
            "x": 6,
            "y": 5
          },
          {
            "ch": "U",
            "x": 0,
            "y": 3
          },
          {
            "ch": "R",
            "x": 0,
            "y": 4
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 7,
            "y": 1
          },
          {
            "ch": "H",
            "x": 6,
            "y": 2
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 145,
    "name": "Transcendence Core Orbit",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 45,
    "difficultyScore": 1750,
    "difficultyTier": "Transcendence",
    "walls": [
      ".#......",
      "........",
      "...#....",
      ".#..###.",
      ".#..####",
      "......##",
      "#.#.....",
      "....#.##"
    ],
    "words": [
      {
        "word": "EMERALDS",
        "cards": [
          {
            "ch": "E",
            "x": 3,
            "y": 6
          },
          {
            "ch": "M",
            "x": 7,
            "y": 2
          },
          {
            "ch": "E",
            "x": 4,
            "y": 5
          },
          {
            "ch": "R",
            "x": 3,
            "y": 4
          },
          {
            "ch": "A",
            "x": 2,
            "y": 3
          },
          {
            "ch": "L",
            "x": 3,
            "y": 7
          },
          {
            "ch": "D",
            "x": 0,
            "y": 1
          },
          {
            "ch": "S",
            "x": 6,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "FIREBALL",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 3
          },
          {
            "ch": "I",
            "x": 7,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 1
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "B",
            "x": 0,
            "y": 5
          },
          {
            "ch": "A",
            "x": 2,
            "y": 5
          },
          {
            "ch": "L",
            "x": 5,
            "y": 0
          },
          {
            "ch": "L",
            "x": 0,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "CARDIGAN",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 7
          },
          {
            "ch": "R",
            "x": 2,
            "y": 5
          },
          {
            "ch": "D",
            "x": 2,
            "y": 1
          },
          {
            "ch": "I",
            "x": 6,
            "y": 0
          },
          {
            "ch": "G",
            "x": 2,
            "y": 2
          },
          {
            "ch": "A",
            "x": 5,
            "y": 7
          },
          {
            "ch": "N",
            "x": 3,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "FASTENER",
        "cards": [
          {
            "ch": "F",
            "x": 5,
            "y": 1
          },
          {
            "ch": "A",
            "x": 6,
            "y": 1
          },
          {
            "ch": "S",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 1,
            "y": 7
          },
          {
            "ch": "E",
            "x": 3,
            "y": 3
          },
          {
            "ch": "N",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 5
          },
          {
            "ch": "R",
            "x": 7,
            "y": 6
          }
        ],
        "best": 6
      },
      {
        "word": "BARBECUE",
        "cards": [
          {
            "ch": "B",
            "x": 7,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 6
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "B",
            "x": 3,
            "y": 5
          },
          {
            "ch": "E",
            "x": 5,
            "y": 1
          },
          {
            "ch": "C",
            "x": 1,
            "y": 5
          },
          {
            "ch": "U",
            "x": 2,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "ESCALATE",
        "cards": [
          {
            "ch": "E",
            "x": 2,
            "y": 2
          },
          {
            "ch": "S",
            "x": 4,
            "y": 5
          },
          {
            "ch": "C",
            "x": 3,
            "y": 7
          },
          {
            "ch": "A",
            "x": 7,
            "y": 2
          },
          {
            "ch": "L",
            "x": 2,
            "y": 3
          },
          {
            "ch": "A",
            "x": 3,
            "y": 6
          },
          {
            "ch": "T",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 1
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 146,
    "name": "Transcendence Core Echo",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 43,
    "difficultyScore": 1761,
    "difficultyTier": "Transcendence",
    "walls": [
      "##.##...",
      "#.##....",
      "#..#....",
      ".....#..",
      "......#.",
      "#.......",
      "...##.##",
      "......##"
    ],
    "words": [
      {
        "word": "FEATHERS",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 1,
            "y": 6
          },
          {
            "ch": "A",
            "x": 1,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 4
          },
          {
            "ch": "H",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "S",
            "x": 6,
            "y": 5
          }
        ],
        "best": 6
      },
      {
        "word": "GLAMOURS",
        "cards": [
          {
            "ch": "G",
            "x": 5,
            "y": 7
          },
          {
            "ch": "L",
            "x": 1,
            "y": 5
          },
          {
            "ch": "A",
            "x": 1,
            "y": 2
          },
          {
            "ch": "M",
            "x": 1,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 3
          },
          {
            "ch": "U",
            "x": 2,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 4
          },
          {
            "ch": "S",
            "x": 1,
            "y": 4
          }
        ],
        "best": 7
      },
      {
        "word": "ABSOLUTE",
        "cards": [
          {
            "ch": "A",
            "x": 7,
            "y": 3
          },
          {
            "ch": "B",
            "x": 3,
            "y": 3
          },
          {
            "ch": "S",
            "x": 5,
            "y": 6
          },
          {
            "ch": "O",
            "x": 6,
            "y": 2
          },
          {
            "ch": "L",
            "x": 4,
            "y": 5
          },
          {
            "ch": "U",
            "x": 7,
            "y": 2
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "DRILLBIT",
        "cards": [
          {
            "ch": "D",
            "x": 4,
            "y": 5
          },
          {
            "ch": "R",
            "x": 7,
            "y": 1
          },
          {
            "ch": "I",
            "x": 3,
            "y": 4
          },
          {
            "ch": "L",
            "x": 7,
            "y": 0
          },
          {
            "ch": "L",
            "x": 5,
            "y": 0
          },
          {
            "ch": "B",
            "x": 7,
            "y": 3
          },
          {
            "ch": "I",
            "x": 6,
            "y": 3
          },
          {
            "ch": "T",
            "x": 4,
            "y": 2
          }
        ],
        "best": 8
      },
      {
        "word": "AIRPLANE",
        "cards": [
          {
            "ch": "A",
            "x": 0,
            "y": 7
          },
          {
            "ch": "I",
            "x": 4,
            "y": 5
          },
          {
            "ch": "R",
            "x": 1,
            "y": 1
          },
          {
            "ch": "P",
            "x": 1,
            "y": 4
          },
          {
            "ch": "L",
            "x": 1,
            "y": 3
          },
          {
            "ch": "A",
            "x": 4,
            "y": 2
          },
          {
            "ch": "N",
            "x": 4,
            "y": 7
          },
          {
            "ch": "E",
            "x": 2,
            "y": 6
          }
        ],
        "best": 3
      },
      {
        "word": "ELEVATOR",
        "cards": [
          {
            "ch": "E",
            "x": 0,
            "y": 7
          },
          {
            "ch": "L",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 2,
            "y": 3
          },
          {
            "ch": "V",
            "x": 1,
            "y": 4
          },
          {
            "ch": "A",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 2,
            "y": 6
          },
          {
            "ch": "O",
            "x": 3,
            "y": 3
          },
          {
            "ch": "R",
            "x": 5,
            "y": 2
          }
        ],
        "best": 9
      }
    ]
  },
  {
    "id": 147,
    "name": "Transcendence Core Vault",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 43,
    "difficultyScore": 1776,
    "difficultyTier": "Transcendence",
    "walls": [
      "........",
      "#.#.....",
      "#..#...#",
      "#....#..",
      "##...#.#",
      "#....#..",
      "........",
      "###..##."
    ],
    "words": [
      {
        "word": "GIGANTIC",
        "cards": [
          {
            "ch": "G",
            "x": 7,
            "y": 6
          },
          {
            "ch": "I",
            "x": 1,
            "y": 0
          },
          {
            "ch": "G",
            "x": 3,
            "y": 5
          },
          {
            "ch": "A",
            "x": 6,
            "y": 2
          },
          {
            "ch": "N",
            "x": 0,
            "y": 0
          },
          {
            "ch": "T",
            "x": 2,
            "y": 3
          },
          {
            "ch": "I",
            "x": 2,
            "y": 0
          },
          {
            "ch": "C",
            "x": 2,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "COLORFUL",
        "cards": [
          {
            "ch": "C",
            "x": 0,
            "y": 6
          },
          {
            "ch": "O",
            "x": 1,
            "y": 2
          },
          {
            "ch": "L",
            "x": 1,
            "y": 0
          },
          {
            "ch": "O",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 1
          },
          {
            "ch": "F",
            "x": 2,
            "y": 6
          },
          {
            "ch": "U",
            "x": 5,
            "y": 1
          },
          {
            "ch": "L",
            "x": 7,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "CLARINET",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 4
          },
          {
            "ch": "L",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 7,
            "y": 0
          },
          {
            "ch": "R",
            "x": 6,
            "y": 3
          },
          {
            "ch": "I",
            "x": 4,
            "y": 6
          },
          {
            "ch": "N",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 0,
            "y": 6
          },
          {
            "ch": "T",
            "x": 1,
            "y": 0
          }
        ],
        "best": 8
      },
      {
        "word": "CHEERING",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 1
          },
          {
            "ch": "H",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 3,
            "y": 7
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 7,
            "y": 3
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "N",
            "x": 1,
            "y": 1
          },
          {
            "ch": "G",
            "x": 6,
            "y": 6
          }
        ],
        "best": 9
      },
      {
        "word": "DEVOTION",
        "cards": [
          {
            "ch": "D",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 6,
            "y": 3
          },
          {
            "ch": "V",
            "x": 2,
            "y": 5
          },
          {
            "ch": "O",
            "x": 1,
            "y": 3
          },
          {
            "ch": "T",
            "x": 5,
            "y": 2
          },
          {
            "ch": "I",
            "x": 6,
            "y": 0
          },
          {
            "ch": "O",
            "x": 2,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "DEFENDER",
        "cards": [
          {
            "ch": "D",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 3,
            "y": 5
          },
          {
            "ch": "F",
            "x": 7,
            "y": 3
          },
          {
            "ch": "E",
            "x": 4,
            "y": 7
          },
          {
            "ch": "N",
            "x": 4,
            "y": 5
          },
          {
            "ch": "D",
            "x": 6,
            "y": 5
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 2,
            "y": 5
          }
        ],
        "best": 5
      }
    ]
  },
  {
    "id": 148,
    "name": "Transcendence Core Pillar",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 49,
    "difficultyScore": 1803,
    "difficultyTier": "Transcendence",
    "walls": [
      ".####..#",
      "......##",
      "..#.....",
      ".#..#..#",
      "........",
      "#.......",
      "..##..#.",
      ".#...##."
    ],
    "words": [
      {
        "word": "ACCURATE",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "C",
            "x": 7,
            "y": 5
          },
          {
            "ch": "C",
            "x": 7,
            "y": 2
          },
          {
            "ch": "U",
            "x": 4,
            "y": 4
          },
          {
            "ch": "R",
            "x": 0,
            "y": 0
          },
          {
            "ch": "A",
            "x": 5,
            "y": 2
          },
          {
            "ch": "T",
            "x": 6,
            "y": 2
          },
          {
            "ch": "E",
            "x": 6,
            "y": 5
          }
        ],
        "best": 5
      },
      {
        "word": "DETECTOR",
        "cards": [
          {
            "ch": "D",
            "x": 7,
            "y": 6
          },
          {
            "ch": "E",
            "x": 4,
            "y": 1
          },
          {
            "ch": "T",
            "x": 4,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 3
          },
          {
            "ch": "C",
            "x": 3,
            "y": 7
          },
          {
            "ch": "T",
            "x": 0,
            "y": 4
          },
          {
            "ch": "O",
            "x": 4,
            "y": 6
          },
          {
            "ch": "R",
            "x": 5,
            "y": 6
          }
        ],
        "best": 10
      },
      {
        "word": "ACADEMIC",
        "cards": [
          {
            "ch": "A",
            "x": 5,
            "y": 3
          },
          {
            "ch": "C",
            "x": 1,
            "y": 5
          },
          {
            "ch": "A",
            "x": 4,
            "y": 7
          },
          {
            "ch": "D",
            "x": 7,
            "y": 4
          },
          {
            "ch": "E",
            "x": 0,
            "y": 1
          },
          {
            "ch": "M",
            "x": 4,
            "y": 2
          },
          {
            "ch": "I",
            "x": 5,
            "y": 1
          },
          {
            "ch": "C",
            "x": 4,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "CALMINGS",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 0
          },
          {
            "ch": "A",
            "x": 0,
            "y": 2
          },
          {
            "ch": "L",
            "x": 0,
            "y": 0
          },
          {
            "ch": "M",
            "x": 1,
            "y": 1
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "N",
            "x": 6,
            "y": 2
          },
          {
            "ch": "G",
            "x": 7,
            "y": 4
          },
          {
            "ch": "S",
            "x": 6,
            "y": 5
          }
        ],
        "best": 8
      },
      {
        "word": "DARKNESS",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 2
          },
          {
            "ch": "A",
            "x": 7,
            "y": 4
          },
          {
            "ch": "R",
            "x": 4,
            "y": 5
          },
          {
            "ch": "K",
            "x": 3,
            "y": 2
          },
          {
            "ch": "N",
            "x": 6,
            "y": 4
          },
          {
            "ch": "E",
            "x": 7,
            "y": 2
          },
          {
            "ch": "S",
            "x": 2,
            "y": 7
          },
          {
            "ch": "S",
            "x": 4,
            "y": 2
          }
        ],
        "best": 10
      },
      {
        "word": "DISASTER",
        "cards": [
          {
            "ch": "D",
            "x": 1,
            "y": 4
          },
          {
            "ch": "I",
            "x": 1,
            "y": 2
          },
          {
            "ch": "S",
            "x": 7,
            "y": 7
          },
          {
            "ch": "A",
            "x": 6,
            "y": 5
          },
          {
            "ch": "S",
            "x": 6,
            "y": 2
          },
          {
            "ch": "T",
            "x": 5,
            "y": 6
          },
          {
            "ch": "E",
            "x": 5,
            "y": 0
          },
          {
            "ch": "R",
            "x": 1,
            "y": 6
          }
        ],
        "best": 8
      }
    ]
  },
  {
    "id": 149,
    "name": "Transcendence Core Crest",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 42,
    "difficultyScore": 1804,
    "difficultyTier": "Transcendence",
    "walls": [
      "#....#.#",
      "...#..##",
      "..#....#",
      "........",
      "#...###.",
      "..##....",
      "........",
      "##...#.#"
    ],
    "words": [
      {
        "word": "CROSSING",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 1
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "O",
            "x": 0,
            "y": 3
          },
          {
            "ch": "S",
            "x": 3,
            "y": 0
          },
          {
            "ch": "S",
            "x": 1,
            "y": 3
          },
          {
            "ch": "I",
            "x": 7,
            "y": 6
          },
          {
            "ch": "N",
            "x": 3,
            "y": 4
          },
          {
            "ch": "G",
            "x": 4,
            "y": 2
          }
        ],
        "best": 6
      },
      {
        "word": "FROSTING",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 0,
            "y": 3
          },
          {
            "ch": "O",
            "x": 6,
            "y": 3
          },
          {
            "ch": "S",
            "x": 6,
            "y": 5
          },
          {
            "ch": "T",
            "x": 0,
            "y": 6
          },
          {
            "ch": "I",
            "x": 6,
            "y": 2
          },
          {
            "ch": "N",
            "x": 2,
            "y": 3
          },
          {
            "ch": "G",
            "x": 5,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "CHEERING",
        "cards": [
          {
            "ch": "C",
            "x": 6,
            "y": 3
          },
          {
            "ch": "H",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "I",
            "x": 4,
            "y": 3
          },
          {
            "ch": "N",
            "x": 0,
            "y": 2
          },
          {
            "ch": "G",
            "x": 7,
            "y": 6
          }
        ],
        "best": 7
      },
      {
        "word": "DELIVERY",
        "cards": [
          {
            "ch": "D",
            "x": 2,
            "y": 6
          },
          {
            "ch": "E",
            "x": 4,
            "y": 3
          },
          {
            "ch": "L",
            "x": 2,
            "y": 3
          },
          {
            "ch": "I",
            "x": 4,
            "y": 0
          },
          {
            "ch": "V",
            "x": 0,
            "y": 6
          },
          {
            "ch": "E",
            "x": 1,
            "y": 6
          },
          {
            "ch": "R",
            "x": 3,
            "y": 3
          },
          {
            "ch": "Y",
            "x": 1,
            "y": 1
          }
        ],
        "best": 8
      },
      {
        "word": "CERAMICS",
        "cards": [
          {
            "ch": "C",
            "x": 1,
            "y": 2
          },
          {
            "ch": "E",
            "x": 5,
            "y": 2
          },
          {
            "ch": "R",
            "x": 4,
            "y": 0
          },
          {
            "ch": "A",
            "x": 2,
            "y": 6
          },
          {
            "ch": "M",
            "x": 5,
            "y": 1
          },
          {
            "ch": "I",
            "x": 7,
            "y": 4
          },
          {
            "ch": "C",
            "x": 4,
            "y": 2
          },
          {
            "ch": "S",
            "x": 3,
            "y": 2
          }
        ],
        "best": 7
      },
      {
        "word": "CUPCAKES",
        "cards": [
          {
            "ch": "C",
            "x": 3,
            "y": 6
          },
          {
            "ch": "U",
            "x": 4,
            "y": 6
          },
          {
            "ch": "P",
            "x": 7,
            "y": 4
          },
          {
            "ch": "C",
            "x": 7,
            "y": 3
          },
          {
            "ch": "A",
            "x": 2,
            "y": 6
          },
          {
            "ch": "K",
            "x": 3,
            "y": 2
          },
          {
            "ch": "E",
            "x": 2,
            "y": 1
          },
          {
            "ch": "S",
            "x": 0,
            "y": 2
          }
        ],
        "best": 6
      }
    ]
  },
  {
    "id": 150,
    "name": "Transcendence Core Mastery",
    "chapterId": 15,
    "chapterName": "Transcendence Core",
    "n": 8,
    "optimalMoves": 49,
    "difficultyScore": 1833,
    "difficultyTier": "Transcendence",
    "walls": [
      ".......#",
      ".#....#.",
      "....##.#",
      ".....#..",
      ".#..##.#",
      "#......#",
      "....#..#",
      "#.#....#"
    ],
    "words": [
      {
        "word": "ABSTRACT",
        "cards": [
          {
            "ch": "A",
            "x": 6,
            "y": 0
          },
          {
            "ch": "B",
            "x": 1,
            "y": 0
          },
          {
            "ch": "S",
            "x": 6,
            "y": 5
          },
          {
            "ch": "T",
            "x": 6,
            "y": 6
          },
          {
            "ch": "R",
            "x": 2,
            "y": 4
          },
          {
            "ch": "A",
            "x": 3,
            "y": 6
          },
          {
            "ch": "C",
            "x": 5,
            "y": 0
          },
          {
            "ch": "T",
            "x": 4,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "GAUNTLET",
        "cards": [
          {
            "ch": "G",
            "x": 0,
            "y": 3
          },
          {
            "ch": "A",
            "x": 4,
            "y": 3
          },
          {
            "ch": "U",
            "x": 6,
            "y": 3
          },
          {
            "ch": "N",
            "x": 2,
            "y": 0
          },
          {
            "ch": "T",
            "x": 3,
            "y": 0
          },
          {
            "ch": "L",
            "x": 5,
            "y": 0
          },
          {
            "ch": "E",
            "x": 2,
            "y": 4
          },
          {
            "ch": "T",
            "x": 2,
            "y": 2
          }
        ],
        "best": 7
      },
      {
        "word": "ELEGANCE",
        "cards": [
          {
            "ch": "E",
            "x": 5,
            "y": 0
          },
          {
            "ch": "L",
            "x": 3,
            "y": 5
          },
          {
            "ch": "E",
            "x": 3,
            "y": 0
          },
          {
            "ch": "G",
            "x": 6,
            "y": 4
          },
          {
            "ch": "A",
            "x": 6,
            "y": 6
          },
          {
            "ch": "N",
            "x": 2,
            "y": 2
          },
          {
            "ch": "C",
            "x": 4,
            "y": 1
          },
          {
            "ch": "E",
            "x": 4,
            "y": 0
          }
        ],
        "best": 7
      },
      {
        "word": "FIREWORK",
        "cards": [
          {
            "ch": "F",
            "x": 3,
            "y": 7
          },
          {
            "ch": "I",
            "x": 3,
            "y": 0
          },
          {
            "ch": "R",
            "x": 7,
            "y": 3
          },
          {
            "ch": "E",
            "x": 1,
            "y": 6
          },
          {
            "ch": "W",
            "x": 3,
            "y": 5
          },
          {
            "ch": "O",
            "x": 5,
            "y": 7
          },
          {
            "ch": "R",
            "x": 4,
            "y": 7
          },
          {
            "ch": "K",
            "x": 2,
            "y": 1
          }
        ],
        "best": 10
      },
      {
        "word": "FUNCTION",
        "cards": [
          {
            "ch": "F",
            "x": 2,
            "y": 0
          },
          {
            "ch": "U",
            "x": 2,
            "y": 3
          },
          {
            "ch": "N",
            "x": 4,
            "y": 0
          },
          {
            "ch": "C",
            "x": 5,
            "y": 1
          },
          {
            "ch": "T",
            "x": 3,
            "y": 4
          },
          {
            "ch": "I",
            "x": 4,
            "y": 1
          },
          {
            "ch": "O",
            "x": 3,
            "y": 7
          },
          {
            "ch": "N",
            "x": 1,
            "y": 6
          }
        ],
        "best": 8
      },
      {
        "word": "FOUNTAIN",
        "cards": [
          {
            "ch": "F",
            "x": 4,
            "y": 3
          },
          {
            "ch": "O",
            "x": 3,
            "y": 3
          },
          {
            "ch": "U",
            "x": 1,
            "y": 6
          },
          {
            "ch": "N",
            "x": 6,
            "y": 5
          },
          {
            "ch": "T",
            "x": 0,
            "y": 3
          },
          {
            "ch": "A",
            "x": 6,
            "y": 2
          },
          {
            "ch": "I",
            "x": 3,
            "y": 6
          },
          {
            "ch": "N",
            "x": 4,
            "y": 0
          }
        ],
        "best": 10
      }
    ]
  }
];
