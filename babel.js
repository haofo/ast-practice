const babelParser = require('@babel/parser')
const b = require('@babel/types')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

const str = `
import Index from './pages/Index'
import Login from './pages/Login'
import Foo from './pages/Foo'

// 组装路由
const routerConfig = [{
  path: '/',
  name: 'index',
  component: Index
},
{
	path: '/login',
	name: 'login',
  component: Login
},
{
  path: '/foo',
  name: 'foo',
  component: Foo,
  meta: {
    title: 'foo'
},
}]
`

let ast = babelParser.parse(str, { sourceType: "module"})

const body = ast.program.body
const componet = b.importDeclaration(
	[b.importDefaultSpecifier(b.identifier('Bar'))],
	b.stringLiteral(`./pages/Bar`)
)
let len = body.filter(val => val.type === 'ImportDeclaration').length
body.splice(len - 1, 0, componet)

function assembleArray(ast) {
	traverse(ast, {
		enter(path) {
			if (path.isVariableDeclaration()){
				const node = path.node
				const name = node.declarations[0].id.name
				if (name === 'routerConfig') {
					let array = node.declarations[0].init.elements
					const route = b.objectPattern([
						b.objectProperty(b.identifier("path"), b.stringLiteral('/bar')),
						b.objectProperty(b.identifier("name"), b.stringLiteral('bar')),
						b.objectProperty(b.identifier("component"), b.identifier('component')),
					])
					array.push(route)
				}
			}
		}
	})
}

assembleArray(ast)

const output = generate(ast, { quote: 'single'})
console.log(output.code)