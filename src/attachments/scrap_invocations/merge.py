from os import listdir
from json import loads, dumps

content = []
for each in listdir('./gets'):
    if each.endswith('.txt'):
        print(each)
        content += loads(open(f'./gets/{each}', encoding='utf-8').read())
with open('result.json', 'w', encoding='utf-8') as f:
    f.write(dumps(content, ensure_ascii=False, indent=4))
