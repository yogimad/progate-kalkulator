
// number
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculatorOprator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// operator
const inputOprator = (operator) => {
    if( calculatorOprator === ''){
        prevNumber = currentNumber
    }
    calculatorOprator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOprator(event.target.value)
    })
})

// =
const calculate = () => {
    let result = ''
    switch(calculatorOprator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculatorOprator = ''
}


const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () =>{
    calculate ()
    updateScreen (currentNumber)
})



// button AC
const clearAll = () => {
    prevNumber = ''
    calculatorOprator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
clearAll()
updateScreen(currentNumber)

})

// decimal

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) =>{
inputDecimal(event.target.value)
updateScreen(currentNumber)
})