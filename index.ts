let user : string = 'kim';
let age : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string | number | undefined | boolean)[] = [user, age, married];

let 학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
}= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


const marray = (money : number, house: boolean , rank : string) : void | string => {

    let score:number = 0;
    score += money;

    if (house === true){
        score += 500
    }
    if (rank === '상'){
        score += 100
    }
    if (score >= 600){
        return '결혼가능'
    } else {
        return "불가능"
    }

}

console.log(marray(100, false, "상"))

function 함수 (x : number|string) {

    if (typeof x == "number") {
        let add = x + 1;
        return add;
    } else {
        let add = x + 1;
        return add
    }
}

console.log(함수(10))