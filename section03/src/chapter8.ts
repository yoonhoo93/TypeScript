/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입 ?
 *  
 * */

type Admin = {
	tag: 'ADMIN'
	name: string;
	kickCount: number
}

type Member = {
	tag: 'MEMBER'
	name: string;
	point: number;
}

type Guest = {
	tag: 'GUEST'
	name: string;
	visitCount: number
}

type User = Admin | Member | Guest

// Admin -> {name}님 현재까지 {kickCount} 명 강퇴했습니다
// Member -> {name}님 현재까지 {point}를 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 방문하셨습니다.
function login(user: User) {
	if (user.tag === 'ADMIN') {
		//Admin
		console.log(`${user.name}님 현재까지 ${user.kickCount} 명 강퇴했습니다`)
	} else if (user.tag === 'MEMBER') {
		//Member
		console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`)
	} else {
		//Guest
		console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
	}

	switch (user.tag) {
		case 'ADMIN':
			{
				console.log(`${user.name}님 현재까지 ${user.kickCount} 명 강퇴했습니다`)
				break;
			}
		case 'MEMBER':
			console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`)
			break

		case "GUEST":
			console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
	}
}

/* 
	복습
	비동기 작업의 결과를 처리하는 객체
	* 로딩중 일때 콘솔에 로딩중 출력
	* 실패 -> 실패 : 에러메시지 출력
	* 성공 -> 성공 : 데이터 출력
*/


/* 
	기존 타입
	type AsyncTask = {
		state: "LODING" | "FAILED" | "SUCCESS"
		error?: {
			message: string,
		}
		response?: {
			data: string
		}
	}
function processResult(task: AsyncTask) {

		타입 단언 및 좁히기 불가 하지않지만 옵션체이닝민 논 널단언을 선언해야한다,
		switch (task.state) {
		case "LODING":
			console.log("로딩중...")
			break;
		case "FAILED":
			console.log(`에러발생 : ${task.error?.message}`)
			break;
		case "SUCCESS":
			console.log(`data : ${task.response!.data}`)
			break;
	}
}
*/

type Loding = {
	state: "LODING"
}

type Failed = {
	state: "FAILED",
	error: {
		message: string
	}
}

type Success = {
	state: "SUCCESS",
	response: {
		data: string
	}
}

type AsyncTask = Loding | Failed | Success

const loding: AsyncTask = {
	state: "LODING"
}

const failed: AsyncTask = {
	state: "FAILED",
	error: {
		message: "오류 발생"
	},
}

const success: AsyncTask = {
	state: "SUCCESS",
	response: {
		data: "데이터~"
	}
}


function processResult(task: AsyncTask) {

	switch (task.state) {
		case "LODING":
			console.log("로딩중...")
			break;
		case "FAILED":
			console.log(`에러발생 : ${task.error.message}`)
			break;
		case "SUCCESS":
			console.log(`data : ${task.response.data}`)
			break;
	}
}




