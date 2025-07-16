const gridSize = 20;
let expectedLetters = {}; // key = index, value = correct letter

async function loadPuzzle() {
  const res = await fetch('daily-puzzle.json');
  const data = await res.json();

  const crossword = document.getElementById('crossword');
  const clueList = document.getElementById('clue-list');

  crossword.innerHTML = "";
  clueList.innerHTML = "";
  expectedLetters = {}; // Reset it

  const totalCells = gridSize * gridSize;
  const cells = [];
  const usedIndices = new Set();

  // Build grid with cell wrappers and clue numbers
  for (let i = 0; i < totalCells; i++) {
    const input = document.createElement('input');
    input.className = 'cell';
    input.maxLength = 1;

    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    const numberHere = data.words.find(
      w => w.number && w.row === row && w.col === col
    );

    if (numberHere) {
      const wrapper = document.createElement('div');
      wrapper.className = 'cell-wrapper';

      const number = document.createElement('span');
      number.className = 'cell-number';
      number.textContent = numberHere.number;

      wrapper.appendChild(number);
      wrapper.appendChild(input);
      crossword.appendChild(wrapper);
    } else {
      crossword.appendChild(input);
    }

    cells.push(input);
  }

  // Place words and store correct answers
  data.words.forEach((word, index) => {
    const { answer, row, col, direction } = word;

    for (let i = 0; i < answer.length; i++) {
      const r = direction === 'across' ? row : row + i;
      const c = direction === 'across' ? col + i : col;
      const idx = r * gridSize + c;

      usedIndices.add(idx);
      const cell = cells[idx];
      cell.disabled = false;
      cell.classList.remove('black');

      expectedLetters[idx] = answer[i].toUpperCase();
      cell.style.color = "black";
    }

    const li = document.createElement('li');
    li.textContent = `${word.number}. ${word.clue} (${direction})`;
    clueList.appendChild(li);
  });

  // Apply black cells (skip used)
  data.blackCells.forEach(idx => {
    if (!usedIndices.has(idx) && idx >= 0 && idx < totalCells) {
      cells[idx].classList.add('black');
      cells[idx].disabled = true;
    } else if (!usedIndices.as(idx)) {
      cells[idx].classList.add('unused');
      cells[idx].disabled = true;
    }
  });

  // Attach checkAnswers handler
  document.getElementById('check-answers').addEventListener('click', () => {
    cells.forEach((cell, idx) => {
      if (expectedLetters[idx]) {
        const userInput = cell.value.toUpperCase();
        if (userInput === expectedLetters[idx]) {
          cell.style.color = 'blue';
        } else {
          cell.style.color = 'red';
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", loadPuzzle);
