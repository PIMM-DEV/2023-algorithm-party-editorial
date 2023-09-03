---
title: B. 알파빌과 베타빌
tags: ["greedy"]
layout: problem
level: normal
author: lys9546
checker: ["eric00513", "jk410", "kiwiyou", "lycoris1600", "parkky", "rustiebeats", "tony9402", "utilforever"]
first_solve: xiaowuc1 (3분)
ac_ratio: 65.761%
---

대기 명단의 왼쪽에서부터 $M$개의 값들이 민규의 친구인지 확인하면서 개수를 세어주면 됩니다. 민규의 친구인지 확인하는 방법에 따라 시간복잡도가 달라집니다.

1. 모든 친구를 순회하면 $O(M^2)$ 안에 해결할 수 있습니다.
2. `set`, `map` 등의 자료구조를 이용하면 $O(M\,logM)$으로 해결할 수 있습니다.
3. 친구의 번호 $x$가 위치 $y$에 있다는 정보를 `arr[x] = y` 형태로 저장하면 $O(N+M)$으로 해결할 수 있습니다.
