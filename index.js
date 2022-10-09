import UI from './lib/UI.js';
import state from './lib/state.js'

UI.startButton.addEventListener('click', init);

function init() {
    if (state.running) return;
    state.running = true;
    setInterval(main, 1000);
}

function main() {
    UI.render(state);
    updateTime();
    updateMoleIndex();
}

function updateTime() {
    state.time--;
}

function updateMoleIndex() {
    const index = Math.trunc(Math.random() * 9);
    if (Math.random() < 0.5) return state.moleIndex = null;

    state.moleIndex = index;
}

