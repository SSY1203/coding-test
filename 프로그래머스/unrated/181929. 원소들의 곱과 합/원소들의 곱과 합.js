function solution(num_list) {

    const sum = num_list.reduce((acc, cur, idx) => { return acc += cur; }, 0);
    const mult = num_list.reduce((acc, cur, idx) => { return acc *= cur; }, 1);
    
    return mult < (sum**2) ? 1 : 0;
}