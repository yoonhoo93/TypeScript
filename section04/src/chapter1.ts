/* 
	함수 타입 표현식
	=> 뒤에 쓰는 타입은 반환값을 표현하는것
*/

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
const sub: Add = (a, b) => a - b;
const multiply: Add = (a, b) => a * b;
const divide: Add = (a, b) => a / b;

/* 
	호출시그니쳐(콜시그니쳐)
*/

type Operation2 = {
	(a: number, b: number): number;
};
