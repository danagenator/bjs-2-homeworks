/*====TASK1====*/

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return { min: min, max: max, avg: Number((sum / arr.length).toFixed(2)) };
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
  if (arr.length === 0) {
    return 0;
  }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      else if (arr[i] < min) {
        min = arr[i];
      }
    }
  return max - min;
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
  return summEvenElement - summOddElement;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;

      }

    }

  return sumEvenElement / countEvenElement;

}


/*====TASK3====*/

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let value of arrOfArr) {
    if (func(...value) > maxWorkerResult) {
      maxWorkerResult = func(...value);
    }
  }
  return maxWorkerResult;
}
