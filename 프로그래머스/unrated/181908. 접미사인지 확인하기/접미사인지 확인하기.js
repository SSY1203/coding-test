function solution(my_string, is_suffix) {
    var answer = 0;
    let myStringArr = my_string.split('');    
    
    
    for(let i =0;i<myStringArr.length;i++){
        if( myStringArr.slice(i,undefined).join('')===is_suffix){
            return 1 ;
        }
    }
    return answer;
    
}