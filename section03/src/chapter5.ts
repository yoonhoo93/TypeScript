/* 
	타입추론
*/

let a = 10; // number 타입 추론
let b = ""; // string 추론
let c = {
	id: 1,
	name: "yoonhoo",
	profile: {
		ninkName: "hoo",
	},
	url: ["www.naver.com"],
};

let { id, name, profile, url } = c;
console.log(profile.ninkName);

const func = () => {
	return "hello";
};

/* 초기값을 지정하지않으면 그 후 할당된 값으로 타입이 추론되지만 그 값이 변할때마다 타입이 변한다. */
let d;
d = 10;
console.log(d.toFixed());

/* 
	const 로 선언하면 상수이기 때문에 리터럴타입으로 추론된다.
*/
const num = 10;
const str = "hello";

/* 
	배열에 number, string값을 입력하게 되면 자동으로 union 타입으로 추론해준다
*/
let arr = [1, "string"];
