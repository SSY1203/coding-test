function solution(str1, str2) {
    var answer = [];
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');
    
    for(let i =0; i<str1Arr.length;i++) {
        answer.push(str1Arr[i]);
        answer.push(str2Arr[i]);
    }
    
    
    return answer.join('');
}