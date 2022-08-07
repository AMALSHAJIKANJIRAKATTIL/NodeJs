let fs = require("fs");
let data = fs.readFileSync('oddoreven.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let x=parseInt(readLine());

let rem=x%2;

if(rem===0){

console.log("Even");

}else{
	console.log("Odd");
}