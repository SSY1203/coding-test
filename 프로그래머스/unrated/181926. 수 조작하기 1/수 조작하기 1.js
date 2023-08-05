function solution(n, control) {
    const answer = control.split('');
    let result = 0;
    
    answer.map(item => {
        if(item === 'w') result += 1;
        else if(item === 's') result -= 1;
        else if(item === 'd') result += 10;
        else result -=10;
    });
    
    return result+n
}