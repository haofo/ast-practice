const recast = require('recast')
const b = recast.types.builders

// 空语句
const empty = b.emptyStatement()

// 循环
const loop = b.forStatement(
	b.variableDeclaration("var", [
		b.variableDeclarator(b.identifier("i"), b.literal(0))
	]),
	b.binaryExpression("<", b.identifier("i"), b.literal(3)),
	b.updateExpression("++", b.identifier("i"), /* prefix: */ false),
	b.emptyStatement()
);

// 变量声明
const variable = b.variableDeclaration("let", [
	b.variableDeclarator(b.identifier('a'), b.literal(1)),
], b.emptyStatement())

// if 语句
const fooId = b.identifier("foo");
const ifFoo = b.ifStatement(fooId, b.blockStatement([
	b.expressionStatement(b.callExpression(fooId, []))
]));

// switch语句
const SwitchStatement = b.switchStatement(fooId, [
	b.switchCase(b.literal("1"), [
		b.expressionStatement(b.updateExpression("++", b.identifier("i"), false)),
		b.breakStatement()]),
])

// return 语句
const returnstatement = b.returnStatement(
	b.binaryExpression(
		"+", b.identifier("x"), b.literal(1)
	)
)

// throw 语句
const throwstatement = b.throwStatement(b.newExpression(
	b.identifier('Error'),
	[b.literal('抛出一个错误')]
))

// try 语句
const trystatement = b.tryStatement(
	b.blockStatement([b.expressionStatement(b.callExpression(fooId, []))]),
	b.catchClause(
		b.identifier("err"),
		null,
		b.blockStatement([])
	)
);

// while 语句
const whilestatement = b.whileStatement(
	b.binaryExpression("<", b.identifier('i'), b.literal(3)),
	b.blockStatement(
		[b.expressionStatement(b.updateExpression("++", b.identifier("i"), false))],
	)
)

// for...in
const forinloop = b.forInStatement(
	b.variableDeclaration("let", [
		b.variableDeclarator(b.identifier("i"), null)
	]),
	b.identifier("obj"),
	b.blockStatement([])
);

// this 表达式
const thisexpression = b.thisExpression()

// array
const arrayExpress = b.arrayExpression([b.literal("a"), b.literal(1)])

// object
const objexpression = b.objectExpression([
	b.property('init', b.identifier('a'), b.literal(1)),
	b.property('init', b.identifier('b'), b.identifier('foo'))
])

// function
const FunctionExpression = b.functionExpression(b.identifier("succ"), [
	b.identifier("x")
], b.blockStatement([
	b.returnStatement(
		b.binaryExpression(
			"+", b.identifier("x"), b.literal(1)
		)
	)
]))

// 一元运算符
const unaryex = b.unaryExpression("!", b.sequenceExpression([
	b.identifier("a"),
	b.identifier("b"),
	b.identifier("c")
]))


// 成员变量
const member = b.memberExpression(
	b.identifier("foo"),
	b.identifier("bar"),
	true
)

// 三元运算符表达式
const condition = b.conditionalExpression(b.identifier('a'), b.identifier('b'), b.identifier('c'))

const output = recast.print(member).code;