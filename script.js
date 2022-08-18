
// gameboard use a module
const gameBoard = (() => {
    'use strict';
    return {
        display: [
            ['x', 'o', 'x'],
            ['x', 'o', 'x'],
            ['x', 'o', 'x'],
        ]
    };
}
)();

// displayController use module

console.log(gameBoard);

// player object create with factories
const Player = (playerName, marker) => {
    return {
        playerName,
        marker
    }
};

const player1 = Player('justin', 'x');

console.log(player1)