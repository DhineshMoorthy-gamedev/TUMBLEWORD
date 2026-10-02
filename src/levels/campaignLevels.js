/**
 * 100-Level Progressive Difficulty Campaign (300 Stars Total)
 * 10 Chapters x 10 Levels each with verified solvability, dynamic grid dimensions (N=5, 6, 7, 8),
 * mathematically calibrated optimal move budgets, and progressive difficulty scores (50 -> 1000).
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
  }
];
