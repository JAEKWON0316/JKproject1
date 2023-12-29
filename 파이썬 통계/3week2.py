
#2장 예제 13 히스토그램 및 도수다각형
import numpy as np
drink = np.array([101.8, 101.5, 101.8, 102.6, 101, 96.8, 102.4, 100, 98.8, 98.1,
                  98.8, 98, 99.4,95.5, 100.1, 100.5, 97.4, 100.2, 101.4, 98.7,
                  101.4, 99.4, 101.7, 99, 99.7, 98.9, 99.5, 100, 99.7, 100.9,
                  99.7, 99, 98.8, 99.7, 100.9, 99.9, 97.5, 101.5, 98.2, 99.2,
                  98.6, 101.4, 102.1, 102.9, 100.8, 99.4, 103.7, 100.3, 100.2, 101.1,
                  101.8, 100, 101.2, 100.5, 101.2, 101.6, 99.9, 100.5, 100.4, 98.1,
                  100.1, 101.6, 99.3, 96.1, 100, 99.7, 99.7, 99.4, 101.5, 100.9,
                  101.3, 99.9, 99.1, 100.7, 100.8, 100.8, 101.4, 100.3, 98.4, 97.2])

import matplotlib.pyplot as plt
plt.figure()
n, edgs, patches = plt.hist(drink, bins = 10, facecolor="blue", alpha=0.3)
#plt.show()
# n: 각 계급의 도수
# edgs: 계급의 경계값 (bins+1) 양쪽에 있어야 하니깐
# patches: 각 계급을 그리는 matplotlib patch 객체의 리스트
# drink: 연속형 데이터
# bins: 계급 수
# alpha: 투명 수
print(n)
print(edgs)
print(patches)
print(type(n),type(edgs),type(patches))


x = [(edgs[i]+edgs[i+1])/2 for i in range(len(edgs)-1)] #경계값으로 중앙값 계산 인덱스 0~10 까지
print(x)
w_bin = edgs[1]-edgs[0] #계급폭
print(w_bin)
#그래프 시작과 끝점 추가
x.insert(0,x[0]-w_bin) #0번째 중앙값에서 - 계급폭 x축값
x.append(x[-1]+w_bin) #뒤에서 0번째(맨마지막) 중앙값에서 + 계급폭 x축값
print(x)
n = np.insert(n,0,0.0) #numpy자료형 n 첫번째 위치에다가 0.0을 놓아라 y축값
n = np.append(n,0.0) #numpy자료형 n 마지막번째 위치에다가 0.0을 놓아라 y축값
print(n)
plt.xlabel('drink') #x축 이름
plt.ylabel('Frequency') #y축 이름
plt.title("Histogram of drink") #제목
plt.plot(x,n,'blue',marker='o') #선그리기 x=x축, n=y축
plt.show()

# 3장 예제 14
#전체 개수
count = len(drink)
print(count)
#평균값 함수 mean
mean = np.mean(drink)
print(mean)
#중앙값 함수 median
median = np.median(drink)
print(median)
#백분율 함수 percentile
per = np.percentile(drink,[0,25,50,75,100])
print(per)
#표본분산 함수 var
var = np.var(drink)
print(var)
#표본표준편차
std = np.std(drink)
print(std)
#최솟값, 최댓값 함수
min, max = np.min(drink), np.max(drink)
print(min, max)
#범위 구하기
range = max - min
print(range)
#IQR 사분범위(양쪽 1/4씩 제외)
q75, q25 = np.percentile(drink, [75, 25])
print(q75, q25)
IQR = q75 - q25
print(IQR)
#10백분위수,90백분위수
per01_09 = np.percentile(drink,q=[10,90])
print(per01_09)

print('길이            :', count, '\n',          #\n은 줄 뛰우기
      '평균            :', mean , '\n',
      '분산            :', var, '\n',
      '표준편차         :', std, '\n',
      '중앙값           :', median, '\n',
      '최댓값           :', max, '\n',
      '최솟값           :', min, '\n',
      '제1사분위수       :', q25, '\n',
      '제3사분위수       :', q75, '\n',
      '사분위수범위       :', IQR, '\n')

#summary 요약 pandas로 다 계산해줌 단, 표준편차(std)값은 두 모델의 구하는 식이 달라 조금 다르다.
import pandas as pd
drink_df = pd.DataFrame(drink) #numpy array를 pandas DataFrame으로 변환
summary = drink_df.describe() #기술통계 계산
print(summary)

drink_df.plot.hist(bins=10, color='g') #히스토그램 출력
plt.show()
drink_df.plot.box() #상자그림 출력
plt.show()



