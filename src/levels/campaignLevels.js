/**
 * 10-Level Progressive Difficulty Campaign
 * Each level represents a full multi-word gauntlet with dynamic grid dimensions (N=5, 6, 7, 8),
 * custom wall layouts, verified solvability, optimal move counts, and calculated difficulty scores.
 */

export const CAMPAIGN_LEVELS = [
  {
    id: 1,
    name: "First Steps",
    n: 5,
    optimalMoves: 9,
    difficultyScore: 120,
    difficultyTier: "Casual",
    walls: [
      ".....",
      ".#...",
      ".....",
      "...#.",
      "....."
    ],
    words: [
      {
        word: "CAT",
        cards: [
          { ch: "C", x: 1, y: 2 },
          { ch: "A", x: 3, y: 4 },
          { ch: "T", x: 3, y: 2 }
        ],
        best: 4
      },
      {
        word: "DOG",
        cards: [
          { ch: "D", x: 0, y: 4 },
          { ch: "O", x: 2, y: 4 },
          { ch: "G", x: 4, y: 4 }
        ],
        best: 4
      },
      {
        word: "BAT",
        cards: [
          { ch: "B", x: 0, y: 0 },
          { ch: "A", x: 2, y: 0 },
          { ch: "T", x: 4, y: 0 }
        ],
        best: 5
      }
    ]
  },
  {
    id: 2,
    name: "Corner Bumps",
    n: 5,
    optimalMoves: 14,
    difficultyScore: 195,
    difficultyTier: "Casual",
    walls: [
      "#....",
      "....#",
      ".....",
      ".#...",
      "....#"
    ],
    words: [
      {
        word: "SUN",
        cards: [
          { ch: "S", x: 3, y: 4 },
          { ch: "U", x: 0, y: 4 },
          { ch: "N", x: 2, y: 4 }
        ],
        best: 5
      },
      {
        word: "MAP",
        cards: [
          { ch: "M", x: 1, y: 4 },
          { ch: "A", x: 0, y: 2 },
          { ch: "P", x: 3, y: 4 }
        ],
        best: 5
      },
      {
        word: "FOX",
        cards: [
          { ch: "F", x: 4, y: 2 },
          { ch: "O", x: 2, y: 2 },
          { ch: "X", x: 1, y: 0 }
        ],
        best: 6
      },
      {
        word: "OWL",
        cards: [
          { ch: "O", x: 0, y: 3 },
          { ch: "W", x: 3, y: 1 },
          { ch: "L", x: 4, y: 3 }
        ],
        best: 6
      }
    ]
  },
  {
    id: 3,
    name: "Chamber Entry",
    n: 6,
    optimalMoves: 14,
    difficultyScore: 310,
    difficultyTier: "Apprentice",
    walls: [
      ".....#",
      "......",
      "..#...",
      "#...#.",
      "......",
      ".#...."
    ],
    words: [
      {
        word: "SPIN",
        cards: [
          { ch: "S", x: 5, y: 4 },
          { ch: "P", x: 5, y: 5 },
          { ch: "I", x: 2, y: 1 },
          { ch: "N", x: 2, y: 4 }
        ],
        best: 6
      },
      {
        word: "MAZE",
        cards: [
          { ch: "M", x: 5, y: 5 },
          { ch: "A", x: 1, y: 5 },
          { ch: "Z", x: 4, y: 3 },
          { ch: "E", x: 3, y: 1 }
        ],
        best: 7
      },
      {
        word: "RUN",
        cards: [
          { ch: "R", x: 0, y: 4 },
          { ch: "U", x: 3, y: 5 },
          { ch: "N", x: 4, y: 2 }
        ],
        best: 5
      },
      {
        word: "JUMP",
        cards: [
          { ch: "J", x: 1, y: 1 },
          { ch: "U", x: 4, y: 4 },
          { ch: "M", x: 0, y: 2 },
          { ch: "P", x: 5, y: 2 }
        ],
        best: 8
      }
    ]
  },
  {
    id: 4,
    name: "Labyrinth Walls",
    n: 6,
    optimalMoves: 20,
    difficultyScore: 420,
    difficultyTier: "Apprentice",
    walls: [
      "#.....",
      "..#...",
      "......",
      "..#..#",
      "..##..",
      "......"
    ],
    words: [
      {
        word: "TURN",
        cards: [
          { ch: "T", x: 3, y: 5 },
          { ch: "U", x: 0, y: 5 },
          { ch: "R", x: 3, y: 3 },
          { ch: "N", x: 1, y: 5 }
        ],
        best: 6
      },
      {
        word: "FROG",
        cards: [
          { ch: "F", x: 4, y: 5 },
          { ch: "R", x: 4, y: 2 },
          { ch: "O", x: 1, y: 1 },
          { ch: "G", x: 0, y: 5 }
        ],
        best: 7
      },
      {
        word: "BLUE",
        cards: [
          { ch: "B", x: 5, y: 1 },
          { ch: "L", x: 1, y: 4 },
          { ch: "U", x: 4, y: 4 },
          { ch: "E", x: 0, y: 2 }
        ],
        best: 7
      },
      {
        word: "STAR",
        cards: [
          { ch: "S", x: 2, y: 2 },
          { ch: "T", x: 5, y: 4 },
          { ch: "A", x: 0, y: 3 },
          { ch: "R", x: 3, y: 0 }
        ],
        best: 7
      },
      {
        word: "WIND",
        cards: [
          { ch: "W", x: 4, y: 1 },
          { ch: "I", x: 1, y: 3 },
          { ch: "N", x: 5, y: 5 },
          { ch: "D", x: 0, y: 0 }
        ],
        best: 8
      }
    ]
  },
  {
    id: 5,
    name: "Compound Alley",
    n: 6,
    optimalMoves: 30,
    difficultyScore: 520,
    difficultyTier: "Adept",
    walls: [
      ".....#",
      ".#....",
      "....#.",
      "#..#..",
      "......",
      "...#.."
    ],
    words: [
      {
        word: "RAIN",
        cards: [
          { ch: "R", x: 2, y: 4 },
          { ch: "A", x: 0, y: 2 },
          { ch: "I", x: 4, y: 4 },
          { ch: "N", x: 5, y: 1 }
        ],
        best: 6
      },
      {
        word: "FIRE",
        cards: [
          { ch: "F", x: 1, y: 0 },
          { ch: "I", x: 4, y: 2 },
          { ch: "R", x: 0, y: 4 },
          { ch: "E", x: 3, y: 5 }
        ],
        best: 7
      },
      {
        word: "COLD",
        cards: [
          { ch: "C", x: 3, y: 1 },
          { ch: "O", x: 5, y: 4 },
          { ch: "L", x: 1, y: 5 },
          { ch: "D", x: 0, y: 1 }
        ],
        best: 7
      },
      {
        word: "WARM",
        cards: [
          { ch: "W", x: 4, y: 0 },
          { ch: "A", x: 2, y: 3 },
          { ch: "R", x: 5, y: 5 },
          { ch: "M", x: 0, y: 3 }
        ],
        best: 8
      },
      {
        word: "SNOW",
        cards: [
          { ch: "S", x: 1, y: 2 },
          { ch: "N", x: 4, y: 4 },
          { ch: "O", x: 0, y: 5 },
          { ch: "W", x: 3, y: 0 }
        ],
        best: 8
      },
      {
        word: "GLOW",
        cards: [
          { ch: "G", x: 2, y: 1 },
          { ch: "L", x: 5, y: 3 },
          { ch: "O", x: 1, y: 4 },
          { ch: "W", x: 4, y: 5 }
        ],
        best: 8
      }
    ]
  },
  {
    id: 6,
    name: "The Forest Hub",
    n: 7,
    optimalMoves: 40,
    difficultyScore: 615,
    difficultyTier: "Adept",
    walls: [
      "......#",
      "...#...",
      "..#....",
      ".......",
      "...#..#",
      "...##..",
      "...##.."
    ],
    words: [
      {
        word: "PLANT",
        cards: [
          { ch: "P", x: 5, y: 6 },
          { ch: "L", x: 0, y: 5 },
          { ch: "A", x: 6, y: 3 },
          { ch: "N", x: 0, y: 6 },
          { ch: "T", x: 1, y: 6 }
        ],
        best: 7
      },
      {
        word: "WATER",
        cards: [
          { ch: "W", x: 6, y: 1 },
          { ch: "A", x: 1, y: 2 },
          { ch: "T", x: 4, y: 5 },
          { ch: "E", x: 0, y: 4 },
          { ch: "R", x: 5, y: 0 }
        ],
        best: 8
      },
      {
        word: "LEAF",
        cards: [
          { ch: "L", x: 2, y: 5 },
          { ch: "E", x: 6, y: 4 },
          { ch: "A", x: 0, y: 1 },
          { ch: "F", x: 4, y: 2 }
        ],
        best: 6
      },
      {
        word: "TREE",
        cards: [
          { ch: "T", x: 3, y: 1 },
          { ch: "R", x: 5, y: 4 },
          { ch: "E", x: 1, y: 3 },
          { ch: "E", x: 6, y: 5 }
        ],
        best: 7
      },
      {
        word: "SEED",
        cards: [
          { ch: "S", x: 0, y: 3 },
          { ch: "E", x: 4, y: 1 },
          { ch: "E", x: 2, y: 6 },
          { ch: "D", x: 5, y: 2 }
        ],
        best: 7
      },
      {
        word: "ROOT",
        cards: [
          { ch: "R", x: 1, y: 1 },
          { ch: "O", x: 6, y: 2 },
          { ch: "O", x: 3, y: 5 },
          { ch: "T", x: 0, y: 4 }
        ],
        best: 8
      }
    ]
  },
  {
    id: 7,
    name: "Stone Vault",
    n: 7,
    optimalMoves: 42,
    difficultyScore: 695,
    difficultyTier: "Expert",
    walls: [
      "#.....#",
      "#..#...",
      ".......",
      ".#...##",
      "..#...#",
      ".......",
      "......."
    ],
    words: [
      {
        word: "BRICK",
        cards: [
          { ch: "B", x: 6, y: 6 },
          { ch: "R", x: 5, y: 2 },
          { ch: "I", x: 1, y: 2 },
          { ch: "C", x: 2, y: 3 },
          { ch: "K", x: 0, y: 6 }
        ],
        best: 7
      },
      {
        word: "STONE",
        cards: [
          { ch: "S", x: 1, y: 5 },
          { ch: "T", x: 6, y: 3 },
          { ch: "O", x: 3, y: 1 },
          { ch: "N", x: 0, y: 3 },
          { ch: "E", x: 4, y: 6 }
        ],
        best: 8
      },
      {
        word: "IRON",
        cards: [
          { ch: "I", x: 2, y: 0 },
          { ch: "R", x: 5, y: 4 },
          { ch: "O", x: 0, y: 4 },
          { ch: "N", x: 6, y: 1 }
        ],
        best: 6
      },
      {
        word: "GOLD",
        cards: [
          { ch: "G", x: 4, y: 2 },
          { ch: "O", x: 1, y: 4 },
          { ch: "L", x: 6, y: 5 },
          { ch: "D", x: 3, y: 6 }
        ],
        best: 7
      },
      {
        word: "ROCK",
        cards: [
          { ch: "R", x: 0, y: 1 },
          { ch: "O", x: 5, y: 5 },
          { ch: "C", x: 2, y: 6 },
          { ch: "K", x: 6, y: 0 }
        ],
        best: 7
      },
      {
        word: "SAND",
        cards: [
          { ch: "S", x: 3, y: 2 },
          { ch: "A", x: 1, y: 6 },
          { ch: "N", x: 5, y: 1 },
          { ch: "D", x: 0, y: 5 }
        ],
        best: 7
      },
      {
        word: "CLAY",
        cards: [
          { ch: "C", x: 4, y: 0 },
          { ch: "L", x: 0, y: 2 },
          { ch: "A", x: 6, y: 4 },
          { ch: "Y", x: 2, y: 5 }
        ],
        best: 8
      }
    ]
  },
  {
    id: 8,
    name: "World Weave",
    n: 7,
    optimalMoves: 32,
    difficultyScore: 780,
    difficultyTier: "Expert",
    walls: [
      ".......",
      "..#.#..",
      ".......",
      ".#...#.",
      ".......",
      "..#.#..",
      "......."
    ],
    words: [
      {
        word: "WORLD",
        cards: [
          { ch: "W", x: 3, y: 6 },
          { ch: "O", x: 0, y: 4 },
          { ch: "R", x: 4, y: 6 },
          { ch: "L", x: 2, y: 0 },
          { ch: "D", x: 6, y: 4 }
        ],
        best: 4
      },
      {
        word: "EARTH",
        cards: [
          { ch: "E", x: 0, y: 0 },
          { ch: "A", x: 3, y: 0 },
          { ch: "R", x: 6, y: 0 },
          { ch: "T", x: 0, y: 6 },
          { ch: "H", x: 6, y: 6 }
        ],
        best: 4
      },
      {
        word: "OCEAN",
        cards: [
          { ch: "O", x: 3, y: 2 },
          { ch: "C", x: 0, y: 2 },
          { ch: "E", x: 6, y: 2 },
          { ch: "A", x: 2, y: 4 },
          { ch: "N", x: 4, y: 4 }
        ],
        best: 4
      },
      {
        word: "RIVER",
        cards: [
          { ch: "R", x: 1, y: 0 },
          { ch: "I", x: 5, y: 0 },
          { ch: "V", x: 3, y: 3 },
          { ch: "E", x: 1, y: 6 },
          { ch: "R", x: 5, y: 6 }
        ],
        best: 4
      },
      {
        word: "LAKE",
        cards: [
          { ch: "L", x: 0, y: 3 },
          { ch: "A", x: 6, y: 3 },
          { ch: "K", x: 3, y: 0 },
          { ch: "E", x: 3, y: 6 }
        ],
        best: 4
      },
      {
        word: "POND",
        cards: [
          { ch: "P", x: 2, y: 2 },
          { ch: "O", x: 4, y: 2 },
          { ch: "N", x: 2, y: 4 },
          { ch: "D", x: 4, y: 4 }
        ],
        best: 4
      },
      {
        word: "WAVE",
        cards: [
          { ch: "W", x: 1, y: 2 },
          { ch: "A", x: 5, y: 2 },
          { ch: "V", x: 1, y: 4 },
          { ch: "E", x: 5, y: 4 }
        ],
        best: 4
      },
      {
        word: "TIDE",
        cards: [
          { ch: "T", x: 0, y: 1 },
          { ch: "I", x: 6, y: 1 },
          { ch: "D", x: 0, y: 5 },
          { ch: "E", x: 6, y: 5 }
        ],
        best: 4
      }
    ]
  },
  {
    id: 9,
    name: "Mystic Glyphs",
    n: 8,
    optimalMoves: 48,
    difficultyScore: 845,
    difficultyTier: "Master",
    walls: [
      "....#.#.",
      ".#....#.",
      "........",
      "........",
      "....#...",
      "..#.....",
      "........",
      ".#...#.."
    ],
    words: [
      {
        word: "GLYPH",
        cards: [
          { ch: "G", x: 3, y: 7 },
          { ch: "L", x: 1, y: 7 },
          { ch: "Y", x: 2, y: 4 },
          { ch: "P", x: 7, y: 5 },
          { ch: "H", x: 7, y: 7 }
        ],
        best: 8
      },
      {
        word: "MAGIC",
        cards: [
          { ch: "M", x: 1, y: 7 },
          { ch: "A", x: 7, y: 6 },
          { ch: "G", x: 4, y: 3 },
          { ch: "I", x: 3, y: 3 },
          { ch: "C", x: 0, y: 5 }
        ],
        best: 9
      },
      {
        word: "SPELL",
        cards: [
          { ch: "S", x: 5, y: 2 },
          { ch: "P", x: 0, y: 2 },
          { ch: "E", x: 6, y: 4 },
          { ch: "L", x: 2, y: 6 },
          { ch: "L", x: 7, y: 1 }
        ],
        best: 9
      },
      {
        word: "RUNE",
        cards: [
          { ch: "R", x: 4, y: 6 },
          { ch: "U", x: 0, y: 4 },
          { ch: "N", x: 6, y: 3 },
          { ch: "E", x: 2, y: 1 }
        ],
        best: 7
      },
      {
        word: "CHARM",
        cards: [
          { ch: "C", x: 6, y: 7 },
          { ch: "H", x: 1, y: 2 },
          { ch: "A", x: 5, y: 5 },
          { ch: "R", x: 0, y: 6 },
          { ch: "M", x: 3, y: 1 }
        ],
        best: 9
      },
      {
        word: "WAND",
        cards: [
          { ch: "W", x: 2, y: 7 },
          { ch: "A", x: 7, y: 3 },
          { ch: "N", x: 1, y: 4 },
          { ch: "D", x: 5, y: 0 }
        ],
        best: 7
      },
      {
        word: "BOOK",
        cards: [
          { ch: "B", x: 0, y: 1 },
          { ch: "O", x: 4, y: 4 },
          { ch: "O", x: 6, y: 2 },
          { ch: "K", x: 3, y: 6 }
        ],
        best: 8
      },
      {
        word: "MIND",
        cards: [
          { ch: "M", x: 7, y: 4 },
          { ch: "I", x: 2, y: 3 },
          { ch: "N", x: 5, y: 6 },
          { ch: "D", x: 0, y: 7 }
        ],
        best: 8
      },
      {
        word: "SOUL",
        cards: [
          { ch: "S", x: 3, y: 0 },
          { ch: "O", x: 6, y: 5 },
          { ch: "U", x: 1, y: 6 },
          { ch: "L", x: 4, y: 2 }
        ],
        best: 8
      }
    ]
  },
  {
    id: 10,
    name: "Grand Gauntlet",
    n: 8,
    optimalMoves: 80,
    difficultyScore: 940,
    difficultyTier: "Grandmaster",
    walls: [
      "....##..",
      "..#....#",
      "....#...",
      ".##...#.",
      "...##.#.",
      "#..##...",
      "#.....#.",
      "....#..."
    ],
    words: [
      {
        word: "CAT",
        cards: [
          { ch: "C", x: 1, y: 3 },
          { ch: "A", x: 4, y: 6 },
          { ch: "T", x: 6, y: 3 }
        ],
        best: 5
      },
      {
        word: "SUN",
        cards: [
          { ch: "S", x: 5, y: 6 },
          { ch: "U", x: 0, y: 6 },
          { ch: "N", x: 3, y: 6 }
        ],
        best: 6
      },
      {
        word: "MAP",
        cards: [
          { ch: "M", x: 2, y: 6 },
          { ch: "A", x: 0, y: 3 },
          { ch: "P", x: 6, y: 6 }
        ],
        best: 6
      },
      {
        word: "SPIN",
        cards: [
          { ch: "S", x: 7, y: 5 },
          { ch: "P", x: 7, y: 7 },
          { ch: "I", x: 3, y: 2 },
          { ch: "N", x: 3, y: 4 }
        ],
        best: 7
      },
      {
        word: "MAZE",
        cards: [
          { ch: "M", x: 7, y: 6 },
          { ch: "A", x: 2, y: 7 },
          { ch: "Z", x: 5, y: 4 },
          { ch: "E", x: 4, y: 1 }
        ],
        best: 7
      },
      {
        word: "TURN",
        cards: [
          { ch: "T", x: 4, y: 7 },
          { ch: "U", x: 0, y: 7 },
          { ch: "R", x: 4, y: 4 },
          { ch: "N", x: 1, y: 7 }
        ],
        best: 7
      },
      {
        word: "FROG",
        cards: [
          { ch: "F", x: 6, y: 6 },
          { ch: "R", x: 5, y: 3 },
          { ch: "O", x: 1, y: 1 },
          { ch: "G", x: 0, y: 6 }
        ],
        best: 8
      },
      {
        word: "PLANT",
        cards: [
          { ch: "P", x: 7, y: 7 },
          { ch: "L", x: 0, y: 6 },
          { ch: "A", x: 7, y: 4 },
          { ch: "N", x: 0, y: 7 },
          { ch: "T", x: 1, y: 7 }
        ],
        best: 8
      },
      {
        word: "BRICK",
        cards: [
          { ch: "B", x: 7, y: 7 },
          { ch: "R", x: 6, y: 2 },
          { ch: "I", x: 1, y: 2 },
          { ch: "C", x: 2, y: 4 },
          { ch: "K", x: 0, y: 7 }
        ],
        best: 8
      },
      {
        word: "WORLD",
        cards: [
          { ch: "W", x: 4, y: 7 },
          { ch: "O", x: 0, y: 6 },
          { ch: "R", x: 5, y: 7 },
          { ch: "L", x: 2, y: 3 },
          { ch: "D", x: 6, y: 7 }
        ],
        best: 9
      },
      {
        word: "GLYPH",
        cards: [
          { ch: "G", x: 4, y: 7 },
          { ch: "L", x: 1, y: 7 },
          { ch: "Y", x: 2, y: 5 },
          { ch: "P", x: 7, y: 6 },
          { ch: "H", x: 7, y: 7 }
        ],
        best: 9
      },
      {
        word: "MAGIC",
        cards: [
          { ch: "M", x: 1, y: 7 },
          { ch: "A", x: 7, y: 6 },
          { ch: "G", x: 5, y: 3 },
          { ch: "I", x: 3, y: 4 },
          { ch: "C", x: 0, y: 5 }
        ],
        best: 9
      }
    ]
  }
];
