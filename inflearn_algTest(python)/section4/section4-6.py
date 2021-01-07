'''
섹션4-6
씨름 선수(그리디)
'''
import sys

#입력옵션#sys.stdin = open('input.txt', 'r')

# N: 지원자수
N = int(input())
profiles = []
for _ in range(N):
    profiles.append(tuple(map(int, input().split())))



'''
profiles.sort()
# brute force
cnt = 0
for p in profiles:
    enroll = True
    for n in profiles:
        if p != n:
            if p[0] <= n[0] and p[1] <= n[1]:
                enroll = False

    if enroll == True:
            cnt += 1
print(cnt)
'''

# greedy

profiles.sort(reverse=True) # 키 내림차순 정렬

max_weight = 0
cnt = 0
for h, w in profiles:
    if w > max_weight:
        max_weight = w
        cnt += 1

print(cnt)