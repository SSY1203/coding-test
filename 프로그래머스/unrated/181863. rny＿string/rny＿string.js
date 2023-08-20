function solution(rny_string) {
    let rny_arr = rny_string.split('');
    for(let i =0 ;i<rny_string.length;i++) {
        if(rny_arr[i] === 'm'){
            rny_arr[i] = 'rn';
        }
    }
    return rny_arr.join('');
}