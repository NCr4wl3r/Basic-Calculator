const MAX_DIGIT = 9;
const ADD_OP = "+";
const SUBS_OP = "-";
const MULTY_OP = "*";
const DIVIDE_OP = "/";
const NO_OP = "";

let lastOperator = NO_OP;
let cacheValue = 0;
let powerOn = false;
let keyCacheMem = "";
let totalValue = 0;

const isMaxDigit = () => keyCacheMem.length === MAX_DIGIT;

const saveKeyCacheToValue = (keyStr) => {
  keyCacheMem += keyStr;
  cacheValue = parseInt(keyCacheMem);
};

const delCache = () => {
  keyCacheMem = "";
  cacheValue = 0;
  totalValue = 0;
  writeScreen(totalValue);
};

// If total it's not supplyed, pick keyCacheMem
const writeScreen = (value) => {
  screen.innerHTML = value.toString();
};

const applyLastOperation = () => {
  if (lastOperator === ADD_OP) {
    totalValue = addOp(totalValue, cacheValue);
  } else if (lastOperator === SUBS_OP) {
    totalValue = substractOp(totalValue, cacheValue);
  } else if (lastOperator === MULTY_OP) {
    totalValue = multiplyOp(totalValue, cacheValue);
  } else if (lastOperator === DIVIDE_OP) {
    totalValue = divideOp(totalValue, cacheValue);
  }
};

const addOp = (totalValue, memValue) => {
  const addResult = totalValue + memValue;
  return addResult;
};
const substractOp = (totalValue, memValue) => {
  const substResult = totalValue - memValue;
  return substResult;
};

const multiplyOp = (totalValue, memValue) => {
  const multResult = totalValue * memValue;
  return multResult;
};
const divideOp = (totalValue, memValue) => {
  const divideResult = totalValue / memValue;
  return divideResult;
};

const result = () => {
  applyLastOperation();
  lastOperator = "";
  cacheValue = totalValue;
  totalValue = 0;
  keyCacheMem = "";
  writeScreen(cacheValue);
};

const getNumberKey = (numberStr) => {
  if (!isMaxDigit()) {
    saveKeyCacheToValue(numberStr);
  }
  writeScreen(cacheValue);
};

const addOpEvent = () => {
  if (lastOperator) {
    // result();
    console.log(lastOperator);
  } else {
    lastOperator = ADD_OP;
    totalValue = cacheValue;
    cacheValue = 0;
    keyCacheMem = "";
    writeScreen(totalValue);
  }
};

const substractNumbersEvent = () => {
  if (lastOperator) {
    // result();
    console.log(lastOperator);
  } else {
    lastOperator = SUBS_OP;
    totalValue = cacheValue;
    cacheValue = 0;
    keyCacheMem = "";
    writeScreen(totalValue);
  }
};
const multiplyNumbersEvent = () => {
  if (lastOperator) {
    // result();
    console.log(lastOperator);
  } else {
    lastOperator = MULTY_OP;
    totalValue = cacheValue;
    cacheValue = 0;
    keyCacheMem = "";
    writeScreen(totalValue);
  }
};
const divideNumbersEvent = () => {
  if (lastOperator) {
    // result();
    console.log(lastOperator);
  } else {
    lastOperator = DIVIDE_OP;
    totalValue = cacheValue;
    cacheValue = 0;
    keyCacheMem = "";
    writeScreen(totalValue);
  }
};
// From the array of buttons, get their innerHTML;
for (const key of keyBoardBtns) {
  key.addEventListener("click", getNumberKey.bind(this, key.innerHTML));
}

btnDel.addEventListener("click", delCache);
btnResult.addEventListener("click", result);
btnAdd.addEventListener("click", addOpEvent);
btnSubstract.addEventListener("click", substractNumbersEvent);
btnMultiply.addEventListener("click", multiplyNumbersEvent);
btnDivide.addEventListener("click", divideNumbersEvent);

if (!powerOn) {
  writeScreen(totalValue);
  powerOn = true;
}
