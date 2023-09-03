---
title: F. 나무나무나 심어야지
tags: ["dfs", "euler_tour_technique", "offline_query"]
layout: problem
level: insane
author: onsbtyd
checker: ["eric00513", "jk410", "kiwiyou", "lycoris1600", "parkky", "rustiebeats", "tony9402", "utilforever"]
first_solve: gggkik (19분)
ac_ratio: 56.667%
---

나무나무의 특징을 분석해 봅니다. 1, 2, 3번 설명으로 나무나무가 일반적인 트리 구조라는 것을 알 수 있고, 4번 설명으로 각 정점에 최대 한번 값이 더해질 수 있다는 걸 알 수 있습니다. 이 상태에서 수확 쿼리가 들어올 때 주어진 정점과 그 정점의 서브 트리에 있는 열매의 무게 합을 구해야 합니다.

$N+M$이 최대 20만이기에 쿼리를 그때그때 바로 그래프 탐색을 통해 답을 구하려 하면 시간초과가 발생합니다. 그렇기에 조금 더 빠르게 가능하도록 처리를 해둬야 하지만, 접목 쿼리로 인해 트리의 구조가 변경되는 것도 고려해야 합니다.

처리를 위해 접목 쿼리를 먼저 해결합니다. 접목의 특징은 아래와 같습니다.

1. 뿌리와 같은 그래프에 속하는 정점에 붙는다.
2. 한번 접목된 가지는 제거되지 않는다.
3. 열매는 접목 쿼리 시에 붙는다.

1번 특징으로 모든 접목 쿼리는 뿌리가 속한 그래프에서 일어나고, 수확도 마찬가지인 걸 알 수 있습니다. 또 2번 특징으로 인해 해당 트리는 쿼리가 들어올수록 항상 커집니다. 그리고 트리의 규모는 수확 쿼리의 결과인 열매의 무게 합에 영향을 주지 않습니다. 그래서 접목 쿼리를 먼저 수행해 트리를 구성해 두고 후에 열매만 매다는 전략이 가능해집니다.

모든 쿼리를 미리 받아둔 뒤 한번 돌면서 접목 쿼리 만날 때까지만 연결해 최종 상태의 트리를 미리 만들어 둡니다. 이러면 트리 구조 변경이 없어지고 접목 쿼리를 단순히 정점에 값만 추가하는 쿼리로 바꿀 수 있습니다.

다음으로 수확 쿼리를 진행합니다. 접목 쿼리를 "트리 구조의 변경이 없는 값 추가"로 바꿨기에 트리에서 정점과 그 정점의 서브 트리에 있는 열매 무게 합을 빠르게 구할 수 있도록 처리해야 합니다. 만약 정점과 그 정점의 서브 트리를 구간으로 만들 수 있다면 세그먼트 트리를 사용하여 구간 합을 $O(log N)$에 구할 수 있습니다. 트리를 구간으로 만들기 위해서는 DFS와 오일러 경로 테크닉(ETT)을 사용하면 됩니다.

이 과정을 모두 거치면 접목 쿼리와 수확 쿼리가 세그먼트 트리에서의 값 업데이트와 구간 합으로 바뀌게 됩니다. 이제 입력받은 쿼리를 다시 한번 돌면서 실행하면 됩니다.

* 접목 -> 정점에 열매 무게만큼 값을 더해줌
* 수확 -> 정점과 그 서브 트리의 구간 합을 출력

최대로 존재할 수 있는 정점이 $(N+M)$ 개이기에 시간복잡도는 $O(M\,log(N+M))$가 나오게 됩니다.  