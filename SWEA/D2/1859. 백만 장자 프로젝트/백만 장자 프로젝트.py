T = int(input())

for test_case in range(T):
    date = int(input())
    profit = 0
    prices = list(map(int, input().split()))
    maxPrice = 0
    

    for price in prices[::-1]:
        if price >= maxPrice:
            maxPrice = price
        else:
            profit += maxPrice - price

    print(f'#{test_case + 1}', ' ', profit, sep='')        

