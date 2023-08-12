import { addNumberToInputDisplay } from "./UsesCases/addNumberToInputDisplay";
import { updateDisplayH2 } from "./UsesCases/updateDisplayh2";
import { getCurrentResult } from "./UsesCases/getCurrentResult";

window.addEventListener('load', inicio)

function inicio() {
        const NumberButtons = document.querySelectorAll('.buttonNumbers');
        NumberButtons.forEach((element) => {
            element.addEventListener('click', (evento) => {
                finalResultRequired = false;
                currentNumberInput = addNumberToInputDisplay(evento.target.value,h2DisplayCurrentInput,currentNumberInput);
            })
        });
        const operatorButtons = document.querySelectorAll('.buttonOperators');
        operatorButtons.forEach((element) => {
            element.addEventListener('click', (evento) => {
                finalResultRequired = false;
                currentOpeator = evento.target.value;
                let results=getCurrentResult(currentResult, currentOpeator, finalResultRequired, currentNumberInput, h2DisplayCurrentResult,h2DisplayCurrentInput);
                currentResult = results.currentResult;
                currentNumberInput = results.currentNumberInput;
            })
        });
        const clearButton = document.querySelector('.buttonClear');
        clearButton.addEventListener('click', clearAll);
        const deleteButton = document.querySelector('.buttonDelete');
        deleteButton.addEventListener('click', deleteInput);
        const resultButton = document.querySelector('.buttonResult');
        resultButton.addEventListener('click', getFinalResult)
}
    

     //Calculator Display
    const h2DisplayCurrentResult = document.querySelector('#h2currentResult');
    const h2DisplayCurrentInput = document.querySelector('#h2currentInput');
    

    let currentOpeator = null;
    let currentNumberInput = 0;
    let currentResult = 0;
    let finalResultRequired = false;


    function getFinalResult() {
        finalResultRequired = true;
        updateDisplayH2(h2DisplayCurrentResult, currentResult + currentOpeator + currentNumberInput + " = ")
        let finallResult = getCurrentResult(currentResult, currentOpeator, finalResultRequired, currentNumberInput, h2DisplayCurrentInput, h2DisplayCurrentInput).currentResult;
        updateDisplayH2(h2DisplayCurrentInput, finallResult);
    }

    function deleteInput() {
        if (finalResultRequired) {
            updateDisplayH2(h2DisplayCurrentResult, ' ')
        } else {
            currentNumberInput = currentNumberInput.substring(0, currentNumberInput.length - 1);;
            updateDisplayH2(h2DisplayCurrentInput, currentNumberInput)
        }
    }

    function clearAll() {
        currentNumberInput = 0;
        currentResult = 0;
        currentOpeator = null;
        updateDisplayH2(h2DisplayCurrentInput, currentNumberInput);
        updateDisplayH2(h2DisplayCurrentResult, ' ')
    }




