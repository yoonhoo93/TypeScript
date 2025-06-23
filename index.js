var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
var marray = function (money, house, rank) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (rank === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
    else {
        return "불가능";
    }
};
/* console.log(marray(100, false, "상")); */

function 함수(x) {
    if (typeof x == "number") {
        var add = x + 1;
        return add;
    }
    else {
        var add = x + 1;
        return add;
    }
}
console.log(함수(2));
