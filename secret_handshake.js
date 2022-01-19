const HANDSHAKE_KEYS = {
    '1': 'wink',
    '10': 'double blink',
    '100': 'close your eyes',
    '1000': 'jump',
}

// conver a numer to string
const number2bin = (number) => {
    return number.toString(2)
}


const handshake = (binNumber) => {
    let binPositions = binNumber.split('')

    // to storage the secuence of actions
    let secuence = []

    // rest array
    let restBin = [...binPositions]

    for (let i = binPositions.length - 1; i >= 0; i--) {

        if (binPositions[i] == 1) {
            if (i == binPositions.length - 1) {
                secuence.push(HANDSHAKE_KEYS[binPositions[i]])
                restBin[i] = 0
            } else {
                let slicebin = restBin.slice(i, restBin.length + 1).join('')

                if (!HANDSHAKE_KEYS[slicebin]) {
                    secuence.push('reverse')
                } else {
                    secuence.push(HANDSHAKE_KEYS[slicebin])
                    restBin[i] = 0
                }
            }
        }
    }

    // validate if the secuence need to be reversed
    if (secuence[secuence.length -1] === 'reverse') {
        // rever array
        secuence = secuence.slice(0, restBin.length).reverse()
        secuence.shift()
    }

    return secuence
}


console.log('1 =>', handshake(number2bin(1)))
console.log('2 =>', handshake(number2bin(2)))
console.log('4 =>', handshake(number2bin(4)))
console.log('8 =>', handshake(number2bin(8)))
console.log('3 =>', handshake(number2bin(3)))
console.log('19 =>', handshake(number2bin(19)))
