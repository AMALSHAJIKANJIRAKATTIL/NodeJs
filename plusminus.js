let fs = require("fs");
let data = fs.readFileSync('plusminus.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let lines=parseInt(readLine());

let sum=parseInt(readLine());

for(let i=1;i<lines;i++){
	let value=parseInt(readLine());

if(i%2===0){

sum=sum+value;

}else{

sum=sum-value;

}

}
console.log(sum);