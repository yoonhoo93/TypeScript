/* 
	대수타입
	 - 여러개의 타입을 합성해서 새롭게 만드는 타입
	 - 합집합 타입과 교집합 타입이 존재
*/

/* 
	1. 합집합 - Union 타입
*/

let a: string | number | boolean;
a = 1;
a = "string";

type Dog = {
	name: string;
	color: string;
};

type Person = {
	name: string;
	language: string;
};

type UnionType = Dog | Person;

let union1: UnionType = {
	name: "",
	color: "",
};

let union2: UnionType = {
	name: "",
	language: "",
};

let union3: UnionType = {
	name: "",
	color: "",
	language: "",
};

/* 
	불가
	let union4: UnionType = {
		name: "",
	};
 */

/* --------------------------------------------------- */

/* 
	교집합 - intersection 타입
	예제에서 dog와 person 둘다 다 가지고 있음
*/

let variable: number & string;

type Intersection = Dog & Person;

let intersection: Intersection = {
	name: "",
	color: "",
	language: "",
};
