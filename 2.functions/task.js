/*====TASK1====*/

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
  }
  else if (arr[i] < min) {
      min = arr[i];
  }
  sum += arr[i];

  }

  let avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

/*====TASK2====*/

function summElementsWorker(...arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
     summ += arr[i];
}

  return summ;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
  }
    else if (arr[i] < min) {
      min = arr[i];
  }
  }
let diff = max - min;
return diff;

}

function differenceEvenOddWorker(...arr) {
let summEvenElement = 0;
let summOddElement = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    summEvenElement += arr[i];
  } 

  else {
    summOddElement += arr[i];
  }

}
let diff = summEvenElement - summOddElement;
return diff;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;

    }

  }

  let avg = sumEvenElement / countEvenElement;

  return avg;

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func.push(arrOfArr[i](...arr))
  }

}
