/* 
    기본 타입간의 호환성
*/

let num1: number = 20;
let num2: 10 = 10;

num1 = num2;

/* 
    객체타입간의 호환성
     - 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가
    
*/

type Animal = {
	name: string;
	color: string;
};

type Dog = {
	name: string;
	color: string;
	breed: string;
};

let animal: Animal = {
	name: "기린",
	color: "yellow",
};

let dog: Dog = {
	name: "돌돌이",
	color: "brown",
	breed: "진도",
};
/* 
    animal = dog; //가능
    dog = animal;  // 불가능 
    
    큰타입에서는 작은타입으로 가능하지만
    작은 타입에서는 큰타입으로 넣는건 불가능하다.
*/
