// JSテスト
// 問題１
const array = [2, 4, 7, 5, 4, 3, 8];

const result=array.filter(function (item ,i){
    return array.indexOf(item)==i;
});

console.log(result);

// 問題２

function leapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return console.log(year+"はうるう年です。");
    }else{
        return console.log(year+"はうるう年ではありません。");
    }
}

console.log(leapYear(2020));
console.log(leapYear(2021));