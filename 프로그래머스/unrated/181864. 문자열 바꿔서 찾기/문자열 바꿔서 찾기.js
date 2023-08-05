function solution(myString, pat) {
    
    const arr = myString.split('').reduce((acc, cur) => {
  acc.push(cur === 'A' ? 'B' : 'A');
  return acc;
}, []);
    
    if(arr.join('').includes(pat)) return 1;
    else return 0;
}