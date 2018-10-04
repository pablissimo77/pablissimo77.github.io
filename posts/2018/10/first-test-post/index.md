.. title: Первый пост (тест)
.. slug: first-test-post
.. date: 2018-10-04 12:23:00 UTC+03:00
.. tags: test
.. author: pablissimo77
.. description: Тестирование генератора статических сайтов Nikola
.. category: python

# Тестирование генератора статических сайтов Nikola

## Картинка раз

![](/images/2018-10/41f87af6f2524b1686ab02f04714d5bb.gif)

## Картинка два

![](https://pablissimo77.site/images/2018-10/41f87af6f2524b1686ab02f04714d5bb.gif)

## Таблица

| state | population | economy |
|:-----------------|:----------------|:--------------|
| Cordoba | 341 | 189 |
| Santa Fe | 628 | 313 |
| San Luis | 4669 | 6 |


## Код

```python
    import pandas as pd
    import numpy as np
    
    
    n = ['id', 'date', 'name', 'text', 'typr', 'rep', 'rtw', 'faw', 'stcount', 'foll', 'frien', 'listcount']
    data_positive = pd.read_csv('data/positive.csv', sep=';', error_bad_lines=False, names=n, usecols=['text'])
    data_negative = pd.read_csv('data/negative.csv', sep=';', error_bad_lines=False, names=n, usecols=['text'])
    
    
    sample_size = min(data_positive.shape[0], data_negative.shape[0])
    raw_data = np.concatenate((data_positive['text'].values[:sample_size],
                               data_negative['text'].values[:sample_size]), axis=0)
    labels = [1] * sample_size + [0] * sample_size
```

