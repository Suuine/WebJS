const BOARD_SIZE = 5;
const INITIAL_TIME = 10 * 60; 

let gameTimerId;
let moveCount = 0;
let minimumMoves = 0;
let initialGameBoard;
let currentBoard = [];
let moveHistory = [];
let stateHistory = [];
let timeRemaining = INITIAL_TIME;
let isTimerActive = false;
let currentConfigId = null;
let usedConfigs = JSON.parse(localStorage.getItem('usedConfigs')) || [];
let selectedConfigId = null;
let lastCellClicked = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-game').addEventListener('click', startNewGame);
    document.getElementById('restart').addEventListener('click', restartCurrentGame);
    document.getElementById('restart').addEventListener('click', () => {
        setupGameBoard(initialGameBoard);
        resetGameState();
    });

    startNewGame();
});

async function loadConfiguration(configId) {
    if (![1, 2, 3].includes(configId)) {
        throw new Error(`Невірний номер конфігурації: ${configId}. Допустимі значення: 1, 2, 3.`);
    }

    const url = `data/config${configId}.json`;
    console.log(`Завантаження конфігурації ${configId} з ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status} (${response.statusText})`);
        }

        const data = await response.json();
        if (!data.board || !Array.isArray(data.board) || !data.minSteps) {
            throw new Error("Некоректний формат JSON: очікується об'єкт з полями 'board' та 'minSteps'.");
        }

        console.log(`✅ Конфігурація ${configId} успішно завантажена`);
        return data;
    } catch (error) {
        console.error(`❌ Помилка завантаження ${url}:`, error);
        throw error;
    }
}

async function startNewGame() {
    let configId;
    do {
        configId = Math.floor(Math.random() * 3) + 1;
    } while ((usedConfigs.includes(configId) && usedConfigs.length < 3) || configId === currentConfigId);

    console.log(`Вибрана конфігурація: ${configId}`);

    currentConfigId = configId;

    let configData;
    try {
        configData = await loadConfiguration(configId);
    } catch (error) {
        alert('⚠️ Не вдалося завантажити конфігурацію. Спробуйте пізніше.');
        return;
    }

    minimumMoves = configData.minSteps;
    initialGameBoard = configData.board;
    setupGameBoard(initialGameBoard);
    resetGameState();
    updateMinimumMovesDisplay();
    updateBoardDisplay();
}

function setupGameBoard(board) {
    const boardContainer = document.getElementById('game-board');
    boardContainer.innerHTML = '';
    currentBoard = board.map(row => [...row]);

    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell' + (board[row][col] ? ' active' : '');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleCellClick(row, col));
            boardContainer.appendChild(cell);
        }
    }
}

function handleCellClick(row, col) {
    const currentCell = `${row},${col}`;

    if (!isTimerActive) {
        isTimerActive = true;
        startTimer();
    }

    if (lastCellClicked === currentCell && moveHistory.length > 0) {
        currentBoard = JSON.parse(JSON.stringify(stateHistory[stateHistory.length - 1]));
        moveHistory.pop();
        stateHistory.pop();
        moveCount--;
        updateMoveCountDisplay();
        updateBoardDisplay();
        lastCellClicked = null;
        return;
    }

    saveGameState();

    toggleCell(row, col);
    toggleCell(row - 1, col);
    toggleCell(row + 1, col);
    toggleCell(row, col - 1);
    toggleCell(row, col + 1);

    moveCount++;
    updateMoveCountDisplay();
    updateBoardDisplay();

    lastCellClicked = currentCell;

    if (checkWinCondition()) {
        clearInterval(gameTimerId);
        alert(`🎉 Вітаю! Ви виграли за ${moveCount} кроків (мінімум: ${minimumMoves})!`);
    }
}

function toggleCell(row, col) {
    if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
        currentBoard[row][col] = currentBoard[row][col] ? 0 : 1;
    }
}

function updateBoardDisplay() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        cell.className = 'cell' + (currentBoard[row][col] ? ' active' : '');
    });
}

function updateMoveCountDisplay() {
    document.getElementById('steps').textContent = `${moveCount}`;
}

function updateMinimumMovesDisplay() {
    document.getElementById('min-steps').textContent = `${minimumMoves}`;
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function checkWinCondition() {
    return currentBoard.every(row => row.every(cell => cell === 0));
}

function startTimer() {
    updateTimerDisplay();
    gameTimerId = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(gameTimerId);
            alert("Час вичерпано!");
        }
    }, 1000);
}

function saveGameState() {
    moveHistory.push(moveCount);
    stateHistory.push(JSON.parse(JSON.stringify(currentBoard)));
}

function resetGameState() {
    moveCount = 0;
    timeRemaining = INITIAL_TIME;
    isTimerActive = false;
    moveHistory = [];
    stateHistory = [];
    lastCellClicked = null;
    updateMoveCountDisplay();
    updateMinimumMovesDisplay();
    document.getElementById('timer').textContent = '10:00';
    clearInterval(gameTimerId);
    updateTimerDisplay();
    updateBoardDisplay();
}

async function restartCurrentGame() {
    if (currentConfigId === null) return;

    let configData;
    try {
        configData = await loadConfiguration(currentConfigId);
    } catch (error) {
        alert('⚠️ Не вдалося перезавантажити гру.');
        return;
    }

    minimumMoves = configData.minSteps;
    initialGameBoard = configData.board;
    setupGameBoard(initialGameBoard);
    resetGameState();
    updateMinimumMovesDisplay();
    updateBoardDisplay();
}

