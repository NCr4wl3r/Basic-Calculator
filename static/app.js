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

const resetCache = () => {
  cacheValue = 0;
  keyCacheMem = "";
};

const delAllMem = () => {
  resetCache();
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
  if (lastOperator /*=== ADD_OP*/) {
    lastOperator = ADD_OP;
    result();
    addOpEvent();
  } else if (!lastOperator) {
    lastOperator = ADD_OP;
    totalValue = cacheValue;
    resetCache();
    writeScreen(totalValue);
  }
};

const substractNumbersEvent = () => {
  if (lastOperator /* === SUBS_OP*/) {
    lastOperator = SUBS_OP;
    result();
    substractNumbersEvent();
  } else if (!lastOperator) {
    lastOperator = SUBS_OP;
    totalValue = cacheValue;
    resetCache();
    writeScreen(totalValue);
  }
};
const multiplyNumbersEvent = () => {
  if (lastOperator /* === MULTY_OP*/) {
    lastOperator = MULTY_OP;
    result();
    multiplyNumbersEvent();
  } else if (!lastOperator) {
    lastOperator = MULTY_OP;
    totalValue = cacheValue;
    resetCache();
    writeScreen(totalValue);
  }
};
const divideNumbersEvent = () => {
  if (lastOperator /* === DIVIDE_OP*/) {
    lastOperator = DIVIDE_OP;
    result();
    divideNumbersEvent();
  } else if (!lastOperator) {
    lastOperator = DIVIDE_OP;
    totalValue = cacheValue;
    resetCache();
    writeScreen(totalValue);
  }
};
// From the array of buttons, get their innerHTML;
for (const key of keyBoardBtns) {
  key.addEventListener("click", getNumberKey.bind(this, key.innerHTML));
}

btnDel.addEventListener("click", delAllMem);
btnResult.addEventListener("click", result);
btnAdd.addEventListener("click", addOpEvent);
btnSubstract.addEventListener("click", substractNumbersEvent);
btnMultiply.addEventListener("click", multiplyNumbersEvent);
btnDivide.addEventListener("click", divideNumbersEvent);

if (!powerOn) {
  writeScreen(totalValue);
  powerOn = true;
}
