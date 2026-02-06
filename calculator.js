
let screen2Clear = false;

let message;
let getFirstVal;

function numberDisplay(numbers) {
    screen2.value += numbers;

    if (screen2Clear) {
        console.log(screen2Clear);

        screen2.value = numbers;
        screen2Clear = false;
    }


};


function operators(oper) {

    message = oper;
    getFirstVal = screen2.value;
    screen1.value = getFirstVal + message;

    screen2Clear = true;

};

function oneOverX() {
    message = '1/x';
    getFirstVal = screen2.value;
    screen1.value = '1/' + getFirstVal;
}
function squareRoot() {
    message = '√';
    getFirstVal = screen2.value;
    screen1.value = '√' + getFirstVal;
}


function equals() {
    if (message == '+') {
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = Number(getFirstVal) + Number(screen2.value);
    }
    else if (message == '-') {
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = Number(getFirstVal) - Number(screen2.value);
    }
    else if (message == 'x') {
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = Number(getFirstVal) * Number(screen2.value);
    }
    else if (message == '÷') {
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = Number(getFirstVal) / Number(screen2.value);
    }
    else if (message == '%') {
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = Number(getFirstVal / 100) * Number(screen2.value);
        if (getFirstVal === '') {
            screen2.value = 'Error';
        }
    }
    else if (message == '1/x') {
        screen1.value = '1/' + screen2.value + '=';
        screen2.value = 1 / Number(screen2.value).toFixed(2);
    }
    else if (message == '²') {
        screen1.value = screen2.value + '²' + '=';
        screen2.value = Number(screen2.value) * Number(screen2.value);
    }
    else if (message == '√') {
        screen1.value = message + screen2.value + '=';
        screen2.value = Math.sqrt(Number(screen2.value)).toFixed(2);
    }
};


function decimal(deci) {
    screen2.value += deci;
}


function toggleSign() {
    if (!screen2.value) return;
    if (screen2.value.startsWith('-')) {
        screen2.value = screen2.value.slice(1);
    } else {
        screen2.value = '-' + screen2.value;
    }
}


function del(delbutton) {
    if (delbutton == 'C') {
        screen2.value = '';
    }
    else if (delbutton == 'CE') {
        screen1.value = '';
        screen2.value = '';
    }
    else if (delbutton == 'xx') {
        screen2.value = screen2.value.slice(0, -1);
    }
}