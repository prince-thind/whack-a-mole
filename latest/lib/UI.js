const UI = {
    startButton: document.querySelector('#start-button'),
    board: document.querySelector('#board'),
    mole: document.querySelector('#mole'),
    statusBar: document.querySelector('#status-bar'),
    gameOver: document.querySelector('#gameover-section'),
    render
}

function render(state) {
    renderStatusBar(state);
    renderMole(state);
    renderGameOver(state)
}

function renderGameOver(state) {
    if (!state.gameOver) return;
    UI.gameOver.textContent = `Game Over!`

}

function renderStatusBar(state) {
    const score = UI.statusBar.querySelector('.score');
    score.textContent = `Score: ${state.score}`;

    const time = UI.statusBar.querySelector('.time');
    time.textContent = `Remaining Time: ${state.time}s`

    const highscore = UI.statusBar.querySelector('.highscore');
    highscore.textContent = `HighScore: ${state.highscore}`
}
function renderMole(state) {
    if (!state.hidden) {
        UI.mole.classList.remove('hidden')
    }

    if (state.strikeCooldown) {
        UI.mole.classList.add('striked')
    }
    else {
        UI.mole.classList.remove('striked')
    }

    const index = state.moleIndex;
    // if (index == null) return UI.mole.classList.add('hidden');

    // UI.mole.classList.remove('hidden')
    const slot = UI.board.children[index];
    slot.appendChild(UI.mole)
}

export default UI;
