// 타입별칭

type User = {
	id: number;
	name: string;
	nickName?: string;
	bio?: string;
};

let user: User = {
	id: 1,
	name: "조윤후",
	nickName: "yoonhoo",
};

/* 인덱스 시그니처 */

type ContryCodes = {
	[key: string]: string;
};

let contryCodes: ContryCodes = {
	Korea: "ko",
	USA: "us",
	UK: "uk",
};

type ContryNumberCodes = {
	[key: string]: number;
};

let contryNumberCodes: ContryNumberCodes = {
	Korea: 410,
	UnitedState: 840,
	UnitedKingdom: 826,
};
