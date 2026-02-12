/* 
	void type
	void - 아무것도 없음을 의미하는 타입
	문자, 숫자, 객체 를 담을수 없다. undefined 만 담을수있음
*/

function func1(): string {
	return "hello";
}

function func2(): void {
	console.log("hello");
}

/* 
	never
	never : 존재하지않는 타입

*/

function func3(): never {
	throw new Error("error!");
}
