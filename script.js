const grid = document.querySelector('#gird-container');
const div = document.querySelector('div');
const text = document.querySelector('#text-input');
const btn = document.querySelector('#grid-input');
//builds the first 16x16 grid.

function squareGrid(squares) {
    for (let i = 1; i < squares; i++) {
        grid.append(createGrid());
        for (let i = 0; i < squares; i++) {
            grid.append(createGrid());
        }
    }
}
function getValue() {
    let value = text.value;
    return squareGrid(value);


}

function createGrid() {
    let gridSquare = document.createElement('div');
    return gridSquare;
}

//let squareGrid1 = SquareGrid(16);

btn.addEventListener('click', () => {
    getValue();
})

div.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'white';
});