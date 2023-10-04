/**
 * const, let の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var 変数を上書き
// val1 = "var変数を上書き";
// console.log(val1);

// // var 変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let は上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let は再宣言不可能
// let val2 = "let変数を再制限"; // これはエラーになる

// const val3 = "const変数";
// console.log(val3);

// const 変数は上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言"; // エラーがでる "Uncaught SyntaxError: Identifier 'val3' has already been declared"

// const で定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "テスト太郎",
//   age: 28,
// };
// val4.name = "jack"; // プロパティなどのオブジェクトの場合は上書きできる
// val4.address = "Hiroshima"; // オブジェクトの追加もできる
// console.log(val4);

// const で定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "テスト太郎";
// const age = 28;
// // 「私の名前はテスト太郎です。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//  const func2 = (str) => { // // アロー関数 - 引数１つの場合は()省略可能, 処理が１行で終わる場合は { return } を省略する書き方も可能 const func2 = (str) => str;
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "jack",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile; // 分割代入
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["jack", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile; // 分割代入の配列版, 順番が大事
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); // スプレッド構文

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //スプレッド構文、L124 と同じ処理

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; // arr4 を arr6 にスプレッド構文でコピー
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); // < スプレッド構文を使うと元の配列の値は影響を受けない

// const arr7 = [...arr4, ...arr5]; // スプレッド構文で arr4 と arr5 を結合
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); // L144 のコピーの仕方をすると元の配列の arr4 も影響を受けてしまう。

/**
 *  map や fileter を使った配列の処理
 */
// const nameArr = ["田中", "山田", "jack"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name; // map() の使い方２．return された何かに基づいて map で処理する使い方
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`)); // map() の使い方１．配列を処理して何か処理する使い方。index 使う時は第２引数指定する。

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // 条件式を書く。filter はプログムの中である条件に一致するものだけ取り出す使い方ができる
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jack") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件が true の時 : 条件が false の時
// const val1 = 1 < 0 ? "true です" : "false です";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString()); // toLocaleString は数字が来たときだけ３桁区切り表示する
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const flag1 = true;
const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

// || は左側が false なら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側が true なら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
