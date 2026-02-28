/* 
    제네릭<T>
    - 반환값의 타입을 가변적으로 변경할수 있다.
    - 타입의 변수에 할당되는 타입은 함수를 호출할때 인수따라 맞게 할당된다.
*/

function func<T>(vlaue: T): T {
    return vlaue;
}

let num = func(10);

if (typeof num === "number") {
    num.toFixed()
}

let bool = func(true);
let str = func("string")
/* 
    타입 할당 하는법
*/
let arr = func<[number, number, number]>([1, 2, 3])