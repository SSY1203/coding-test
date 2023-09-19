function solution(my_strings, parts) {
    var answer = '';
    my_strings.map((str,idx)=>{
        for(let i = parts[idx][0]; i<= parts[idx][1];i++){
            answer+=str[i]
        }
    })
    return answer;
}