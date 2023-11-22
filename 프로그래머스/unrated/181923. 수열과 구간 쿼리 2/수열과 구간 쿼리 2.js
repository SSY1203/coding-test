function solution(arr, queries) {
    var answer = [];
    let sliceArr = [];
    let start = 0;
    let end = 0;
    let standard = 0;
    
    queries.forEach(query=> {
        let standardPassArr = []
        start = query[0]
        end = query[1]
        standard = query[2]
        let min = 9
        sliceArr = arr.slice(start, end+1)
        
        for(let i =0; i<sliceArr.length;i++){
            if(sliceArr[i] > standard){
                standardPassArr.push(sliceArr[i])
            }
        }
        if(standardPassArr.length !== 0){
        answer.push(Math.min(...standardPassArr))
        }else{
            answer.push(-1)
        }
    })
    
    
    return answer;
}