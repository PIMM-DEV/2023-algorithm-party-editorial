---
title: C. 인기투표
tags: ["implementation", "gcd", "math"]
layout: problem
level: little-hard
author: belline0124
checker: ["eric00513", "jk410", "kiwiyou", "lycoris1600", "parkky", "rustiebeats", "tony9402", "utilforever"]
first_solve: xiaowuc1 (12분)
ac_ratio: 18.248%
---

두 개 이상의 정수가 주어졌을 때, 이 정수들을 정수들의 최대공약수로 나누면 주어진 정수들의 비율 관계를 만족하는 최소 정수를 획득할 수 있습니다. 다시 말해 획득한 수는 주어진 수 사이의 비율 관계를 최소 정수로 나타냅니다. 백분율에서 유추할 수 있는 모든 투표수는 이 획득한 수의 배수입니다.  

이전 시점은 가능한 투표수의 최소 정수를 그대로 출력하면 되지만, 현재 시점의 추정 결과는 그대로 출력하면 안 됩니다. 투표는 철회하거나 번복할 수 없으므로, 각 항목의 투표수는 각각 현재 시점이 이전 시점보다 항상 크거나 같아야 합니다.  

즉, 다음 출력은 틀렸습니다.  

**입력**
```
2 0
10 90
50 50
```

**출력**
```
10
2
```

정리하면 이전 시점의 투표수는 입력받은 수들을 이 수들의 최대공약수로 나눈 수입니다. 그리고 현재 시점의 투표수는 "각 항목의 투표수가 이전 시점보다 크거나 같은", "현재 시점의 수들의 최대 공약수로 나눈 수의 배수"입니다.  

## 여담

원래 이 문제는 입력을 실수로 제시할 계획이었습니다. 하지만 정밀도 문제로 몇몇 입력이 일부 언어에서 실수에 $10^P$를 곱해 정수로 만드는 과정이 제대로 수행되지 않을 수 있다는 사실을 확인했습니다. 결국 원래 제시할 실수 입력 대신 실수에 $10^P$를 곱한 정수를 입력으로 제시하는 것으로 변경하였습니다.

![](./_static/unlucky-jonghyeon.jpeg){width: 40%}

Special Thanks to 강도희 @ PIMM: 이 그림은 PIMM의 디자인 전공 멤버, 강도희 씨의 도움을 받았습니다.  