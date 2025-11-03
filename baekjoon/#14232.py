n = int(input())

answers = []

for i in range(2, int(n**0.5) + 1):
    while n % i == 0:
        answers.append(i)
        n //= i

if n > 1:
    answers.append(n)

print(len(answers))
print(*answers)
