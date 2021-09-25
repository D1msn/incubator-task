const searchInput = document.querySelector('.search-block__input');
const searchBtn = document.querySelector('.search-block__btn');

//=== showAlert - без задержки 
searchBtn.addEventListener('click', () => {setTimeout(showAlert, 3000)});


//===== 3 - 4 -5

function showAlert() {
    const inputValue = searchInput.value

    if (inputValue) {
        if (inputValue.toLowerCase() === "google") {
            alert('Yandex круче. Но это не точно')
            return;
        }

        alert(inputValue)
        alert(objects[0].name)

        superSum(inputValue, inputValue);
    }

}

//==== 5

const objects = [{
    name: "Олег - первое имя в массиве объектов",
    age: "22"
}, {
    name: "Петя",
    age: "55"
}, {
    name: "Вася",
    age: "66"
}, {
    name: "Егор",
    age: "77"
}]

//===== 6

function superSum(first, sec) {
    if (Number(first) && Number(sec) !== 'NaN') {
        alert(Number(first) + Number(sec))
    }
}

//==== 7

const numbers = [5, 7, 72, 6, 8, 23, 12, 7, 3]
let max = numbers[0];
let min = max;

for (let i = 0; i <= numbers.length; i++) {
    const element = numbers[i]

    if (element > max) {
        max = element;
    }

    if (element < min) {
        min = element
    }

}
console.log(`Максимальное число = ${max}`);
console.log(`Минимальные число = ${min}`);


//===== 8

let a = '777'
let b = '101010'
let temp;

temp = a;
a = b;
b = temp;

console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

//====== 9 

function findMax(numbers = [1,2,3,4,5]) {
    let max = numbers[0];

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

//===========10 

function timeOutShow(delay){
    setTimeout(showAlert, delay)
}
