function solution(n) {
    const  arr = new Array(n);
    
    for(let i =0 ; i< arr.length;i++){
        arr[i] = new Array(n);
    }
    
    for(let j=0 ;j<n;j++){
        for(let k=0; k<n;k++){
            if(j===k) arr[j][k] = 1;
            else arr[j][k] = 0;
        }
    }
    return arr;
}