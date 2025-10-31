n = int(input())

answers = []

divider = 2
value = n

# 소수 판별 함수
def isFindPrime(number):
    for i in range(2, int(number**0.5) + 1):
        if(number % i == 0):
            return False
    return True
        
for i in range(2, n + 1):
    if(value % divider == 0):
        value = int(value / divider)
    else:
        