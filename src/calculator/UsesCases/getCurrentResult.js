import { updateDisplayH2 } from "./updateDisplayh2";
export const getCurrentResult = (currentResult, currentOpeator, finalResultRequired, currentNumberInput, h2DisplayCurrentResult, h2DisplayCurrentInput) => {
        if (currentResult == 0) {
            currentResult = currentNumberInput;
        } else {
            if (currentOpeator === '+') {
                currentResult = parseFloat(currentResult) + parseFloat(currentNumberInput);
            }
            if (currentOpeator === '-') {
                currentResult = parseFloat(currentResult) - parseFloat(currentNumberInput);
            }
            if (currentOpeator === '%') {
                currentResult = parseFloat(currentResult) / parseFloat(currentNumberInput);
            }
            if (currentOpeator === 'x') {
                currentResult = parseFloat(currentResult) * parseFloat(currentNumberInput);
            }
        }
        
        updateDisplayH2(h2DisplayCurrentResult, currentResult + currentOpeator)
        updateDisplayH2(h2DisplayCurrentInput, 0)
    if (finalResultRequired === true) return { currentResult }
    else {
        return {
            currentResult:currentResult,
            currentNumberInput:0
        }
    }
    }