function solution(my_string, index_list) {
    let newArr = my_string.split('');
    let answer = '';
    for(let i =0 ; i< index_list.length;i++){
        answer += newArr[index_list[i]] 
    }    
    return answer;
}