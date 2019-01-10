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

const variable = b.variableDeclaration("let", [
	b.variableDeclarator(b.identifier('a'), b.literal(1)),
], b.emptyStatement())

const fooId = b.identifier("foo");
const ifFoo = b.ifStatement(fooId, b.blockStatement([
	b.expressionStatement(b.callExpression(fooId, []))
]));

const SwitchStatement = b.switchStatement(fooId, [
	b.switchCase(b.literal("1"), [
		b.expressionStatement(b.updateExpression("++", b.identifier("i"), false)),
		b.breakStatement()]),
])

const returnstatement = b.returnStatement(
	b.binaryExpression(
		"+", b.identifier("x"), b.literal(1)
	)
)

const throwstatement = b.throwStatement(b.newExpression(
	b.identifier('Error'),
	[b.literal('抛出一个错误')]
))

const trystatement = b.tryStatement(
	b.blockStatement([b.expressionStatement(b.callExpression(fooId, []))]),
	b.catchClause(
		b.identifier("err"),
		null,
		b.blockStatement([])
	)
);

const whilestatement = b.whileStatement(
	b.binaryExpression("<", b.identifier('i'), b.literal(3)),
	b.blockStatement(
		[b.expressionStatement(b.updateExpression("++", b.identifier("i"), false))],
	)
)

const forinloop = b.forInStatement(
	b.variableDeclaration("let", [
		b.variableDeclarator(b.identifier("i"), null)
	]),
	b.identifier("obj"),
	b.blockStatement([])
);
const thisexpression = b.thisExpression()

const arrayExpress = b.arrayExpression([b.literal("a"), b.literal(1)])

const objexpression = b.objectExpression([
	b.property('init', b.identifier('a'), b.literal(1)),
	b.property('init', b.identifier('b'), b.identifier('foo'))
])

const FunctionExpression = b.functionExpression(b.identifier("succ"), [
	b.identifier("x")
], b.blockStatement([
	b.returnStatement(
		b.binaryExpression(
			"+", b.identifier("x"), b.literal(1)
		)
	)
]))

const unaryex = b.unaryExpression("!", b.sequenceExpression([
	b.identifier("a"),
	b.identifier("b"),
	b.identifier("c")
]))


const member = b.memberExpression(
	b.identifier("foo"),
	b.identifier("bar"),
	true
)

const condition = b.conditionalExpression(b.identifier('a'), b.identifier('b'), b.identifier('c'))

const output = recast.print(member).code;