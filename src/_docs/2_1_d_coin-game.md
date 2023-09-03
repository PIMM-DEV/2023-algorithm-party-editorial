---
title: D. 동전 탑 게임
layout: article
---

* 시간 제한: 1초
* 메모리 제한: 512MB

## 문제

동전 탑 게임은 두 명의 플레이어가 각각 $A$, $B$개의 동전으로 쌓인 **두 개의 탑**으로 하는 게임이다. 두 플레이어는 서로 턴을 번갈아 가면서 게임을 진행하게 되고 각각의 턴에는 비어있지 않은 동전 탑 하나를 골라 한 개 이상의 동전을 가져가야 한다. 더 이상 가져갈 동전이 없으면 게임은 끝나고 **더 많은 동전을 가져간 플레이어**가 승리한다. 만약 서로 같은 양의 동전을 가져갔다면 후공이 승리한다.

민규는 너무나도 단순한 이 게임을 흥미진진하게 만들고 싶었다. 그래서 게임이 끝날 때까지 승패를 알 수 없도록 정수 $K$를 두어 **마지막으로 동전을 가져가는 플레이어**에 대한 다음과 같은 규칙을 추가했다.

$K$가 음이 아닌 정수라면 $K$개의 동전을 추가로 얻는다.
$K$가 음수라면 $\left\vert K \right\vert$개의 동전을 잃는다. 만약 보유하고 있던 동전이 $\left\vert K \right\vert$개보다 작다면 게임에서 패배한다.
민규는 영도와 함께 개선한 게임을 하려 한다. 영도는 게임을 보자마자 필승법을 눈치채고 재빠르게 선후공 선택권을 가져갔다. 두 플레이어가 최적의 방법으로 게임을 진행한다고 가정했을 때 영도가 이기려면 선공과 후공 중 어느 것을 선택해야 할까?

## 입력

첫째 줄에 $A,B,K$가 공백으로 구분되어 주어진다.

## 출력

선공을 선택해야 한다면 `First`, 후공을 선택해야 한다면 `Second`를 출력한다.

## 제한

* $0 \le A, B \le 1\,000$
* $A+B > 0$
* $\left\vert K \right\vert \le 2\,000$
* 입력으로 주어지는 모든 수는 정수이다.


## 예제 입력 1

```
10 7 4
```

## 예제 출력 1

```
First
```

## 예제 입력 2

```
4 4 -2
```

## 예제 출력 2

```
Second
```