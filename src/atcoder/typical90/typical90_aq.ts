// main
(async () => {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const lineiter = readline[Symbol.asyncIterator]();
    const worditer = (async function* () { for await (const line of lineiter) for (const word of line.split(" ")) yield await word; })();
    const read = async () => String((await worditer.next()).value);
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }
    // param
    let h: number, w: number;
    let rs: number, cs: number;
    let rt: number, ct: number;
    let shw: string[][] = [];
    // init
    h = Number(await read());
    w = Number(await read());
    rs = Number(await read());
    cs = Number(await read());
    rt = Number(await read());
    ct = Number(await read());
    for (let rx of startlen(0, h)) {
        shw.push((await read()).split(""));
    }
    // solve
    let ans = Number.MAX_SAFE_INTEGER;
    let dst: number[][] = new Array(h).fill(null).map(x => new Array(w).fill(-1));
    // WIP 解答作成中
    // answer
    console.log(ans);
    return;
})();
