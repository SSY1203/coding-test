function solution(num_list) {
    for(let i =0; i< num_list.length; i++) {
        if(num_list[i] < 0) return num_list.indexOf(num_list[i]);
        
        if(num_list.indexOf(num_list[i])+1 === num_list.length ) return -1;
    }
}