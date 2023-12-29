import numpy as np

death = np.array([2, 1, 2, 4, 2, 5, 3, 3, 5, 6, 3, 8, 3,
                  3, 6, 3, 6, 5, 3, 5, 2, 6, 2, 3, 4, 3,
                  2, 9, 2, 2, 3, 2, 7, 3, 2, 10, 6, 2, 3,
                  1, 2, 3, 3, 4, 3, 2, 6, 2, 2, 3, 2, 3,
                  4, 3, 2, 3, 5, 2, 5, 5, 3, 4, 3, 6, 2,
                  1, 2, 3, 2, 6, 3, 3, 6, 3, 2, 3, 6, 4,
                  6, 5, 3, 5, 6, 2, 6, 3, 2, 3, 2, 6, 2,
                  6, 3, 3, 2, 6, 9, 6, 3, 6, 6, 2, 3, 2,
                  3, 5, 3, 5, 2, 3, 2, 3, 3, 1, 3, 3, 2,
                  3, 3, 4, 3, 6, 6, 3, 3, 3, 2, 3, 3, 6])
# print(death)

"""
lst =[2, 1, 2, 4, 2, 5, 3, 3, 5, 6, 3, 8, 3,
      3, 6, 3, 6, 5, 3, 5, 2, 6, 2, 3, 4, 3,
      2, 9, 2, 2, 3, 2, 7, 3, 2, 10, 6, 2, 3,
      1, 2, 3, 3, 4, 3, 2, 6, 2, 2, 3, 2, 3,
      4, 3, 2, 3, 5, 2, 5, 5, 3, 4, 3, 6, 2,
      1, 2, 3, 2, 6, 3, 3, 6, 3, 2, 3, 6, 4,
      6, 5, 3, 5, 6, 2, 6, 3, 2, 3, 2, 6, 2,
      6, 3, 3, 2, 6, 9, 6, 3, 6, 6, 2, 3, 2,
      3, 5, 3, 5, 2, 3, 2, 3, 3, 1, 3, 3, 2,
      3, 3, 4, 3, 6, 6, 3, 3, 3, 2, 3, 3, 6]

#print(lst)
#print(type(lst))
death = np.array(lst)
print(death)
print(type(death))
"""

'''1. 도수분포표
    pandas 모듈의 crosstab() 함수를 이용하여 도수분포표 작성'''
import pandas as pd

table = pd.crosstab(index=death, colnames=["질병"], columns='도수')  # pd.crosstab(index, colnames, columns)
# index:범주로 구분된 입력 자료
# colnames: 범주에 해당하는 열의 이름 지정(리스트 형태로)
# columns:도수가 저장되는 열의 이름 지정 ex '도수'

table.index = ["감염", "각종암", "순환기", "호흡기", "소화기", "사고사", "비뇨기", "정신병", "노환", "신경계"]
# 범주형 설정 = 숫자 -> 문자 , 안해주면 1~10까지 숫자로나옴

#print(table)

'''1.막대그래프
   matplotlib 모듈의 rc()함수를 이용한 한글 설정
   matplotlib.pyplot 모듈을 이용한 plot'''
'''
from matplotlib import font_manager, rc     #기본적으로 영어만 쓸 수 있어 한글로 바꿔줘야 한다.
#font_name = 'NanumBarunGothic'
#rc('font', family =font_name)
# font_name : 폰트의 이름 ex) 나눔바른고딕: 'NanumBarunGothic'

fontprop = font_manager.FontProperties(fname="C:/Users/user/Desktop/Font/NanumBarunGothic.ttf") 
'''
'''
import matplotlib.pyplot as plt
#plt.figure() #환경 구축
table.plot(kind= 'bar', color='blue', legend=False) # kind: 종류 , legend: 범례 color: 색상
plt.xlabel('질병종류', fontproperties=fontprop) #x축
plt.ylabel('빈도수', fontproperties=fontprop) #y축
plt.title("사망 원인", fontproperties=fontprop) #그래프 이름
plt.xticks(rotation=0, fontproperties=fontprop ) #rotation = x축의 tick 이름의 회전 각도(각 x축 항목 이름들의 각도)
plt.show() # kind(종류)= 'bar' 수직막대그래프 , 'barh' 수평 막대그래프
           # color(색상)= ex) 'black', 'blue'
           # legend= True or False (범례의 출력 여부 True:출력, Flase: 생략)'''
'''
import matplotlib.pyplot as plt
plt.pie(table, labels=table.index)
plt.rc('font', size=6)
plt.title("사망원인에 대한 원형 그래프", fontproperties=fontprop)
plt.show()
'''
'''
# 예제12 파레토그림

from paretochart import pareto
from matplotlib import font_manager, rc
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

fontprop = font_manager.FontProperties(fname="C:/Users/user/Desktop/Font/NanumBarunGothic.ttf")
plt.figure()
fig, ax = plt.subplots()
ax.paretoplot = pareto(table['도수'], data_kw={'color':'blue'}, line_args=('black',), labels=table.index)

p_legend = mpatches.Patch(color='black', label='누적상대도수')
p_legend1 = mpatches.Patch(color='blue', label='빈도수')
plt.legend(handles=[p_legend, p_legend1], loc='center right')

plt.title("사망 원인")
plt.xlabel("질병종류")
ax.set_ylabel("Frequency")
plt.ylabel('cumulative percentage')
plt.rc('font', size=10)
plt.show()
'''