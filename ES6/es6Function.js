function calculate(inr, convRate = 65) {
  //if (convRate == undefined) convRate = 65;
  return inr * convRate;
}

function sum(...numbers) {
  let tot = 0;
  numbers.forEach(num => {
    tot += num;
  });
  console.log(tot);
}
sum(1, 2, 3);
const usd = calculate(45);
console.log(usd);

function calculate1(a, b, c) {
  console.log(a + b + c);
}

let data = [1, 2, 4];

calculate1(...data);
const a = [10, 20, 23, 40];
console.log([...data, ...a]);

const b = { id: 33, name: "ram" };
const c = { age: 50 };
console.log({ ...b, ...c, martks: a });
