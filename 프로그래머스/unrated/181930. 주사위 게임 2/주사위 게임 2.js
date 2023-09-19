function solution(a, b, c) {
    var answer = 0;
    const arr = new Set([a,b,c]);
    
    if(arr.size===1) {
        answer = (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3)
    }else if(arr.size===3){
        answer = a+b+c;
    }else{
        answer = (a+b+c)*(a**2+b**2+c**2)
    }
    
    return answer
}