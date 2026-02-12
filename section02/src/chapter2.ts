/* 배열 */

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "i am", "yoonhoo"];
let bool1: Array<boolean> = [true, false, true];

/* 배열에 들어가는 요소들의 타입이 다양한 경우 */
let multiArr: (string | number)[] = [1, 2, "하이"];

/* 다차원 배열의 타입 정의 방법 */
let doubleArr: (number[] | (string | number[])[])[] = [
	[1, 2, 3],
	[4, 5],
	["하이", [2, 3, 4]],
];

/* 튜플 : 길이와 타입이 고정된 배열 */
let tup1: [number, number] = [1, 2];
// tup1 = [1,2,3] 에러
// tup1 = ["하이",1] 에러
tup1 = [3, 4];
