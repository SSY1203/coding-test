function solution(my_string) {
    let myStringArr = my_string.split('');
    var answer = [];
    
    for(let i =0;i<my_string.length;i++){
            answer.push(myStringArr.join(''));
            myStringArr.shift();
    }
    
    return answer.sort();
}