function solution(n) {
    var answer = [n];
    let current = n;
    while(current !== 1) {
        if(current %2===0){
            current /= 2;
        }else{
            current = current*3+1;
        }
        answer.push(current);
    }
    return answer;
}