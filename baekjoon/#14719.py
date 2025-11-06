h, w = map(int, input().split())

blocks = list(map(int, input().split()))

standardIndex, standard = max(enumerate(blocks), key=lambda item: item[1])

print(list(enumerate(block for block in blocks)))
print(standardIndex, standard)

sum = 0

lMax = 0
rMax = 0

# 좌측
for i in range(standardIndex):
    curH = blocks[i]

    if curH >= lMax:
        lMax = curH
    sum += lMax - curH

# 우측
for j in range(w - 1, standardIndex, -1):
    curH = blocks[j]

    if curH >= rMax:
        rMax = curH
    sum += rMax - curH

print(sum)
