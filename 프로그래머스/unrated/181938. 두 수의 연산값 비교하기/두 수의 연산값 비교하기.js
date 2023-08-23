function solution(a, b) {
    const first = Number(String(a)+ String(b));
    const second = 2*a*b;
    var answer = first>=second ? first : second;
    
    
    return answer;
}