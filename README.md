Pokémon Crossword Generator
A dynamic, daily Pokémon-themed crossword puzzle built with HTML, CSS, JavaScript, and Node.js. This project randomly generates crossword puzzles using a large bank of Pokémon clues and answers, then renders them in the browser in a clean, interactive grid.


Features
 Over 100 Pokémon-related clues from all generations

 Generates a new 20×20 crossword grid daily

 Supports horizontal and vertical word placement

 Automatically fills unused cells with black squares

 Instant feedback on correct/incorrect letter inputs

 Easy to run locally or host online

 Project Structure
├── index.html
├── style.css
├── script.js               # Frontend logic for rendering the puzzle
├── generatePuzzle.js       # Node script to generate daily puzzle JSON
├── daily-puzzle.json       # Auto-generated puzzle file
├── scheduler.js (optional) # Cron-style puzzle generator
└── README.md
 How It Works
Puzzle Generation

Run node generatePuzzle.js

Selects up to 30 random Pokémon words from the word bank

Places them randomly on a 20×20 grid (avoiding overlaps)

Fills the remaining unused cells as black squares

Outputs puzzle to daily-puzzle.json

Frontend Rendering

script.js reads from daily-puzzle.json

Dynamically builds an interactive crossword interface

Allows users to input answers and check them with color-coded feedback

Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/yourusername/pokemon-crossword.git
cd pokemon-crossword
2. Install Node.js (if not already)
bash
Copy
Edit
# check if installed
node -v
3. Generate a puzzle
bash
Copy
Edit
node generatePuzzle.js
4. Open the game in your browser
bash
Copy
Edit
# Open index.html in your browser
Optional: Automate Puzzle Generation
You can run scheduler.js with a job scheduler like cron or use setInterval() in a Node app to regenerate puzzles every 24 hours.

📸 Example Clues
PIKACHU — Ash's electric partner

GRENINJA — Water ninja frog Pokémon

TEAMROCKET — Villainous trio

ZAPDOS — Electric legendary bird

 To Do
 Add word overlap logic (crosswords that intersect at shared letters)

 Include a timer and scoring

 Add difficulty levels

 Deploy to Vercel or GitHub Pages

 License
This project is open-source and available under the MIT License.
