N, M = map(int, input().split())

numbers = sorted(map(int, input().split()))

arr = []
answers = set()


def recur(number):
    if number == M:
        sortedArr = tuple(sorted(arr))
        if sortedArr not in answers:
            answers.add(sortedArr)
        return
    for i in numbers:
        if i in arr:
            continue
        arr.append(i)
        recur(number + 1)
        arr.pop()


recur(0)

for a in sorted(answers):
    print(*a)
