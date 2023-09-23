function solution(arr, queries) {
    var answer = [...arr];
    
    queries.map(([i,j])=>{
        let tmp = answer[i];
        answer[i] = answer[j];
        answer[j] = tmp;
    })
    return answer;
}