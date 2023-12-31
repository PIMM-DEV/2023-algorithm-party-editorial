---
title: D. 동전 탑 게임
tags: ["game_theory"]
layout: problem
level: hard
author: jh01533
checker: ["eric00513", "jk410", "kiwiyou", "lycoris1600", "parkky", "rustiebeats", "tony9402", "utilforever"]
first_solve: nick832 (23분)
ac_ratio: 10.274%
---

$K$가 음수일 때와 $K$가 음이 아닌 정수일 때로 나눠서 접근하면 됩니다.

## $K$가 음이 아닌 정수일 때 (sub 1)
우선 마지막에 동전을 가져가는 것, 즉 $K$를 얻는 것을 목표로 두 플레이어가 최선을 다했을 때 어떤 플레이어가 $K$를 가져갈 수 있을 지 생각해 봅시다. 만약 $A = B$ 라면 선공이 어떻게 가져가든지 후공이 같은 양의 동전을 다른 탑에서 가져가면 항상 마지막에 동전을 가져갈 수 있습니다.

ex: (10, 10) > (10, 7) > (7, 7) > (2, 7) > (2, 2) > (0, 2) > (0, 0)

이때 중요한 관찰은 게임이 어떻게 진행되든 후공이 위와 같은 규칙을 지킨다면 $K$를 제외하고 서로 가져가는 동전의 양이 항상 똑같다는 것입니다. 따라서 $A = B$ 일 때 후공이 규칙을 지킨다면 선공은 $A$개 후공은 $A+K$ 개를 가져가므로 후공이 항상 승리하게 됩니다.

그렇다면 $A \neq B$ 개일 때는 어떨까요? 일반성을 잃지 않고 $A > B$ 라고 해봅시다. 처음에 선공이 $A-B$개의 동전을 $A$개의 동전이 쌓인 탑에서 가져가게 되면 아까와 같은 $A = B$ 구조가 되고, 선후공이 바뀐 상태로 $A = B$ 규칙을 지키며 플레이하면 됩니다.

선공이 규칙을 지킨다면 선공은 $(A-B)+B+K$ 개의 동전을 가져가고 후공은 B개의 동전을 가져갑니다. $(A-B) > 0$ 이므로 선공이 항상 승리하게 됩니다. 따라서 $K$와 상관없이 $A = B$ 일 때 후공이 필승법을 가지고, $A \neq B$ 일 때 선공이 필승법을 가집니다.

## $K$가 음수일 때 (sub 2)

$K$가 음이 아닌 정수일 때와는 달리 $K$를 자신이 얻는 것 보다 상대방에게 넘기는 것이 이득인 게임으로 바뀝니다. 예외를 제외하고 $K$가 음이 아닌 정수일 때와 똑같이 플레이하다가 `(1, 0)` 구조를 만들 수 있을 때 `(1, 0)` 구조로 만들면 됩니다. $A = B$ 일 때 후공이 필승법을 가지고, $A \neq B$ 일 때 선공이 필승법을 가집니다.

세가지 예외가 있습니다.
* $A = 1; B = 0$일 때, $A = 1; B = 1$일 때
    각자가 가져갈 수 있는 동전이 정해져 있으므로 $K$를 가져가는 플레이어가 지게 됩니다.
* $K = -1$ 일 때
    선공이 첫 턴에 $A, B$ 중 동전이 많이 쌓여있는 탑의 동전을 모두 가져가게 된다면 항상 선공이 승리하게 됩니다.

본 문제는 돌무더기가 2개인 님게임과 같습니다. 만약 동전 탑이 $N$개일 때도 풀 수 있을까요?
