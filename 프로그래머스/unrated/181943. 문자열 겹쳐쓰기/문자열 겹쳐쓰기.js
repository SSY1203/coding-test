function solution(my_string, overwrite_string, s) {
    let my_string_arr =my_string.split('');
    let overwrite_string_arr = overwrite_string.split('');
    

    for(let i = s; i< overwrite_string_arr.length+s;i++){
            my_string_arr[i] = overwrite_string_arr[i-s]
    }
        
    
    return my_string_arr.join('');
}