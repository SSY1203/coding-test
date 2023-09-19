function solution(myString) {
    var answer = myString.split('x').filter(item=> item.length>0).sort();
    return answer;
}