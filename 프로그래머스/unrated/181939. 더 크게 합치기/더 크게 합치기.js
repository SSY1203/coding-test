function solution(a, b) {
     const first = Number(String(a) + String(b));
    const second = Number(String(b) + String(a));
    var answer = first >= second ? first : second
    return (answer);
}