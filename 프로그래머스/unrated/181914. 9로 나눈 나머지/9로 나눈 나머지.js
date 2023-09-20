function solution(number) {
    var answer = number.split('').reduce((acc, cur)=> +acc+ +cur)%9;
    return answer;
}