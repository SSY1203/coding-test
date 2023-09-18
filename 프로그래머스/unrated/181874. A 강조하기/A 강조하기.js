function solution(myString) {
    var answer = myString.split('').map(str=> {
        if(str.toLowerCase() === 'a'){
            return str.toUpperCase()
        }else{
            return str.toLowerCase();
        }
    }).join('')
    return answer;
}