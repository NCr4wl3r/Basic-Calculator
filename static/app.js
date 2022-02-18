const MAX_DIGIT = 9;
const ADD_OP = "+";
const SUBS_OP = "-";
const MULTY_OP = "*";
const DIVIDE_OP = "/";
const NO_OP = "";

let lastOperator = NO_OP;
let valueCache = 0;
// let screenCache = "";
let keyCacheMem = "";
let total = 0;

const isMaxDigit = () => keyCacheMem.length === MAX_DIGIT;

const updateValueCache = (strCache) => (valueCache = parseInt(strCache));

const updateKeyCache = (keyStr) => {
  keyCacheMem += keyStr;
  updateValueCache(keyCacheMem);
};

const delCache = () => {
  keyCacheMem = "";
  valueCache = 0;
  total = 0;
  writeScreen();
};

// If total it's not supplyed, pick keyCacheMem
const writeScreen = (screenCache = keyCacheMem) => {
  screen.innerHTML = screenCache;
};

const applyLastOperation = () => {
  if (lastOperator === ADD_OP) {
    total = addNumbers(total, valueCache);
  }
};

const addNumbers = (totalValue, memValue) => {
  const addResult = totalValue + memValue;
  return addResult;
};

const result = () => {
  applyLastOperation();
  lastOperator = "";
  writeScreen(total);
};

const getNumberKey = (numberStr) => {
  if (!isMaxDigit()) {
    updateKeyCache(numberStr);
  }
  writeScreen();
};

const addNumbersEvent = () => {
  if (lastOperator) {
    result();
  }
  lastOperator = ADD_OP;
};

// From the array of buttons, get their innerHTML;
for (const key of keyBoardBtns) {
  key.addEventListener("click", getNumberKey.bind(this, key.innerHTML));
}

btnDel.addEventListener("click", delCache);
btnResult.addEventListener("click", result);
btnAdd.addEventListener("click", addNumbersEvent);
// btnSubstract.addEventListener("click", substractNumbersEvent);
// btnMultiply.addEventListener("click", multiplyNumbersEvent);
// btnDivide.addEventListener("click", divideNumbersEvent);
