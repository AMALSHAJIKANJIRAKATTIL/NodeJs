let fs = require("fs");
let data = fs.readFileSync('values.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let num1=parseInt(readLine());
let num2=parseInt(readLine());
let num3=parseInt(readLine());

let result=num1*(num2/num1)**3;

console.log(Math.floor(result));