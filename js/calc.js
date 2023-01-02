"use strict";

////https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/


(() => {

const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const leftOperandTextElement = document.querySelector('[data-left-operand]')
const middleInputTextElement = document.querySelector('[data-middle-input]')
const rightOperandTextElement = document.querySelector('[data-right-operand]')

    //// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes ////

    class Calculator {
        constructor(leftOperandTextElement, middleInputTextElement, rightOperandTextElement) {
            this.leftOperandTextElement = leftOperandTextElement
            this.middleInputTextElement = middleInputTextElement
            this.rightOperandTextElement = rightOperandTextElement
            this.clear()
        }
    }

    const calculator = new Calculator(leftOperandTextElement, middleInputTextElement, rightOperandTextElement)


    function clear() {
        this.leftOperand = ''
        this.middleInput = ''
        this.rightOperand = ''
        this.operation = undefined
    }

    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
    })

    function appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
        })
    })

    function chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    })

    function compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    clearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })

    function updateDisplay() {
        if (this.operation != null) {
            this.leftOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
    }




    })();
