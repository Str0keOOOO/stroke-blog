const e=JSON.parse('{"key":"v-6d279308","path":"/posts/code/modeling/TOPSIS.html","title":"TOPSIS模型","lang":"zh-CN","frontmatter":{"title":"TOPSIS模型","date":"2024-03-03T00:00:00.000Z","icon":"circle-info","order":3},"headers":[{"level":2,"title":"TOPSIS解法","slug":"topsis解法","link":"#topsis解法","children":[]},{"level":2,"title":"方法和原理","slug":"方法和原理","link":"#方法和原理","children":[]},{"level":2,"title":"算法和步骤","slug":"算法和步骤","link":"#算法和步骤","children":[]},{"level":2,"title":"实例处理方法","slug":"实例处理方法","link":"#实例处理方法","children":[{"level":3,"title":"数据预处理","slug":"数据预处理","link":"#数据预处理","children":[]},{"level":3,"title":"常用属性规范化方法有以下几种","slug":"常用属性规范化方法有以下几种","link":"#常用属性规范化方法有以下几种","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"需要补充","slug":"需要补充","link":"#需要补充","children":[]}],"git":{"createdTime":1719797899000,"updatedTime":1719797899000,"contributors":[{"name":"Str0keOOOO","email":"786619108@qq.com","commits":1}]},"readingTime":{"minutes":7.98,"words":2394},"filePathRelative":"posts/code/modeling/TOPSIS.md","localizedDate":"2024年3月3日","excerpt":"<p>评价方法大体上可分为两类，其主要区别在确定权重的方法上。一类是主观赋权法，多数采取综合咨询评分确定权重，如综合指数法、模糊综合评判法、层次分析法、功效系数法等。另一类是客观赋权，根据各指标间相关关系或各指标值变异程度来确定权数，如主成分分析法、因子分析法、理想解法（也称TOPSIS法）等。</p>\\n<p>目前国内外综合评价方法有数十种之多,其中主要使用的评价方法有主成分分析法、因子分析、TOPSIS、秩和比法、灰色关联法、嫡权法、层次分析法、模糊评价法、物元分析法、聚类分析法、价值工程法、神经网络法等。</p>\\n<h2> TOPSIS解法</h2>\\n<p>目前已有许多解决多属性决策的排序法，如理想点法、简单线性加权法、加权平方和法、主成分分析法、功效系数法、可能满意度法、交叉增援矩阵法等。本节介绍多属性决策问题的理想解法，理想解法亦称为TOPSIS法，是一种有效的多指标评价方法。这种方法通过构造评价问题的正理想解和负理想解，即各指标的最优解和最劣解，通过计算每个方案到理想方案的相对贴近度，即靠近正理想解和远离负理想解的程度，来对方案进行排序，从而选出最优方案。</p>"}');export{e as data};