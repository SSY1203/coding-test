function solution(num_list) {
    var even = num_list.reduce((acc,cur,idx)=> idx%2===0 ? acc+=cur:acc,0 );
    var odd = num_list.reduce((acc,cur,idx)=> idx%2!==0 ? acc+=cur:acc,0 );
    return even>odd ? even: even<odd? odd:even;
}