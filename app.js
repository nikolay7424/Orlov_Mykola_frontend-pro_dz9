// 1
let userInputArr = prompt('Введіть дані через кому, наприклад: 1,2,3');
userInputArr = userInputArr.split(',');
console.log(userInputArr);

userInputArr = userInputArr.sort();
console.log(userInputArr);

userInputArr.splice(1, 3);
console.log(userInputArr);

// 2
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let positiveNumbersCount = 0;
let positiveNumbersSum = 0;
let negativeNumbersCount = 0;
let positiveEvenNumbersCount = 0;
let positiveEvenNumbersSum = 0;
let positiveOddNumbersCount = 0;
let positiveOddNumbersSum = 0;
let positiveNumbersProduct = 1;

let biggestValue = arr[0];
let biggestValueIndex;
let lowestValue = arr[0];
let lowestValueIndex;

for(i in arr) {
  if(arr[i] > 0) {
    positiveNumbersCount++;
    positiveNumbersSum += arr[i];
    positiveNumbersProduct *= arr[i];
    if(arr[i] % 2 === 0) {
      positiveEvenNumbersCount++;
      positiveEvenNumbersSum += arr[i];
    } else {
      positiveOddNumbersCount++;
      positiveOddNumbersSum += arr[i];
    }
  } else {
    negativeNumbersCount++;
  }
  if(biggestValue < arr[i]) {
    biggestValue = arr[i];
    biggestValueIndex = i;
  }
  if(lowestValue > arr[i]) {
    lowestValue = arr[i];
    lowestValueIndex = i;
  }
}

const arrModulo = [];

for(i in arr) {
  if(arr[i] < 0) {
    arrModulo.push(arr[i] * -1);
  } else {
    arrModulo.push(arr[i]);
  }
}

let biggestModuloValue = arrModulo[0];
let biggestModuloValueIndex;

for(i in arrModulo) {
  if(biggestModuloValue < arr[i]) {
    biggestModuloValue = arr[i];
    biggestModuloValueIndex = i;
  }
}

for(i in arr) {
  if(i !== biggestModuloValueIndex) {
    arr[i] = 0;
  }
}

console.log(`Кількість позитивних чисел - ${positiveNumbersCount}`);
console.log(`Сума позитивних чисел - ${positiveNumbersSum}`);
console.log(`Кількість негативних чисел - ${negativeNumbersCount}`);
console.log(`Кількість позитивних парних чисел - ${positiveEvenNumbersCount}`);
console.log(`Сума позитивних парних чисел - ${positiveEvenNumbersSum}`);
console.log(`Кількість позитивних непарних чисел - ${positiveOddNumbersCount}`);
console.log(`Сума позитивних непарних чисел - ${positiveOddNumbersSum}`);
console.log(`Добуток позитивних чисел - ${positiveNumbersProduct}`);
console.log(`Найбільше число - ${biggestValue} знаходиться за індексом ${biggestValueIndex}`);
console.log(`Найменше число - ${lowestValue} знаходиться за індексом ${lowestValueIndex}`);
console.log(`Найбільше число за модулем - ${biggestModuloValue} знаходиться за індексом ${biggestModuloValueIndex}`);
console.log(arr);




