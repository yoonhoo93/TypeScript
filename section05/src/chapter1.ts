/* 
    인터페이스 확장
    - 기존 속성을 그대로 가져오고 따른 속성을 추가한 타입이다
    ex - Animal 기존속성을 가지고와서 Dog 전용 속성을 추가한것
       - Dog 타입을 쓰면 name,age,isBark을 사용해야한다.
*/

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat {
    name: string;
    age: number;
    isScratch: boolean;
}
interface Chicken {
    name: string;
    age: number;
    isFly: boolean;
}

let animal: Dog = {
    name: "도물",
    age: 10,
    isBark: true,
}