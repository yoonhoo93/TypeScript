/* 
    인터페이스 합침
    - 인터페이스는 동일한 이름으로 선언할경우 합쳐진다.
*/

interface Person {
    name: string
}

interface Person {
    age: number
}

const person: Person = {
    name: "하이",
    age: 10
}