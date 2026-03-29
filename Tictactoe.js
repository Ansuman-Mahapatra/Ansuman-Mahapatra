/**
 * tictactoe.js — GitHub Actions Tic-Tac-Toe
 * Place this file at: .github/scripts/tictactoe.js
 *
 * Reads move from ISSUE_TITLE env var (format: ttt-play-ROW-COL)
 * Updates tictactoe.svg in the output branch
 */

const fs = require('fs');
const path = require('path');

// ─── Parse move from issue title ────────────────────────────────────────────
const issueTitle = process.env.ISSUE_TITLE || '';
const match = issueTitle.match(/^ttt-play-(\d)-(\d)$/);

if (!match) {
  console.log('Invalid move format. Expected: ttt-play-ROW-COL');
  process.exit(0);
}

const moveRow = parseInt(match[1]);
const moveCol = parseInt(match[2]);
const player = process.env.ISSUE_USER || 'visitor';

// ─── Load or init board ──────────────────────────────────────────────────────
const boardFile = path.join(process.cwd(), 'tictactoe.json');
let board = { cells: Array(9).fill(null), turn: 'X', winner: null, moves: 0 };

if (fs.existsSync(boardFile)) {
  try { board = JSON.parse(fs.readFileSync(boardFile, 'utf8')); } catch (_) {}
}

// Reset if game over
if (board.winner || board.moves === 9) {
  board = { cells: Array(9).fill(null), turn: 'X', winner: null, moves: 0 };
}

const idx = moveRow * 3 + moveCol;

// Validate move
if (board.cells[idx] !== null) {
  console.log(`Cell (${moveRow},${moveCol}) already taken. Move ignored.`);
  process.exit(0);
}

// Apply player move (X)
board.cells[idx] = 'X';
board.moves++;

// ─── Check winner ─────────────────────────────────────────────────────────────
const wins = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]           // diags
];

function checkWinner(cells) {
  for (const [a,b,c] of wins) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) return cells[a];
  }
  return null;
}

board.winner = checkWinner(board.cells);

// Bot plays O if no winner and cells left
if (!board.winner && board.moves < 9) {
  // Simple strategy: center > corner > side
  const priority = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  // Try to win
  let botMove = -1;
  for (const i of priority) {
    if (board.cells[i] === null) {
      board.cells[i] = 'O';
      if (checkWinner(board.cells) === 'O') { botMove = i; break; }
      board.cells[i] = null;
    }
  }
  // Try to block
  if (botMove === -1) {
    for (const i of priority) {
      if (board.cells[i] === null) {
        board.cells[i] = 'X';
        if (checkWinner(board.cells) === 'X') { board.cells[i] = 'O'; botMove = i; break; }
        board.cells[i] = null;
      }
    }
  }
  // Best available
  if (botMove === -1) {
    for (const i of priority) {
      if (board.cells[i] === null) { board.cells[i] = 'O'; botMove = i; break; }
    }
  }
  if (botMove !== -1) board.moves++;
  board.winner = checkWinner(board.cells);
}

// Save board state
fs.writeFileSync(boardFile, JSON.stringify(board, null, 2));

// ─── Generate SVG ─────────────────────────────────────────────────────────────
function cellSymbol(val) {
  if (val === 'X') return `<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="48" font-family="monospace" fill="#667eea" font-weight="bold">✕</text>`;
  if (val === 'O') return `<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="44" font-family="monospace" fill="#764ba2" font-weight="bold">○</text>`;
  return '';
}

const cellW = 100, cellH = 100, pad = 10;
const boardW = cellW * 3 + pad * 2, boardH = cellH * 3 + pad * 2 + 60;

let cells = '';
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    const x = pad + c * cellW;
    const y = 60 + pad + r * cellH;
    const val = board.cells[r * 3 + c];
    const bg = val ? '#1a1a2e' : '#16213e';
    cells += `
    <g transform="translate(${x},${y})">
      <rect width="${cellW-4}" height="${cellH-4}" rx="8" fill="${bg}" stroke="#667eea44" stroke-width="1.5"/>
      ${cellSymbol(val)}
    </g>`;
  }
}

let statusText = board.winner
  ? (board.winner === 'X' ? '🎉 You Win! Board resets next move.' : '🤖 Bot Wins! Board resets next move.')
  : board.moves === 9
    ? "🤝 Draw! Board resets next move."
    : `Your turn as ✕ — click a cell in the table above!`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${boardW}" height="${boardH}" viewBox="0 0 ${boardW} ${boardH}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1117"/>
      <stop offset="100%" style="stop-color:#161b22"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" rx="12" fill="url(#bg)"/>
  <text x="${boardW/2}" y="30" text-anchor="middle" font-size="16" fill="#667eea" font-family="monospace" font-weight="bold">🎮 Community Tic-Tac-Toe</text>
  <text x="${boardW/2}" y="52" text-anchor="middle" font-size="11" fill="#888" font-family="monospace">${statusText}</text>
  ${cells}
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'tictactoe.svg'), svg.trim());
console.log(`✅ Board updated. Winner: ${board.winner || 'none'}, Moves: ${board.moves}`);
