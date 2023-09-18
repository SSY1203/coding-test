function solution(my_string, alp) {
    const arr = my_string.split('');
    
    arr.reduce((acc, cur)=> cur === alp && cur.toUpperCase())
    
    const newArr = arr.map(item=> {
        if(item===alp){
           return item.toUpperCase(); 
        }else{
            return item;
        }
    })
    return newArr.join('');
}