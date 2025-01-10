const paragraph = document.createElement('p');
let amount;
let message = "";


function getSelOption() {
    let select = document.getElementById('sel');
    let selOption;
    if (select) {
        selOption = select.options[select.selectedIndex].value;
    }
    return selOption;
}

function getValue(location) {
    return document.getElementById(location).value;
}
function calculatedAmount() {   
    if (getSelOption() === "1") {
        amount = getValue('amount') * (1 + (getValue('interest') * getValue('years'))/100);
    }
    else if (getSelOption() === "2") {
        amount = getValue('amount') * Math.pow(1 + getValue('interest')/100, getValue('years'));
    }
    else {
        amount = getValue('amount') * (1 - (getValue('interest') * getValue('years'))/100);
    }
    return amount;
}

function getMessage() {
    if (getSelOption() === "1") {
        message = "simple interest"
    }
    else if (getSelOption() === "2") {
        message = "compound interest"
    }
    else {
        message = "depreciation"
    }
    return message;
}

function displayMessage() {
    paragraph.innerHTML = " ";
    paragraph.innerHTML = (
        "The cost of the object at a price of R" + getValue('amount') + " through " + getMessage() + " in " + getValue('years') + 
        " years at a rate of " + getValue('interest') + "% will yield a value of R" + 
        calculatedAmount().toLocaleString(undefined, {minimumFractionDigits: 2}) + "."
    );
    document.getElementById("sb").style.cssText = `
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    margin-left: 57%;
    margin-top: -2%;
    font-size: 15px;
    font-weight: 400;
    border: 0.5px solid white;
    background-color: grey;
    border-radius: 20px;
    padding: 20px;
    width: 200px;
    height: auto;
    max-width: auto;
`;
    paragraph.style.color = "white";
    return document.getElementById("sb").appendChild(paragraph);
}
function clicked() {
    document.addEventListener('click', displayMessage());
}
