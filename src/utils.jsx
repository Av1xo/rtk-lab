export const getCharacter = file => String.fromCharCode(file + 96);

export const initPosition = () => {
    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    const kingRow = ["r", "n", "b", "q", "k", "b", "n", "r"]

    for (let i = 0; i < 8; i++) {
        position[0][i] = "w"+kingRow[i]
        position[1][i] = "wp"
        position[6][i] = "bp"
        position[7][i] = "b"+kingRow[i]
    }

    return position
}

export const copyPosition = position =>{
    const newPosition = new Array(8).fill('').map(x=> new Array(8).fill(''))

    for (let rank = 0; rank < 8; rank++) {
        for (let file = 0; file < 8; file++) {
            newPosition[rank][file] = position[rank][file]
        }
    }
    return newPosition;
}