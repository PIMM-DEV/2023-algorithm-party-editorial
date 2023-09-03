---
title: E. 미술 시간
tags: ["disjoint_set", "implementation"]
layout: problem
level: hard
author: jjkmk1013
checker: ["eric00513", "jk410", "kiwiyou", "lycoris1600", "parkky", "rustiebeats", "tony9402", "utilforever"]
first_solve: kcm1700 (3분)
ac_ratio: 29.630%
---

이 문제에 제시되는 쿼리를 그대로 수행할 경우 총 시간복잡도는 $O(QN)$으로 시간초과를 받게 됩니다. 이를 해결하기 위해서는 이미 색칠된 칸을 효과적으로 건너뛰는 방법이 필요합니다. 

각 칸의 번호 $i$에 대해서, 비어있는 칸의 번호 중 $i$이상인 가장 작은 수 $P\_{i}$를 정의합시다. 처음에는 모든 $i(1 \leq i \leq N)$에 대해 $P\_{i} = i$임을 알 수 있습니다. 이 $P\_{i}$를 $i$의 비어있는 칸이라고 칭하겠습니다. 
또한, 빈칸 $k$가 색칠될 경우, $k$의 비어있는 칸 $P\_{k}$는 그다음 칸인 $k+1$의 비어있는 칸 $P\_{k+1}$이 됨을 알 수 있습니다. 이렇게 정의했을 때, 연속된 칸을 색칠하는 쿼리의 특성상 한번 색칠한 칸을 만나게 되는 경우 $P\_{k}$를 방문하여 바로 다음 빈칸으로 접근할 수 있게 됩니다.  

따라서 분리 집합을 이용해 $k$번째 칸에 방문했을 때 빈칸이라면 색칠한 후 $P\_{k}$를 $P\_{k+1}$과 연결하고, 색칠된 칸이라면 $P\_k$를 방문하여 색칠된 구간을 건너뜁니다. 이때 경로 압축을 이용하면 각 칸을 최대 2번씩만 방문하게 되어 총 시간복잡도는 $O(N+Q)$가 됩니다. 주의해야 할 점은 부모를 정하는 기준을 숫자가 높은 순으로 설정해야 올바르게 다음 빈칸으로 연결됩니다. 

이외에도 느리게 갱신되는 세그먼트 트리를 통해 쿼리를 $O(logN)$에 처리하거나, BBST가 내장된 언어의 경우 1부터 N까지 삽입 후 색칠된 칸을 제거하는 방식으로 각 과정을 $O(logN)$에 처리할 수 있습니다. 

$O(N+Q)$, $O(Q\,logN)$, $O((N+Q)\,logN)$세가지 방법 모두 문제를 해결할 수 있습니다. 