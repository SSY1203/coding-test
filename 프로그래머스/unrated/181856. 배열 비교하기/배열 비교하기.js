function solution(arr1, arr2) {
    const arr1Sum = arr1.reduce((acc,cur)=> acc+cur);
    const arr2Sum = arr2.reduce((acc,cur)=> acc+cur);
    const answer = arr1Sum> arr2Sum ? 1 : arr1Sum < arr2Sum ? -1 : 0
    
    return arr1.length> arr2.length? 1 : arr1.length< arr2.length ? -1 : answer
}