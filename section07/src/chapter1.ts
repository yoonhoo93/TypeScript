/* 
    첫번째사례
    - 제네릭을 하나만 받을경우는 같은 타입이여야 한다
    - 각자 다른 타입을 쓰고싶으면 , <T,U> 이렇게 쓰면 된다
*/

function swap<T>(a: T, b: T) {
    return [b, a]
}

const [a, b] = swap(1, 2) // 가능
// const [a, b] = swap(1, "2"); 불가능


/* 두번째 사례 */
function returnFristValue<T>(data: T[]) {
    return data[0];
}

let num = returnFristValue([0, 1, 2])
let str = returnFristValue([1, "hello", "nananna"])

/* 타입제한 */

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10) length 를 계산할수 없어 에러남