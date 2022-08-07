let fs = require("fs");
let data = fs.readFileSync('name.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let name1=readLine();
console.log("Hello",name1,"!!!");
let name2=readLine();
console.log("You Ordered",name2+".");