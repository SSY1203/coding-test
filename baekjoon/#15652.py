N, M = map(int, input().split())

arr = []
answers = []


def recur(start, number):
    if number == M:
        answers.append(arr[:])
        return

    for i in range(start, N + 1):
        arr.append(i)
        recur(i, number + 1)
        arr.pop()


recur(1, 0)

for a in answers:
    print(*a)
