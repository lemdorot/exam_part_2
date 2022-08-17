// Первая задача
const getMultiplicationTable = (num) => {
  if (typeof num === 'number') {
    const numbersTable = [];
    const numberList = [];
    for (let i = 1; i <= num; i += 1) {
      for (let j = 1; j <= num; j += 1) {
        numberList.push(i * j);
      }
      numbersTable.push(numberList.slice());
      numberList.length = 0;
    }
    return numbersTable;
  }
  console.log('Введите число');
  return null;
};

const getTable = (num) => {
  // получаем массив с результатами вычислений
  const arr = getMultiplicationTable(num);
  const space = ' ';
  const arrStr = [];
  let strTitle = '';
  // проходим по массиву с результатами, получаем массив с вычислениями для каждого числа
  for (let i = 0; i < arr.length; i += 1) {
    let str = '';
    let number = '';
    // проходим по массиву с вычислениями для каждого числа
    for (let j = 0; j < arr[i].length; j += 1) {
      // получаем число, добавляем нужное количество пробелов перед ним
      number = arr[i][j].toString().length < arr[arr[i].length - 1][j].toString().length
        ? space.repeat(arr[arr[i].length - 1][j].toString().length - arr[i][j].toString().length)
        + arr[i][j] : arr[i][j];
      // формируем строку с вычислениями для каждого числа
      // если первое число в строке
      if (j === 0) {
        // добавляем число с вертикальной чертой, в каждую строку
        str = `${number}|`;
        // добавляем пробелы в строку заголовок
        strTitle = `${space.repeat(str.length) + number} `;
        // добавляем пробел после каждого числа
        str = str + number + (j === arr[i].length - 1 ? '' : ' ');
      // остальные числа
      } else {
        // добавляем числа в строку заголовок
        if (i === 0) strTitle = strTitle + number + (j === arr[i].length - 1 ? '' : ' ');
        // добавляем пробел после каждого числа
        str = str + number + (j === arr[i].length - 1 ? '' : ' ');
      }
    }
    if (i === 0) {
      // добавляем в массив строку заголовок
      arrStr.push(strTitle);
      // добавляем в массив пунктирную строку
      arrStr.push('-'.repeat(strTitle.length));
    }
    // добавляем в массив остальные строки с вычислениями
    arrStr.push(str);
    str = '';
  }
  return arrStr;
};

const showTable = (num) => {
  const arr = getTable(num);
  // выводим весь массив в консоль
  arr.forEach((item) => {
    console.log(item);
  });
};

showTable(10);

// Вторая задача

const arrayNumbers = [41, 55, 61, 1, 8, 27, 37, 39];

const arraySort = (arr) => arr.slice().sort((a, b) => a - b);

const arrayFilter = (arr) => {
  let array = arr;
  let isMatch = false;
  let isComplete = false;
  let arrMatch = [];
  while (true) {
    if (array.length <= 1) {
      break;
    }
    for (let i = 0; i < array.length - 1; i += 1) {
      // разбиваем каждое число на массив цифр
      const arrNum = Array.from(array[i].toString());
      // берем по очереди каждую цифру из этого числа
      for (let j = 0; j < arrNum.length; j += 1) {
        // проходим по массиву чисел
        for (let k = i + 1; k < array.length; k += 1) {
          // проверяем включение цифры в каждом числе массива
          if (Array.from(array[k].toString()).includes(arrNum[j])) {
            // добавляем такие числа в массив
            arrMatch.push(array[k]);
            isMatch = true;
          }
        }
      }
      // если совпадения были
      if (isMatch) {
        // добавляем число с которым сравнивали
        arrMatch.push(array[i]);
        const set = new Set(arrMatch);
        // удаляем из массива эти числа
        array = array.filter((item) => !set.has(item));
        arrMatch = [];
        isMatch = false;
        break;
      }
      isComplete = true;
    }
    if (isComplete) break;
  }
  console.log(array);
  return array;
};

// разворачиваем каждое число массива
const reversNumbers = (arr) => {
  const array = arr;
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(Number(Array.from(array[i].toString()).reverse().join('')));
  }
  console.log(newArr);
  return newArr;
};

// возводим в квадрат каждое число массива
const sqrNumbers = (arr) => {
  const array = arr;
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(array[i] * array[i]);
  }
  return newArr;
};

const getArray = (arr) => {
  let result = arr;
  const arrLength = arr.length;

  while (true) {
    // сортируем массив
    result = arraySort(result);
    // фильтруем массив
    result = arrayFilter(result);
    // если количество элементов 1 или 0 или количество элементов не изменилось, то завершаем цикл
    if (result.length <= 1 || arrLength === result.length) {
      break;
    } else {
      // иначе переворачиваем числа
      result = reversNumbers(result);
      // и возводим в квадрат
      result = sqrNumbers(result);
    }
  }
};

getArray(arrayNumbers);
