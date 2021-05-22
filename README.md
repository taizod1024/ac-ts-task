# atcoder

AtCoder提出用ソースコード個人リポジトリ(TypeScriptのみ)

- どこまで回答しているかは[AtCoder Problems](https://kenkoooo.com/atcoder/#/table/taizod1024)で確認

## 記述の方針

- varは関数スコープなので使わない。ブロックスコープのletを必ず使う。

## 問題解決の方針

- コーナーケースを考える
  - 全体を支配する法則から乖離している一部分を考える
- エッジケースを考える
  - 極端に大きなもしくは極端に小さな場合を考える
- WAがどうしても解消できない場合
  - 除算が含まれる場合（百分率等）
    - 誤差が出ないようにすべて乗算して算出、比較する
  - 精度が与えられている場合（高々小数第4位等）
    - 整数化して計算する

## TypeScript固有の問題

- 変数はletで宣言。ブロックスコープで処理。varは使わない。
- 二次元配列の作り方に注意 new Array(n).fill(new Array(m))はNG
- TypeScriptで10^6の配列を作るとTLE
