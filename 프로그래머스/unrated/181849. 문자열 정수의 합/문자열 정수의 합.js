function solution(num_str) {
    var answer = num_str.split('').reduce((acc, cur) => Number(acc) + Number(cur));
    return answer;
}