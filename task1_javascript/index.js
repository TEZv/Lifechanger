//1. Зробіть функцію, яка приймає параметром число від 1 до 7, 
//а повертає день тижня українською мовою

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "П'ятниця";
        case 6:
            return "Субота";
        case 7:
            return "Неділя";
        default:
            return "Неправильний день тижня";
    }
}

const dayNumber = 6;
const dayOfWeek = getDayOfWeek(dayNumber);
console.log(`День тижня для числа ${dayNumber}: ${dayOfWeek}`);

//2. Даний рядок типу 'var_text_hello'. 
//Зробіть із нього текст 'VarTextHello'.

const inputString = 'var_text_hello';

function convertToCamelCase(inputString) {
    const words = inputString.split('_');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
    return words.join('');
}

const result = convertToCamelCase(inputString);
console.log(result); 

//3. Створіть функцію, яка заповнюватиме масив 
//10-ма іксами за допомогою циклу.

function fillArrayWithX() {
    const resultArray = [];
    for (let i = 0; i < 10; i++) {
        resultArray.push('x');
    }
    return resultArray;
}

const filledArray = fillArrayWithX();
console.log(filledArray);



//4. Якщо змінна a більше нуля - то в ggg запишемо функцію, 
//яка виводить один!, 
//інакше запишемо функцію, яка виводить два!

const a = -2;
let ggg = (a > 0) 
? function() { console.log('один!'); } 
: function() { console.log('два!'); };

ggg();

//5. Функція ggg приймає 2 параметри: анонімну функцію, 
//яка повертає 3 та анонімну функцію, яка повертає 4. 
//Поверніть результатом функції ggg суму 3 та 4

ggg = function(func1, func2) {
    return func1() + func2();
};
const resultGgg = ggg(
    function() { return 3; },
    function() { return 4; }
);
console.log(resultGgg); // Виведе 7

//6. Написати функцію яка порівнює два масиви, 
//якщо вони ідентичні тоді повертаємо true інакше false

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(compareArrays(array1, array2)); // true
console.log(compareArrays(array1, array3)); // false


//7. Написати функцію яка розбиває масив на підмасиви 
//за заданим розміром. 
// Приклад ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function arraySliced(arr, sliceArr) {
    const resultSlice = [];
    let i = 0;

    while (i < arr.length) {
        resultSlice.push(arr.slice(i, i + sliceArr));
        i += sliceArr;
    }
    return resultSlice;
}

const slicedArray = arraySliced([21, 22, 23, 24, 25], 2); 

console.log(slicedArray);
