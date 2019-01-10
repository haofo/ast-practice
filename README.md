# ast-practice

Parsing and building JS code through recast

使用[recast](https://www.npmjs.com/package/recast)这个库时，由于不熟悉`recast.builders`的API，花费了点时间记录下尝试的一些常用API

---

由于 `recact.parse`解析对象的扩展运算符(`{...}`)失败，打算尝试`@babel/parser`、 `@babel/types`的组合来替换`recast`