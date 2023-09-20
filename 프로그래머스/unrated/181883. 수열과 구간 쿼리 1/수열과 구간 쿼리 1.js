function solution(arr, queries) {
    var answer = [...arr];
    queries.map(([s,e])=>{
        for(let i = s; i< e+1;i++){
            answer[i] +=1;
        }
    })
    return answer;
}