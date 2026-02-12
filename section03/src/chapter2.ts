/**
 * unknown 타입은 모든타입에 슈퍼타입이기때문에 
 * number든 string이든 업캐스팅이 가능하다.
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "string"

    let unknownVar: unknown

    /* let num: number = unknownVar;  다운캐스팅은 불가 */
}

/* 
    void 타입
*/

function voidExam() {
    function voidFunc(): void {
        console.log("하이");
        return undefined
    }
}

/* 
    any 타입은 타입계층도자체를 무시한다.
*/

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;

    anyVar = unknownVar
}