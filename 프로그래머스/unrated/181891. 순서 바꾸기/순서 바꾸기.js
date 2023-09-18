function solution(num_list, n) {
    var answer = num_list.slice(n,undefined).concat(num_list.slice(undefined,n));
    
    
    return answer ;
}