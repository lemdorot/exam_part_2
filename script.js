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
