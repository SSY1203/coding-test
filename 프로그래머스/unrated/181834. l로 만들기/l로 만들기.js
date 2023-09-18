function solution(myString) {
    var answer = myString.split('').map(item=> item<'l' ?  'l': item).join('');
    return answer;
}