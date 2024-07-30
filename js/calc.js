var valstack = [];
var x = '';
function number(value) {
    document.cal.result.value += value;
    x += value;
    if (value == '+') {
        valstack.push(x);
        x = '';
    }
    else if (value == '-') {
        valstack.push(x);
        x = '';
    }
    else if (value == '*') {
        valstack.push(x);
        x = '';
    }
    else if (value == '/') {
        valstack.push(x);
        x = '';
    }
    else if (value == '!') {
        x = factorial(x);
        valstack.push(x);
        x = '';
    }
}

function cle(value) {
    document.cal.result.value = value;
    x = '';
}

function evalua(value) {
    var exp = '';
    valstack.push(x);
    for (var i = 0; i < valstack.length; i++) {
        if (valstack[i].indexOf('^')!=-1) {
            exp +=power(valstack[i], valstack[i].indexOf('^'));
        }
        else if (valstack[i][0] == 's' || valstack[i][0] == 'c' || valstack[i][0] == 't') {
            exp += trigo(valstack[i]);
        }
        else if (valstack[i][0] == 'l' && valstack[i][1]=='o' && valstack[i][2]=='g') {
            exp += logrithms(valstack[i],0);
        }
        else if (valstack[i][0] == 'l' && valstack[i][1] == 'n') {
            exp += logrithms(valstack[i],1);
        }
        else {
            exp += valstack[i];
        }
    }
    document.cal.result.value = eval(exp);
    while (valstack.length != 0) {
        valstack.pop();
    }
}

function factorial(value) {
    var fact = 1;
    for (var i = 1; i <= parseInt(value); i++) {
        fact *= i;
    }
    return fact;
}

function trigo(str) {
    var angle = '';
    var ans;
    if (str.charAt(0) == 's') {
        for (var i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) {
                angle += str[i];
            }
        }
        angle = parseInt(angle);
        ans = Math.sin(angle * (3.14 / 180));
        return ans;
    }
    else if (str.charAt(0) == 'c') {
        for (var i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) {
                angle += str[i];
            }
        }
        angle = parseInt(angle);
        ans = Math.cos(angle * (3.14 / 180));
        return ans;
    }
    else {
        for (var i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) {
                angle += str[i];
            }
        }
        angle = parseInt(angle);
        ans = Math.tan(angle * (3.14 / 180));
        return ans;
    }
}

function power(num, index) {
    var n1 = '';
    var powers = '';
    for (var i = 0; i < index; i++) {
        n1 += num[i];
    }

    if (isNaN(num.charAt(num.length - 1))) {
        for (var j = index + 1; j < num.length - 1; j++) {
            powers += num[j];
            n1 = parseInt(n1);
            powers = parseInt(powers);

            var ans = Math.pow(n1, powers);
            return ans+'+';
        }
    }
    else {
        for (var j = index + 1; j < num.length; j++) {
            powers += num[j];
            n1 = parseInt(n1);
            powers = parseInt(powers);

            var ans = Math.pow(n1, powers);
            return ans;
        }
    }
}

function logrithms(num, token) {
    var test='';
    var ans;
    if(token==0) {
        if (isNaN(num.charAt(num.length - 1))) {
            for (var i = 0; i < num.length - 1; i++) {
                if (!isNaN(num[i])) {
                    test += num[i];
                }
            }
            test = parseInt(test);
            ans = Math.log10(test);
            return ans + '+';
        }
        else {
            for (var i = 0; i < num.length; i++) {
                if (!isNaN(num[i])) {
                    test += num[i];
                }
            }
            test = parseInt(test);
            ans = Math.log10(test);
            return ans;
        }
    }
    else {
        if (isNaN(num.charAt(num.length - 1))) {
            for (var i = 0; i < num.length - 1; i++) {
                if (!isNaN(num[i])) {
                    test += num[i];
                }
            }
            test = parseInt(test);
            ans = Math.log(test);
            return ans + '+';
        }
        else {
            for (var i = 0; i < num.length; i++) {
                if (!isNaN(num[i])) {
                    test += num[i];
                }
            }
            test = parseInt(test);
            ans = Math.log(test);
            return ans;
        }
    }
} 