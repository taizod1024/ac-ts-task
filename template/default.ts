export { };
// main
async function main() {
    // input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readiter = readline[Symbol.asyncIterator]();
    async function read() { return (await readiter.next()).value; }
    // param
    let n: number;
    let anm: number[][];
    // init
    n = Number((await read()));
    anm = [];
    for (let nx = 0; nx < n; nx++) {
        anm.push((await read()).split(" ").map(x => Number(x)));
    }
    // TODO edit the code
    // solve
    let ans = 0;
    // answer
    console.log(ans);
    return;
}
main();
