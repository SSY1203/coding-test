function solution(a, d, included) {
    var answer = a;
    let result=0;
    let arr = [a];
    for(let i =0;i<included.length-1;i++){
        answer += d;
        arr.push(answer);
    }
    
    for(let j =0;j<included.length;j++){
        if(included[j]){
            result+=arr[j]
        }
    }
    return result;
}