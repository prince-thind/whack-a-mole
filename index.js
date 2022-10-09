import UI from './lib/UI.js';
import state from './lib/state.js'

UI.startButton.addEventListener('click', init);
let intervalID = null;

function init() {
    if (state.running) return;
    state.running = true;
    UI.board.addEventListener('click', strike)
    intervalID = setInterval(main, 1000);
}

function main() {
    UI.render(state);
    if (state.gameOver) return;
    updateTime();

    if (state.time <= 0) {
        state.gameOver = true;
    }

    if (state.time % 4) return;
    updateMoleIndex();
    state.strikeCooldown = false;

}

function updateTime() {
    state.time--;
}

function updateMoleIndex() {
    const index = Math.trunc(Math.random() * 9);
    state.moleIndex = index;
}


function strike(e) {
    if (state.strikeCooldown) return;

    let element = e.target;
    if (!(element.classList.contains('slot') || element.classList.contains('mole'))) return;
    if (element.classList.contains('mole')) {
        element = element.parentElement;
    }

    const index = +element.getAttribute('data-index');

    if (state.moleIndex == index) {
        state.score++;
        state.strikeCooldown = true;
    }

    if (state.score > state.highscore) {
        state.highscore = state.score;
    }
}