function esDivisible(dividendo, divisor) {
  return dividendo != 0 && dividendo % divisor == 0;
}
function fizzbuzz(num) {
  if (typeof num !== "number") return "num is not a number";
  if (num <= 0) return num;
  if (esDivisible(num, 3) && esDivisible(num, 5)) return "fizzbuzz";
  if (esDivisible(num, 3)) return "fizz";
  if (esDivisible(num, 5)) return "buzz";
  return num;
}
function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i} -> ${fizzbuzz(i)}`);
  }
}
module.exports = fizzbuzz;

print(16);
