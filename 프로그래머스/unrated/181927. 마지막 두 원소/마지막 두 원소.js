function solution(num_list) {
    const arrLength = num_list.length;
    const lastNum = num_list[arrLength-1];
    const compareNum = num_list[arrLength-2];
    let resultArr=[...num_list];
    
    if(lastNum> compareNum) {
        resultArr.push(lastNum-compareNum)    
    }else {
        resultArr.push(lastNum*2)
    }
    
    return resultArr;
}