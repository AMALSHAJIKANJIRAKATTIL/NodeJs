let fs = require("fs");
let data = fs.readFileSync('range.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let rangestart=parseInt(readLine());
let rangefinish=parseInt(readLine());

if(rangestart<0)
	rangestart=0;
else if(rangefinish<0)
	rangefinish=0;


if(rangestart>rangefinish)
    console.log("-1");
else{
    for(let i=rangestart;i<=rangefinish;i++){

        console.log(i);

        }
}


