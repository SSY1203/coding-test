function solution(arr, intervals) {
    var answer = [];
    
    intervals.map(([a,b])=> {
        for(let i = a; i< b+1;i++){
            answer.push(arr[i])
        }
    })
    return answer;
}