N = int(input())

arr = list(list(map(int, input().split())) for _ in range(N))
arr.sort(key=lambda x: x[0])

standardIndex, standard = max(enumerate([row[1] for row in arr]), key=lambda x: x[1])

sum = 0
lMax = 0
lIdx = 0
rMax = 0
rIdx = 0

# 왼쪽 ~ 기준
for i in range(standardIndex + 1):
    x, y = arr[i]

    # lMax 비교 후 저장
    if y >= lMax:
        sum += (x - lIdx) * lMax
        lMax = y
        lIdx = x


# 기준 ~ 오른쪽
for j in range(N - 1, standardIndex - 1, -1):
    x, y = arr[j]

    if y >= rMax:
        sum += (rIdx - x) * rMax
        rMax = y
        rIdx = x

print(sum + standard)
