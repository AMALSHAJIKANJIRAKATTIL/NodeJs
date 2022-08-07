let fs = require("fs");
let data = fs.readFileSync('countnumber.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let length=parseInt(readLine());
let even=0;
let odd=0;

if(length===0){

    console.log("Empty");

}else{

for(let i=1;i<=length;i++){
let n=parseInt(readLine());
let rem=n%2;
if(rem===0){
    even++;
}else{
    odd++;
}

}
}

console.log(odd);
console.log(even);