/* eslint-disable @typescript-eslint/no-unused-vars */

/** TYpeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array　配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple（タプル)　配列の型で要素の並びを決めてしまう
let tuple: [number, string] = [0, "A"];

// any なんでもOK
let any1: any = false;

// void 何も返却値がない型
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: {} = {};
let obj3: { id: number; name: string } = { id: 0, name: "AAAA" };
