function solution(arr, n) {
    var answer = arr.map((item, idx)=> arr.length%2!== idx%2 ? item+n : item);

    return answer;
}