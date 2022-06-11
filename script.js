// Mulai Javascript

// Click event tombol angka 0-9
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// Update layar tampilan
const calcScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calcScreen.value = number;
};

// Inisialisai variabel untuk kalkulasi
let prevNumber = "";
let calcOperator = "";
let currentNumber = "0";

// Input number ke layar tampilan
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// Click event untuk operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// Inisialisasi fungsi input operator
const inputOperator = (operator) => {
  // cek jika pengguna klik operator berkali-kali
  if (calcOperator === "") {
    prevNumber = currentNumber;
  }
  // cek untuk multiple operation
  if (currentNumber === "") return;
  if (prevNumber !== "") {
    calculate();
    updateScreen(currentNumber);
  }
  calcOperator = operator;
  prevNumber = currentNumber;
  currentNumber = "";
};

// Click event untuk proses kalkulasi
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// Fungsi kalkulasi
const calculate = () => {
  let result = "";
  const prev = parseFloat(prevNumber);
  const current = parseFloat(currentNumber);
  // cek jika pengguna klik equal tanpa input operator
  if (isNaN(prev) || isNaN(current)) return;
  switch (calcOperator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentNumber = result;
  calcOperator = "";
  prevNumber = "";
};

// Click event untuk all-clear
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// Fungsi all-clear
const clearAll = () => {
  prevNumber = "";
  calcOperator = "";
  currentNumber = "0";
};

// Click event untuk desimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// Fungsi input desimal
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
