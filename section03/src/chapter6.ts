/* 
	타입 단언
	규칙 : 값 as 단언
	A as B
	A가 B의; 슈퍼타입이거나 A가 B의 서브타입 이어야함
	as를 뒤에 선언하고 타입을 명시하면 값에 타입을 정의할수 있다.
*/

type Person = {
	name: string;
	age: number;
};

let person = {} as Person;

person.name = "조윤후";
person.age = 20;

type Dog = {
	name: string;
	color: string;
};

let dog = {
	name: "",
	color: "",
	breed: "",
} as Dog;

let num1 = 10 as never;


/* non null 단언 */

type Post = {
	title: string,
	author?: string,
}

let post: Post = {
	title: "1",
	author: "조윤후"
}

let len = post.author?.length
