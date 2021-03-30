import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var ans: number = 0;
    // init
    n = Number(input.shift());
    // solve
    for (var nx = 1; nx <= n; nx++) {
        if (nx % 3 == 0) continue;
        if (nx % 5 == 0) continue;
        ans += nx;
    }
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
