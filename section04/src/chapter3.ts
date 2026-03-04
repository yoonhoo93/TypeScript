/* 
	함수 오버로딩
	- 하나의 함수를 매개변수의 개수나 타입에 따라 여러버전으로 만드는법
*/

/* 
	선언부 
	- 버전 먼저 만들기 -> 이걸 `오버로드 시그니쳐`라고 한다.
*/
function func(a: number): void;
function func(a: number, b: number, c: number): void;

/* 
	실제구현부
	옵셔널 체이닝을 이용해야한다.
*/
function func(a: number, b?: number, c?: number) {
	if (typeof b === "number" && typeof c === "number") {
		console.log(a + b + c);
	} else {
		console.log(a * 20);
	}
}

func(1);
func(1, 2, 3);
