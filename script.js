"use strict";

//ЗАДАНИЕ 1 

//Сортировка чисел в порядке возрастания
function sortArr (arr) {
    function compareNumeric(a, b) {
        return a - b;   
    }
    arr.sort(compareNumeric);
};

//Проверка
let array = [99,2,14,43,10,]; 
sortArr (array);
console.log (array);

//Сортировка чисел в порядке убывания
function sortArrRew (arr) {
    function compareNumeric(a, b) {
        return b -a;
    }
    arr.sort(compareNumeric);
};

//Проверка
let arrayRew = [99,2,14,43,10,]; 
sortArrRew (arrayRew);
console.log (arrayRew);

//ЗАДАНИЕ 2

//Поиск максимально значения массива
function getMaxOfArray (arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};

//Проверка
let arrayMathMax = [99,2,14,43,10,];
let resultTask2Max = getMaxOfArray (arrayMathMax);
console.log (resultTask2Max);

//Поиск минимального значения массива
function getMinOfArray (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
};

//Проверка
let arrayMathMin = [99,2,14,43,10,];
let resultTask2Min = getMinOfArray (arrayMathMin);
console.log (resultTask2Min);

//ЗАДАНИЕ 3

function palindrome (string) {
    let stringRew = string.split('').reverse().join('');
    if (string == stringRew) {
        return true;
    } else {
        return false;
    }
};

//Проверка
let string = "аргентинаманитнегра";
let palindromeTest = palindrome (string); 
console.log(palindromeTest);

let string2 = "просто строка";
let palindromeTest2 = palindrome (string2); 
console.log(palindromeTest2);

//ЗАДАНИЕ 4

function fizzbuzz (x) {
    if (x % 5 == 0 && x % 3 == 0) {
         console.log("fizzbuzz");
    } else if (x % 5 == 0) {
         console.log("buzz");
    } else if (x % 3 == 0) {
         console.log("fizz");
    } else {
         console.log(x);
    }
};

//Проверка
fizzbuzz(15);

//ЗАДАНИЕ 5

function anagram(line1, line2) {
    line1 = line1.toLowerCase().replace(/[,.:-`!]/gi, "").replace(/\s/gi, "");
    line2 = line2.toLowerCase().replace(/[,.:-`!]/gi, "").replace(/\s/gi, "");
    if (line1.length !== line2.length || line1 === line2) {
        return false;
    }
    line1 = line1.split('').sort().join('');
    line2 = line2.split('').sort().join('');
    if (line1 === line2) {
        return true;
    }
    return false;
};

//Проверка
console.log(anagram("лунь", "нуль"));
console.log(anagram("раз", "два"));

//ЗАДАНИЕ 6

/*function vowels (x) {
    let arr = x.split("");
    let y = arr.length;
    for (let i = 0; i < arr.length; i++){
        switch (arr[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            arr.splice(i, 1);
            i--;
            break;
        }        
    }
     console.log(y - arr.length); 
};

//Проверка
//vowels("reerseeereaurd");*/

function vowels (x) {
    let vowelsArr = x.split("").filter(function (elm) {
       return (elm == 'a' || elm == 'e' || elm == 'i' || elm == 'o' || elm == 'u');
    });
    console.log(vowelsArr.length);
};

//Проверка
vowels("reerseeiiiiereaurd");


//ЗАДАНИЕ 7

function arrRev (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;
};

//Проверка
let testArr = [1,2,3,4,5,6,];
console.log (arrRev(testArr));


//ЗАДАНИЕ 8

function average (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

//Проверка
console.log(average([5, 8, 11, 15]));

//ЗАДАНИЕ 9

function inArray(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            return true;
        }
    }
    return false;
};

//Проверка
console.log(inArray('нос', ['ухо', 'рот', 'нос']));
console.log(inArray('нос', ['ухо', 'рот', 'глаз']));

//ЗАДАНИЕ 10

function replace (str) {
    let arrFromStr = str.split('');
    for(let k = 0; k < arrFromStr.length; k += 2) {
        [arrFromStr[k], arrFromStr[k + 1]] = [arrFromStr[k + 1], arrFromStr[k]];
    }
    return arrFromStr.join('');
};

//Проверка
let strReplace = "123456";
console.log(replace(strReplace));

//ЗАДАНИЕ 11

function decade(day) {
    if (day < 1 || day > 31) {
        return 'Некорректное число';
    } else if (day <= 10) {
        return "Первая декада";
    } else if (day <= 20) {
        return "Вторая декада";
    } else {
        return "Третья декада";
    }   
};

//Проверка
console.log(decade(24));

//ЗАДАНИЕ 12
function season(month) {
    if (month < 1 || month > 12) {
        return "Некорректное число";
    } else if (month === 1 || month === 2 || month === 12) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else {
        return "Осень";
    }
};

//Проверка
console.log(season(10));








