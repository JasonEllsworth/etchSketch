const grid = document.querySelector('#gird-container');
const div = document.querySelector('div');

//builds the first 16x16 grid.

function sixTeen(squares) {
    for (let i = 1; i < squares; i++) {
        grid.append(createGrid());
        for (let i = 0; i < squares; i++) {
            grid.append(createGrid());
        }
    }
}

function createGrid() {
    let gridSquare = document.createElement('div');
    return gridSquare;
}

sixTeen(16);

div.addEventListener('mouseover', event => {
    console.log('mouseover');
});