N, M = map(int, input().split())

numbers = sorted(map(int, input().split()))

arr = []


def recur(number):
    if number == M:
        print(*arr)
        return
    for i in numbers:
        arr.append(i)
        recur(number + 1)
        arr.pop()


recur(0)
