/* 
    함수타입 정의
*/

function fun(a: number, b: number): number {
	return a + b;
}

/* 
    화살표 함수 타입정의
*/

const add = (a: number, b: number): number => {
	return a + b;
};

/* 
    함수의 매배변수
*/

function introduce(name = "조윤후", tall?: number) {
	console.log(`name : ${name}`);

	if (typeof tall === "number") {
		// 톨 + 10을 하게되면 에러가 나는데 에러가나는이유는 tall에 ? 를 사용한 옵셔널 체이닝때문이다
		//타입가드를 만들어 타입좁히면 + 10이 사용가능하다
		console.log(`tall : ${tall + 10}`);
	}
}

/* 필수 매개변수를 사용하려면 옵셔널체이닝이 앞에 사용해야한다. */
function introduce2(name = "조윤후", age: number, tall?: number) {
	console.log(`name : ${name}`);

	if (typeof tall === "number") {
		// 톨 + 10을 하게되면 에러가 나는데 에러가나는이유는 tall에 ? 를 사용한 옵셔널 체이닝때문이다
		//타입가드를 만들어 타입좁히면 + 10이 사용가능하다
		console.log(`tall : ${tall + 10}`);
	}
}

/* 
    rest파라미터
    가변적인 길이에 인수를 전달하면 배열로 묶는다.
*/
function getSum(...rest: number[]) {
	let sum = 0;
	rest.forEach((it) => (sum = +it));

	return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
