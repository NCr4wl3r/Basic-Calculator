const MAX_DIGIT = 9;

let valueCache = 0;
let keyCacheMem = "";
let result = 0;

const isMaxDigit = () => keyCacheMem.length === MAX_DIGIT;

const updateCache = (value) => {
  keyCacheMem += value;
  writeScreen();
};

const delCache = () => {
  keyCacheMem = "";
  valueCache = 0;
  result = 0;
  writeScreen();
};

const result = () => {
  valueCache = parseInt(keyCacheMem);
};

const writeScreen = () => {
  screen.innerHTML = keyCacheMem;
};

const getNumberKey = (number) => {
  if (!isMaxDigit()) {
    updateCache(number);
  }
};
const addNumbers = () => {
  result += parseInt(keyCacheMem);
  keyCacheMem = "";
  writeScreen();
};

// From the array of buttons, get their innerHTML;
for (const key of keyBoardBtns) {
  key.addEventListener("click", getNumberKey.bind(this, key.innerHTML));
}

btnAdd.addEventListener("click", addNumbers);
btnDel.addEventListener("click", delCache);
btnResult.addEventListener("click", result);
// btnSubstract.addEventListener("click");
// btnMultiply.addEventListener("click");
// btnDivide.addEventListener("click");
