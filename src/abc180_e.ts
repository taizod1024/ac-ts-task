import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let xn, yn, zn;
    // init
    n = Number(input.shift());
    [xn, yn, zn] = [new Array(), new Array(), new Array()];
    for (let nx = 0; nx < n; nx++) {
        [xn[nx], yn[nx], zn[nx]] = input[nx].split(" ").map(x => Number(x));
    }
    // solve
    // <example>
    // ans = ans.toString().replace("n", "");
    // </example>
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    try {
        // linux
        let input = fs.readFileSync('/dev/stdin', 'utf8').trim().split("\n");
        console.debug = function () { };
        console.log(main(input));
    }
    catch (ex) {
        // windows
        const lines: string[] = [];
        const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
        reader.on('line', function (line: string) { lines.push(line); });
        reader.on('close', function () { let input = lines; console.log(main(input)); });
    }
}
entrypoint();
