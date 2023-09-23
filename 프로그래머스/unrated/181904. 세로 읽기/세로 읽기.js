function solution(my_string, m, c) {
    var answer = '';
    const arr = my_string.split('');
    
    for(let i =c-1 ;i<arr.length;i+=m){
        answer += arr[i]
    }
    
    

    return answer;
}