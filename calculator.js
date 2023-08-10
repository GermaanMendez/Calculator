const NumberButtons = document.querySelectorAll('.buttonNumbers');
                        NumberButtons.forEach((element) => {
                            element.addEventListener('click',(evento)=>{
                                finalResultRequired=false;
                                addNumberToInputDisplay(evento.target.value);
                            })
                        });
const operatorButtons = document.querySelectorAll('.buttonOperators');
                        operatorButtons.forEach((element) => {
                            element.addEventListener('click',(evento)=>{
                                finalResultRequired=false;
                                currentOpeator=evento.target.value;
                                getCurrentResult();
                            })
                        });
const clearButton = document.querySelector('.buttonClear');
                    clearButton.addEventListener('click',clearAll);                        
const deleteButton = document.querySelector('.buttonDelete');
                     deleteButton.addEventListener('click',deleteInput);
const resultButton = document.querySelector('.buttonResult');
                      resultButton.addEventListener('click',getFinalResult)

//Calculator Display
const h2DisplayCurrentResult = document.querySelector('#h2currentResult');
const h2DisplayCurrentInput  = document.querySelector('#h2currentInput');

let currentOpeator=null;
let currentNumberInput=0;
let currentResult = 0;
let finalResultRequired = false;

function addNumberToInputDisplay(number){
    if(currentNumberInput===0){
        currentNumberInput=number;
    }else{
        currentNumberInput+= number;
    }
    updateDisplayH2(h2DisplayCurrentInput,currentNumberInput)
}

function getCurrentResult(){
    if(currentResult==0){
        currentResult = currentNumberInput;
    }else{
        if(currentOpeator==='+'){
            currentResult = parseFloat(currentResult) + parseFloat(currentNumberInput);
        }
        if(currentOpeator==='-'){
            currentResult = parseFloat(currentResult) - parseFloat(currentNumberInput);
        }
        if(currentOpeator==='%'){
            currentResult = parseFloat(currentResult) / parseFloat(currentNumberInput);
        }
        if(currentOpeator==='x'){
            currentResult = parseFloat(currentResult)  * parseFloat(currentNumberInput);
        }
    }
    if(finalResultRequired===true) return currentResult;
    currentNumberInput=0;
    //Update current result display
    updateDisplayH2(h2DisplayCurrentResult,currentResult + currentOpeator)
}

function updateDisplayH2 (h2,text){
    h2.innerHTML = text
}
function getFinalResult(){
    finalResultRequired=true;
    updateDisplayH2(h2DisplayCurrentResult, currentResult + currentOpeator + currentNumberInput + " = ")
    let finallResult = getCurrentResult()
    updateDisplayH2(h2DisplayCurrentInput, finallResult);
}

function deleteInput(){
    console.log(finalResultRequired)
    if(finalResultRequired) {
        updateDisplayH2(h2DisplayCurrentResult,' ')
    }else{
        currentNumberInput =currentNumberInput.substring(0, currentNumberInput.length - 1);;
        updateDisplayH2(h2DisplayCurrentInput,currentNumberInput)
    }
} 

function clearAll(){
    currentNumberInput=0;
    currentResult=0;
    currentOpeator=null;
    updateDisplayH2(h2DisplayCurrentInput,currentNumberInput);
    updateDisplayH2(h2DisplayCurrentResult,' ')
}




