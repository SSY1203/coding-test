function solution(num_list, n) {
    var answer = 0;
    
    num_list.map(item=> {
        if(Number(item) === Number(n)){
            answer = 1;
            return;
        }
    })
    return answer;
}