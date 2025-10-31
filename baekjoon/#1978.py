n = int(input())

numbers = list(map(int, input().split()))

count = 0


# 소수 판별 함수
def isFindPrime(number):
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False

    return True


for j in range(n):
    if numbers[j] == 1:
        continue

    if isFindPrime(numbers[j]):
        count += 1

print(count)
