n = int(input())

divider = 2

while n > 1:
    if n % divider == 0:
        print(divider)
        n = n // divider
    else:
        divider += 1
        if divider > int(n**0.5):
            divider = n
