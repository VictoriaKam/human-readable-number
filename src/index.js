module.exports = function toReadable(number) {
    let arrNum = String(number).split('');
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === '0') arrNum[i] = 'zero';
        if (arrNum[i] === '1') arrNum[i] = 'one';
        if (arrNum[i] === '2') arrNum[i] = 'two';
        if (arrNum[i] === '3') arrNum[i] = 'three';
        if (arrNum[i] === '4') arrNum[i] = 'four';
        if (arrNum[i] === '5') arrNum[i] = 'five';
        if (arrNum[i] === '6') arrNum[i] = 'six';
        if (arrNum[i] === '7') arrNum[i] = 'seven';
        if (arrNum[i] === '8') arrNum[i] = 'eight';
        if (arrNum[i] === '9') arrNum[i] = 'nine';
        if (arrNum.length > 1 && (arrNum[i - 1] === 'one' || (i === 0 && arrNum.length < 3) || (i === 1 && arrNum[i + 1] !== undefined))) {
            if (arrNum[i] === 'three') arrNum[i] = 'thir';
            if (arrNum[i] === 'four') arrNum[i] = 'for';
            if (arrNum[i] === 'five') arrNum[i] = 'fif';
            if (arrNum[i] === 'eight') arrNum[i] = 'eigh';
            if (arrNum[i] === 'two') arrNum[i] = 'twen';
        }
    }

    if (arrNum.length === 1) {
        return arrNum.join('');
    } else if (arrNum.length === 2) {
        if (arrNum[0] === 'one') {
            if (arrNum[1] === 'zero') {
                return arrNum = 'ten';
            } else if (arrNum[1] === 'one') {
                return arrNum = 'eleven';
            } else if (arrNum[1] === 'twen') {
                return arrNum = 'twelve';
            } else if (arrNum[1] === 'for') {
                return arrNum = 'fourteen';
            } else {
                return arrNum = arrNum[1] + 'teen';
            }
        }
        if (arrNum[1] === 'zero') {
            return arrNum[0] = arrNum[0] + 'ty';
        } else { return arrNum = arrNum[0] + 'ty ' + arrNum[1]; }

    } else if (arrNum.length === 3) {
        if (arrNum[1] === 'zero' && arrNum[2] === 'zero') {
            return arrNum = arrNum[0] + ' hundred';
        }
        arrNum[0] = arrNum[0] + ' hundred ';
        if (arrNum[1] === 'zero') {
            return arrNum = arrNum[0] + arrNum[2];
        }
        if (arrNum[1] === 'one') {
            if (arrNum[2] === 'zero') {
                return arrNum = arrNum[0] + 'ten';
            } else if (arrNum[2] === 'one') {
                return arrNum = arrNum[0] + 'eleven';
            } else if (arrNum[2] === 'twen') {
                return arrNum = arrNum[0] + 'twelve';
            } else if (arrNum[2] === 'for') {
                return arrNum = arrNum[0] + 'fourteen';
            } else {
                return arrNum = arrNum[0] + arrNum[2] + 'teen';
            }
        }

        if (arrNum[2] === 'zero') {
            return arrNum = arrNum[0] + arrNum[1] + 'ty';
        }
        arrNum[1] = arrNum[1] + 'ty ';
        return arrNum = arrNum[0] + arrNum[1] + arrNum[2];
    }
}
