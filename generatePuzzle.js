// Fixed generatePuzzle.js
const fs = require('fs');
const path = require('path');

const wordBank = [
  { answer: "PIKACHU", clue: "Ash's electric partner" },
  { answer: "ZAPDOS", clue: "Electric legendary bird" },
  { answer: "CHARIZARD", clue: "Kanto fire-type final evolution" },
  { answer: "BULBASAUR", clue: "Grass starter with a bulb" },
  { answer: "SNORLAX", clue: "Sleeps in the road" },
  { answer: "EEVEE", clue: "Can evolve into many forms" },
  { answer: "MAGIKARP", clue: "Pathetic but evolves into Gyarados" },
  { answer: "MEWTWO", clue: "Cloned from Mew" },
  { answer: "KANTO", clue: "The first region" },
  { answer: "LUCARIO", clue: "Aura-using Fighting/Steel Pokémon" },
  { answer: "LAPRAS", clue: "Ice/Water transport Pokémon" },
  { answer: "POKEBALL", clue: "Used to catch Pokémon" },
  { answer: "NURSEJOY", clue: "Works at Pokémon Centers" },
  { answer: "TEAMROCKET", clue: "Villainous trio" },
  { answer: "SQUIRTLE", clue: "Water-type turtle starter" },
  { answer: "MEW", clue: "Mythical ancestor of all Pokemon"},
  { answer: "DITTO", clue: "Can transform into any Pokemon"},
  { answer: "GENGAR", clue: "Ghost-type with a mischievous smile"},
  { answer: "ONIX", clue: "Rock snake Pokemon"},
  { answer: "JIGGLYPUFF", clue: "Rock snake Pokemon"},
  { answer: "PSYDUCK", clue: "Headache-prone duck Pokemon"},
  { answer: "GOLDUCK", clue: "Evolved form of Psyduck"},
  { answer: "VULPIX", clue: "Fox with six orange tails"},
  { answer: "NINETALES", clue: "Fox with mystical white tails"},
  { answer: "DRAGONITE", clue: "Dragon that delievers mail"},
  { answer: "GROWLITHE", clue: "Loyal fire-type puppy"},
  { answer: "ARCANINE", clue: "Legendary-class fire dog"},
  { answer: "ABRA", clue: "Sleeps most of the time, then teleports"},
  { answer: "KADABRA", clue: "Holds a spoon to enhance psychic powers"},
  { answer: "ALAKAZAM", clue: "Master of spoon-bending"},
  { answer: "SANDSHREW", clue: "Ground-type that curls into a ball"},
  { answer: "NIDORINO", clue: "Poison-type male with a horn"},
  { answer: "NIDORINA", clue: "Poison-type female counterpart"},
  { answer: "CLEFAIRY", clue: "Moon-loving pink Pokemon"},
  { answer: "CLEFABLE", clue: "Evolved moon Pokemon"},
  { answer: "TOGEPI", clue: "Baby Pokemon often held by Misty"},
  { answer: "TOGETIC", clue: "Forgotten fairy type pokemon"},
  { answer: "SLOWPOKE", clue: "Very slow water type Pokemon"},
  { answer: "SLOWBRO", clue: "A pokemon with another Pokemon on it"},
  { answer: "GEODUDE", clue: "Rock-type with arms"},
  { answer: "GRAVELER", clue: "Rolls around as it moves"},
  { answer: "GOLEM", clue: "Final form of a rock with hands"},
  { answer: "PONYTA", clue: "Fire horse"},
  { answer: "RAPIDASH", clue: "Fast fire horse"},
  { answer: "SEEL", clue: "Pokemon that looks like a seel"},
  { answer: "DEWGONG", clue: "Looks like a big seel"},
  { answer: "MACHOP", clue: "Fighter with huge potential"},
  { answer: "MACHOKE", clue: "Wears the belt of a champion"},
  { answer: "MACHAMP", clue: "Four arms"},
  { answer: "POLIWAG", clue: "Tadpole"},
  { answer: "POLIWHIRL", clue: "Swirly-belly Pokemon"},
  { answer: "POLIWRATH", clue: "Water and fighting type pokemon"},
  { answer: "BELLSPROUT", clue: "Shmurda (If you watch Tyranitartube, you know)"},
  { answer: "WEEPINBELL", clue: "Venus flytrap Pokémon" },
  { answer: "VICTREEBEL", clue: "Carnivorous plant evolution" },
  { answer: "TENTACOOL", clue: "Jellyfish-like Water/Poison Pokémon" },
  { answer: "TENTACRUEL", clue: "Has 80 tentacles" },
  { answer: "MAGNEMITE", clue: "Electric/Steel ball with magnets" },
  { answer: "MAGNETON", clue: "Three Magnemites joined" },
  { answer: "FARFETCHD", clue: "Carries a leek" },
  { answer: "DODUO", clue: "Two-headed bird" },
  { answer: "DODRIO", clue: "Three-headed bird" },
  { answer: "SEAKING", clue: "Horned goldfish Pokémon" },
  { answer: "STARYU", clue: "Star-shaped Water-type" },
  { answer: "STARMIE", clue: "Evolved star Pokémon with a jewel core" },
  { answer: "MRMIME", clue: "Performs invisible walls" },
  { answer: "SCYTHER", clue: "Bug-type with scythe arms" },
  { answer: "PINSIR", clue: "Bug with massive pincers" },
  { answer: "TAUROS", clue: "Three-tailed charging bull" },
  { answer: "KABUTO", clue: "Fossilized dome Pokémon" },
  { answer: "KABUTOPS", clue: "Sharp fossil Pokémon" },
  { answer: "OMANYTE", clue: "Spiral fossil Pokémon" },
  { answer: "OMASTAR", clue: "Tentacled fossil evolution" },
  { answer: "AERODACTYL", clue: "Fossil flying dinosaur" },
  { answer: "DRATINI", clue: "Serpentine baby dragon" },
  { answer: "DRAGONAIR", clue: "Graceful, blue dragon" },
  { answer: "HITMONLEE", clue: "Kicking Fighting-type" },
  { answer: "HITMONCHAN", clue: "Boxing Pokémon" },
  { answer: "TYPHLOSION", clue: "Final form of Cyndaquil" },
  { answer: "FURRET", clue: "Long-bodied normal Pokémon" },
  { answer: "AMPHAROS", clue: "Electric lighthouse Pokémon" },
  { answer: "PHANPY", clue: "Small blue elephant Pokémon" },
  { answer: "DONPHAN", clue: "Rolls into a ball for defense" },
  { answer: "LANTURN", clue: "Lantern fish Pokémon" },
  { answer: "HOUNDOUR", clue: "Dark-type fire puppy" },
  { answer: "HOUNDOOM", clue: "Dark fire dog with horns" },
  { answer: "TYRANITAR", clue: "Armor-skinned pseudo-legendary" },
  { answer: "CROBAT", clue: "Fastest bat Pokémon" },
  { answer: "MILOTIC", clue: "Beautiful serpent Pokémon" },
  { answer: "BLAZIKEN", clue: "Fire/Fighting final evolution" },
  { answer: "AGGRON", clue: "Steel dinosaur-like Pokémon" },
  { answer: "SABLEYE", clue: "Gems in its eyes" },
  { answer: "SHEDINJA", clue: "Ghost of a discarded shell" },
  { answer: "ALTARIA", clue: "Cloud-winged Dragon/Flying Pokémon" },
  { answer: "BANETTE", clue: "Ghost doll with a zipper mouth" },
  { answer: "SALAMENCE", clue: "Dragon that finally got wings" },
  { answer: "METAGROSS", clue: "Steel/Psychic computer Pokémon" },
  { answer: "TURTWIG", clue: "Grass-type turtle from Sinnoh" },
  { answer: "GARCHOMP", clue: "Dragon/ground land shark" },
  { answer: "RIOLU", clue: "Baby Fighting-type with aura" },
  { answer: "GALLADE", clue: "Psychic knight with blades" },
  { answer: "FROAKIE", clue: "Bubble frog starter" },
  { answer: "GRENINJA", clue: "Water ninja frog Pokémon" },
  { answer: "TALONFLAME", clue: "Fire bird with incredible speed" },
  { answer: "GOOMY", clue: "Slimy dragon baby" },
  { answer: "GOODRA", clue: "Slimy but strong dragon" },
  { answer: "NOIVERN", clue: "Soundwave bat dragon" },
  { answer: "DECIDUEYE", clue: "Grass ghost archer owl" },
  { answer: "LYCANROC", clue: "Rock-type wolf with 3 forms" },
  { answer: "TOXTRICITY", clue: "Electric/Punk poison guitarist" },
  { answer: "DRAGAPULT", clue: "Dragon/Ghost that launches Dreepy" }
];

const gridSize = 20;
const maxWords = 30;

function getRandomWords(n) {
  const shuffled = [...wordBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

function tryPlaceWord(word, used) {
  const directions = ['across', 'down'];
  const answer = word.answer;

  for (const direction of directions) {
    const maxRow = direction === 'across' ? gridSize : gridSize - answer.length;
    const maxCol = direction === 'down' ? gridSize : gridSize - answer.length;

    for (let attempt = 0; attempt < 100; attempt++) {
      const row = Math.floor(Math.random() * maxRow);
      const col = Math.floor(Math.random() * maxCol);

      let conflict = false;
      for (let i = 0; i < answer.length; i++) {
        const r = direction === 'across' ? row : row + i;
        const c = direction === 'across' ? col + i : col;
        const idx = r * gridSize + c;
        if (used.has(idx)) {
          conflict = true;
          break;
        }
      }

      if (!conflict) {
        for (let i = 0; i < answer.length; i++) {
          const r = direction === 'across' ? row : row + i;
          const c = direction === 'across' ? col + i : col;
          const idx = r * gridSize + c;
          used.add(idx);
        }
        return { ...word, row, col, direction };
      }
    }
  }

  return null;
}

function placeWords(words) {
  const placed = [];
  const used = new Set();
  let number = 1;
  for (let word of words) {
    const placedWord = tryPlaceWord(word, used);
    if (placedWord) {
      placedWord.number = number++;
      placed.push(placedWord);
    }
  }
  return { placed, used };
}

function generateBlackCells(usedCells) {
  const blackCells = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    if (!usedCells.has(i)) {
      blackCells.push(i);
    }
  }
  return blackCells;
}

function savePuzzle(puzzle, filename = 'daily-puzzle.json') {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(puzzle, null, 2));
  console.log(`✅ Puzzle saved to ${filename}`);
}

function generatePuzzle() {
  const selectedWords = getRandomWords(maxWords);
  const { placed, used } = placeWords(selectedWords);
  const blackCells = generateBlackCells(used);
  const puzzle = {
    date: new Date().toISOString().slice(0, 10),
    blackCells,
    words: placed
  };
  savePuzzle(puzzle);
}

generatePuzzle();
