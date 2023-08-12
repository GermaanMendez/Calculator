import { updateDisplayH2 } from "./updateDisplayh2";

export const addNumberToInputDisplay = (number,h2DisplayCurrentInput,currentNumberInput) => {
    if (currentNumberInput === 0) {
        currentNumberInput = number;
    } else {
        currentNumberInput += number;
    }
    updateDisplayH2(h2DisplayCurrentInput, currentNumberInput)
    return currentNumberInput;
}

