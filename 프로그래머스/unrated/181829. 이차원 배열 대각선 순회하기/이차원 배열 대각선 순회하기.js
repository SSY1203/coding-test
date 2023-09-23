function solution(board, k) {
    var answer = 0;
    
    board.map((item,idx)=> {
        for(let i =0; i<item.length;i++){
            if(idx+i <=k){
                answer += board[idx][i]
            }
        }
    })
    return answer;
}