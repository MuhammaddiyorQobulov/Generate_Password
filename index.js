const range = document.querySelector("#range");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const number = document.querySelector(".number");
const symbol = document.querySelector(".symbol");
const passwordLength = document.querySelector(".length");
const nav = document.querySelector("nav");
const submit = document.querySelector(".submit");

let uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
let numberStr = "0123456789";
let symbolStr = "_-@#$&*/:;";
let newArr = "";

function markArr() {
  if (number.checked == true) {
    newArr += numberStr;
  }
  if (uppercase.checked == true) {
    newArr += uppercaseStr;
  }
  if (lowercase.checked == true) {
    newArr += lowercaseStr;
  }
  if (symbol.checked == true) {
    newArr += symbolStr;
  }
  if (newArr.length == 0) {
    return alert("Belgilarni Yoqing!!!");
  }
  return newArr;
}

submit.addEventListener("click", () => {
  newArr = "";
  nav.innerHTML = main();
});

range.addEventListener("click", () => {
  let ln = range.value;
  passwordLength.innerText = `LENGTH : ${ln}`;
});

function randomMark(type) {
  let idx = Math.floor(Math.random() * type.length);
  let mark = type[idx];
  return mark;
}

function main() {
  let password = "";
  for (let i = 0; i < range.value; i++) {
    password += randomMark(markArr());
  }
  return password;
}
