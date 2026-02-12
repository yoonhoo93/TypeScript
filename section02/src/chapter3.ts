//object
// ?는 있어도 되고 없어도 되는 프로퍼티이다
let user: {
	id?: number;
	readonly name: string; // 수정이 불가하도록 설정
} = {
	id: 1,
	name: "조윤후",
};

console.log(user.id);

user = {
	name: "홍길동",
};
