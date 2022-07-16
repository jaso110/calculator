let num1
let num2
let operator

// reset display press c key
document.querySelector('.btn-reset').addEventListener('click', () => {
    document.querySelector('input').value = null
    num1 = null
    num2 = null
    operator = ''
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'KeyC') {
        document.querySelector('.btn-reset').click()
    }
})

// plus
document.querySelector('.btn-plus').addEventListener('click', () => {
    num1 = document.querySelector('input').value
    document.querySelector('input').value = null
    operator = 'plus'
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'NumpadAdd') {
        document.querySelector('.btn-plus').click()
    }
})

// minus
document.querySelector('.btn-minus').addEventListener('click', () => {
    num1 = document.querySelector('input').value
    document.querySelector('input').value = null
    operator = 'minus'
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'NumpadSubtract') {
        document.querySelector('.btn-minus').click()
    }
})

// division
document.querySelector('.btn-division').addEventListener('click', () => {
    num1 = document.querySelector('input').value
    document.querySelector('input').value = null
    operator = 'division'
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'NumpadDivide') {
        document.querySelector('.btn-division').click()
    }
})

// multiply
document.querySelector('.btn-multiply').addEventListener('click', () => {
    num1 = document.querySelector('input').value
    document.querySelector('input').value = null
    operator = 'multiply'
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'NumpadMultiply') {
        document.querySelector('.btn-multiply').click()
    }
})

// comma
document.querySelector('.btn-comma').addEventListener('click', () => {
    document.querySelector('input').value += '.'
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'NumpadDecimal') {
        document.querySelector('.btn-comma').click()
    }
})

// equal
document.querySelector('.btn-equal').addEventListener('click', () => {
    num2 = document.querySelector('input').value
    if(operator === 'plus') {
        result = +num1 + +num2
        document.querySelector('input').value = +result
    }
    else if(operator === 'minus') {
        result = +num1 - +num2
        document.querySelector('input').value = +result
    }
    else if(operator === 'division') {
        result = +num1 / +num2
        document.querySelector('input').value = +result
    }
    else if(operator === 'multiply') {
        result = +num1 * +num2
        document.querySelector('input').value = +result
    }
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Enter') {
        document.querySelector('.btn-equal').click()
    }
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'NumpadEnter') {
        document.querySelector('.btn-equal').click()
    }
})

// numpad 1
document.querySelector('.btn-1').addEventListener('click', () => {
    document.querySelector('input').value += 1
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad1') {
        document.querySelector('.btn-1').click()
    }
})

// numpad 2
document.querySelector('.btn-2').addEventListener('click', () => {
    document.querySelector('input').value += 2
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad2') {
        document.querySelector('.btn-2').click()
    }
})

// numpad 3
document.querySelector('.btn-3').addEventListener('click', () => {
    document.querySelector('input').value += 3
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad3') {
        document.querySelector('.btn-3').click()
    }
})

// numpad 4
document.querySelector('.btn-4').addEventListener('click', () => {
    document.querySelector('input').value += 4
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad4') {
        document.querySelector('.btn-4').click()
    }
})

// numpad 5
document.querySelector('.btn-5').addEventListener('click', () => {
    document.querySelector('input').value += 5
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad5') {
        document.querySelector('.btn-5').click()
    }
})

// numpad 6
document.querySelector('.btn-6').addEventListener('click', () => {
    document.querySelector('input').value += 6
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad6') {
        document.querySelector('.btn-6').click()
    }
})

// numpad 7
document.querySelector('.btn-7').addEventListener('click', () => {
    document.querySelector('input').value += 7
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad7') {
        document.querySelector('.btn-7').click()
    }
})

// numpad 8
document.querySelector('.btn-8').addEventListener('click', () => {
    document.querySelector('input').value += 8
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad8') {
        document.querySelector('.btn-8').click()
    }
})

// numpad 9
document.querySelector('.btn-9').addEventListener('click', () => {
    document.querySelector('input').value += 9
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad9') {
        document.querySelector('.btn-9').click()
    }
})

// numpad 0
document.querySelector('.btn-0').addEventListener('click', () => {
    document.querySelector('input').value += 0
})

document.addEventListener('keypress', (e) => {
    if(e.code === 'Numpad0') {
        document.querySelector('.btn-0').click()
    }
})