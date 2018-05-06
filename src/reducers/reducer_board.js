const makeGrid = (height, width, ant) => {
    let grid = [];

    let antY = ant['pos'][0];
    let antX = ant['pos'][1];

    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push({
                status: false,
                ant: false
            });
        }
        grid.push(row);
    }

    // set ant position
    grid[antY][antX]['ant'] = true;

    return grid;
}

const advanceGrid = function (grid = [], ant) {
    let gameState = [];

    gameState = grid.slice(0);

    let row = ant['pos'][0];
    let col = ant['pos'][1];

    let dir = ant['dir'];

    // clear ant position
    gameState[row][col].ant = false;

    // status: true -> black square
    if (gameState[row][col].status) {
        gameState[row][col].status = false;
        // ant: turnLeft90 -> move forward 1 step
        switch (dir) {
            case 'T':
                ant['pos'] = [row, col - 1];
                ant['dir'] = 'L';
                break;
            case 'B':
                ant['pos'] = [row, col + 1];
                ant['dir'] = 'R';
                break;
            case 'L':
                ant['pos'] = [row + 1, col];
                ant['dir'] = 'B';
                break;
            case 'R':
                ant['pos'] = [row - 1, col];
                ant['dir'] = 'T';
                break;
            default:
        }
    }
    // status: false -> white square
    else if (!gameState[row][col].status) {
        gameState[row][col].status = true;
        // ant: turnRight90 -> move forward 1 step
        switch (dir) {
            case 'T':
                ant['pos'] = [row, col + 1];
                ant['dir'] = 'R';
                break;
            case 'B':
                ant['pos'] = [row, col - 1];
                ant['dir'] = 'L';
                break;
            case 'L':
                ant['pos'] = [row - 1, col];
                ant['dir'] = 'T';
                break;
            case 'R':
                ant['pos'] = [row + 1, col];
                ant['dir'] = 'B';
                break;
            default:
        }
    }

    // update ant position
    let antNewY = ant['pos'][0];
    let antNewX = ant['pos'][1];
    
    gameState[antNewY][antNewX].ant = true;

    return gameState;
}

const GIRD_HEIGHT = 70;
const GIRD_WIDTH = 70;

const ANT = {
    pos: [GIRD_HEIGHT / 2, GIRD_WIDTH / 2],
    dir: 'L'
}

const initialGrid = makeGrid(GIRD_HEIGHT, GIRD_WIDTH, ANT);

export default (state = initialGrid, action) => {
    switch (action.type) {
        case 'CLEAR':
            return makeGrid(GIRD_HEIGHT, GIRD_WIDTH, ANT);
        case 'NEXT':
            return advanceGrid(state.slice(0), ANT);
        default:
            return state;
    }
}