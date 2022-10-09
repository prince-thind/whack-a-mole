const UI = {
    startButton: document.querySelector('#start-button'),
    board: document.querySelector('#board'),
    mole: document.querySelector('#mole'),
    statusBar: document.querySelector('#status-bar'),
    render
}

function render(state){
    renderStatusBar(state);
    renderMole(state.moleIndex)
}

function renderStatusBar(state) {
    const score = UI.statusBar.querySelector('.score');
    score.textContent = `Score: ${state.score}`;

    const time = UI.statusBar.querySelector('.time');
    time.textContent = `Remaining Time: ${state.time}s`

    const highscore = UI.statusBar.querySelector('.highscore');
    highscore.textContent = `HighScore: ${state.highscore}`
}
function renderMole(index) {
    if(index==null) return UI.mole.classList.add('hidden');
    
    UI.mole.classList.remove('hidden')
    const slot=UI.board.children[index];
    slot.appendChild(UI.mole)
}

export default UI;
