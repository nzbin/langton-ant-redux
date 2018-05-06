export const next = () => {
    return {
        type: 'NEXT'
    }
}

export const play = (timerId) => {
    return {
        type: 'PLAY',
        timerId
    }
}

export const stop = (timerId) => {
    return {
        type: 'STOP',
        timerId
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}