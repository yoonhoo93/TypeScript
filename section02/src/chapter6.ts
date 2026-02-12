// any 타입 : 특정 변수의 타입을 확실히 모를때 사용 어떤타입이든 넣을수있다. 다른타입에도 넣을수있다.

let anyVar: any = 10;
anyVar = "string";
let num: number = 10;
num = anyVar;

//unknown : 모든값을 저장할순 있지만 다른타입에는 적용 못한다.

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
	num = unknownVar;
}
