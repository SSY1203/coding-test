N, M = map(int, input().split())

arr = []
answers = set()


def recur(number):
    if number == M:
        sortedArr = tuple(sorted(arr))
        if sortedArr not in answers:
            answers.add(sortedArr)
        return

    for i in range(1, N + 1):
        if i in arr:
            continue
        arr.append(i)
        recur(number + 1)
        arr.pop()


recur(0)

for a in sorted(answers):
    print(*a)
