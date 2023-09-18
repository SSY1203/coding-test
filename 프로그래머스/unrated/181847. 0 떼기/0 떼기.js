function solution(n_str) {
    var answer = n_str.split('')
    
    for(let i =0;i< n_str.length;i++){
        if(n_str[i]==='0'){
            answer.shift();
        }else{
            return answer.join('');
        }
    }
    // return answer;
}