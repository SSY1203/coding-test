function solution(num_list) {
    var answer = num_list.sort((a,b)=> a-b).slice(undefined, 5);
    return answer;
}