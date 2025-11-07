N, M = map(int, input().split())

arr = []
answers = []


def recur(number):
    if number == M:
        answers.append(arr[:])
        return

    for i in range(1, N + 1):
        arr.append(i)
        recur(number + 1)
        arr.pop()


recur(0)

for a in answers:
    print(*a)
