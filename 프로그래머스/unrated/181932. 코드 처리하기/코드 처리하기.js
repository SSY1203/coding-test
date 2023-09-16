function solution(code) {
    let mode = false;
    const codeArr = code.split('').filter((char, idx)=> {
        if(char==='1') {
            mode = !mode;
            return false;
        }
        
        if(mode){
            return idx%2 !==0;
        }else{
            return idx%2 ===0;
        }
    });

    var answer = codeArr.length ===0 ? 'EMPTY': codeArr.join('');
    return answer;
}