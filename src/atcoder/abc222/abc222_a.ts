import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line.trim(); })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// main
const main = function () {

    // param
    let n: number;

    // init
    n = Number(read());

    // solve
    let ans;
    if (n < 10) ans = "000" + n;
    else if (n < 100) ans = "00" + n;
    else if (n < 1000) ans = "0" + n;
    else ans = n;

    // answer
    console.log(ans);

    return;

};
main();
