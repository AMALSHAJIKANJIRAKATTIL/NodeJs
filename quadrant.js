let fs = require("fs");
let data = fs.readFileSync('values.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format]

let lines=parseInt(readLine());

for(let i=1;i<=lines;i++){

let values=readLine().split(" ");
let x=parseInt(values[0]);
let y=parseInt(values[1]);


if(x>0 && y>0)
	console.log("Q1");
else if(x<0 && y>0)
	console.log("Q2");
else if(x<0 && y<0)
	console.log("Q3");
else if(x>0 && y<0)
	console.log("Q4");
}